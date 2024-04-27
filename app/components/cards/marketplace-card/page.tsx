"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Chip,
  ChipProps,
  Input,
  Select,
  SelectItem,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
  chipColorOptions,
  chipVariantOptions,
} from "@/app/components";
import UiComponent from "@/lib/ui";
import Logo from "@/components/common/Logo";

function MarketplaceCard() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [selected, setSelected] = useState<string[]>([]);
  const [withLogo, setWithLogo] = useState(true);
  const [cardTitle, setCardTitle] = useState("Deploy Node.js app to Acme");
  const [cardHeading, setCardHeading] = useState("By The Acme Team");
  const [cardDescription, setCardDescription] = useState(
    "Build the next generation of web experiences with the fastest and most reliable hosting for modern applications."
  );
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("default");
  const [btnVariant, setBtnVariant] = useState<ButtonProps["variant"]>("flat");
  const [chipColor, setChipColor] = useState<ChipProps["color"]>("primary");
  const [chipVariant, setChipVariant] = useState<ChipProps["variant"]>("dot");

  useEffect(() => {
    const newSelected = [withLogo && "withLogo"].filter(Boolean) as string[]; // Filter out false values
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithLogo(selected.includes("withLogo"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
        <Input
          label="Card Title"
          placeholder="Enter A Text..."
          value={cardTitle}
          onValueChange={setCardTitle}
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          label="Card Header"
          placeholder="Enter A Header..."
          value={cardHeading}
          onValueChange={setCardHeading}
          variant="bordered"
          className="max-w-xs"
        />

        <Input
          label="Card Description"
          placeholder="Enter A Description..."
          value={cardDescription}
          onValueChange={setCardDescription}
          variant="bordered"
          className="max-w-xs"
        />
        <Select
          label="Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["flat"]}
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
          defaultSelectedKeys={["default"]}
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
        <Select
          label="Chip Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["dot"]}
          className="max-w-xs"
          onChange={(e) => {
            setChipVariant(e.target.value as ChipProps["variant"]);
          }}
        >
          {chipVariantOptions.map((variant, index) => (
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
          label="Chip Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["primary"]}
          className="max-w-xs"
          onChange={(e) => {
            setChipColor(e.target.value as ChipProps["color"]);
          }}
        >
          {chipColorOptions.map((color, index) => (
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
        <Card className="shadow-small rounded-large motion-reduce:transition-none max-w-[320px] border-small border-default-100 p-2">
          <CardBody className="flex flex-col gap-4 text-left overflow-y-auto subpixel-antialiased">
            <div className="flex items-center justify-between gap-2">
              <div className="flex max-w-[80%] flex-col gap-1">
                <p className="text-medium font-medium">{cardTitle}</p>
                <p className="text-small text-default-500">{cardHeading}</p>
              </div>
              {withLogo && <Logo height={40} width={40} />}
            </div>
            <p className="text-small text-default-500">{cardDescription}</p>
          </CardBody>
          <CardFooter className="flex w-full items-center subpixel-antialiased rounded-b-large justify-between gap-2">
            <Button size="sm" variant={btnVariant} color={btnColor}>
              Configure
            </Button>
            <Chip variant={chipVariant} color={chipColor}>
              Typescript
            </Chip>
          </CardFooter>
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
import { Button, Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="shadow-small rounded-large motion-reduce:transition-none max-w-xs border-small border-default-100 p-2">
      <CardBody className="flex flex-col gap-4 text-left overflow-y-auto subpixel-antialiased">
        <div className="flex items-center justify-between gap-2">
          <div className="flex max-w-[80%] flex-col gap-1">
            <p className="text-medium font-medium">${cardTitle}</p>
            <p className="text-small text-default-500">${cardHeading}</p>
          </div>
          ${
            withLogo
              ? `<Image src="/Logo.png" alt="Logo" height={40} width={40} className="rounded-full" />`
              : ``
          }
        </div>
        <p className="text-small text-default-500">${cardDescription}</p>
      </CardBody>
      <CardFooter className="flex w-full items-center subpixel-antialiased rounded-b-large justify-between gap-2">
        <Button size="sm" variant="${btnVariant}" color="${btnColor}">Configure</Button>
        <Chip variant="${chipVariant}" color="${chipColor}">Typescript</Chip>
      </CardFooter>
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
      sandBoxLink="https://codesandbox.io/p/devbox/marketplace-card-52m7fk?file=%2FApp.jsx"
    />
  );
}

export default MarketplaceCard;
