import { IProduct } from "./Product";
import { IVariant } from "./Variant";

export type ICartItem = {
  id: number;
  product: IProduct;
  quantity: number;
  variant: IVariant | null;
};
