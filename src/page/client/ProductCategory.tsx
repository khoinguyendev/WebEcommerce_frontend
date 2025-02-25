import Bread from "@/components/client/Bread";
import Toggle from "@/components/client/ui/Toggle";
import RangeSlider from "../../components/client/ui/RangeSlider";

const ProductCategory = () => {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="custom-container py-4 ">
        <Bread title="Danh mục" />
        <div className="grid grid-cols-12 my-2 ">
          <div className="col-span-3 bg-[white] shadow-lg">
            <div className="bg-primary p-2">
              <h2 className="text-white font-bold text-base">Lọc thông minh</h2>
              <span className="text-sm text-white">Tìm sản phẩm mong muốn nhanh hơn</span>
            </div>
            <div className="p-3 mt-2">
              <h2 className="font-bold text-sm">Thương hiệu</h2>
              <ul className="flex flex-col">
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
              </ul>
            </div>
            <div className="p-3 mb-2">
              <h2 className="font-bold text-sm">Khoảng giá</h2>
              <ul className="flex flex-col">
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
                <li>
                  <Toggle />
                </li>
              </ul>
            </div>
            <div className="px-3">
              <h2 className="font-bold text-sm">Hoặc chọn mức giá phù hợp với bạn</h2>
              <RangeSlider min={8} max={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
