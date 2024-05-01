import { AvatarProps } from "@nextui-org/react";
import { ReactElement } from "react";

export interface Member {
  name: string;
  role: string;
  description: string;
  avatar: ReactElement<AvatarProps>;
  links?: {
    github: string;
    linkedIn: string;
    twitter: string;
  };
}
