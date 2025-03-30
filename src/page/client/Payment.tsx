import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Bread from "../../components/client/Bread";
import ItemPayment from "../../components/client/ItemPayment";
import { formatCurrency } from "../../util/Format";
import Address from "../../components/client/Address";

const Payment = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const calculateTotalPrice = () => {
    return (
      items.reduce((total, item) => {
        const price = item.product.discount ? item.product.priceDiscount : item.product.price;
        const itemPrice = item.variant ? (item.variant.sale ? item.variant.priceSale : item.variant.price) : price;
        return total + itemPrice * item.quantity;
      }, 0) || 0
    );
  };
  return (
    <div className="min-h-[300px]">
      <div className="custom-container py-3">
        <Bread title="Thanh toán" />
        <div className="my-4">
          <h3 className="text-gray1 font-bold text-xl uppercase ">Trang thanh toán</h3>
        </div>
        <hr className="border border-primary" />

        <div className="cart grid grid-cols-12 my-3 gap-3">
          <div className="col-span-9 grid grid-cols-9">
            <div className="col-span-9 grid grid-cols-12 border text-gray1 border-gray2 p-2 font-bold text-sm">
              <div className="col-span-5">Thông tin sản phẩm</div>

              <div className="col-span-2">Đơn giá</div>
              <div className="col-span-2">Số lượng</div>
              <div className="col-span-2">Thành tiền</div>
            </div>
            <div className="col-span-9 grid grid-cols-12 border border-gray2  text-sm">
              {items.map((item) => (
                <ItemPayment key={item.id} cart={item} />
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <div className="mb-3">
              <h3 className="text-gray1 font-bold mb-2">Địa chỉ giao hàng</h3>
              <Address />
            </div>

            <div className="flex justify-between">
              <span className="text-gray1">Tổng tiền:</span>
              <span className="text-primary font-bold">{formatCurrency(calculateTotalPrice())}</span>
            </div>

            <div className="mt-5 flex">
              <button className="flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
