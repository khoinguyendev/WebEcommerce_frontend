import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MultiImageUploader from "../../../components/admin/MultiImageUploader";
import { formatCurrency } from "../../../util/Format";
import axios from "axios";
import { SERVER_HOST } from "../../../config/Url";

// ✅ Định nghĩa schema validation bằng Zod
const productSchema = z.object({
  name: z.string().min(3, "Tên sản phẩm phải có ít nhất 3 ký tự"),
  description: z.string().optional(), // Không bắt buộc nhập
  price: z.number({ invalid_type_error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
  image: z.array(z.any()).min(1, "Vui lòng chọn ít nhất 1 ảnh").max(4, "Tối đa 4 ảnh"),
});

type ProductFormValues = z.infer<typeof productSchema>;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: [],
    },
  });

  const onSubmit = async (data: ProductFormValues) => {
    console.log("Dữ liệu sản phẩm:", data);

    // Chuyển dữ liệu thành FormData
    const formData = new FormData();
    formData.append("name", data.name);
    // formData.append("price", data.price.toString());

    // Đính kèm tất cả ảnh vào FormData
    data.image.forEach((file) => {
      formData.append("image", file);
    });

    try {
      const response = await axios.post(`${SERVER_HOST}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Phản hồi từ server:", response.data);
    } catch (error) {
      console.error("Lỗi khi gửi sản phẩm:", error);
    }
  };

  const price = watch("price");

  return (
    <div className="p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Thêm sản phẩm</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6 mt-4">
        <div>
          {/* Tên sản phẩm */}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên</label>
            <input {...register("name")} className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" placeholder="Nhập tên sản phẩm" />
            {errors.name && <p className="text-red text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Giá sản phẩm */}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
              placeholder="Nhập giá"
            />
            {errors.price && <p className="text-red text-sm mt-1">{errors.price.message}</p>}
            {price > 0 && <p className="text-green-600 text-sm mt-1">{formatCurrency(price)}</p>}
          </div>
          {/* Nút submit */}
          <div className="flex gap-4 my-4">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Thêm sản phẩm
            </button>
            <button type="reset" className="bg-gray-300 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-400">
              Hủy
            </button>
          </div>
        </div>

        {/* Ảnh sản phẩm */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh sản phẩm</label>
          <MultiImageUploader setValue={setValue} />
          {errors.image && <p className="text-red text-sm mt-1">{errors.image.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
