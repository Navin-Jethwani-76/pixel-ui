import { ButtonProps, TabItemProps, TabsProps } from "@nextui-org/react";
import { ReactElement, ReactNode } from "react";

export interface PricingType {
  type: "basic" | "custom";
}
export const PricingTypeOptions: PricingType["type"][] = ["basic", "custom"];

export interface PricingOptionType {
  option: "yearly" | "quarterly";
  titleContent?: ReactNode;
  TabItemclassName?: TabItemProps["className"];
}

export interface PricingListItem {
  heading: string;
  headingEndContent?: ReactNode;
  description: string;
  pricing: string;
  QuarterlyPricing: string;
  list?: string[];
  Button: ReactElement<ButtonProps>;
}
