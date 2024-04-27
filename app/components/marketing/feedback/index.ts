import { IconType } from "react-icons";

export interface FeedbackType {
  type: "basic" | "textarea" | "popover" | "modal";
}

export const FeedbackTypeOptions: FeedbackType["type"][] = [
  "basic",
  "textarea",
  "popover",
  "modal",
];

export interface CustomRadioOption {
  value: string;
  icon: IconType;
  color: string;
}
