import Logo from "@/assets/logo.webp";
import CallSvg from "@/assets/call.svg";
import User from "@/assets/users.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="custom-container px-5 xl:px-0 grid grid-cols-12 py-5">
      <div className="md:col-span-3 order-1 col-span-6">
        <img src={Logo} width={170} height={43} alt="Logo" className="logo" />
      </div>
      <div className="col-span-12 md:col-span-7 md:order-2 grid grid-cols-4 order-3">
        <div className="col-span-4 md:col-span-2">
          <div className="relative">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="w-full px-4 py-2 border border-primary rounded-md text-ms outline-none text-gray-400" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="cursor-pointer box-content p-2 size-7 absolute right-0 top-1/2 transform -translate-y-1/2 "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img src={CallSvg} width={30} height={30} alt="call" />
            </div>
            <div>
              <p className="text-sm">Tư vấn hỗ trợ</p>
              <span className="text-lg font-bold leading-5 text-primary">19006750</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex items-center gap-2">
            <div>
              <img src={User} width={30} height={30} alt="user" />
            </div>
            <div>
              <p className="text-sm">Xin chào!</p>
              <span className="text-sm font-bold leading-5 text-primary">Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 md:order-3 md:col-span-2 flex justify-end items-center gap-3 order-2 ">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <span className="w-[20px] h-[20px] absolute top-0 right-[-15px] rounded-full bg-primary text-white inline-block flex justify-center items-center">0</span>
        </div>
        <Link to={"/cart"} className="block relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <span className="w-[20px] h-[20px] absolute top-0 right-[-15px] rounded-full bg-primary text-white inline-block flex justify-center items-center">0</span>
        </Link>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>

          <span className="w-[20px] h-[20px] absolute top-0 right-[-15px] rounded-full bg-primary text-white inline-block flex justify-center items-center">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
