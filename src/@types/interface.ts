//le type pour le slider
export interface SliderProps {
  images: string[];
}

export interface IconData {
  icon: string;
  name: string;
  description: string;
}

export interface ProductData {
  productName: string;
  productImage: string;
  productLink: string;
  className?: string; 
}