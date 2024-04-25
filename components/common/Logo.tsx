import { Image } from "@/lib/nextui";
import React from "react";

const Logo = ({ height, width }: { height?: number; width?: number }) => {
  return (
    <Image
      src="/Logo.png"
      alt="Logo"
      width={width ?? 30}
      height={height ?? 30}
      className="rounded-full"
    />
  );
};

export default Logo;
