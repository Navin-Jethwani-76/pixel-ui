"use client";
import {
  Button,
  ButtonProps,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectItem,
} from "@/lib/nextui";
import React, { useEffect, useState } from "react";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import {
  BannerPosition,
  BannerType,
  bannerPositionOptions,
  bannerTypeOptions,
} from "@/app/components/marketing/banner";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

function Banner() {
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [isDismissable, setIsDismissable] = useState(true);
  const [withGradientBg, setWithGradientBg] = useState(true);
  const [btnWithGradient, setBtnWithGradient] = useState(true);
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [bannerText, setBannerText] = useState(
    "The Winter 2024 Release is here: new editor, analytics API, and so much more."
  );
  const [bannerBtnText, setBannerBtnText] = useState("Explore");
  const [bannerPosition, setBannerPosition] =
    useState<BannerPosition["position"]>("top");
  const [bannerType, setBannerType] = useState<BannerType["type"]>("floating");
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("default");
  const [btnVariant, setBtnVariant] =
    useState<ButtonProps["variant"]>("bordered");

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const newSelected = [
      isFullWidth && "isFullWidth",
      isDismissable && "isDismissable",
      withGradientBg && "withGradientBg",
      btnWithGradient && "btnWithGradient",
    ].filter(Boolean) as string[]; // Filter out false values
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFullWidth(selected.includes("isFullWidth"));
    setIsDismissable(selected.includes("isDismissable"));
    setWithGradientBg(selected.includes("withGradientBg"));
    setBtnWithGradient(selected.includes("btnWithGradient"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
        <Input
          label="Banner Text"
          placeholder="Enter A Text..."
          value={bannerText}
          onValueChange={setBannerText}
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          label="Banner Button Text"
          placeholder="Enter A Text..."
          value={bannerBtnText}
          onValueChange={setBannerBtnText}
          variant="bordered"
          className="max-w-xs"
        />

        <Select
          label="Banner Position"
          variant="bordered"
          placeholder="Select a position"
          disallowEmptySelection
          defaultSelectedKeys={["top"]}
          className="max-w-xs"
          onChange={(e) => {
            setBannerPosition(e.target.value as BannerPosition["position"]);
          }}
        >
          {bannerPositionOptions.map((position, index) => (
            <SelectItem
              key={position ?? index}
              value={position}
              textValue={position}
            >
              {position}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Banner Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["floating"]}
          className="max-w-xs"
          onChange={(e) => {
            setBannerType(e.target.value as BannerType["type"]);
          }}
        >
          {bannerTypeOptions.map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Banner Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["bordered"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnVariant(e.target.value as ButtonProps["variant"]);
          }}
          isDisabled={btnWithGradient}
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
          label="Banner Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnColor(e.target.value as ButtonProps["color"]);
          }}
          isDisabled={btnWithGradient}
        >
          {btnColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>

        <CheckboxGroup
          label="Options"
          color="secondary"
          value={selected}
          onValueChange={setSelected}
        >
          <Checkbox value="isFullWidth">Is Banner Width Full</Checkbox>
          <Checkbox value="isDismissable">Show Close Icon</Checkbox>
          <Checkbox value="withGradientBg">With Gradiend Background</Checkbox>
          <Checkbox value="btnWithGradient">With Gradiend Button</Checkbox>
        </CheckboxGroup>
      </>
    );
  };

  const CardInnerContent = () => {
    return (
      <div
        className={`flex w-full h-full rounded-md items-${
          bannerPosition === "top" ? "start" : "end"
        } border-1 border-default-600/10 gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <div className="flex justify-center w-full">
          <div
            className={`flex ${
              isFullWidth ? "w-full" : "w-fit"
            } items-center justify-between gap-x-3 border-1 border-divider bg-background/[0.15] ${
              withGradientBg
                ? `bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100`
                : ``
            } ${
              bannerType === "sticky"
                ? "px-6 py-2 sm:px-3.5"
                : "px-6 py-2 sm:mx-2 sm:px-3.5 md:mx-4 rounded-large  mx-2 my-4"
            }`}
          >
            <p className="text-small text-foreground">{bannerText}</p>
            <Button
              className="flex flex-row gap-2"
              color={btnWithGradient ? undefined : btnColor}
              variant={btnWithGradient ? undefined : btnVariant}
              style={
                btnWithGradient
                  ? {
                      border: "2px solid transparent",
                      backgroundImage:
                        "linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {}
              }
            >
              {bannerBtnText}
              <GrFormNextLink size={20} />
            </Button>
            {isDismissable && (
              <div className="flex flex-1 justify-end">
                <Button isIconOnly variant="bordered" size="sm">
                  <IoMdClose size={20} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `import React from "react";
import { Button } from "@nextui-org/react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const App = () => {
  return (
    <div className="fixed w-full ${
      bannerPosition == "top" ? "top-16" : "bottom-0"
    } ${
        bannerType === "floating"
          ? `p-1 ${bannerPosition == "top" ? "mt-1" : "mb-1"}`
          : ``
      } ${isFullWidth ? "" : "flex justify-center"}">
      <div
      className="flex ${
        isFullWidth ? "w-full" : "w-fit"
      } items-center justify-between gap-x-3 border-1 border-divider bg-background/[0.15] ${
        withGradientBg
          ? `bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100`
          : ``
      } px-6 sm:px-3.5 py-2 ${bannerType === "sticky" ? "" : "rounded-large"}"
      >
        <p className="text-small text-foreground">
          ${bannerText}
        </p>
        <Button
          className="flex flex-row gap-2" color="${
            btnWithGradient ? undefined : btnColor
          }" variant="${btnWithGradient ? undefined : btnVariant}"
          ${
            btnWithGradient
              ? `style={{
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}`
              : ""
          }
        >
          ${bannerBtnText}
          <GrFormNextLink size={20} />
        </Button>
        ${
          isDismissable
            ? `<div className="flex flex-1 justify-end">
          <Button isIconOnly variant="bordered" size="sm">
            <IoMdClose size={20} />
          </Button>
        </div>`
            : ``
        }
      </div>
    </div>
  );
}

export default App;`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      sandBoxLink="https://codesandbox.io/p/devbox/banner-yv5nkk?file=%2FApp.jsx"
      setMaxWidth={setMaxWidth}
    />
  );
}

export default Banner;
