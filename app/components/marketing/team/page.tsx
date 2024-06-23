"use client";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Select,
  SelectItem,
  Card,
  CardBody,
  ButtonProps,
  ScrollShadow,
  Link,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";
import { Member } from "@/app/components/marketing/team";
import UiComponent from "@/lib/ui";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { data } from "./code";

const TeamMembers: Member[] = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
    ),
    role: "CEO",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258ab4e29066708c"
      />
    ),
    role: "CTO",
  },
  {
    name: "Robert Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258114e29066708c"
      />
    ),
    role: "Principal Designer",
  },
  {
    name: "Mark Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258a14e29066708c"
      />
    ),
    role: "Principal Engineer",
  },
  {
    name: "Frank Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258a14e29066708c"
      />
    ),
    role: "Frontend Engineer",
  },
  {
    name: "Zoe Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258114e29926708c"
      />
    ),
    role: "Backend Engineer",
  },
  {
    name: "Bob Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258114e29b26708c"
      />
    ),
    role: "Product Manager",
  },
  {
    name: "Francis Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258b14e29326708c"
      />
    ),
    role: "Product Designer",
  },
  {
    name: "Milan Doe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptatum?",
    avatar: (
      <Avatar
        className="w-20 h-20"
        src="https://i.pravatar.cc/150?u=a04258114e29326708c"
      />
    ),
    role: "Customer Support",
  },
];

const Team = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("primary");
  const [btnVariant, setBtnVariant] =
    useState<ButtonProps["variant"]>("bordered");

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["solid"]}
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
      <>
        <div
          className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <div className="flex max-w-4xl flex-col items-center pt-10 pb-4 h-full gap-6">
            <div className="flex max-w-xl flex-col text-center px-4 gap-2">
              <h2 className="text-large">We&#39;re hiring!</h2>
              <h1 className="text-4xl font-medium tracking-tight">
                Meet our team
              </h1>
              <div className="flex w-full justify-center gap-2">
                <Button variant="light">About Us</Button>
                <Button variant={btnVariant} color={btnColor}>
                  Open positions
                </Button>
              </div>
            </div>
            <ScrollShadow
              className={`w-full max-h-[500px]`}
              size={0}
              hideScrollBar
            >
              <div className="flex flex-wrap gap-4 justify-center">
                {TeamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="w-full max-w-xs md:max-w-64 xl:max-w-[250px]"
                  >
                    <CardBody className="flex flex-col gap-4 items-center rounded-large bg-content1 px-4 py-6 text-center">
                      {member.avatar}
                      <div className="flex flex-col">
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-small text-default-500">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-default-600">{member.description}</p>
                      <div className="flex gap-4">
                        <Link href="#" color="foreground">
                          <FaXTwitter className="text-default-400" />
                        </Link>
                        <Link href="#" color="foreground">
                          <FaLinkedin className="text-default-400" />
                        </Link>
                        <Link href="#" color="foreground">
                          <FaGithub className="text-default-400" />
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </ScrollShadow>
          </div>
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
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TeamMembers } from "./data"

export default function App() {
  return (
    <>
      <div className="flex w-full flex-col items-center my-10 h-full gap-6">
        <div className="flex max-w-xl flex-col text-center px-4 gap-4">
          <h2 className="text-large">We&#39;re hiring!</h2>
          <h1 className="text-4xl font-medium tracking-tight">
            Meet our team.
          </h1>
          <h2 className="text-large text-default-500">
            Our philosophy is to build a great team and then empower them to do
            great things.
          </h2>
          <div className="flex w-full justify-center gap-2">
            <Button variant="bordered">About Us</Button>
            <Button variant="${btnVariant}" color="${btnColor}">
              Open positions
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {TeamMembers.map((member, index) => (
            <Card key={index} className="w-full max-w-[250px]">
              <CardBody className="flex flex-col gap-4 items-center rounded-large bg-content1 px-4 py-6 text-center">
                {member.avatar}
                <div className="flex flex-col">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-small text-default-500">{member.role}</p>
                </div>
                <p className="text-default-600">{member.description}</p>
                <div className="flex gap-4">
                  <Link href="#" color="foreground">
                    <FaXTwitter className="text-default-400" />
                  </Link>
                  <Link href="#" color="foreground">
                    <FaLinkedin className="text-default-400" />
                  </Link>
                  <Link href="#" color="foreground">
                    <FaGithub className="text-default-400" />
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "data.js",
      code: data,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/team-wpv248?file=%2FApp.jsx"
    />
  );
};

export default Team;
