import { Category } from './category';

export class Product {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  category?: Category;
  quantity?: number;
  rating?: number;
  isOnSale?:boolean;
  isFeatured?:boolean;
  isNewArrival?:boolean; 
}
