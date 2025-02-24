import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary w-full hidden md:block">
      <div className="custom-container py-3 text-white  grid grid-cols-9">
        <div style={{ borderRight: "1px solid white" }} className="relative col-span-2 flex gap-2 cursor-pointer" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>

          <p className="font-bold text-[15px]">Danh mục sản phẩm</p>
          <div className="absolute bg-transparent right-0 left-0 h-[10px] top-[20px]"></div>
          <ul className={`absolute w-full z-10 top-[30px] text-white bg-black duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <li className="p-2 hover:bg-gray-700">1</li>
            <li className="p-2 hover:bg-gray-700">2</li>
            <li className="p-2 hover:bg-gray-700">3</li>
          </ul>
        </div>
        <div className="col-span-7">
          <ul className="flex">
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Trang chủ
              </a>
            </li>
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Giới thiệu
              </a>
            </li>
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Tin mới nhất
              </a>
            </li>
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Tuyển dụng
              </a>
            </li>
            <li>
              <a className="text-sm px-1 lg:px-4 lg:text-base" href="#">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
