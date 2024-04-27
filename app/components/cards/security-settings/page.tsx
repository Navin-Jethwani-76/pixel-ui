"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Input,
  ScrollShadow,
  Select,
  SelectItem,
  Switch,
  SwitchProps,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
  switchColorOptions,
} from "@/app/components";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import { SecuritySettingType } from "@/app/components/cards";
import { CiEdit } from "react-icons/ci";

const CustomSettingComponent = ({ item }: { item: SecuritySettingType }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 rounded-medium bg-content2 p-4">
        <div>
          <p>{item.title}</p>
          <p className="text-small text-default-500">{item.description}</p>
        </div>
        {item.endContent}
      </div>
    </>
  );
};

function SecuritySettings() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Security Settings");
  const [description, setDescription] = useState(
    "Manage your security preferences"
  );
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("secondary");
  const [btnVariant, setBtnVariant] = useState<ButtonProps["variant"]>("light");

  const [switchColor, setswitchColor] =
    useState<SwitchProps["color"]>("secondary");

  const Settings: SecuritySettingType[] = [
    {
      title: "Email Address",
      description: "The email address associated with your account.",
      endContent: (
        <>
          <div
            className={`flex w-full flex-wrap items-center justify-end gap-6 ${
              maxWidth !== "100%" ? "" : "flex-nowrap w-auto"
            }`}
          >
            <div className="flex flex-col items-end">
              <p>john.doe@mail.com</p>
              <p className="text-small text-success">Verified</p>
            </div>
            <Button
              variant={btnVariant}
              color={btnColor}
              className="flex flex-row gap-1"
            >
              Edit
              <CiEdit />
            </Button>
          </div>
        </>
      ),
    },
    {
      title: "Password",
      description: "Set a unique password to protect your account.",
      endContent: (
        <>
          <Button variant={btnVariant} color={btnColor}>
            Change
          </Button>
        </>
      ),
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account.",
      endContent: (
        <>
          <Switch
            defaultSelected
            color={switchColor}
            aria-label="Enable / Disable Two-Factor Authentication"
          />
        </>
      ),
    },
    {
      title: "Password Reset Protection",
      description: "Require additional information to reset your password.",
      endContent: (
        <>
          <Switch
            color={switchColor}
            aria-label="Password Reset Protection Switch"
          />
        </>
      ),
    },
    {
      title: "Require Pin",
      description: "Require a pin to access your account.",
      endContent: (
        <>
          <Switch
            color={switchColor}
            defaultSelected
            aria-label="Require Pin Switch"
          />
        </>
      ),
    },
    {
      title: "Deactivate Account",
      description: "Deactivate your account and delete all your data.",
      endContent: (
        <>
          <Button variant={btnVariant} color={btnColor}>
            Deactivate
          </Button>
        </>
      ),
    },
    {
      title: "Delete Account",
      description: "Delete your account and all your data.",
      endContent: (
        <>
          <Button variant={"flat"} color={"danger"}>
            Delete
          </Button>
        </>
      ),
    },
  ];

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
          label="Switch Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["secondary"]}
          className="max-w-xs"
          onChange={(e) => {
            setswitchColor(e.target.value as SwitchProps["color"]);
          }}
        >
          {switchColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["light"]}
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
          defaultSelectedKeys={["secondary"]}
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
          className={`w-full p-2 ${
            maxWidth === "375px"
              ? "max-w-[360px]"
              : maxWidth === "768px"
              ? "max-w-md"
              : "max-w-lg"
          }`}
        >
          <CardBody className={`flex flex-col gap-4 w-full`}>
            <div className="w-full flex flex-col">
              <p className="text-large">{header}</p>
              <p className="text-small text-default-500">{description}</p>
            </div>
            <ScrollShadow
              className="w-full max-h-[570px]"
              hideScrollBar
              size={0}
            >
              <div className="flex flex-col gap-2">
                {Settings.map((item, index) => {
                  return <CustomSettingComponent key={index} item={item} />;
                })}
              </div>
            </ScrollShadow>
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
      code: `// make sure to copy data.jsx if you changed any props
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Settings } from "./data";

const CustomSettingComponent = ({ item }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 rounded-medium bg-content2 p-4">
        <div>
          <p>{item.title}</p>
          <p className="text-small text-default-500">{item.description}</p>
        </div>
        {item.endContent}
      </div>
    </>
  );
};

export default function App() {
  return (
    <Card className="w-full max-w-md p-2">
      <CardBody className="flex flex-col gap-4">
        <div className="w-full flex flex-col">
          <p className="text-large">${header}</p>
          <p className="text-small text-default-500">${description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {Settings.map((item, index) => {
            return <CustomSettingComponent key={index} item={item} />;
          })}
        </div>
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.jsx",
      code: `import React from "react";
import { Button, Switch } from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";

export const Settings = [
  {
    title: "Email Address",
    description: "The email address associated with your account.",
    endContent: (
      <div className="flex w-full flex-wrap md:flex-nowrap md:w-auto items-center justify-end gap-6">
        <div className="flex flex-col items-end">
          <p>john.doe@mail.com</p>
          <p className="text-small text-success">Verified</p>
        </div>
        <Button variant="${btnVariant}" color="${btnColor}" className="flex flex-row gap-1">
          Edit
          <CiEdit />
        </Button>
      </div>
    ),
  },
  {
    title: "Password",
    description: "Set a unique password to protect your account.",
    endContent: (
      <Button variant="${btnVariant}" color="${btnColor}">Change</Button>
    ),
  },
  {
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security to your account.",
    endContent: (
      <Switch defaultSelected color="${switchColor}" aria-label="Enable / Disable Two-Factor Authentication" />
    ),
  },
  {
    title: "Password Reset Protection",
    description: "Require additional information to reset your password.",
    endContent: (
      <Switch color="${switchColor}" aria-label="Password Reset Protection Switch" />
    ),
  },
  {
    title: "Require Pin",
    description: "Require a pin to access your account.",
    endContent: (
      <Switch color="${switchColor}" defaultSelected aria-label="Require Pin Switch" />
    ),
  },
  {
    title: "Deactivate Account",
    description: "Deactivate your account and delete all your data.",
    endContent: (
      <Button variant="${btnVariant}" color="${btnColor}">Deactivate</Button>
    ),
  },
  {
    title: "Delete Account",
    description: "Delete your account and all your data.",
    endContent: (
      <Button variant="flat" color="danger">Delete</Button>
    ),
  },
];`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/security-settings-4t7cgs?file=%2FApp.jsx"
    />
  );
}

export default SecuritySettings;
