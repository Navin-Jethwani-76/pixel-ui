"use client";
import React from "react";
import { Spinner } from "@nextui-org/react";
import dynamic from "next/dynamic";

const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner color="current" />
    </div>
  ),
});

export default UiComponent;
