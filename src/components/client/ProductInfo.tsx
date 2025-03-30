import { use, useState } from "react";
import { IProduct } from "../../types/Product";
import { IVariant } from "../../types/Variant";
import { formatCurrency } from "../../util/Format";
import ProductOptions from "../../page/client/productdetail/ProductOptions";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ICart } from "../../types/Cart";
import { SERVER_HOST } from "../../config/Url";
import axios from "axios";
import toast from "react-hot-toast";
import ButtonLoading from "../admin/ButtonLoading";

const ProductInfo = ({ product }: { product: IProduct | null }) => {
  if (!product) return null;
  const [buttonLoading, setButtonLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<IVariant | null>(product?.variants[0] || null);
  const dispatch = useDispatch();
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const handleAddToCart = async (variantId: number | null) => {
    const cart = {
      productId: product.id,
      quantity: quantity,
      variantId: variantId ? variantId : null,
    };

    try {
      setButtonLoading(true);
      const response = await axios.post(`${SERVER_HOST}/cart-items`, cart);
      toast.success("Đã thêm vào giỏ hàng");
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setButtonLoading(false);
    }
  };
  return (
    <div className="text-gray1">
      <h4 className="font-bold text-lg text-gray1">{product?.name}</h4>
      <p className="text-md my-3">
        Thương hiệu: <span className="font-bold">{product?.brand.name}</span>
      </p>

      {product && product.variants.length > 0 ? (
        <>
          <ProductOptions variants={product.variants} onSelectVariant={setSelectedVariant} />
          {selectedVariant != null && (
            <>
              <div>
                <span className="text-primary font-bold text-2xl">{formatCurrency(selectedVariant?.sale ? selectedVariant.priceSale : selectedVariant?.price)}</span>
                {selectedVariant?.sale && <span className="text-sm ms-5 line-through">Giá gốc: {formatCurrency(selectedVariant?.price)}</span>}
              </div>
              {selectedVariant?.sale && (
                <div className="my-2">
                  <p>
                    <span className="text-green_btn text-sm">Tiết kiệm:</span>
                    <span className="text-primary font-bold text-sm line-through">{formatCurrency(selectedVariant?.sale ? selectedVariant.price - selectedVariant.priceSale : 0)}</span>
                  </p>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <div>
            <span className="text-primary font-bold text-2xl">{formatCurrency(product?.discount ? product.priceDiscount : product?.price)}</span>
            {product?.discount && <span className="text-sm ms-5 line-through">Giá gốc:{formatCurrency(product.price)}</span>}
          </div>
          {product?.discount && (
            <div className="my-2">
              <p>
                <span className="text-green_btn text-sm">Tiết kiệm:</span>
                <span className="text-primary font-bold text-sm line-through">{formatCurrency(product.price - product.priceDiscount)}</span>
              </p>
            </div>
          )}
        </>
      )}

      {product && product.variants.length > 0 ? (
        selectedVariant != null && selectedVariant.stock > 0 ? (
          <>
            <div className="flex items-center mt-3">
              <button className="text-white bg-primary h-8 w-8 flex items-center justify-center text-lg" onClick={handleDecrease}>
                -
              </button>
              <input type="number" value={quantity} onChange={handleChange} className="border font-bold h-8 w-16 text-center" />
              <button className="text-white bg-primary h-8 w-8 flex items-center justify-center text-lg" onClick={handleIncrease}>
                +
              </button>
              <span className="ms-3 text-sm font-bold">Còn lại:{selectedVariant?.stock}</span>
            </div>
            <div className="flex gap-3 my-3">
              <button disabled={buttonLoading} onClick={() => handleAddToCart(selectedVariant.id)} className="bg-primary text-white px-5 py-2 rounded-md">
                {buttonLoading ? <ButtonLoading /> : "Thêm vào giỏ hàng"}
              </button>
              <button className="bg-green_btn text-white px-5 py-2 rounded-md">Mua ngay</button>
            </div>
          </>
        ) : (
          <p className="font-bold">Sản phẩm hiện đang hết hàng</p>
        )
      ) : product && product.stock > 0 ? (
        <>
          <div className="flex items-center mt-3">
            <button className="text-white bg-primary h-8 w-8 flex items-center justify-center text-lg" onClick={handleDecrease}>
              -
            </button>
            <input type="number" value={quantity} onChange={handleChange} className="border font-bold h-8 w-16 text-center" />
            <button className="text-white bg-primary h-8 w-8 flex items-center justify-center text-lg" onClick={handleIncrease}>
              +
            </button>
            <span className="ms-3 text-sm font-bold">Còn lại:{product.stock}</span>
          </div>
          <div className="flex gap-3 my-3">
            <button disabled={buttonLoading} onClick={() => handleAddToCart(null)} className="bg-primary text-white px-5 py-2 rounded-md">
              {buttonLoading ? <ButtonLoading /> : "Thêm vào giỏ hàng"}
            </button>

            <button className="bg-green_btn text-white px-5 py-2 rounded-md">Mua ngay</button>
          </div>
        </>
      ) : (
        <p className="font-bold">Sản phẩm hiện đang hết hàng</p>
      )}

      {/* Nút Thêm vào giỏ hàng & Mua ngay */}
    </div>
  );
};

export default ProductInfo;
