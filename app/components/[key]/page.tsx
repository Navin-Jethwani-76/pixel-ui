import { Components } from "@/config";
import React from "react";

interface ServerPage {
  params: { key: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
const Component = ({ params, searchParams }: ServerPage) => {
  const component = Components.find((obj) => obj.key === params.key);
  if (component) return <component.component />;
  return <>404 not found</>;
};

export default Component;
