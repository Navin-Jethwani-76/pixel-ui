"use client";
import React, { useState } from "react";
import {
    Button,
    ButtonProps,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Input,
    InputProps,
    Select,
    SelectItem,
} from "@nextui-org/react";
import {
    ViewProps,
    btnColorOptions,
    btnVariantOptions,
    inputVariantOptions,
} from "@/app/components";
import UiComponent from "@/components/common/ui-component";

function FieldsetCard() {
    const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
    const [maxLength, setmaxLength] = useState(50);
    const [orgName, setOrgName] = useState("");
    const [inputVariant, setInputVariant] =
        useState<InputProps["variant"]>("bordered");
    const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("primary");
    const [btnVariant, setBtnVariant] = useState<ButtonProps["variant"]>("solid");

    const PreviewProps = () => {
        return (
            <>
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

                <Input
                    label="Max Length"
                    value={String(maxLength)}
                    onValueChange={(value) => {
                        setmaxLength(Number(value));
                    }}
                    variant="bordered"
                    type="number"
                />
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
                    defaultSelectedKeys={["primary"]}
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
                    className={`w-full ${maxWidth === "375px"
                            ? "max-w-xs"
                            : maxWidth === "768px"
                                ? "max-w-sm"
                                : "max-w-md"
                        }`}
                >
                    <CardBody className="flex flex-col gap-4 items-start w-full">
                        <div className="flex flex-col">
                            <h4 className="text-large">Organization Name</h4>
                            <p className="text-small text-default-500">
                                This is your organization visible name to the public.
                            </p>
                        </div>
                        <Input
                            label="Organization Name"
                            value={orgName}
                            onValueChange={(value) => {
                                setOrgName(value.slice(0, maxLength));
                            }}
                            variant={inputVariant}
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-row justify-between gap-4">
                        <p className="text-small text-default-400">
                            Max. {maxLength} characters.{" "}
                            <span className="text-default-500">
                                {orgName.length}/{maxLength}
                            </span>
                        </p>
                        <Button color={btnColor} variant={btnVariant} size="sm">
                            Save
                        </Button>
                    </CardFooter>
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
import { Button, Card, CardBody, CardFooter, Divider, Input } from "@nextui-org/react";

export default function App() {
  const [orgName, setOrgName] = useState("");
  const maxLength = ${maxLength};

  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
      <CardBody className="flex flex-col gap-4 items-start w-full">
        <div className="flex flex-col">
          <h4 className="text-large">Organization Name</h4>
          <p className="text-small text-default-500">
            This is your organization visible name to the public.
          </p>
        </div>
        <Input 
          label="Organization Name"
          value={orgName}
          variant="${inputVariant}"
          onValueChange={(value) => {
            setOrgName(value.slice(0, maxLength));
          }}
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-row justify-between gap-4">
        <p className="text-small text-default-400">
          Max. {maxLength} characters.{" "}
          <span className="text-default-500">{orgName.length}/{maxLength}</span>
        </p>
        <Button color="${btnColor}" variant="${btnVariant}" size="sm">Save</Button>
      </CardFooter>
    </Card>
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
            sandBoxLink="https://codesandbox.io/p/devbox/fieldset-card-rvpllp?file=%2FApp.jsx"
        />
    );
}

export default FieldsetCard;
