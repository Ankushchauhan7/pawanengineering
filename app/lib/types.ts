
export interface Product {
  id: number;
  model: string;
  name: string;
  category: string;
  type: string;
  description: string;
  price: string;
  features: string[];
  specifications: Record<string, string | number | undefined>;
  optional_accessories: string[];
  image: string;
}

export interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}