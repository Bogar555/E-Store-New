export interface Product {
  id: number;
  type: string;
  name: string;
  price: string; 
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  role: "admin" | "customer";
}

interface ProductType{
  name: string;
} 

export const categories: ProductType[] = [
{name:"Electronics"},
{name:"Clothings"},
{name:"Food"},
{name:"Toys"},
{name:"Kitchen Appliances"},
{name:"Furnitures"},
{name:"Watches"},
]