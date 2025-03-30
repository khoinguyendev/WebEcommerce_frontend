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
import toast from "react-hot-toast";
import { IBanner } from "../../../types/Banner";
import EditFroalaEditors from "../product/EditFroalaEditor";

const bannerSchema = z.object({
  link: z.string().min(1, "Nhập link"),
  image: z.instanceof(File, { message: "Vui lòng chọn 1 ảnh" }).optional(),
  position: z.string(),
  categoryId: z.number(),
});

type BannerFormValues = z.infer<typeof bannerSchema>;

const EditBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BannerFormValues>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {},
  });
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [banner, setBanner] = useState<IBanner>();
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<string>("");

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responseB = await axios.get(`${SERVER_HOST}/banners/${id}`);
        const responseC = await axios.get(`${SERVER_HOST}/categories`);
        const b: IBanner = responseB.data.data;
        setBanner(b);
        setCategories(responseC.data.data.content);
        // Đặt giá trị mặc định cho form
        reset({
          link: b.link ?? "",
          position: b.position ?? "HEADER",
          image: undefined,
          categoryId: b.category ? b.category.id : 0,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const onSubmit = async (data: BannerFormValues) => {
    // Chuyển dữ liệu thành FormData
    const formData = new FormData();
    const banner = {
      link: data.link,
      position: data.position,
      content: detail,
      categoryId: data.categoryId == 0 ? null : data.categoryId,
    };
    formData.append("banner", new Blob([JSON.stringify(banner)], { type: "application/json" }));

    if (data.image) formData.append("file", data.image);

    try {
      const response = await axios.put(`${SERVER_HOST}/banners/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Sửa thành công");
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
            <input {...register("link")} className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" placeholder="Nhập tên sản phẩm" />
            {errors.link && <p className="text-red text-sm mt-1">{errors.link.message}</p>}
          </div>
          <div className="mb-2">
            <label htmlFor="category-create" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Vị trí
            </label>
            <select
              defaultValue="HEADER"
              {...register("position")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="HEADER">HEADER</option>
              <option value="FOOTER">FOOTER</option>
              <option value="INCATEGORY">INCATEGORY</option>
            </select>
            {errors.position && <p className="text-red text-sm mt-1">{errors.position.message}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="category-create" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Danh mục
            </label>
            <select
              defaultValue={0}
              id="category-create"
              {...register("categoryId", { valueAsNumber: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value={0}>Không</option>
              {!isLoading &&
                categories?.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            {errors.categoryId && <p className="text-red text-sm mt-1">{errors.categoryId.message}</p>}
          </div>
        </div>

        {/* Ảnh sản phẩm */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh</label>
          <ImageUploaderEdit setValue={setValue} defaultImage={banner?.image} />
          {errors.image && <p className="text-red text-sm mt-1">{errors.image.message}</p>}
        </div>
        <div className="col-span-2">
          <EditFroalaEditors detail={detail} setDetail={setDetail} />
        </div>
        <div className="col-span-2">
          <div className="flex gap-4 my-4">
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              {isSubmitting ? <ButtonLoading /> : "Thêm banner"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBanner;
