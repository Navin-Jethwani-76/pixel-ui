"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  User,
  Tabs,
  Tab,
  Switch,
  ScrollShadow,
  SwitchProps,
} from "@nextui-org/react";
import UiComponent from "@/components/common/ui-component";
import {
  NotificationSettingType,
  SecuritySettingType,
} from "@/app/components/cards";
import { CiEdit } from "react-icons/ci";
import { BiUserCircle } from "react-icons/bi";
import { LuBellRing, LuFingerprint } from "react-icons/lu";
import { ViewProps } from "@/app/components";
import { inputFields, getClassName } from "@/app/components/cards";
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

function SettingsTabs() {
  const [selected, setSelected] = useState("account");
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");

  const SecuritySettings: SecuritySettingType[] = [
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
              variant={"light"}
              color={"secondary"}
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
          <Button variant={"flat"} color={"secondary"}>
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
            color={"secondary"}
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
            color={"secondary"}
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
            color={"secondary"}
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
          <Button variant={"light"} color={"danger"}>
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

  const AccountContent = () => {
    return (
      <>
        <Card className="w-full flex justify-center items-center">
          <CardBody
            className={`flex flex-col justify-between items-center gap-4 w-full ${
              maxWidth === "375px" ? "max-w-[360px]" : "max-w-xl"
            }`}
          >
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-large font-medium">Account Details</h4>
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
                  The photo will be used for your profile, and will be visible
                  to other users of the platform.
                </p>
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
                    variant={"bordered"}
                    type={field.type}
                  />
                ))}
              </div>
            </ScrollShadow>
            <div className="flex justify-between w-full gap-4">
              <Button
                variant={"light"}
                color={"danger"}
                className="rounded-full"
              >
                Cancel
              </Button>
              <Button
                variant={"solid"}
                color={"primary"}
                className="rounded-full"
              >
                Continue
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  };

  const NotificationsContent = () => {
    return (
      <>
        <Card className="h-full w-full">
          <CardBody className={`flex flex-col justify-between gap-4 w-full`}>
            <div className="w-full flex flex-col">
              <p className="text-large">Notification Settings</p>
              <p className="text-small text-default-500">
                Manage your notification preferences
              </p>
            </div>
            <ScrollShadow
              className="flex flex-col gap-2 w-full h-full max-h-[480px]"
              hideScrollBar
            >
              {Settings.map((item, index) => {
                return (
                  <CustomSwitch
                    key={index}
                    setting={item}
                    switchColor={"secondary"}
                  />
                );
              })}
            </ScrollShadow>
            <div
              className={`w-full flex justify-center md:justify-end items-center gap-4`}
            >
              <Button color={"danger"} variant={"light"}>
                Reset To Default
              </Button>
              <Button color={"primary"} variant={"flat"}>
                Save Changes
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  };

  const SecurityContent = () => {
    return (
      <>
        <Card className="w-full h-full">
          <CardBody className={`flex flex-col gap-2 w-full justify-between`}>
            <div className="w-full flex flex-col">
              <p className="text-large">Security Settings</p>
              <p className="text-small text-default-500">
                Manage your security preferences
              </p>
            </div>
            <ScrollShadow
              className="flex flex-col gap-2 w-full h-full max-h-[550px]"
              hideScrollBar
            >
              {SecuritySettings.map((item, index) => {
                return <CustomSettingComponent key={index} item={item} />;
              })}
            </ScrollShadow>
          </CardBody>
        </Card>
      </>
    );
  };

  const SettingTabs = [
    {
      key: "account",
      title: "Account",
      content: AccountContent,
      icon: BiUserCircle,
    },
    {
      key: "notifications",
      title: "Notifications",
      content: NotificationsContent,
      icon: LuBellRing,
    },
    {
      key: "security",
      title: "Security",
      content: SecurityContent,
      icon: LuFingerprint,
    },
  ];

  const MainCardContent = () => {
    return (
      <>
        <div
          className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <Card className="w-full h-full max-h-[700px]">
            <CardBody className="w-full px-0 pb-0">
              <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key as string)}
                classNames={{
                  panel: "h-full flex justify-center pb-0 px-0",
                  base: "px-2",
                }}
              >
                {SettingTabs.map((tab) => {
                  return (
                    <Tab
                      key={tab.key}
                      title={
                        <div className="flex items-center space-x-2">
                          <tab.icon size={20} />
                          <span>{tab.title}</span>
                        </div>
                      }
                    >
                      <tab.content />
                    </Tab>
                  );
                })}
              </Tabs>
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
      code: `"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  User,
  Tabs,
  Tab,
  Switch,
  ScrollShadow,
} from "@nextui-org/react";
import { BiUserCircle } from "react-icons/bi";
import { LuBellRing, LuFingerprint } from "react-icons/lu";
import { inputFields, NotificationSettings, SecuritySettings } from "./data";

const AccountContent = () => {
  return (
    <Card className="w-full max-w-lg">
      <CardBody className="flex flex-col justify-between items-center gap-2 w-full h-full">
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-large font-medium">Account Details</h4>
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
              The photo will be used for your profile, and will be visible to other users of the platform.
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
              variant="bordered"
            />
          ))}
        </div>
        <div className="flex justify-between w-full gap-4">
          <Button variant="bordered" color="default" className="rounded-full">
            Cancel
          </Button>
          <Button variant="solid" color="primary" className="rounded-full">
            Continue
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const CustomSwitch = ({ setting }) => {
  return (
    <Switch
      defaultSelected={setting.enabled}
      color="secondary"
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

const NotificationsContent = () => {
  return (
    <Card className="h-full w-full">
      <CardBody className="flex flex-col justify-between gap-4 w-full">
        <div className="w-full flex flex-col">
          <p className="text-large">Notification Settings</p>
          <p className="text-small text-default-500">Manage your notification preferences</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 w-full max-h-[380px]" hideScrollBar>
          {NotificationSettings.map((item, index) => (
            <CustomSwitch key={index} setting={item} />
          ))}
        </ScrollShadow>
        <div className="w-full flex justify-end items-center gap-4">
          <Button color="default" variant="bordered">Reset To Default</Button>
          <Button color="primary" variant="solid">Save Changes</Button>
        </div>
      </CardBody>
    </Card>
  );
}

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

const SecurityContent = () => {
  return (
    <Card className="h-full w-full">
      <CardBody className="flex flex-col gap-4 w-full">
        <div className="w-full flex flex-col">
          <p className="text-large">Security Settings</p>
          <p className="text-small text-default-500">Manage your security preferences</p>
        </div>
        <ScrollShadow className="flex flex-col gap-2 w-full max-h-[400px]" hideScrollBar>
          {SecuritySettings.map((item, index) => {
            return <CustomSettingComponent key={index} item={item} />;
          })}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
}

const SettingTabs = [
  {
    key: "account",
    title: "Account",
    content: AccountContent,
    icon: BiUserCircle,
  },
  {
    key: "notifications",
    title: "Notifications",
    content: NotificationsContent,
    icon: LuBellRing,
  },
  {
    key: "security",
    title: "Security",
    content: SecurityContent,
    icon: LuFingerprint,
  },
];

export default function App() {
  return (
    <Card className="mx-4 w-full h-full">
      <CardBody className="w-full">
        <Tabs
          aria-label="Options"
          classNames={{
            panel: "h-full flex justify-center",
          }}
        >
          {SettingTabs.map((tab) => {
            return (
              <Tab
                key={tab.key}
                title={
                  <div className="flex items-center space-x-2">
                    <tab.icon size={20} />
                    <span>{tab.title}</span>
                  </div>
                }
              >
                <tab.content />
              </Tab>
            );
          })}
        </Tabs>
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

export const inputFields = [
  { label: "Username", type: "text" },
  { label: "Email", type: "email" },
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Phone Number", type: "tel", inputMode: "numeric" },
  { label: "Address", type: "text" },
  { label: "State", type: "text" },
  { label: "Zip Code", type: "number" },
  { label: "Country", type: "text" },
];

export const NotificationSettings = [
  { title: "Pause all", description: "Temporarily pause all notifications", enabled: false },
  { title: "Followers", description: "Get notified when someone follows you", enabled: true },
  { title: "Likes", description: "Get notified when someone likes your post", enabled: true },
  { title: "Comments", description: "Get notified when someone comments on your post", enabled: false },
  { title: "Mentions", description: "Get notified when someone mentions you in a post", enabled: true },
  { title: "Messages", description: "Get notified when someone sends you a message", enabled: true },
  { title: "Friend Requests", description: "Get notified when someone sends you a friend request", enabled: false },
];

export const SecuritySettings = [
  {
    title: "Email Address",
    description: "The email address associated with your account.",
    endContent: (
      <div className="flex w-full flex-wrap md:flex-nowrap md:w-auto items-center justify-end gap-6">
        <div className="flex flex-col items-end">
          <p>john.doe@mail.com</p>
          <p className="text-small text-success">Verified</p>
        </div>
        <Button variant="light" color="secondary" className="flex flex-row gap-1">
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
      <Button variant="light" color="secondary">Change</Button>
    ),
  },
  {
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security to your account.",
    endContent: (
      <Switch defaultSelected color="secondary" aria-label="Enable / Disable Two-Factor Authentication" />
    ),
  },
  {
    title: "Password Reset Protection",
    description: "Require additional information to reset your password.",
    endContent: (
      <Switch color="secondary" aria-label="Password Reset Protection Switch" />
    ),
  },
  {
    title: "Require Pin",
    description: "Require a pin to access your account.",
    endContent: (
      <Switch color="secondary" defaultSelected aria-label="Require Pin Switch" />
    ),
  },
  {
    title: "Deactivate Account",
    description: "Deactivate your account and delete all your data.",
    endContent: (
      <Button variant="light" color="secondary">Deactivate</Button>
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
      preview={MainCardContent()}
      code={code}
      sandBoxLink="https://codesandbox.io/p/devbox/settings-tabs-h8s59w?file=%2FApp.jsx"
      PreviewProps={() => {
        return <></>;
      }}
      setMaxWidth={setMaxWidth}
    />
  );
}

export default SettingsTabs;
