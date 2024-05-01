"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  RadioProps,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import { IconType } from "react-icons";
import { RadioOptionType } from "@/app/components/cards";
import { LuBox } from "react-icons/lu";

const RadioOptions: RadioOptionType[] = [
  {
    title: "Hobby plan",
    helperText: " $0 per month",
    description: "Up to 20 items and 5 projects.",
    icon: LuBox,
    iconColor: "secondary",
  },
  {
    title: "Pro plan",
    helperText: "  $30 per month",
    description: "Unlimited items and 20 projects.",
    icon: LuBox,
    iconColor: "secondary",
  },
  {
    title: "Enterprise plan",
    helperText: "  $100 per month",
    description: "Unlimited items and projects.",
    icon: LuBox,
    iconColor: "secondary",
  },
];

interface CustomRadioProps extends RadioProps {
  Icon?: IconType | null;
  iconColor?: string;
}

const CustomRadio = (props: CustomRadioProps) => {
  const { children, Icon, iconColor, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: "group relative tap-highlight-transparent p-2 inline-flex m-0 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg 3 border-default-100 data-[selected=true]:border-secondary data-[selected=true]:bg-secondary-50",
        label: "px-1",
      }}
      color="secondary"
    >
      <div className="w-full flex flex-row items-center gap-4">
        {Icon && (
          <div
            className={`item-center flex rounded-full bg-secondary-50 p-2 group-data-[selected=true]:bg-secondary-100`}
          >
            <Icon size={20} className="text-secondary" />
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};

function SelectPlan() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [selected, setSelected] = useState<string[]>([]);
  const [withIcons, setWithIcons] = useState(true);
  const [cardHeading, setCardHeading] = useState("Select your plan");
  const [cardDescription, setCardDescription] = useState(
    "Find a plan that's right for you and your team."
  );

  useEffect(() => {
    const newSelected = [withIcons && "withIcons"].filter(Boolean) as string[]; // Filter out false values
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithIcons(selected.includes("withIcons"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
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
        <CheckboxGroup
          label="Options"
          color="secondary"
          value={selected}
          onValueChange={setSelected}
        >
          <Checkbox value="withIcons">With Icons</Checkbox>
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
            className={`w-full ${
              maxWidth === "375px" ? "max-w-[360px]" : "max-w-sm"
            }`}
          >
            <CardBody className={`flex flex-col items-center gap-2 w-full`}>
              <div className="flex flex-col w-full">
                <h4 className="text-large font-medium">{cardHeading}</h4>
                <p className="text-tiny text-default-400">{cardDescription}</p>
              </div>
              <RadioGroup
                className="w-full"
                description="Selected plan method can be changed at any time."
              >
                {RadioOptions.map((option, index) => {
                  return (
                    <CustomRadio
                      key={index}
                      value={option.title}
                      Icon={withIcons ? option.icon : null}
                      iconColor={option.iconColor}
                    >
                      <div className="flex flex-col">
                        <p className="text-small">
                          {option.title}{" "}
                          <span className="mt-0.5 text-tiny text-default-500">
                            {option.helperText}
                          </span>
                        </p>
                        <p className="text-tiny text-default-400">
                          {option.description}
                        </p>
                      </div>
                    </CustomRadio>
                  );
                })}
              </RadioGroup>
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
import { Card, CardBody, Radio, RadioGroup } from "@nextui-org/react";
import { RadioOptions } from "./data";

const CustomRadio = (props) => {
  const { children, Icon, iconColor, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: "group relative tap-highlight-transparent inline-flex m-0 p-2 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg 3 border-default-100 data-[selected=true]:border-secondary data-[selected=true]:bg-secondary-50",
      }}
      color="secondary"
    >
      <div className="w-full flex flex-row items-center gap-4">
        {Icon && (
          <div className="item-center flex rounded-full bg-secondary-50 p-2 group-data-[selected=true]:bg-secondary-100">
            <Icon size={20} className="text-secondary" />
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};

export default function App() {
  return (
    <Card className="w-full max-w-sm">
      <CardBody className="flex flex-col items-center gap-2">
        <div className="flex flex-col w-full">
          <h4 className="text-large font-medium">${cardHeading}</h4>
          <p className="text-tiny text-default-400">${cardDescription}</p>
        </div>
        <RadioGroup className="w-full" description="Selected plan method can be changed at any time.">
          {RadioOptions.map((option, index) => {
            return (
              <CustomRadio
                key={index}
                value={option.title}
                Icon={${withIcons ? "option.icon" : `null`}}
                iconColor={option.iconColor}
              >
                <div className="flex flex-col">
                  <p className="text-small">
                    {option.title}{" "}
                    <span className="mt-0.5 text-tiny text-default-500">
                      {option.helperText}
                    </span>
                  </p>
                  <p className="text-tiny text-default-400">{option.description}</p>
                </div>
              </CustomRadio>
            );
          })}
        </RadioGroup>
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `import { LuBox } from "react-icons/lu";

export const RadioOptions = [
  {
    title: "Hobby plan",
    helperText: " $0 per month",
    description: "Up to 20 items and 5 projects.",
    icon: LuBox,
    iconColor: "secondary",
  },
  {
    title: "Pro plan",
    helperText: "  $30 per month",
    description: "Unlimited items and 20 projects.",
    icon: LuBox,
    iconColor: "secondary",
  },
  {
    title: "Enterprise plan",
    helperText: "  $100 per month",
    description: "Unlimited items and projects.",
    icon: LuBox,
    iconColor: "secondary",
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
      sandBoxLink="https://codesandbox.io/p/devbox/select-plan-kjmlmy?file=%2FApp.jsx"
    />
  );
}

export default SelectPlan;
