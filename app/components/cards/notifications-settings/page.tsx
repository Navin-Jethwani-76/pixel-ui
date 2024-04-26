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
  cn,
} from "@nextui-org/react";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
  switchColorOptions,
} from "@/app/components";
import UiComponent from "@/components/common/ui-component";
import { NotificationSettingType } from "@/app/components/cards";
import { Settings } from "@/app/components/cards/notifications-settings";

interface CustomSwitchType extends SwitchProps {
  setting: NotificationSettingType;
  switchColor: SwitchProps["color"];
}

const CustomSwitch = ({ setting, switchColor }: CustomSwitchType) => {
  return (
    <Switch
      defaultSelected={setting.enabled}
      color={switchColor}
      classNames={{
        base: cn(
          "bg-content2 flex-row-reverse w-full max-w-full justify-between rounded-medium gap-2 p-4"
        ),
      }}
    >
      <div className="flex flex-col">
        <p className="text-medium">{setting.title}</p>
        <p className="text-small text-default-500">{setting.description}</p>
      </div>
    </Switch>
  );
};

function NotificationsSettings() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Notification Settings");
  const [description, setDescription] = useState(
    "Manage your notification preferences"
  );
  const [cancelBtnColor, setCancelBtnColor] =
    useState<ButtonProps["color"]>("default");
  const [cancelbtnVariant, setCancelBtnVariant] =
    useState<ButtonProps["variant"]>("bordered");
  const [continuebtnColor, setContinueBtnColor] =
    useState<ButtonProps["color"]>("primary");
  const [continuebtnVariant, setContinueBtnVariant] =
    useState<ButtonProps["variant"]>("solid");

  const [switchColor, setswitchColor] =
    useState<SwitchProps["color"]>("secondary");

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
          label="Reset Button Variant"
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
          label="Reset Button Color"
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
          label="Save Button Variant"
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
          label="Save Button Color"
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
      <div
        className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <Card
          className={`w-full ${
            maxWidth === "375px"
              ? "max-w-[360px]"
              : maxWidth === "768px"
              ? "max-w-sm"
              : "max-w-md"
          }`}
        >
          <CardBody className={`flex flex-col gap-4 w-full`}>
            <div className="w-full flex flex-col">
              <p className="text-large">{header}</p>
              <p className="text-small text-default-500">{description}</p>
            </div>
            <ScrollShadow className="w-full max-h-[400px]" hideScrollBar>
              <div className="flex flex-col gap-2">
                {Settings.map((item, index) => {
                  return (
                    <CustomSwitch
                      key={index}
                      setting={item}
                      switchColor={switchColor}
                    />
                  );
                })}
              </div>
            </ScrollShadow>
            <div className={`w-full flex justify-end items-center gap-4`}>
              <Button color={cancelBtnColor} variant={cancelbtnVariant}>
                Reset To Default
              </Button>
              <Button color={continuebtnColor} variant={continuebtnVariant}>
                Save Changes
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
import { Card, CardBody, Button, Switch, ScrollShadow } from "@nextui-org/react";
import { Settings } from "./data";

const CustomSwitch = ({ setting }) => {
  return (
    <Switch
      defaultSelected={setting.enabled}
      color="${switchColor}"
      classNames={{
        base: "bg-content2 flex-row-reverse w-full max-w-full justify-between rounded-medium gap-2 p-4",
      }}
    >
      <div className="flex flex-col">
        <p className="text-medium">{setting.title}</p>
        <p className="text-small text-default-500">{setting.description}</p>
      </div>
    </Switch>
  );
};

export default function App() {
  return (
    <Card className="w-full max-w-md">
      <CardBody className="flex flex-col items-center gap-4">
        <div className="w-full flex flex-col">
          <p className="text-large">${header}</p>
          <p className="text-small text-default-500">${description}</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 w-full max-h-[400px]" hideScrollBar>
          {Settings.map((item, index) => (
            <CustomSwitch key={index} setting={item} />
          ))}
        </ScrollShadow>
        <div className="w-full flex justify-end items-center gap-4">
          <Button color="${cancelBtnColor}" variant="${cancelbtnVariant}">Reset To Default</Button>
          <Button color="${continuebtnColor}" variant="${continuebtnVariant}">Save Changes</Button>
        </div>
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `export const Settings = [
  { title: "Pause all", description: "Temporarily pause all notifications", enabled: false },
  { title: "Followers", description: "Get notified when someone follows you", enabled: true },
  { title: "Likes", description: "Get notified when someone likes your post", enabled: true },
  { title: "Comments", description: "Get notified when someone comments on your post", enabled: false },
  { title: "Mentions", description: "Get notified when someone mentions you in a post", enabled: true },
  { title: "Messages", description: "Get notified when someone sends you a message", enabled: true },
  { title: "Friend Requests", description: "Get notified when someone sends you a friend request", enabled: false },
];`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/notifications-settings-dkgwrq?file=%2FApp.jsx"
    />
  );
}

export default NotificationsSettings;
