import ProductImage from "../../components/client/ProductImage";
import ProductInfo from "../../components/client/ProductInfo";
const images = [
  "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
  "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
  "https://sadesign.vn/pictures/picfullsizes/2024/11/30/ybd1732939646.jpg",
];
const ProductDetail = () => {
  return (
    <div>
      <div className="custom-container py-4">
        <div className="flex gap-3">
          <span className="text-gray1">Trang chủ</span>
          <span className="text-gray1">/</span>
          <span className="text-gray1">Trang chủ</span>
          <span className="text-gray1">/</span>
          <span className="text-gray1">Trang chủ</span>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <ProductImage />
              </div>
              <div className="col-span-7 ms-4">
                <ProductInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
