import {ICategory} from "./icategory";

export interface IProudct {
  id:number;
  name:string;
  price:number;
  quantity:number;
  imageUrl?:string;
  categoryId:number;
}
