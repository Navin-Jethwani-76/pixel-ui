"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Input,
  InputProps,
  ScrollShadow,
  Select,
  SelectItem,
  User,
} from "@nextui-org/react";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
  inputVariantOptions,
} from "@/app/components";
import UiComponent from "@/components/common/ui-component";
import { inputFields, getClassName } from "@/app/components/cards";

function AccountDetails() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Account Details");
  const [description, setDescription] = useState(
    "The photo will be used for your profile, and will be visible to other users of the platform."
  );
  const [inputVariant, setInputVariant] =
    useState<InputProps["variant"]>("bordered");
  const [cancelBtnColor, setCancelBtnColor] =
    useState<ButtonProps["color"]>("default");
  const [cancelbtnVariant, setCancelBtnVariant] =
    useState<ButtonProps["variant"]>("bordered");
  const [continuebtnColor, setContinueBtnColor] =
    useState<ButtonProps["color"]>("primary");
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
          label="Input Variant"
          variant="bordered"
          placeholder="Select a variant"
          defaultSelectedKeys={["bordered"]}
          className="max-w-xs"
          disallowEmptySelection
          onChange={(e) => {
            setInputVariant(e.target.value as InputProps["variant"]);
          }}
        >
          {inputVariantOptions.map((variant, index) => (
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
          label="Cancel Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["bordered"]}
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
          defaultSelectedKeys={["primary"]}
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
          className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <Card>
            <CardBody
              className={`flex flex-col items-center gap-4 w-full ${
                maxWidth === "375px" ? "max-w-[360px]" : "max-w-lg"
              }`}
            >
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-large font-medium">{header}</h4>
                <div className="flex flex-col items-start gap-2">
                  <User
                    name="Tony Reichert"
                    description="Professional Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
                      size: "lg",
                    }}
                  />
                  <p className="text-tiny text-default-400">{description}</p>
                </div>
              </div>
              <ScrollShadow className="w-full max-h-[360px]" hideScrollBar>
                <div
                  className={`flex ${
                    maxWidth == "375px"
                      ? "flex-col items-center gap-3"
                      : "flex-wrap justify-between gap-2"
                  }  w-full`}
                >
                  {inputFields.map((field, index) => (
                    <Input
                      key={index}
                      className={getClassName(maxWidth)}
                      label={field.label}
                      size="sm"
                      variant={inputVariant}
                      type={field.type}
                    />
                  ))}
                </div>
              </ScrollShadow>
              <div className="flex justify-between w-full gap-4">
                <Button
                  variant={cancelbtnVariant}
                  color={cancelBtnColor}
                  className="rounded-full"
                >
                  Cancel
                </Button>
                <Button
                  variant={continuebtnVariant}
                  color={continuebtnColor}
                  className="rounded-full"
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
import { Button, Card, CardBody, Input, User } from "@nextui-org/react";

const inputFields = [
  { label: "Username", type: "text" },
  { label: "Email", type: "email" },
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Phone Number", type: "tel" },
  { label: "Address", type: "text" },
  { label: "State", type: "text" },
  { label: "Zip Code", type: "number" },
  { label: "Country", type: "text" },
];

export default function App() {
  return (
    <Card className="w-full max-w-lg">
      <CardBody className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-large font-medium">${header}</h4>
          <div className="flex flex-col items-start gap-2">
            <User
              name="Tony Reichert"
              description="Professional Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
                size: "lg",
              }}
            />
            <p className="text-tiny text-default-400">
              ${description}
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-center sm:justify-between gap-2 w-full">
          {inputFields.map((field, index) => (
            <Input
              key={index}
              className="max-w-xs sm:max-w-[240px]"
              label={field.label}
              type={field.type}
              size="sm"
              variant="${inputVariant}"
            />
          ))}
        </div>
        <div className="flex justify-between w-full gap-4">
          <Button variant="${cancelbtnVariant}" color="${cancelBtnColor}" className="rounded-full">
            Cancel
          </Button>
          <Button variant="${continuebtnVariant}" color="${continuebtnColor}" className="rounded-full">
            Continue
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
      sandBoxLink="https://codesandbox.io/p/devbox/account-details-fn4xtc?file=%2FApp.jsx"
    />
  );
}

export default AccountDetails;
