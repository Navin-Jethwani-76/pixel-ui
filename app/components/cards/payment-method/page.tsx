"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Chip,
  Input,
  Radio,
  RadioGroup,
  RadioProps,
  ScrollShadow,
  Select,
  SelectItem,
  cn,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";
import UiComponent from "@/lib/ui";
import { RadioOptionType } from "@/app/components/cards";
import { BiLogoVisa } from "react-icons/bi";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { IconType } from "react-icons";

const RadioOptions: RadioOptionType[] = [
  {
    title: "Visa ending in 1234",
    description: "Expires on 02/2025",
    icon: BiLogoVisa,
    iconColor: "primary",
  },
  {
    title: "Visa ending in 4229",
    description: "Expires on 12/2024",
    icon: BiLogoVisa,
    iconColor: "primary",
  },
  {
    title: "MasterCard ending in 8888",
    description: "Expires on 02/2025",
    icon: RiMastercardLine,
    iconColor: "warning",
  },
  {
    title: "MasterCard ending in 6745",
    description: "Expires on 01/2023",
    icon: RiMastercardLine,
    iconColor: "warning",
    isExpired: true,
  },
  {
    title: "PayPal",
    description: "Select this option to pay with PayPal",
    icon: FaCcPaypal,
    iconColor: "default",
  },
];

interface CustomRadioProps extends RadioProps {
  Icon?: IconType | null;
  iconColor?: string;
  isexpired?: boolean;
}

const CustomRadio = (props: CustomRadioProps) => {
  const { children, Icon, iconColor, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "group relative tap-highlight-transparent inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg !border-medium border-default-100 data-[selected=true]:border-primary"
        ),
      }}
    >
      <div className="w-full flex flex-row items-center gap-4">
        {Icon && (
          <div className={`flex-none text-${iconColor}`}>
            <Icon size={30} />
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};

function PaymentMethodCard() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [selected, setSelected] = useState<string[]>([]);
  const [withIcons, setWithIcons] = useState(true);
  const [cardHeading, setCardHeading] = useState("Payment method");
  const [cardDescription, setCardDescription] = useState(
    "Select your preferred payment method for future payments."
  );
  const [radioValue, setRadioValue] = useState<RadioOptionType["title"]>("");
  const [cancelBtnColor, setCancelBtnColor] =
    useState<ButtonProps["color"]>("default");
  const [cancelbtnVariant, setCancelBtnVariant] =
    useState<ButtonProps["variant"]>("flat");
  const [continuebtnColor, setContinueBtnColor] =
    useState<ButtonProps["color"]>("primary");
  const [continuebtnVariant, setContinueBtnVariant] =
    useState<ButtonProps["variant"]>("solid");

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
        <Select
          label="Cancel Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["flat"]}
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
          <Card>
            <CardBody
              className={`flex flex-col items-center gap-2 w-full ${
                maxWidth === "375px" ? "max-w-[360px]" : "max-w-sm"
              }`}
            >
              <div className="flex flex-col w-full">
                <h4 className="text-large font-medium">{cardHeading}</h4>
                <p className="text-tiny text-default-400">{cardDescription}</p>
              </div>
              <ScrollShadow
                className="w-full max-h-[450px]"
                hideScrollBar
                size={0}
              >
                <RadioGroup
                  className="w-full"
                  description="Selected payment method can be changed at any time."
                  value={radioValue}
                  onValueChange={setRadioValue}
                >
                  {RadioOptions.map((option, index) => {
                    return (
                      <CustomRadio
                        key={index}
                        value={option.title}
                        Icon={withIcons ? option.icon : null}
                        iconColor={option.iconColor}
                        isexpired={option.isExpired!}
                        isDisabled={option.isExpired}
                      >
                        <div className="flex flex-col w-full">
                          <p className="text-small">{option.title}</p>
                          <div className="flex gap-2 items-center">
                            <p className="text-tiny text-default-400">
                              {option.description}
                            </p>
                            {option.isExpired && (
                              <Chip color="danger" radius="full" size="sm">
                                Expired
                              </Chip>
                            )}
                          </div>
                        </div>
                      </CustomRadio>
                    );
                  })}
                </RadioGroup>
              </ScrollShadow>
              <div className="flex justify-between w-full gap-4">
                <Button
                  variant={cancelbtnVariant}
                  color={cancelBtnColor}
                  fullWidth
                  onPress={() => {
                    setRadioValue("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant={continuebtnVariant}
                  color={continuebtnColor}
                  fullWidth
                  onPress={() => {
                    setRadioValue("");
                  }}
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
import { Button, Card, CardBody, Chip, Radio, RadioGroup } from "@nextui-org/react";
import { RadioOptions } from "./data";

const CustomRadio = (props) => {
  const { children, Icon, iconColor, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: "group relative tap-highlight-transparent inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg !border-medium border-default-100 data-[selected=true]:border-primary",
      }}
    >
      <div className="w-full flex flex-row items-center gap-4">
        {Icon && (
          <div className={\`flex-none text-\${iconColor}\`}>
            <Icon size={30} />
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};

export default function App() {
  return (
    <Card className="w-full max-w-md">
      <CardBody className="flex flex-col items-center gap-2">
        <div className="flex flex-col w-full">
          <h4 className="text-large font-medium">${cardHeading}</h4>
          <p className="text-tiny text-default-400">${cardDescription}</p>
        </div>
        <RadioGroup className="w-full" description="Selected payment method can be changed at any time.">
          {RadioOptions.map((option, index) => {
            return (
              <CustomRadio key={index} value={option.title} Icon={${
                withIcons ? "option.icon" : `null`
              }} iconColor={option.iconColor} isDisabled={option.isExpired}>
                <div className="flex flex-col w-full">
                  <p className="text-small">{option.title}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-tiny text-default-400">
                      {option.description}
                    </p>
                    {option.isExpired && (
                      <Chip color="danger" radius="full" size="sm">
                        Expired
                      </Chip>
                    )}
                  </div>
                </div>
              </CustomRadio>
            );
          })}
        </RadioGroup>
        <div className="flex justify-between w-full gap-4">
          <Button variant="${cancelbtnVariant}" color="${cancelBtnColor}" fullWidth>Cancel</Button>
          <Button variant="${continuebtnVariant}" color="${continuebtnColor}" fullWidth>Continue</Button>
        </div>
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `import { BiLogoVisa } from "react-icons/bi";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";

export const RadioOptions = [
  {
    title: "Visa ending in 1234",
    description: "Expires on 02/2025",
    icon: BiLogoVisa,
    iconColor: "primary",
  },
  {
    title: "Visa ending in 4229",
    description: "Expires on 12/2024",
    icon: BiLogoVisa,
    iconColor: "primary",
  },
  {
    title: "MasterCard ending in 8888",
    description: "Expires on 02/2025",
    icon: RiMastercardLine,
    iconColor: "warning",
  },
  {
    title: "MasterCard ending in 6745",
    description: "Expires on 01/2023",
    icon: RiMastercardLine,
    iconColor: "warning",
    isExpired: true,
  },
  {
    title: "PayPal",
    description: "Select this option to pay with PayPal",
    icon: FaCcPaypal,
    iconColor: "default",
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
      sandBoxLink="https://codesandbox.io/p/devbox/payment-method-2wqz45?file=%2FApp.jsx"
    />
  );
}

export default PaymentMethodCard;
