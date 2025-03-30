import { SERVER_HOST } from "../../config/Url";
import { ICartItem } from "../../types/CartItem";
import { formatCurrency } from "../../util/Format";

const ItemPayment = ({ cart }: { cart: ICartItem }) => {
  const variant: string[] = [];
  let price = cart.product.discount ? cart.product.priceDiscount : cart.product.price;
  let stock = cart.variant ? cart.variant.stock : cart.product.stock;
  if (cart.variant) {
    if (cart.variant.size) variant.push(cart.variant.size);
    if (cart.variant.color) variant.push(cart.variant.color);
    if (cart.variant.storage) variant.push(cart.variant.storage);
    price = cart.variant.sale ? cart.variant.priceSale : cart.variant.price;
  }
  return (
    <div className="col-span-12 grid grid-cols-12 border-b p-2">
      <div className="col-span-5 flex gap-3">
        <img className="w-[120px] h-[120px] object-cover" src={`${SERVER_HOST}/uploads/${JSON.parse(cart.product.image)[0]}`} alt="..." />
        <div className="flex flex-col justify-center">
          <p className="text-gray1 font-bold">{cart.product.name}</p>
          {variant.length > 0 && <p className="text-gray1">{variant.join(", ")}</p>}
        </div>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">{formatCurrency(price)}</div>
      <div className="col-span-2 flex flex-col justify-center">
        <div className="flex items-center">
          <input value={cart.quantity} disabled type="number" className="border font-bold border-gray-300 h-6 w-12 text-center no-spinner" />
        </div>
        <div className="mt-2">
          <span>Còn lại: {stock}</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">{formatCurrency(cart.quantity * price)}</div>
    </div>
  );
};

export default ItemPayment;
