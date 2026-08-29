export interface Product {
  id: number;
  sku: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  description: string;
  image?: string;
  available: boolean;
  featured: boolean;
  tags: string[];
}