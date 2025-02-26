import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/client/AppLayout";
import Home from "./page/client/Home";
import Login from "./page/client/Login";
import Register from "./page/client/Register";
import AdminLayout from "./layout/admin/AdminLayout";
import Product from "./page/admin/Product";
import Order from "./page/admin/Order";
import Dashboard from "./page/admin/Dashboard";
import LoginAdmin from "./page/admin/LoginAdmin";
import PrivateRouter from "./util/PrivateRouter";
import PageTitle from "./util/PageTitle";
import ProductDetail from "./page/client/ProductDetail";
import ProductCategory from "./page/client/ProductCategory";
import Search from "./page/client/Search";
import Cart from "./page/client/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: (
            <>
              <PageTitle title="Trang chủ" />
              <Home />
            </>
          ),
        },
        {
          path: "dang-nhap",
          element: (
            <>
              <PageTitle title="Đăng nhập" />
              <Login />
            </>
          ),
        },
        {
          path: "dang-ki",
          element: (
            <>
              <PageTitle title="Đăng kí" />
              <Register />
            </>
          ),
        },
        {
          path: "/san-pham",
          element: (
            <>
              <PageTitle title="Sản phẩm" />
              <ProductDetail />
            </>
          ),
        },
        {
          path: "/danh-muc",
          element: (
            <>
              <PageTitle title="Danh mục" />
              <ProductCategory />
            </>
          ),
        },
        {
          path: "/search",
          element: (
            <>
              <PageTitle title="Tìm kiếm" />
              <Search />
            </>
          ),
        },
        {
          path: "/cart",
          element: (
            <>
              <PageTitle title="Giỏ hàng" />
              <Cart />
            </>
          ),
        },
      ],
    },
    {
      path: "/admin/sign-in",
      element: <LoginAdmin />,
    },
    {
      path: "/admin",
      element: <PrivateRouter />,
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            { path: "", element: <Dashboard /> },
            { path: "product", element: <Product /> },
            { path: "order", element: <Order /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
