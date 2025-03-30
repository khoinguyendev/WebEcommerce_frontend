import { useState, useRef } from "react";
import { SERVER_HOST } from "../../config/Url";
import { ICartItem } from "../../types/CartItem";
import { formatCurrency } from "../../util/Format";
import _ from "lodash";
import axios from "axios";

const ItemCart = ({ cart, isSelected, onSelect, setCart }: { cart: ICartItem; isSelected: boolean; onSelect: () => void; setCart: (item: ICartItem, newQuantity: number) => void }) => {
  const [quantity, setQuantity] = useState(cart.quantity);
  const debouncedUpdateCart = useRef(
    _.debounce(async (id, newQuantity) => {
      try {
        await axios.put(`${SERVER_HOST}/cart-items/${id}`, { quantity: newQuantity });
      } catch (e) {
        console.error(e);
      }
    }, 700)
  ).current;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > stock) return; // Không cho giảm dưới 1
    setQuantity(newQuantity);
    setCart(cart, newQuantity); // Update cart with the new quantity

    debouncedUpdateCart(cart.id, newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setQuantity(value);
      setCart(cart, value); // Update cart with the new quantity

      debouncedUpdateCart(cart.id, value);
    }
  };

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
      <div className="col-span-1 flex items-center">
        <input id="checkbox-all" type="checkbox" checked={isSelected} onChange={onSelect} />
      </div>
      <div className="col-span-5 flex gap-3">
        <img className="w-[120px] h-[120px] object-cover" src={`${SERVER_HOST}/uploads/${JSON.parse(cart.product.image)[0]}`} alt="..." />
        <div className="flex flex-col justify-center">
          <p className="text-gray1 font-bold">{cart.product.name}</p>
          {variant.length > 0 && <p className="text-gray1">{variant.join(", ")}</p>}
          <span className="text-red hover:text-yellow_btn cursor-pointer w-fit">Xóa</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">{formatCurrency(price)}</div>
      <div className="col-span-2 flex flex-col justify-center">
        <div className="flex items-center">
          <button onClick={() => handleQuantityChange(quantity - 1)} className="text-white bg-primary border border-gray-300 h-6 w-6 flex items-center justify-center text-lg">
            -
          </button>
          <input value={quantity} onChange={handleInputChange} type="number" className="border font-bold border-gray-300 h-6 w-12 text-center no-spinner" />
          <button onClick={() => handleQuantityChange(quantity + 1)} className="text-white bg-primary border border-gray-300 h-6 w-6 flex items-center justify-center text-lg">
            +
          </button>
        </div>
        <div className="mt-2">
          <span>Còn lại: {stock}</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center text-primary font-bold">{formatCurrency(quantity * price)}</div>
    </div>
  );
};

export default ItemCart;
