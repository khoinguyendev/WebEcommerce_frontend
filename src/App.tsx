import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/client/AppLayout";
import Home from "./page/client/Home";
import Login from "./page/client/Login";
import Register from "./page/client/Register";
import AdminLayout from "./layout/admin/AdminLayout";
import Product from "./page/admin/product/Product";
import Order from "./page/admin/Order";
import Dashboard from "./page/admin/Dashboard";
import LoginAdmin from "./page/admin/LoginAdmin";
import PrivateRouter from "./util/PrivateRouter";
import PageTitle from "./util/PageTitle";
import ProductDetail from "./page/client/ProductDetail";
import ProductCategory from "./page/client/ProductCategory";
import Search from "./page/client/Search";
import Cart from "./page/client/Cart";
import AddProduct from "./page/admin/product/AddProduct";
import AddCategory from "./page/admin/category/AddCategory";
import Category from "./page/admin/category/Category";
import EditCategory from "./page/admin/category/EditCategory";
import Brand from "./page/admin/brand/Brand";
import AddBrand from "./page/admin/brand/AddBrand";
import EditBrand from "./page/admin/brand/EditBrand";
import DeletedProduct from "./page/admin/product/DeletedProduct";
import EditProduct from "./page/admin/product/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <PageTitle title="Trang chủ" />
                <Home />
              </>
            }
          />
          <Route
            path="dang-nhap"
            element={
              <>
                <PageTitle title="Đăng nhập" />
                <Login />
              </>
            }
          />
          <Route
            path="dang-ky"
            element={
              <>
                <PageTitle title="Đăng kí" />
                <Register />
              </>
            }
          />
          <Route
            path="san-pham"
            element={
              <>
                <PageTitle title="Sản phẩm" />
                <ProductDetail />
              </>
            }
          />
          <Route
            path="danh-muc"
            element={
              <>
                <PageTitle title="Danh mục" />
                <ProductCategory />
              </>
            }
          />
          <Route
            path="search"
            element={
              <>
                <PageTitle title="Tìm kiếm" />
                <Search />
              </>
            }
          />
          <Route
            path="cart"
            element={
              <>
                <PageTitle title="Giỏ hàng" />
                <Cart />
              </>
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/sign-in" element={<LoginAdmin />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="crud/list/products" element={<Product />} />
            <Route path="crud/create/products" element={<AddProduct />} />
            <Route path="crud/edit/products/:id" element={<EditProduct />} />
            <Route path="crud/deleted/products" element={<DeletedProduct />} />
            <Route path="crud/list/category" element={<Category />} />
            <Route path="crud/create/category" element={<AddCategory />} />
            <Route path="crud/edit/category/:id" element={<EditCategory />} />
            <Route path="crud/list/brand" element={<Brand />} />
            <Route path="crud/create/brand" element={<AddBrand />} />
            <Route path="crud/edit/brand/:id" element={<EditBrand />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
