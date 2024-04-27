"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  ButtonProps,
  Input,
  Link,
  ScrollShadow,
  Select,
  SelectItem,
  SelectProps,
} from "@/lib/nextui";
import { ViewProps, btnColorOptions } from "@/app/components";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import {
  FaqList,
  FaqListCode,
  FaqListType,
} from "@/app/components/marketing/faq";
import { IoMdAdd, IoMdClose } from "react-icons/io";

export default function Faq() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [headerText, setHeaderText] = useState(
    "Acme's Frequently asked questions."
  );
  const [selectionMode, setSelectionMode] =
    useState<SelectProps["selectionMode"]>("multiple");
  const [iconColor, setIconColor] = useState<ButtonProps["color"]>("secondary");
  const [type, setType] = useState<FaqListType["type"]>("custom");

  const PreviewProps = () => {
    return (
      <>
        <Input
          label="Faq Header Text"
          placeholder="Enter A Text..."
          value={headerText}
          onValueChange={setHeaderText}
          variant="bordered"
          className="max-w-xs"
        />
        <Select
          label="Faq Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["custom"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as FaqListType["type"]);
          }}
        >
          {["basic", "custom"].map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Selection Mode"
          variant="bordered"
          placeholder="Select a Mode"
          disallowEmptySelection
          defaultSelectedKeys={["multiple"]}
          className="max-w-xs"
          onChange={(e) => {
            setSelectionMode(e.target.value as SelectProps["selectionMode"]);
          }}
        >
          {["single", "multiple"].map((mode, index) => (
            <SelectItem key={mode ?? index} value={mode} textValue={mode}>
              {mode}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Icon Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["secondary"]}
          className="max-w-xs"
          isDisabled={type == "basic"}
          onChange={(e) => {
            setIconColor(e.target.value as ButtonProps["color"]);
          }}
        >
          {btnColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>
      </>
    );
  };

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `"use client";
import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { FaqList } from "./data";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const App = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="w-full flex justify-between items-center px-2 text-xl leading-7">
        <p className="inline-block sm:hidden">FAQs</p>
        <p className="hidden sm:flex">${headerText}</p>
        <Link href="#" color="${
          type == "basic"
            ? "foreground"
            : iconColor !== "default"
            ? iconColor
            : "foreground"
        }">Contact Us</Link>
      </div>
      <Accordion selectionMode="${selectionMode}">
        {FaqList.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              title={faq.title}
              aria-label={faq.title}
              ${
                type == "custom"
                  ? `indicator={({ isOpen }) =>
                isOpen ? (
                  <IoMdClose className="text-${iconColor}" size={24} />
                ) : (
                  <IoMdAdd className="text-${iconColor}" size={24} />
                )
              }`
                  : ""
              }
            >
              <p className="text-base text-default-500">{faq.content}</p>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default App
`,
    },
    {
      fileName: "data.js",
      code: FaqListCode,
    },
  ];

  const CardInnerContent = () => {
    return (
      <div
        className={`flex flex-col w-full h-full p-3 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <div className="w-full flex justify-between items-center px-2 text-xl leading-7">
          {maxWidth === "375px" ? (
            <p className="inline-block">FAQs</p>
          ) : (
            <p className="inline-block">{headerText}</p>
          )}
          <Link
            href="#"
            color={
              type == "basic"
                ? "foreground"
                : iconColor !== "default"
                ? iconColor
                : "foreground"
            }
          >
            Contact Us
          </Link>
        </div>
        <ScrollShadow className="w-full max-h-[610px]" hideScrollBar size={0}>
          <Accordion selectionMode={selectionMode}>
            {FaqList.map((faq, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={faq.title}
                  aria-label={faq.title}
                  indicator={
                    type === "custom"
                      ? ({ isOpen }) =>
                          isOpen ? (
                            <IoMdClose
                              className={`text-${iconColor}`}
                              size={24}
                            />
                          ) : (
                            <IoMdAdd
                              className={`text-${iconColor}`}
                              size={24}
                            />
                          )
                      : undefined
                  }
                >
                  <p className="text-base text-default-500">{faq.content}</p>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ScrollShadow>
      </div>
    );
  };

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/faq-t537yx?file=%2FApp.jsx"
    />
  );
}
