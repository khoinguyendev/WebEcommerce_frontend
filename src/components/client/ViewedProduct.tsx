import { useSelector } from "react-redux";
import SildeProduct from "./SildeProduct";
import { RootState } from "../../redux/store";

const ViewedProduct = () => {
  const { items } = useSelector((state: RootState) => state.product);

  return (
    <div>
      <h2 className="border-b-primary border-b-4 ">
        <button className="bg-primary text-white px-5 py-2 font-bold rounded-t-lg">Sản phẩm đã xem</button>
      </h2>
      {items.length > 0 && (
        <div className="py-2">
          <div className="p-1 border border-primary rounded-lg">
            <SildeProduct products={items} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewedProduct;
