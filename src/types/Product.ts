import { IBrand } from "./Brand";
import { ICategory } from "./Category";

export type IProduct = {
  id: number;
  name: string;
  image: string;
  detail: string;
  description: string;
  price: number;
  isDiscount: boolean;
  priceDiscount: number;
  status: string;
  createdAt: string;
  category: ICategory;
  brand: IBrand;
};
