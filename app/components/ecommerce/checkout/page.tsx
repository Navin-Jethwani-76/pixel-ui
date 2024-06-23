"use client";
import React, { useState } from "react";
import {
  VisuallyHidden,
  RadioGroup,
  useRadio,
  SelectItem,
  Select,
  Button,
  ScrollShadow,
  Image,
  Link,
  Card,
  CardBody,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
  RadioProps,
  cn,
  Radio,
  Accordion,
  AccordionItem,
  Divider,
  Tooltip,
  Progress,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import { Products } from "@/app/components/ecommerce/product-list/data";
import {
  CheckoutOptions,
  CheckoutType,
} from "@/app/components/ecommerce/checkout";
import { RadioOptionType } from "@/app/components/cards";
import { inputFields } from "@/app/components/cards";
import { Product } from "@/app/components/ecommerce/product-list";
import { BiLogoVisa } from "react-icons/bi";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal, FaX, FaArrowLeft } from "react-icons/fa6";
import { IconType } from "react-icons";

interface CustomRadioProps extends RadioProps {
  Icon?: IconType | null;
  iconColor?: string;
  isexpired?: boolean;
}

const getClassName = (maxWidth: string) => {
  return maxWidth === "375px" ? "max-w-xs" : "w-[250px]";
};

const Checkout = () => {
  const [type, setType] = useState<CheckoutType["type"]>("Two Column");
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const baseImgUrl =
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes";

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["Two Column"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as CheckoutType["type"]);
          }}
        >
          {CheckoutOptions.map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      </>
    );
  };

  const BasicDetails = ({ isInColumn = false }: { isInColumn?: boolean }) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <span className="relative text-foreground-500">
          Shipping Information
        </span>
        {inputFields.slice(1, 2).map((field, index) => (
          <Input
            key={index}
            className={""}
            label={field.label}
            size="sm"
            variant={"bordered"}
            type={field.type}
            isRequired
          />
        ))}
        <div
          className={`flex ${
            maxWidth == "375px"
              ? "flex-col items-center gap-3"
              : "flex-wrap justify-between gap-2"
          }  w-full`}
        >
          {inputFields.slice(2, inputFields.length).map((field, index) => (
            <Input
              key={index}
              className={
                isInColumn
                  ? `${
                      maxWidth === "375px"
                        ? "w-full"
                        : maxWidth == "768px"
                        ? "w-[48%]"
                        : "w-[49%]"
                    }`
                  : getClassName(maxWidth)
              }
              label={field.label}
              inputMode={field?.inputMode}
              size="sm"
              variant={"bordered"}
              type={field.type}
              isRequired
            />
          ))}
        </div>
      </div>
    );
  };

  const AddressSelection = () => {
    const CustomRadio = (props: RadioProps) => {
      const {
        Component,
        children,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
      } = useRadio(props);

      return (
        <Component
          {...getBaseProps()}
          className={cn(
            "group inline-flex items-center justify-between flex-row-reverse tap-highlight-transparent",
            "max-w-[300px] cursor-pointer rounded-lg gap-4 p-1",
            "data-[selected=true]:border-primary"
          )}
        >
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <span {...getWrapperProps()}>
            <span {...getControlProps()} />
          </span>
          <div {...getLabelWrapperProps()}>
            {children && <span {...getLabelProps()}>{children}</span>}
            {description && (
              <span className="text-small text-foreground opacity-70">
                {description}
              </span>
            )}
          </div>
        </Component>
      );
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        <span className="relative text-foreground-500">Address type</span>
        <RadioGroup orientation="horizontal" name="address" defaultValue="Home">
          <CustomRadio description="All Day Delivery" value="Home">
            Home
          </CustomRadio>
          <CustomRadio description="Delivery Between 9AM - 6PM" value="Office">
            Office
          </CustomRadio>
        </RadioGroup>
      </div>
    );
  };

  const PaymentSelection = () => {
    const PaymentOptions: RadioOptionType[] = [
      {
        title: "1234 ****",
        description: "Exp. on 02/2025",
        icon: BiLogoVisa,
        iconColor: "primary",
      },
      {
        title: "8888 ****",
        description: "Exp. on 02/2025",
        icon: RiMastercardLine,
        iconColor: "warning",
      },
      {
        title: "PayPal",
        description: "Pay with PayPal",
        icon: FaCcPaypal,
        iconColor: "default",
      },
    ];

    const CustomRadio = (props: CustomRadioProps) => {
      const { children, Icon, iconColor, ...otherProps } = props;

      return (
        <Radio
          {...otherProps}
          classNames={{
            base: cn(
              "group relative tap-highlight-transparent inline-flex m-0 py-1 px-2 max-w-[200px] gap-4 items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg data-[selected=true]:border-primary"
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

    return (
      <div className="flex flex-col gap-2 w-full">
        <span className="relative text-foreground-500">Payment Method</span>
        <div>
          <RadioGroup orientation="horizontal" defaultValue="1234 ****">
            {PaymentOptions.map((option, index) => {
              return (
                <CustomRadio
                  key={index}
                  value={option.title}
                  Icon={option.icon}
                  iconColor={option.iconColor}
                >
                  <div className="flex flex-col w-full">
                    <p className="text-small">{option.title}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-tiny text-default-400">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </CustomRadio>
              );
            })}
          </RadioGroup>
        </div>
      </div>
    );
  };

  const CardInputs = () => {
    return (
      <Accordion className="p-0">
        <AccordionItem
          classNames={{
            title: "text-medium text-foreground-500",
          }}
          title="Add a new payment method"
          key={"new-payment"}
        >
          <div
            className={`flex ${
              maxWidth == "375px"
                ? "flex-col items-center"
                : "flex-row justify-between"
            } gap-2 w-full`}
          >
            <Input
              label="Cardholder name"
              size="sm"
              className={
                maxWidth == "375px" ? "w-full" : "w-full max-w-[220px]"
              }
              variant="bordered"
              autoComplete="cc-name"
            />
            <div className="flex flex-col w-full gap-2">
              <Input
                label="Card Number"
                size="sm"
                className={"w-full"}
                variant="bordered"
                autoComplete="cc-number"
                minLength={0}
                maxLength={16}
                type="tel"
                inputMode="numeric"
              />
              <div className="flex gap-4 justify-between">
                <div className="flex justify-center items-center gap-1 h-full">
                  <Input
                    placeholder="MM"
                    className="max-w-[55px]"
                    classNames={{
                      base: "h-full",
                      inputWrapper: "h-full",
                    }}
                    size="sm"
                    type="tel"
                    inputMode="numeric"
                    min={0}
                    max={12}
                    maxLength={2}
                    variant="bordered"
                    autoComplete="cc-exp-month"
                  />
                  <span className="mx-1 text-default-300">/</span>
                  <Input
                    placeholder="YY"
                    className="max-w-[50px]"
                    classNames={{
                      base: "h-full",
                      inputWrapper: "h-full",
                    }}
                    size="sm"
                    type="tel"
                    inputMode="numeric"
                    maxLength={2}
                    variant="bordered"
                    autoComplete="cc-exp-year"
                  />
                </div>
                <Input
                  placeholder="CVV"
                  className="max-w-[60px]"
                  classNames={{
                    base: "h-full",
                    inputWrapper: "h-full",
                  }}
                  size="sm"
                  type="tel"
                  inputMode="numeric"
                  min={0}
                  max={999}
                  minLength={0}
                  maxLength={3}
                  variant="bordered"
                  autoComplete="cc-csc"
                />
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    );
  };

  const BasicCheckout = ({ isInColumn = false }: { isInColumn?: boolean }) => {
    const InnerContent = (
      <div className="w-full max-w-lg">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Shopping Cart</h1>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <form className={"flex flex-col gap-4 py-2"}>
          <BasicDetails isInColumn={isInColumn} />
          <AddressSelection />
          <PaymentSelection />
          <CardInputs />
          {!isInColumn && (
            <Button className="bg-foreground text-background">
              Place Order
            </Button>
          )}
        </form>
      </div>
    );

    return (
      <>
        {isInColumn && maxWidth === "375px" ? (
          <div className="flex w-full justify-center p-2">{InnerContent}</div>
        ) : (
          <ScrollShadow
            className={`flex w-full max-h-[670px] justify-center ${
              isInColumn ? "" : "p-2"
            }`}
            size={0}
            hideScrollBar
          >
            {InnerContent}
          </ScrollShadow>
        )}
      </>
    );
  };

  const ProductListItem = ({
    index,
    product,
  }: {
    product: Product;
    index: number;
  }) => {
    const ProductInfo = ({
      text,
      value,
      isColor,
    }: {
      text: string | number;
      value: string | number | undefined;
      isColor?: boolean;
    }) => {
      return (
        <p>
          <span className="text-small text-default-500">{text}</span>
          <span
            className={`text-small font-medium ${
              isColor ? "capitalize" : ""
            } text-default-700`}
          >
            {value}
          </span>
        </p>
      );
    };

    return (
      <li className="flex justify-between w-full gap-x-4 border-divider">
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
          <Image
            alt={product.title}
            src={`${baseImgUrl}/${index + 1}.png`}
            className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-125"
            removeWrapper
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-1">
          <h4 className="text-small">
            <Link href="#" color="foreground" underline="hover">
              {product.title}
            </Link>
          </h4>
          <div className="flex flex-col items-start">
            <ProductInfo text="Color: " value={product.color} isColor />
            <ProductInfo text="Size: " value={product.size} />
            <div className="flex items-center gap-2">
              <span className="text-small font-semibold text-default-700">
                ${product.price}
              </span>
              <span className="text-small text-default-500">x 1</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Tooltip content="Remove">
            <Button
              variant="bordered"
              className="rounded-full"
              size="sm"
              isIconOnly
            >
              <FaX />
            </Button>
          </Tooltip>
        </div>
      </li>
    );
  };

  const calculateTotal = () => {
    const selectedProducts = Products.slice(0, 3);

    const subtotal = selectedProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );

    const discount = parseFloat((subtotal * 0.1).toFixed(2));

    const tax = parseFloat((subtotal * 0.15).toFixed(2));

    const total = parseFloat((subtotal - discount + tax).toFixed(2));

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      discount,
      tax,
      total,
    };
  };

  const Review = () => {
    return (
      <>
        <ul className="flex flex-col gap-4 items-center justify-center">
          {Products.slice(0, 3).map((product, index) => {
            return (
              <ProductListItem key={index} index={index} product={product} />
            );
          })}
        </ul>
        <div>
          <form className="flex items-end gap-2">
            <Input
              placeholder="Enter coupon code"
              color="primary"
              variant="bordered"
              classNames={{
                inputWrapper: "bg-background",
              }}
              className="rounded-small"
            />
            <Button variant="bordered" className="rounded-small">
              Apply
            </Button>
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <Summary text="Subtotal" value={calculateTotal().subtotal} />
          <Summary text="Delivery" value={0} />
          <Summary text="Tax" value={calculateTotal().tax} />
          <Summary
            text="Discount"
            value={calculateTotal().discount}
            isDiscount={true}
          />
          <Divider />
          <Summary text="Total" value={calculateTotal().total} />
        </div>
      </>
    );
  };

  const Summary = ({
    text,
    value,
    isDiscount,
  }: {
    text: string;
    value: number;
    isDiscount?: boolean;
  }) => {
    return (
      <div className="flex justify-between">
        <p className="text-small text-default-500">{text}</p>
        <p
          className={`text-small font-medium ${
            isDiscount ? `text-success` : "text-default-700"
          }`}
        >
          {isDiscount ? `- $${value}` : `$${value}`}
        </p>
      </div>
    );
  };

  const TwoColumnCheckout = () => {
    return (
      <>
        <ScrollShadow
          className={`flex ${
            maxWidth === "375px" ? "flex-col" : "flex-row"
          } max-h-[670px] gap-4`}
          hideScrollBar
          size={0}
        >
          <BasicCheckout isInColumn={true} />

          <div className="w-full max-w-xs">
            <Card className="h-full">
              <CardBody className="rounded-medium px-0">
                <ScrollShadow className="w-full max-w-xs p-2" hideScrollBar>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-medium text-default-500">
                        Your Order
                      </h2>
                      <Divider />
                    </div>
                    <Review />
                    <Button className="bg-foreground text-background">
                      Place Order
                    </Button>
                  </div>
                </ScrollShadow>
              </CardBody>
            </Card>
          </div>
        </ScrollShadow>
      </>
    );
  };

  const MultiStepCheckout = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
      {
        label: "Review",
        component: (
          <>
            <h1 className="text-2xl font-medium">Review your order</h1>
            <Review />
          </>
        ),
      },
      {
        label: "Delivery",
        component: (
          <>
            <h1 className="text-2xl font-medium">
              Where should we send your order?
            </h1>
            <BasicDetails />
          </>
        ),
      },
      {
        label: "Payment",
        component: (
          <>
            <h1 className="text-2xl font-medium">How would you like to pay?</h1>
            <div className="flex flex-col gap-2">
              <PaymentSelection />
              <CardInputs />
            </div>
          </>
        ),
      },
    ];

    const currentStepComponent = steps[currentStep - 1].component;
    const nextStepLabel =
      currentStep < steps.length
        ? `Continue to ${steps[currentStep].label}`
        : "Place Order";

    return (
      <div className="w-full max-w-lg h-full flex flex-col gap-4">
        <div className="flex w-fit h-fit justify-start items-center">
          <Button
            className={`rounded-full text-default-700`}
            variant="flat"
            isDisabled={currentStep === 1}
            onPress={() => setCurrentStep(currentStep - 1)}
            startContent={<FaArrowLeft className="text-default-700" />}
          >
            Go Back
          </Button>
        </div>
        <ScrollShadow
          className={`flex flex-col h-full max-h-[500px] py-2 gap-4`}
          hideScrollBar
          size={10}
        >
          {currentStepComponent}
        </ScrollShadow>
        <Button
          fullWidth
          className="bg-foreground text-background"
          onPress={() => {
            if (currentStep < steps.length) setCurrentStep(currentStep + 1);
          }}
        >
          {nextStepLabel}
        </Button>
        <div className="flex flex-row gap-2 justify-between items-center">
          {steps.map((step, index) => (
            <Progress
              key={index}
              label={step.label}
              value={currentStep > index ? 100 : 0}
              className="max-w-xs"
              classNames={{
                indicator: "!bg-foreground",
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-col w-full h-full px-6 py-2 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {type === "Basic" ? (
            <BasicCheckout />
          ) : type === "Two Column" ? (
            <TwoColumnCheckout />
          ) : (
            <MultiStepCheckout />
          )}
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
      code: `${
        type == "Multi Step"
          ? `"use client";
import React, { useState } from "react";`
          : `import React from "react";`
      }
${
  type == "Basic"
    ? `import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";`
    : type == "Two Column"
    ? `import { Breadcrumbs, BreadcrumbItem, Button, Card, CardBody, Divider } from "@nextui-org/react";`
    : `import { Button, Progress, ScrollShadow } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa6";`
}
import { Shipping } from "./Shipping";
import { Address } from "./Address";
import { PaymentSelection } from "./Payment";
import { Review } from "./Review";

export default function App() {
  ${
    type == "Multi Step"
      ? `const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      label: "Review",
      component: (
        <>
          <h1 className="text-2xl font-medium">Review your order</h1>
          <Review />
        </>
      ),
    },
    {
      label: "Delivery",
      component: (
        <>
          <h1 className="text-2xl font-medium">Where should we send your order?</h1>
          <div className="flex flex-col gap-2">
            <Shipping />
            <Address />
          </div>
        </>
      ),
    },
    {
      label: "Payment",
      component: (
        <>
          <h1 className="text-2xl font-medium">How would you like to pay?</h1>
          <PaymentSelection />
        </>
      ),
    },
  ];

  const currentStepComponent = steps[currentStep - 1].component;
  const nextStepLabel = currentStep < steps.length ? \`Continue to \${steps[currentStep].label}\` : "Place Order";
  `
      : ``
  }
  return (
    ${
      type === "Basic"
        ? `<div className="flex w-full justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Shopping Cart</h1>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <form className={"flex flex-col gap-4 py-8"}>
          <Shipping />
          <Address />
          <PaymentSelection />
          <Button className="bg-foreground text-background" type="submit">Place Order</Button>
        </form>
      </div>
    </div>`
        : type === "Two Column"
        ? `<div className="flex flex-col sm:flex-row py-8 gap-4">
      <div className="w-full max-w-lg flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Shopping Cart</h1>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <form className="flex flex-col gap-4">
          <Shipping />
          <Address />
          <PaymentSelection />
        </form>
      </div>
      <Card className="h-full w-full sm:max-w-xs">
        <CardBody className="flex flex-col gap-4 rounded-medium">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-default-500">Your Order</h2>
            <Divider />
          </div>
          <Review />
          <Button className="bg-foreground text-background" type="submit">Place Order</Button>
        </CardBody>
      </Card>
    </div>`
        : `<div className="w-full max-w-xl h-full flex flex-col px-4 gap-4">
      <div className="flex w-fit h-fit justify-start items-center">
        <Button
          className="rounded-full text-default-700"
          variant="flat"
          isDisabled={currentStep === 1}
          onPress={() => setCurrentStep(currentStep - 1)}
          startContent={<FaArrowLeft className="text-default-700" />}
        >
          Go Back
        </Button>
      </div>
      {currentStepComponent}
      <Button
        fullWidth
        className="bg-foreground text-background"
        onPress={() => {
          if (currentStep < steps.length) setCurrentStep(currentStep + 1);
        }}
      >
        {nextStepLabel}
      </Button>
      <div className="flex flex-row gap-2 justify-between items-center">
        {steps.map((step, index) => (
          <Progress
            key={index}
            label={step.label}
            value={currentStep > index ? 100 : 0}
            className="max-w-xs"
            classNames={{
              indicator: "!bg-foreground",
            }}
          />
        ))}
      </div>
  </div>`
    }
  );
}`,
    },
    {
      fileName: "Shipping.jsx",
      code: `"use client";
import React from "react";
import { Input } from "@nextui-org/react";

const inputFields = [
  { label: "Email", type: "email" },
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Phone Number", type: "tel" },
  { label: "Address", type: "text" },
  { label: "State", type: "text" },
  { label: "Zip Code", type: "number" },
  { label: "Country", type: "text" },
];

export function Shipping() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="relative text-foreground-500">Shipping Information</span>
      {inputFields.slice(1, 2).map((field, index) => (
        <Input 
          key={index}
          className="w-full"
          label={field.label}
          type={field.type}
          variant="bordered"
          size="sm"
          isRequired
        />
      ))}
      <div className="flex items-center gap-3 flex-wrap md:justify-between md:gap-2 w-full">
        {inputFields.slice(2, inputFields.length).map((field, index) => (
          <Input
            key={index}
            className="w-full md:w-[48%]"
            label={field.label}
            type={field.type}
            variant="bordered"
            size="sm"
            isRequired
          />
        ))}
      </div>
    </div>
  );
}`,
    },
    {
      fileName: "Address.jsx",
      code: `"use client";
import React from "react";
import { VisuallyHidden, RadioGroup, useRadio, cn } from "@nextui-org/react";

export function Address() {
  const CustomRadio = (props) => {
    const { Component, children, description, getBaseProps, getWrapperProps, getInputProps, getLabelProps, getLabelWrapperProps, getControlProps } = useRadio(props);

    return (
      <Component
        {...getBaseProps()}
        className={cn(
          "group inline-flex items-center justify-between flex-row-reverse tap-highlight-transparent",
          "max-w-[300px] cursor-pointer rounded-lg gap-4 p-1",
          "data-[selected=true]:border-primary"
        )}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
          {description && (
            <span className="text-small text-foreground opacity-70">
              {description}
            </span>
          )}
        </div>
      </Component>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="relative text-foreground-500">Address type</span>
      <RadioGroup orientation="horizontal" name="addresstype" defaultValue="Home">
        <CustomRadio description="All Day Delivery" value="Home">Home</CustomRadio>
        <CustomRadio description="Delivery Between 9AM - 6PM" value="Office">Office</CustomRadio>
      </RadioGroup>
    </div>
  );
}`,
    },
    {
      fileName: "Payment.jsx",
      code: `"use client";
import React from "react";
import { Input, Radio, RadioGroup, Accordion, AccordionItem } from "@nextui-org/react";
import { BiLogoVisa } from "react-icons/bi";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";

const PaymentOptions = [
  { title: "1234 ****", description: "Exp. on 02/2025", icon: BiLogoVisa, iconColor: "primary" },
  { title: "8888 ****", description: "Exp. on 02/2025", icon: RiMastercardLine, iconColor: "warning" },
  { title: "PayPal", description: "Pay with PayPal", icon: FaCcPaypal, iconColor: "default" },
];

const CustomRadio = (props) => {
  const { children, Icon, iconColor, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: "group relative tap-highlight-transparent inline-flex m-0 py-1 px-2 max-w-[200px] gap-4 items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg data-[selected=true]:border-primary",
      }}
    >
      <div className="w-full flex flex-row items-center gap-4">
        {Icon && (
          <div className={\`flex-none text-\${iconColor}\`}><Icon size={30} /></div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};

const CardInputs = () => {
  return (
    <Accordion className="p-0">
      <AccordionItem
        key="new-payment"
        title="Add a new payment method"
        classNames={{
          title: "text-medium text-foreground-500",
        }}
      >
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start gap-2 w-full">
          <Input
            label="Cardholder name"
            size="sm"
            className="w-full sm:max-w-[220px]"
            variant="bordered"
            autoComplete="cc-name"
          />
          <div className="flex flex-col w-full gap-2">
            <Input
              label="Card Number"
              size="sm"
              className="w-full"
              variant="bordered"
              autoComplete="cc-number"
              minLength={0}
              maxLength={16}
              type="tel"
              inputMode="numeric"
            />
            <div className="flex gap-4 justify-between">
              <div className="flex justify-center items-center gap-1 h-full">
                <Input
                  placeholder="MM"
                  className="max-w-[55px]"
                  classNames={{
                    base: "h-full",
                    inputWrapper: "h-full",
                  }}
                  size="sm"
                  type="tel"
                  inputMode="numeric"
                  min={0}
                  max={12}
                  maxLength={2}
                  variant="bordered"
                  autoComplete="cc-exp-month"
                />
                <span className="mx-1 text-default-300">/</span>
                <Input
                  placeholder="YY"
                  className="max-w-[50px]"
                  classNames={{
                    base: "h-full",
                    inputWrapper: "h-full",
                  }}
                  size="sm"
                  type="tel"
                  inputMode="numeric"
                  maxLength={2}
                  variant="bordered"
                  autoComplete="cc-exp-year"
                />
              </div>
              <Input
                placeholder="CVV"
                className="max-w-[60px]"
                classNames={{
                  base: "h-full",
                  inputWrapper: "h-full",
                }}
                size="sm"
                type="tel"
                inputMode="numeric"
                min={0}
                max={999}
                minLength={0}
                maxLength={3}
                variant="bordered"
                autoComplete="cc-csc"
              />
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export const PaymentSelection = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="relative text-foreground-500">Payment Method</span>
      <RadioGroup orientation="horizontal" defaultValue={PaymentOptions[0].title}>
        {PaymentOptions.map((option, index) => {
          return (
            <CustomRadio key={index} value={option.title} Icon={option.icon} iconColor={option.iconColor}>
              <div className="flex flex-col w-full">
                <p className="text-small">{option.title}</p>
                <div className="flex gap-2 items-center">
                  <p className="text-tiny text-default-400">{option.description}</p>
                </div>
              </div>
            </CustomRadio>
          );
        })}
      </RadioGroup>
      <CardInputs />
    </div>
  );
};`,
    },
    {
      fileName: "Review.jsx",
      code: `import React from "react";
import { Input, Button, Divider, Tooltip, Link, Image, ScrollShadow } from "@nextui-org/react";
import { ProductsInCart } from "./data";
import { FaX } from "react-icons/fa6";

const calculateTotal = () => {
  const subtotal = ProductsInCart.reduce((acc, product) => acc + product.price * product.qty, 0);
  const discount = parseFloat((subtotal * 0.1).toFixed(2));    // 10%
  const tax = parseFloat((subtotal * 0.15).toFixed(2));    // 15%
  const total = parseFloat((subtotal - discount + tax).toFixed(2));

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    discount,
    tax,
    total,
  };
};

const Summary = ({ text, value, isDiscount }) => {
  return (
    <div className="flex justify-between">
      <p className="text-small text-default-500">{text}</p>
      <p className={\`text-small font-medium \${isDiscount ? "text-success" : "text-default-700"}\`}>
        {isDiscount ? \`- $\${value}\` : \`$\${value}\`}
      </p>
    </div>
  );
};

const ProductListItem = ({ product }) => {
  return (
    <li className="flex justify-between w-full gap-x-4 border-divider">
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
        <Image
          alt={product.title}
          src={product.imageUrl}
          removeWrapper
          className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-125"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-1">
        <h4 className="text-small">
          <Link href="#" color="foreground" underline="hover">{product.title}</Link>
        </h4>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <span className="text-small text-default-500">Color: </span>
            <span className="text-small font-medium capitalize text-default-700">{product.color}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-small text-default-500">Size: </span>
            <span className="text-small font-medium text-default-700">{product.size}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-small font-semibold text-default-700">{product.price}</span>
            <span className="text-small text-default-500">x {product.qty}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Tooltip content="Remove">
          <Button variant="bordered" className="rounded-full" size="sm" isIconOnly><FaX /></Button>
        </Tooltip>
      </div>
    </li>
  );
};

export function Review() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <ScrollShadow className="w-full h-full max-h-80 pe-2">
        <ul className="flex flex-col gap-4 items-center justify-center">
          {ProductsInCart.map((product, index) => (
            <ProductListItem key={index} index={index} product={product} />
          ))}
        </ul>
      </ScrollShadow>
      <form className="flex items-end gap-4">
        <Input
          placeholder="Enter coupon code"
          color="primary"
          variant="bordered"
          classNames={{
            inputWrapper: "bg-background",
          }}
          className="rounded-small"
        />
        <Button variant="bordered" className="rounded-small">Apply</Button>
      </form>
      <div className="flex flex-col gap-4">
        <Summary text="Subtotal" value={calculateTotal().subtotal} />
        <Summary text="Delivery" value={0} />
        <Summary text="Tax" value={calculateTotal().tax} />
        <Summary text="Discount" value={calculateTotal().discount} isDiscount={true} />
        <Divider />
        <Summary text="Total" value={calculateTotal().total} />
      </div>
    </div>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `export const ProductsInCart = [
  {
    title: "Training shoes",
    imageUrl: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/1.png",
    price: 49.99,
    color: "Black",
    size: 42,
    qty: 2
  },
  {
    title: "Sneakers",
    imageUrl: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/2.png",
    price: 29.99,
    color: "Red",
    size: 42,
    qty: 1
  },
  {
    title: "Running shoes",
    imageUrl: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/3.png",
    price: 39.99,
    color: "Yellow",
    size: 42,
    qty: 1
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
      sandBoxLink="https://codesandbox.io/p/devbox/checkout-cnyffg?file=%2FApp.jsx"
    />
  );
};

export default Checkout;
