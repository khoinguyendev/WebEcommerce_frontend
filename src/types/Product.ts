import { IBrand } from "./Brand";
import { ICategory } from "./Category";
import { IVariant } from "./Variant";

export type IProduct = {
  id: number;
  name: string;
  image: string;
  detail: string;
  description: string;
  price: number;
  discount: boolean;
  priceDiscount: number;
  status: string;
  createdAt: string;
  category: ICategory;
  brand: IBrand;
  stock: number;
  variants: IVariant[];
};
export type IProductToday = {
  id: number;
  product: IProduct;
};
