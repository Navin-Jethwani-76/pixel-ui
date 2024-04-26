"use client";
import React, { FormEvent, useState } from "react";
import {
    Button,
    ButtonProps,
    Card,
    CardBody,
    Divider,
    Input,
    InputProps,
    Link,
    Select,
    SelectItem,
} from "@/lib/nextui";
import {
    ViewProps,
    btnColorOptions,
    btnVariantOptions,
    inputColorOptions,
    inputVariantOptions,
} from "@/app/components";
import UiComponent from "@/components/common/ui-component";
import { FaCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const DiscountCard = () => {
    const [selected, setSelected] = useState(false);
    const [headerText, setHeaderText] = useState("Get up to");
    const [cardText, setCardText] = useState("Four Months Free");
    const [headerButtonText, setHeaderButtonText] = useState("Apply");
    const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
    const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("default");
    const [btnVariant, setBtnVariant] =
        useState<ButtonProps["variant"]>("bordered");
    const [inputVariant, setInputVariant] =
        useState<InputProps["variant"]>("bordered");
    const [inputColor, setInputColor] = useState<InputProps["color"]>("default");

    const NotSelectedList = () => {
        return (
            <>
                <li className="flex flex-row items-center gap-2">
                    <FaCheck />
                    New customer
                </li>
                <li className="flex flex-row items-center gap-2">
                    <FaCheck />
                    Fewer than 10 employees
                </li>
                <li className="flex flex-row items-center gap-2">
                    <FaCheck />
                    Affiliated with partner
                </li>
            </>
        );
    };

    const SelectedList = () => {
        return (
            <>
                <Link href="#" color="foreground">
                    Where do I find my affiliate code?
                </Link>
                <Link href="#" color="foreground">
                    How do I become an affiliate?
                </Link>
                <Link href="#" color="foreground">
                    What are the benefits of being an affiliate?
                </Link>
                <Link href="#" color="foreground">
                    Contact Acme Support
                </Link>
            </>
        );
    };

    const PreviewProps = () => {
        return (
            <>
                <Input
                    label="Header"
                    value={headerText}
                    onValueChange={setHeaderText}
                    placeholder="Enter a header..."
                    variant="bordered"
                />
                <Input
                    label="Card Text"
                    value={cardText}
                    onValueChange={setCardText}
                    placeholder="Enter a Text..."
                    variant="bordered"
                />
                <Input
                    label="Button Text"
                    value={headerButtonText}
                    onValueChange={setHeaderButtonText}
                    placeholder="Enter a Text..."
                    variant="bordered"
                />
                <Select
                    label="Button Variant"
                    variant="bordered"
                    placeholder="Select a variant"
                    disallowEmptySelection
                    defaultSelectedKeys={["bordered"]}
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
                    defaultSelectedKeys={["default"]}
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
                    label="Input Color"
                    variant="bordered"
                    placeholder="Select a color"
                    disallowEmptySelection
                    defaultSelectedKeys={["default"]}
                    className="max-w-xs"
                    onChange={(e) => {
                        setInputColor(e.target.value as InputProps["color"]);
                    }}
                >
                    {inputColorOptions.map((color, index) => (
                        <SelectItem key={color ?? index} value={color} textValue={color}>
                            {color}
                        </SelectItem>
                    ))}
                </Select>
            </>
        );
    };

    const CardInnerContent = () => {
        const handleSubmit = (event: FormEvent) => {
            event.preventDefault();
        };
        return (
            <div
                className={`flex w-full h-full rounded-md justify-${"center"} border-1 border-default-600/10 items-center gap-4`}
                style={{
                    maxWidth: maxWidth,
                }}
            >
                <Card className={`w-full max-w-xs max-h-[600px]`}>
                    <CardBody
                        className={`text-left subpixel-antialiased bg-gradient-to-br from-content1 to-default-100/50 ${selected ? "animate-flip-up" : "animate-flip-down"
                            }`}
                    >
                        <div
                            className={`flex justify-${selected ? "end" : "between"
                                } gap-4 w-full`}
                        >
                            <>
                                {!selected && headerText.length > 0 ? (
                                    <p className="text-default-400">{headerText}</p>
                                ) : (
                                    <p></p>
                                )}
                                <Button
                                    onPress={() => {
                                        setSelected(!selected);
                                    }}
                                    variant={btnVariant}
                                    color={btnColor}
                                    isIconOnly={selected}
                                >
                                    {selected ? <IoCloseCircleOutline /> : headerButtonText}
                                </Button>
                            </>
                        </div>
                        <h2
                            className={`${!selected &&
                                "inline bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent dark:to-foreground-200"
                                }`}
                        >
                            {selected ? (
                                <form
                                    className="flex flex-col gap-4 w-full max-w-xs"
                                    onSubmit={handleSubmit}
                                >
                                    <Input
                                        placeholder="E.g. ACME123"
                                        label="Enter affiliate code"
                                        variant={inputVariant}
                                        labelPlacement="outside"
                                        color={inputColor}
                                        isRequired
                                    />
                                    <Button type="submit" variant={btnVariant} color={btnColor}>
                                        Submit
                                    </Button>
                                </form>
                            ) : (
                                <>{cardText}</>
                            )}
                        </h2>
                        <Divider className="my-4" />
                        <ul>
                            <>{selected ? <SelectedList /> : <NotSelectedList />}</>
                        </ul>
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
                code: `"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Divider, Input, Link } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const List1 = () => {
  return (
    <>
      <li className="flex flex-row items-center gap-2">
        <FaCheck />
        New customer
      </li>
      <li className="flex flex-row items-center gap-2">
        <FaCheck />
        Fewer than 10 employees
      </li>
      <li className="flex flex-row items-center gap-2">
        <FaCheck />
        Affiliated with partner
      </li>
    </>
  );
};

const List2 = () => {
  return (
    <>
      <Link href="#" color="foreground">
        Where do I find my affiliate code?
      </Link>
      <Link href="#" color="foreground">
        How do I become an affiliate?
      </Link>
      <Link href="#" color="foreground">
        What are the benefits of being an affiliate?
      </Link>
      <Link href="#" color="foreground">
        Contact Acme Support
      </Link>
    </>
  );
};

export default function App() {
  const [selected, setSelected] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Card className="w-full max-w-xs max-h-[600px]">
      <CardBody className={\`text-left subpixel-antialiased bg-gradient-to-br from-content1 to-default-100/50 \${selected ? "animate-flip-up" : "animate-flip-down"}\`}>
        <div className={\`flex \${selected ? "justify-end" : "justify-between"} gap-4 w-full\`}>
          <>
            {selected ? <p></p> :<p className="text-default-400">${headerText}</p>}
            <Button variant="${btnVariant}" color="${btnColor}" isIconOnly={selected}
              onPress={() => {
                setSelected(!selected);
              }}
            >
              {selected ? <IoCloseCircleOutline /> : "${headerButtonText}"}
            </Button>
          </>
        </div>
        {selected ? (
          <form className="flex flex-col gap-4 w-full max-w-xs" onSubmit={handleSubmit}>
            <Input
              placeholder="E.g. ACME123"
              label="Enter affiliate code"
              variant="${inputVariant}"
              labelPlacement="outside"
              color="${inputColor}"
              isRequired
            />
            <Button type="submit" variant="${btnVariant}" color="${btnColor}">
              Submit
            </Button>
          </form>
        ) : (
          <h2 className="inline bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent dark:to-foreground-200">
            ${cardText}
          </h2>
        )}
        <Divider className="my-4" />
        <ul>{selected ? <List2 /> : <List1 />}</ul>
      </CardBody>
    </Card>
    </>
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
            sandBoxLink="https://codesandbox.io/p/devbox/discount-card-gs6h9s?file=%2FApp.jsx"
        />
    );
};

export default DiscountCard;
