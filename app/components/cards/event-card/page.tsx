"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectItem,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";
import UiComponent from "@/lib/ui";
import Logo from "@/components/common/Logo";

const EventAnnouncement = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [withLogo, setWithLogo] = useState(true);
  const [isBtnFullWidth, setIsBtnFullWidth] = useState(true);
  const [eventText, setEventText] = useState("Acme Event");
  const [header, setHeader] = useState("Learn from the best");
  const [description, setDescription] = useState(
    "Unlock the full power of Acme! Gain expertise and insights from top organizations through guided tutorials, boosting productivity, enhancing security, and enabling seamless collaboration."
  );
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("danger");
  const [btnVariant, setBtnVariant] =
    useState<ButtonProps["variant"]>("shadow");

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const newSelected = [
      withLogo && "withLogo",
      isBtnFullWidth && "isBtnFullWidth",
    ].filter(Boolean) as string[]; // Filter out false values
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithLogo(selected.includes("withLogo"));
    setIsBtnFullWidth(selected.includes("isBtnFullWidth"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
        <Input
          label="Event Text"
          placeholder="Enter A Text..."
          value={eventText}
          onValueChange={setEventText}
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          label="Header"
          placeholder="Enter A Header..."
          value={header}
          onValueChange={setHeader}
          variant="bordered"
          className="max-w-xs"
        />

        <Input
          label="Description"
          placeholder="Enter A Description..."
          value={description}
          onValueChange={setDescription}
          variant="bordered"
          className="max-w-xs"
        />
        <Select
          label="Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["shadow"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnVariant(e.target.value as ButtonProps["variant"]);
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
          label="Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["danger"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnColor(e.target.value as ButtonProps["color"]);
          }}
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
          <Checkbox value="withLogo">With Logo</Checkbox>
          <Checkbox value="isBtnFullWidth">Button Full Width</Checkbox>
        </CheckboxGroup>
      </>
    );
  };

  const CardInnerContent = () => {
    return (
      <div
        className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <Card
          className={`overflow-none w-full ${
            maxWidth === "375px" ? "max-w-xs" : "max-w-sm"
          } border-small border-foreground/10 bg-right-bottom
          bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')]`}
        >
          <CardBody className="w-full flex flex-col gap-6 justify-center">
            <div className="w-full flex flex-row gap-4">
              {withLogo && <Logo />}
              <p className="text-large font-medium text-white">{eventText}</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-large font-medium text-white/80">{header}</p>
              <p className="text-small text-white/60">{description}</p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                variant={btnVariant}
                color={btnColor}
                fullWidth={isBtnFullWidth}
              >
                <p className="text-white">Get tickets now</p>
              </Button>
            </div>
          </CardBody>
        </Card>
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
import { Card, CardBody, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Card 
      className="overflow-none w-full max-w-xs sm:max-w-sm border-small border-foreground/10 bg-right-bottom bg-[url('/event-card-bg.jpg')]">
      <CardBody className="w-full flex flex-col gap-6 justify-center">
        <div className="w-full flex flex-row gap-4">
          ${
            withLogo
              ? `<Image src="/Logo.png" alt="Logo" width={30} height={30} className="rounded-full" />`
              : ``
          }
          <p className="text-large font-medium text-white">
            ${eventText}
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-large font-medium text-white/80">
            ${header}
          </p>
          <p className="text-small text-white/60">
            ${description}
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant="${btnVariant}" color="${btnColor}" fullWidth={${isBtnFullWidth}}>
            <p className="text-white">Get tickets now</p>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/event-card-6n2j7h?file=%2FApp.jsx"
    />
  );
};

export default EventAnnouncement;
