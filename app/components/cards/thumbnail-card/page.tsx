"use client";
import React, { useState } from "react";
import {
  Card,
  Image,
  Button,
  CardBody,
  Input,
  Select,
  SelectItem,
  ButtonProps,
} from "@/lib/nextui";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";

const ThumbnailCard = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Card with thumbnail");
  const [description, setDescription] = useState(
    "This is a card with a thumbnail image on top"
  );
  const [cancelBtnColor, setCancelBtnColor] =
    useState<ButtonProps["color"]>("default");
  const [cancelbtnVariant, setCancelBtnVariant] =
    useState<ButtonProps["variant"]>("light");
  const [continuebtnColor, setContinueBtnColor] =
    useState<ButtonProps["color"]>("default");
  const [continuebtnVariant, setContinueBtnVariant] =
    useState<ButtonProps["variant"]>("solid");

  const PreviewProps = () => {
    return (
      <>
        <Input
          label="Card Header"
          placeholder="Enter A Header..."
          value={header}
          onValueChange={setHeader}
          variant="bordered"
          className="max-w-xs"
        />

        <Input
          label="Card Description"
          placeholder="Enter A Description..."
          value={description}
          onValueChange={setDescription}
          variant="bordered"
          className="max-w-xs"
        />
        <Select
          label="Cancel Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["light"]}
          className="max-w-xs"
          onChange={(e) => {
            setCancelBtnVariant(e.target.value as ButtonProps["variant"]);
          }}
        >
          {btnVariantOptions.map((variant, index) => (
            <SelectItem
              key={variant ?? index}
              value={variant}
              textValue={variant}
            >
              {variant}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Cancel Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          onChange={(e) => {
            setCancelBtnColor(e.target.value as ButtonProps["color"]);
          }}
        >
          {btnColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Continue Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["solid"]}
          className="max-w-xs"
          onChange={(e) => {
            setContinueBtnVariant(e.target.value as ButtonProps["variant"]);
          }}
        >
          {btnVariantOptions.map((variant, index) => (
            <SelectItem
              key={variant ?? index}
              value={variant}
              textValue={variant}
            >
              {variant}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Continue Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          onChange={(e) => {
            setContinueBtnColor(e.target.value as ButtonProps["color"]);
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

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex w-full h-full rounded-md justify-${"center"} border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <Card radius="lg" className="w-full max-w-sm">
            <CardBody className="flex flex-col gap-4">
              <div className="relative shadow-black/5 shadow-none rounded-large">
                <Image
                  alt="Airpods"
                  className="aspect-video w-full object-cover object-top"
                  src="/airpods.png"
                />
              </div>
              <div className="flex flex-col gap-2 w-full justify-start px-1">
                {header.length > 0 && (
                  <p className="text-large font-medium">{header}</p>
                )}
                {description.length > 0 && (
                  <p className="text-small text-default-400">{description}</p>
                )}
              </div>
              <div className="flex flex-row justify-between gap-4">
                <Button
                  fullWidth
                  color={cancelBtnColor}
                  variant={cancelbtnVariant}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  color={continuebtnColor}
                  variant={continuebtnVariant}
                >
                  Continue
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  };

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Card radius="lg" className="w-full max-w-sm">
      <CardBody className="flex flex-col gap-4">
        <div className="relative shadow-black/5 shadow-none rounded-large">
          <Image
            alt="Airpods"
            className="aspect-video w-full object-cover object-top"
            src="/airpods.png"
          />
        </div>
        <div className="flex flex-col gap-2 w-full justify-start px-1">
          <p className="text-large font-medium">${header}</p>
          <p className="text-small text-default-400">${description}</p>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <Button fullWidth color="${cancelBtnColor}" variant="${cancelbtnVariant}">Cancel</Button>
          <Button fullWidth color="${continuebtnColor}" variant="${continuebtnVariant}">Continue</Button>
        </div>
      </CardBody>
    </Card>
  );
}`,
    },
  ];

  return (
    <>
      <UiComponent
        preview={CardInnerContent()}
        PreviewProps={PreviewProps}
        code={code}
        setMaxWidth={setMaxWidth}
        sandBoxLink="https://codesandbox.io/p/devbox/thumbnail-card-7wlfkm?file=%2FApp.jsx"
      />
    </>
  );
};

export default ThumbnailCard;
