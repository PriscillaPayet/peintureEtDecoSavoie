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

export interface LogoData {
  url: string;
  link: string;
  alt: string;
  type?: String;
}

export interface IntroductionTextProps {
  title: string;
  subtitle: string;
  paragraph: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}