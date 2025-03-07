import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { SERVER_HOST } from "../../../config/Url";
import ButtonLoading from "../../../components/admin/ButtonLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICategory } from "../../../types/Category";
import ImageUploaderEdit from "../../../components/admin/ImageUploaderEdit";
import SnipperLoading from "../../../components/admin/SnipperLoading";

// ✅ Sửa lại schema validation (chỉ một ảnh)
const productSchema = z.object({
  name: z.string().min(3, "Tên danh mục phải có ít nhất 3 ký tự"),
  image: z.instanceof(File, { message: "Vui lòng chọn 1 ảnh" }).optional(),
  position: z
    .preprocess((val) => {
      if (typeof val === "string" && val.trim() === "") return undefined;
      return Number(val);
    }, z.number().min(1, "Từ 1 đến 100").max(100, "Từ 1 đến 100"))
    .optional()
    .or(z.literal("")),
});

type ProductFormValues = z.infer<typeof productSchema>;

const EditCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      image: undefined,
    },
  });
  const [categories, setCategories] = useState<ICategory>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responseCategory = await axios.get(`${SERVER_HOST}/category/${id}`);
        const categoryData = responseCategory.data.data;

        setCategories(categoryData);

        // Đặt giá trị mặc định cho form
        reset({
          name: categoryData.name || "",
          position: categoryData.position ?? "",
          image: undefined,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const onSubmit = async (data: ProductFormValues) => {
    // Chuyển dữ liệu thành FormData
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image) formData.append("image", data.image);
    if (data.position !== undefined && data.position !== "") {
      formData.append("position", String(data.position));
    }
    try {
      const response = await axios.patch(`${SERVER_HOST}/category/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Phản hồi từ server:", response.data);
    } catch (error) {
      console.error("Lỗi khi gửi sản phẩm:", error);
    }
  };
  if (isLoading) return <SnipperLoading />;
  return (
    <div className="p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sửa danh mục</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6 mt-4">
        <div>
          {/* Tên sản phẩm */}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên</label>
            <input {...register("name")} className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" placeholder="Nhập tên sản phẩm" />
            {errors.name && <p className="text-red text-sm mt-1">{errors.name.message}</p>}
          </div>
          {/* Tên sản phẩm */}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vị trí</label>
            <input {...register("position")} type="number" className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" />
            {errors.position && <p className="text-red text-sm mt-1">{errors.position.message}</p>}
          </div>
          {/* Nút submit */}
          <div className="flex gap-4 my-4">
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              {isSubmitting ? <ButtonLoading /> : "Lưu"}
            </button>
          </div>
        </div>

        {/* Ảnh sản phẩm */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh</label>
          <ImageUploaderEdit setValue={setValue} defaultImage={categories?.image} />
          {errors.image && <p className="text-red text-sm mt-1">{errors.image.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
