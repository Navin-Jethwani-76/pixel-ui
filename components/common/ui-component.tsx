"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Tabs, Tab, ScrollShadow } from "@nextui-org/react";
import PropSideBar from "@/components/Layout/PropSideBar";

function UiComponent({
  preview,
  code,
  PreviewProps,
  setMaxWidth,
  CodeProps,
}: {
  preview: React.JSX.Element;
  code: {
    fileName: string;
    code: string;
  }[];
  PreviewProps: () => React.JSX.Element;
  CodeProps: () => React.JSX.Element;
  setMaxWidth: Dispatch<SetStateAction<"375px" | "768px" | "100%">>;
}) {
  const [selected, setSelected] = useState("preview");

  return (
    <div className="flex w-full h-full flex-row gap-4 justify-between">
      <div className="w-full h-full">
        <Tabs
          variant="underlined"
          aria-label="Component Tabs"
          classNames={{
            panel:
              "flex flex-col md:flex-row gap-4 w-full justify-between h-full",
          }}
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
          className="w-full"
        >
          <Tab key="preview" title="Preview">
            <ScrollShadow
              className="w-full max-w-full max-h-[95%] rounded-md p-4 lg:p-0"
              size={0}
            >
              {preview}
            </ScrollShadow>
          </Tab>
          <Tab key="code" title="Code">
            <div className="w-full h-full">
              <Tabs variant="underlined" aria-label="File Tabs">
                {code.map((file, i) => (
                  <Tab key={`${file.fileName}-${i}`} title={file.fileName}>
                    <ScrollShadow
                      className="w-full max-w-full min-h-[450px] max-h-[450px] rounded-md border-1 border-default-600/10 p-4"
                      size={0}
                    >
                      <pre className="language-jsx">
                        <code className="language-jsx">{file.code}</code>
                      </pre>
                    </ScrollShadow>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </Tab>
        </Tabs>
      </div>
      <PropSideBar
        setMaxWidth={setMaxWidth}
        PreviewProps={PreviewProps}
        CodeProps={CodeProps}
        currentView={selected}
      />
    </div>
  );
}

export default UiComponent;
