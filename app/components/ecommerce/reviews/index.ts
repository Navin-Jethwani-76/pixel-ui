import { UserProps } from "@nextui-org/react";
import { ReactElement } from "react";

export interface ReviewType {
  user: ReactElement<UserProps>;
  rating: number;
  heading: string;
  comment: string;
}
