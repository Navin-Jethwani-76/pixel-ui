import { Divider } from "@nextui-org/react";
import React from "react";

const Separator = () => {
  return (
    <div className="flex items-center gap-4 py-2 w-full max-w-xs">
      <Divider className="flex-1" />
      <p className="shrink-0 text-tiny text-default-500">OR</p>
      <Divider className="flex-1" />
    </div>
  );
};

export default Separator;
