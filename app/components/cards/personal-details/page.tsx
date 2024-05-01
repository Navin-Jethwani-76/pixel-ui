"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  CardHeader,
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
import { PersonalDetail, personalDetails } from "@/app/components/cards";

const detailsArray: PersonalDetail[] = Object.entries(personalDetails).map(
  ([key, value]) => ({
    key,
    value,
  })
);

function PersonalDetails() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Personal Details");
  const [description, setDescription] = useState(
    "Manage your personal details"
  );
  const [editBtnColor, setEditBtnColor] =
    useState<ButtonProps["color"]>("primary");
  const [editBtnVariant, setEditBtnVariant] =
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
          label="Edit Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["solid"]}
          className="max-w-xs"
          onChange={(e) => {
            setEditBtnVariant(e.target.value as ButtonProps["variant"]);
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
          label="Edit Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["primary"]}
          className="max-w-xs"
          onChange={(e) => {
            setEditBtnColor(e.target.value as ButtonProps["color"]);
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
      <div
        className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <Card
          className={`w-full ${
            maxWidth === "375px"
              ? "max-w-xs"
              : maxWidth === "768px"
              ? "max-w-md"
              : "max-w-lg"
          } p-2`}
        >
          <CardHeader className="pb-0">
            <div className="w-full flex flex-row justify-between items-center gap-2">
              <div className="w-full flex flex-col">
                <p className="text-large">{header}</p>
                <p className="text-small text-default-500">{description}</p>
              </div>
              <Button color={editBtnColor} variant={editBtnVariant}>
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            {detailsArray.map((detail, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 w-full gap-4"
                >
                  <p className="text-small text-default-500">{detail.key}</p>
                  <p className="text-small font-medium">{detail.value}</p>
                </div>
              );
            })}
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
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { details } from "./data"

export default function App() {
  return (
    <Card className="w-full max-w-md px-2 py-2 md:px-3 md:py-4">
      <CardHeader className="pb-0">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <div className="w-full flex flex-col">
            <p className="text-large">${header}</p>
            <p className="text-small text-default-500">${description}</p>
          </div>
          <Button color="${editBtnColor}" variant="${editBtnVariant}">Edit</Button>
        </div>
      </CardHeader>
      <CardBody>
        {details.map((detail, index) => {
          return (
            <div key={index} className="flex items-center justify-between py-2 w-full gap-4">
              <p className="text-small text-default-500">{detail.key}</p>
              <p className="text-small font-medium">{detail.value}</p>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `export const details = [
  { key: 'Full Name', value: 'John Doe' },
  { key: 'Birthday', value: 'January 1, 1990' },
  { key: 'Country', value: 'United States' },
  { key: 'State', value: 'California' },
  { key: 'Address', value: '123 Main Street' },
  { key: 'Zip Code', value: '90001' },
  { key: 'Phone Number', value: '(123) 456-7890' },
  { key: 'Email', value: 'johndoe@example.com' },
  { key: 'Passport/ID', value: 'A1234567' },
  { key: 'SSN', value: '123-45-6789' },
  { key: 'Legal Status', value: 'Permanent Resident' },
  { key: 'Role', value: 'Software Engineer' }
]`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/personal-details-t6k4z4?file=%2FApp.jsx"
    />
  );
}

export default PersonalDetails;
