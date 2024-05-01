import { AvatarProps, ButtonProps, InputProps } from "@nextui-org/react";
import { IconType } from "react-icons";
import { ReactElement } from "react";

export const personalDetails = {
  "Full Name": "John Doe",
  Birthday: "January 1, 1990",
  Country: "United States",
  State: "California",
  Address: "123 Main Street",
  "Zip Code": "90001",
  "Phone Number": "(123) 456-7890",
  Email: "johndoe@example.com",
  "Passport/ID": "A1234567",
  SSN: "123-45-6789",
  "Legal Status": "Permanent Resident",
  Role: "Software Engineer",
};

export const inputFields: {
  label: string;
  type: string;
  inputMode?: InputProps["inputMode"];
}[] = [
  { label: "Username", type: "text" },
  { label: "Email", type: "email" },
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Phone Number", type: "tel", inputMode: "numeric" },
  { label: "Address", type: "text" },
  { label: "State", type: "text" },
  { label: "Zip Code", type: "number" },
  { label: "Country", type: "text" },
];

export const getClassName = (maxWidth: string) => {
  return maxWidth === "375px" ? "max-w-xs" : "w-[240px]";
};

export interface CardsContentsType {
  title: string;
  description: string;
  icon: IconType;
  iconColor: ButtonProps["color"];
}

export interface NotificationsType {
  title: string;
  description: string;
  user?: ReactElement<AvatarProps>;
  footer?: React.JSX.Element;
  type: "unread" | "archived";
}

export interface OnboaringType {
  title: string;
  description: string;
  icon: IconType;
  completed: boolean;
}

export interface RadioOptionType {
  title: string;
  description: string;
  helperText?: string;
  icon: IconType;
  iconColor: ButtonProps["color"];
  isExpired?: boolean;
}

export interface NotificationSettingType {
  title: string;
  description: string;
  enabled: boolean;
}

export interface PersonalDetail {
  key: string;
  value: string;
}

export interface SecuritySettingType {
  title?: string;
  description?: string;
  endContent?: React.JSX.Element;
}
