"use client";
import React, { useEffect, useState } from "react";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    Checkbox,
    CheckboxGroup,
    Chip,
    Link,
    ScrollShadow,
    Tab,
    Tabs,
} from "@nextui-org/react";
import { ViewProps } from "@/app/components";
import UiComponent from "@/components/common/ui-component";
import { NotificationsType } from "@/app/components/cards";
import { FaFileAlt } from "react-icons/fa";

const Notifications: NotificationsType[] = [
    {
        title: "Tony Reichert requested to join your Acme organization.",
        description: "2 hours ago",
        user: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />,
        type: "unread",
        footer: (
            <div className="flex gap-2">
                <Button size="sm" color="primary">
                    Accept
                </Button>
                <Button size="sm" color="default" variant="flat">
                    Decline
                </Button>
            </div>
        ),
    },
    {
        title: "Ben Berman modified the Brand logo file.",
        description: "2 hours ago",
        user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />,
        type: "unread",
        footer: (
            <Link href="#" color="foreground" className="flex gap-2 items-center">
                <FaFileAlt className="text-secondary" size={24} />
                <div className="flex flex-col">
                    <strong className="text-small font-medium">
                        Brand_Logo_v1.2.fig
                    </strong>
                    <p className="text-tiny text-default-400">3.4 MB</p>
                </div>
            </Link>
        ),
    },
    {
        title: "Jane Doe liked your post.",
        description: "2 hours ago",
        user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />,
        type: "unread",
    },
    {
        title: "John Smith started following you.",
        description: "2 hours ago",
        user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />,
        type: "archived",
    },
    {
        title: "Jacob Jones mentioned you in a post.",
        description: "2 hours ago",
        user: <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />,
        type: "archived",
    },
];

const unreadNotifications = Notifications.filter(
    (obj) => obj.type === "unread"
);

const archivedNotifications = Notifications.filter(
    (obj) => obj.type === "archived"
);

const NotificationItem = ({
    notification,
    withAvatar,
}: {
    notification: NotificationsType;
    withAvatar: boolean;
}) => {
    return (
        <>
            <div
                className={`flex flex-row gap-4 w-full border-b border-divider px-6 py-4 ${notification.type == "unread" && "bg-primary-50/50"
                    }`}
            >
                {withAvatar && (
                    <div className="flex justify-center items-center">
                        {notification.user}
                    </div>
                )}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-small text-foreground">{notification.title}</p>
                        <p className="text-tiny text-default-400">
                            {notification.description}
                        </p>
                    </div>
                    {notification.footer}
                </div>
            </div>
        </>
    );
};

export const renderTabContent = (
    notifications: NotificationsType[],
    title: string,
    withAvatar: boolean
) => (
    <Tab
        key={title.toLowerCase()}
        title={
            <div className="flex gap-2 items-center pb-1">
                <p>{title}</p>
                <Chip
                    size="sm"
                    variant="bordered"
                    classNames={{
                        content: "text-inherit font-normal flex-none",
                    }}
                >
                    {notifications.length}
                </Chip>
            </div>
        }
    >
        <ScrollShadow hideScrollBar className="w-full h-80">
            {notifications.map((notification, index) => (
                <NotificationItem
                    key={index}
                    notification={notification}
                    withAvatar={withAvatar}
                />
            ))}
        </ScrollShadow>
    </Tab>
);

function NotificationsCard() {
    const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
    const [selected, setSelected] = useState<string[]>([]);
    const [withAvatar, setWithAvatar] = useState(true);

    useEffect(() => {
        setSelected(["withAvatar"]);
    }, []);

    useEffect(() => {
        setWithAvatar(selected.includes("withAvatar"));
    }, [selected]);

    const PreviewProps = () => {
        return (
            <>
                <CheckboxGroup
                    label="Options"
                    color="secondary"
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Checkbox value="withAvatar">With Avatar</Checkbox>
                </CheckboxGroup>
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
                    <Card
                        className={`w-full ${maxWidth === "375px"
                                ? "max-w-[360px]"
                                : maxWidth === "768px"
                                    ? "max-w-md"
                                    : "max-w-lg"
                            }`}
                    >
                        <CardBody className="flex flex-col gap-4 w-full">
                            <div className="flex justify-between gap-4">
                                <h4 className="inline-block align-middle text-large font-medium">
                                    Notifications
                                </h4>
                                <Button variant="light" color="primary" radius="full">
                                    Mark all as read
                                </Button>
                            </div>
                            <Tabs
                                variant="underlined"
                                color="primary"
                                aria-label="Notifications Options"
                            >
                                {renderTabContent(Notifications, "All", withAvatar)}
                                {renderTabContent(unreadNotifications, "Unread", withAvatar)}
                                {renderTabContent(
                                    archivedNotifications,
                                    "Archived",
                                    withAvatar
                                )}
                            </Tabs>
                            <div className="flex justify-end gap-4">
                                <Button color="default" variant="light">
                                    Settings
                                </Button>
                                <Button color="default" variant="flat">
                                    Archive All
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
                code: `"use client";
import React from "react";
import { Button, Card, CardBody, Chip, Tab, Tabs } from "@nextui-org/react";
import { Notifications } from "./data";

const unreadNotifications = Notifications.filter(
  (obj) => obj.type === "unread"
);

const archivedNotifications = Notifications.filter(
  (obj) => obj.type === "archived"
);

const NotificationItem = ({ notification }) => {
  return (
    <>
      <div
        className={\`flex flex-row gap-4 w-full border-b border-divider px-6 py-4 \${
          notification.type == "unread" && "bg-primary-50/50"
        }\`}
      >
        ${withAvatar
                        ? `<div className="flex justify-center items-center">
          {notification.user}
        </div>`
                        : ``
                    }
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-small text-foreground">{notification.title}</p>
            <p className="text-tiny text-default-400">{notification.description}</p>
          </div>
          {notification.footer}
        </div>
      </div>
    </>
  );
};

const renderTabContent = ( notifications, title ) => (
  <Tab
    key={title.toLowerCase()}
    title={
      <div className="flex gap-2 items-center pb-1">
        <p>{title}</p>
        <Chip
          size="sm"
          variant="bordered"
          classNames={{
            content: "text-inherit font-normal flex-none",
          }}
        >
          {notifications.length}
        </Chip>
      </div>
    }
  >
    {notifications.map((notification, index) => (
      <NotificationItem key={index} notification={notification} />
    ))}
  </Tab>
);

export default function App() {
  return (
    <Card className="w-full md:max-w-md">
      <CardBody className="flex flex-col gap-4 w-full">
        <div className="flex justify-between gap-4">
          <h4 className="inline-block align-middle text-large font-medium">Notifications</h4>
          <Button variant="light" color="primary" radius="full">Mark all as read</Button>
        </div>
        <Tabs variant="underlined" color="primary" aria-label="Notifications Options">
          {renderTabContent(Notifications, "All")}
          {renderTabContent(unreadNotifications, "Unread")}
          {renderTabContent(archivedNotifications, "Archived")}
        </Tabs>
        <div className="flex justify-end gap-4">
          <Button color="default" variant="light">Settings</Button>
          <Button color="default" variant="flat">Archive All</Button>
        </div>
      </CardBody>
    </Card>
  );
}`,
            },
            {
                fileName: "data.jsx",
                code: `import React from "react";
import { Avatar, Button, Link } from "@nextui-org/react";
import { FaFileAlt } from "react-icons/fa";

export const Notifications = [
  {
    title: "Tony Reichert requested to join your Acme organization.",
    description: "2 hours ago",
    user: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />,
    type: "unread",
    footer: (
      <div className="flex gap-2">
        <Button size="sm" color="primary">
          Accept
        </Button>
        <Button size="sm" color="default" variant="flat">
          Decline
        </Button>
      </div>
    ),
  },
  {
    title: "Ben Berman modified the Brand logo file.",
    description: "2 hours ago",
    user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />,
    type: "unread",
    footer: (
      <Link href="#" color="foreground" className="flex gap-2 items-center">
        <FaFileAlt className="text-secondary" size={24} />
        <div className="flex flex-col">
          <strong className="text-small font-medium">
            Brand_Logo_v1.2.fig
          </strong>
          <p className="text-tiny text-default-400">3.4 MB</p>
        </div>
      </Link>
    ),
  },
  {
    title: "Jane Doe liked your post.",
    description: "2 hours ago",
    user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />,
    type: "unread",
  },
  {
    title: "John Smith started following you.",
    description: "2 hours ago",
    user: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />,
    type: "archived",
  },
  {
    title: "Jacob Jones mentioned you in a post.",
    description: "2 hours ago",
    user: <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />,
    type: "archived",
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
            sandBoxLink="https://codesandbox.io/p/devbox/notifications-card-mh2pz3?file=%2FApp.jsx"
        />
    );
}

export default NotificationsCard;
