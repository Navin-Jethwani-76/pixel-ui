import React from "react";

interface ServerPage {
  params: { key: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
const DocsComponent = ({ params, searchParams }: ServerPage) => {
  console.log(params.key);
  return <></>;
};

export default DocsComponent;
