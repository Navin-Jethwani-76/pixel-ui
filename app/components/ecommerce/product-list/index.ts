import { RadioProps } from "@nextui-org/react";

export interface ProductListType {
  type: "All Products" | "Popular Products";
}

export const ProductListOptions: ProductListType["type"][] = [
  "All Products",
  "Popular Products",
];

export interface RatingRadioProps extends RadioProps {
  rating: number;
}

export interface Product {
  title: string;
  description: string;
  price: number;
  rating: number;
  peopleRated: string;
  isAddedToCart: boolean;
  isInWishlist: boolean;
  color?: string;
  size?: number;
}
