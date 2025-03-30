import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

import axios from "axios";
import toast from "react-hot-toast";
import { loginSuccess } from "../../../redux/authSlice";
import { SERVER_HOST } from "../../../config/Url";
import ButtonLoading from "../../admin/ButtonLoading";
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(15, "Mật khẩu không được quá 15 ký tự"),
});

type LoginFormValues = z.infer<typeof userSchema>;
const LoginModal = ({ setOpenModal, setIsLogin }: { setOpenModal: any; setIsLogin: any }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true); // Bật loading
      // Gửi API đăng nhập
      const response = await axios.post(`${SERVER_HOST}/auth/log-in`, data);
      dispatch(loginSuccess({ token: response.data.token, user: response.data.user }));
      toast.success("Đăng nhập thành công");
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      localStorage.setItem("token", response.data.token);
      setOpenModal(false);
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      toast.error("Tài khoản hoặc mật khẩu không chính xác");
    } finally {
      setIsLoading(false); // Tắt loading
    }
  };
  return (
    <div className="fixed inset-0 flex items-center duration-400 justify-center bg-black bg-opacity-50 z-50">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-[600px] rounded-lg  shadow-lg relative">
        <button onClick={() => setOpenModal(false)} className="absolute h-10 w-10 rounded-full flex items-center justify-center bg-white -top-5 -right-5 text-gray1 text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="py-6 px-6">
          <h2 className="text-gray1 font-medium text-2xl">Đăng nhập</h2>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input {...register("email")} type="text" className="w-full mt-2 border outline-none border-gray-300 rounded-lg p-3 text-gray-500" />
            {errors.email && <p className="text-red text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">Password</label>

            <input {...register("password")} type="password" className="w-full outline-none mt-2 border border-gray-300 rounded-lg p-3 text-gray-500" />
            {errors.password && <p className="text-red text-sm mt-1">{errors.password.message}</p>}
          </div>
        </div>
        <div className="px-6 mb-2">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-400">Ghi nhớ mật khẩu</label>
          </div>
          {/* <div className="flex items-center gap-3">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-400">Quên mật khẩu?</label>
          </div> */}
        </div>
        <div className="px-6 text-sm">
          Bạn chưa có tài khoản?{" "}
          <span className="text-blue-700 cursor-pointer" onClick={() => setIsLogin((pre: boolean) => !pre)}>
            Đăng kí ngay
          </span>
        </div>
        <div className="px-6 py-6">
          <button type="submit" disabled={isLoading} className=" w-full bg-primary text-white font-medium py-3 px-4 rounded text-base">
            {isLoading ? <ButtonLoading /> : "Đăng nhập"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
