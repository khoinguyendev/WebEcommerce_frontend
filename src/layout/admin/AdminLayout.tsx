import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";
import SlideBar from "./SlideBar";

const AdminLayout = () => {
  return (
    <div>
      <SlideBar />
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default AdminLayout;
