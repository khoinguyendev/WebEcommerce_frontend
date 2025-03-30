import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/Product";
import { formatCurrency } from "../../util/Format";
import { SERVER_HOST } from "../../config/Url";

const ItemSimilarProduct = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);

  return (
    <Link to={`/san-pham/${product.id}`} className="flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="w-[120px] h-[120px] mb-2 overflow-hidden py-2 flex justify-center">
        <img className={`scale-100 w-[80px] h-[80px] object-cover ${open && "scale-110"} duration-500`} src={`${SERVER_HOST}/uploads/${JSON.parse(product.image)[0]}`} alt="Product" />
      </div>
      <div className="py-2">
        <p className="text-sm font-bold line-clamp-2 text-gray1">{product.name}</p>
        <p className="text-primary font-bold">{formatCurrency(product.discount ? product.priceDiscount : product.price)}</p>
        {product.discount && <span className="text-gray2  text-sm line-through"> 1.500.000</span>}
      </div>
    </Link>
  );
};

export default ItemSimilarProduct;
