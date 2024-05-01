import React from "react";
import { Spinner } from "@nextui-org/react";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner color="current" />
    </div>
  );
}

export default Loading;
