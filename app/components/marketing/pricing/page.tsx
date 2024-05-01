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
  Divider,
  ScrollShadow,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@/lib/nextui";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
} from "@/app/components";
import UiComponent from "@/lib/ui";
import {
  PricingListItem,
  PricingOptionType,
  PricingType,
  PricingTypeOptions,
} from "@/app/components/marketing/pricing";
import { BiCheck } from "react-icons/bi";

const Pricing = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [type, setType] = useState<PricingType["type"]>("custom");
  const [withCardBg, setWithCardBg] = useState(true);
  const [withGradientBg, setWithGradientBg] = useState(false);
  const [highlightPro, setHighlightPro] = useState(true);
  const [featuredBtnColor, setFeaturedBtnColor] =
    useState<ButtonProps["color"]>("primary");
  const [featuredBtnVariant, setFeaturedBVariant] =
    useState<ButtonProps["variant"]>("solid");

  const [selected, setSelected] = useState<string[]>([]);
  const [pricingOption, setPricingOption] =
    useState<PricingOptionType["option"]>("yearly");

  useEffect(() => {
    const newSelected = [
      withCardBg && "withCardBg",
      withGradientBg && "withGradientBg",
      highlightPro && "highlightPro",
    ].filter(Boolean) as string[];
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithCardBg(selected.includes("withCardBg"));
    setWithGradientBg(selected.includes("withGradientBg"));
    setHighlightPro(selected.includes("highlightPro"));
  }, [selected]);

  useEffect(() => {
    if (withGradientBg) {
      setSelected(["withGradientBg"]);
    }
  }, [withGradientBg]);

  const PricingList: PricingListItem[] = [
    {
      heading: "Free",
      description: "For starters and hobbyists that want to try out.",
      pricing: "0",
      QuarterlyPricing: "0",
      Button: (
        <Button variant="flat" color={withGradientBg ? "secondary" : undefined}>
          Continue with Free
        </Button>
      ),
      list: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
    },
    {
      heading: "Pro",
      description: "For small teams that have less that 10 members.",
      headingEndContent: (
        <Chip
          size="sm"
          color={withGradientBg ? "secondary" : featuredBtnColor}
          variant="flat"
          classNames={{
            content: "font-medium",
          }}
        >
          Most Popular
        </Chip>
      ),
      pricing: "72",
      QuarterlyPricing: "24",
      Button: (
        <Button
          variant={featuredBtnVariant}
          color={withGradientBg ? "secondary" : featuredBtnColor}
        >
          Get started
        </Button>
      ),
      list: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
    },
    {
      heading: "Team",
      description: "For large teams that have more than 10 members.",
      pricing: "360",
      QuarterlyPricing: "120",
      Button: (
        <Button variant="flat" color={withGradientBg ? "secondary" : undefined}>
          Contact us
        </Button>
      ),
      list: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
    },
  ];

  const PricingTabsOptions: PricingOptionType[] = [
    {
      option: "yearly",
      titleContent: (
        <div className="flex flex-row justify-between items-center gap-1">
          <p>Yearly</p>
          <Chip
            size="sm"
            color={withGradientBg ? "secondary" : featuredBtnColor}
          >
            Save 25%
          </Chip>
        </div>
      ),
      TabItemclassName: "pe-1",
    },
    {
      option: "quarterly",
    },
  ];

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["custom"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as PricingType["type"]);
          }}
        >
          {PricingTypeOptions.map((option, index) => (
            <SelectItem key={option ?? index} value={option} textValue={option}>
              {option}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Featured Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["solid"]}
          className="max-w-xs"
          onChange={(e) => {
            setFeaturedBVariant(e.target.value as ButtonProps["variant"]);
          }}
          isDisabled={withGradientBg}
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
          label="Featured Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["primary"]}
          className="max-w-xs"
          onChange={(e) => {
            setFeaturedBtnColor(e.target.value as ButtonProps["color"]);
          }}
          isDisabled={withGradientBg}
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
          <Checkbox value="highlightPro" isDisabled={withGradientBg}>
            Highlight Pro Card
          </Checkbox>
          <Checkbox value="withCardBg" isDisabled={withGradientBg}>
            With Card Background
          </Checkbox>
          <Checkbox value="withGradientBg">With Gradiend Background</Checkbox>
        </CheckboxGroup>
      </>
    );
  };

  const PricingComponent = ({ item }: { item: PricingListItem }) => {
    const Basic = (
      <div className={`flex flex-col gap-4 h-full justify-between`}>
        <div className="flex flex-row gap-2 justify-between items-center">
          <p>{item.heading}</p>
          {item.headingEndContent}
        </div>
        <p className="flex items-baseline gap-1">
          <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
            ${pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
          </span>
          <span className="text-small font-medium text-default-400">
            {pricingOption == "yearly" ? "/per year" : "/per quarter"}
          </span>
        </p>
        <p className="text-default-400">{item.description}</p>
        {item.Button}
      </div>
    );

    const Custom = (
      <div className={`flex flex-col gap-4 h-full justify-between`}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 justify-between items-center">
            <p>{item.heading}</p>
            {item.headingEndContent}
          </div>
          <p className="text-default-400">{item.description}</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-8">
          <p className="flex items-baseline gap-1">
            <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
              $
              {pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
            </span>
            <span className="text-small font-medium text-default-400">
              {pricingOption == "yearly" ? "/per year" : "/per quarter"}
            </span>
          </p>
          <ul>
            {item.list?.map((listItem, index) => {
              return (
                <li key={index} className="flex flex-row gap-4">
                  <BiCheck
                    size={20}
                    className={`text-${
                      withGradientBg ? "secondary" : featuredBtnColor
                    }`}
                  />
                  <p className="text-default-500">{listItem}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {item.Button}
      </div>
    );

    return (
      <>
        {!withCardBg ? (
          <div
            className={`flex flex-col p-3 rounded-large ${
              withGradientBg
                ? `bg-gradient-to-r from-default-50 to-secondary-100 ${
                    item.heading == "Pro"
                      ? `border-medium border-secondary`
                      : ""
                  }`
                : highlightPro && item.heading == "Pro"
                ? `border-2 border-${featuredBtnColor} shadow-2xl shadow-${featuredBtnColor}/20`
                : ""
            } max-w-xs`}
          >
            {type === "custom" ? Custom : Basic}
          </div>
        ) : (
          <Card
            className={`${
              highlightPro && item.heading == "Pro"
                ? `border-2 border-${featuredBtnColor} shadow-2xl shadow-${featuredBtnColor}/20`
                : ""
            } max-w-xs`}
          >
            <CardBody className="flex flex-col p-3 justify-center">
              {type === "custom" ? Custom : Basic}
            </CardBody>
          </Card>
        )}
      </>
    );
  };

  const CardInnerContent = () => {
    return (
      <div
        className={`flex w-full h-full rounded-large items-center border-1 border-default-600/10 gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <div
          className={`flex w-full h-full max-h-[690px] flex-col justify-center items-center gap-4 p-4`}
        >
          <div className="flex max-w-xl flex-col text-center">
            <h2
              className={`font-medium text-${
                withGradientBg ? "secondary" : featuredBtnColor
              }`}
            >
              Pricing
            </h2>
            <h1 className="text-4xl font-medium tracking-tight">
              Get unlimited access.
            </h1>
            <h2 className="text-large text-default-500">
              Discover the ideal plan, beginning at under $2 per week.
            </h2>
          </div>
          <Tabs
            aria-label="Select Yearly or Monthly Pricing"
            radius="full"
            selectedKey={pricingOption}
            onSelectionChange={(value) => {
              setPricingOption(value as PricingOptionType["option"]);
            }}
          >
            {PricingTabsOptions.map((option) => {
              return (
                <Tab
                  key={option.option}
                  title={
                    option.titleContent ?? (
                      <p className="capitalize">{option.option}</p>
                    )
                  }
                  className={option.TabItemclassName}
                />
              );
            })}
          </Tabs>
          <ScrollShadow hideScrollBar size={0}>
            <div
              className={`flex w-full ${
                maxWidth === "100%"
                  ? "flex-row justify-center"
                  : "flex-wrap justify-center items-center"
              } gap-4`}
            >
              {PricingList.map((item, index) => {
                return <PricingComponent key={index} item={item} />;
              })}
            </div>
          </ScrollShadow>
        </div>
      </div>
    );
  };

  const PricingListCode = `import React from "react";
import { Button, Chip } from "@nextui-org/react";

export const PricingList = [
  {
    heading: "Free",
    description: "For starters and hobbyists that want to try out.",
    pricing: "0",
    QuarterlyPricing: "0",
    Button: (
      <Button variant="flat" color="${
        withGradientBg ? "secondary" : "default"
      }">Continue with Free</Button>
    ),
    list: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
  },
  {
    heading: "Pro",
    description: "For small teams that have less that 10 members.",
    headingEndContent: (
      <Chip
        size="sm"
        color="${withGradientBg ? "secondary" : featuredBtnColor}"
        variant="flat"
        classNames={{
          content: "font-medium",
        }}
      >
        Most Popular
      </Chip>
    ),
    pricing: "72",
    QuarterlyPricing: "24",
    Button: (
      <Button variant="${featuredBtnVariant}" color="${
    withGradientBg ? "secondary" : featuredBtnColor
  }">Get started</Button>
    ),
    list: ["20 users included", "10 GB of storage", "Help center access", "Priority email support"],
  },
  {
    heading: "Team",
    description: "For large teams that have more than 10 members.",
    pricing: "360",
    QuarterlyPricing: "120",
    Button: (
      <Button variant="flat" color="${
        withGradientBg ? "secondary" : "default"
      }">Contact us</Button>
    ),
    list: ["50 users included", "30 GB of storage", "Help center access", "Phone & email support"],
  },
];`;

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `// make sure to copy data.js if you changed any props 
"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Chip, Divider, Tab, Tabs } from "@nextui-org/react";
import { BiCheck } from "react-icons/bi";
import { PricingList } from "./data";

const PricingTabsOptions = [
  {
    title: "yearly",
    titleContent: (
      <div className="flex flex-row justify-between items-center gap-1">
        <p>Yearly</p>
        <Chip size="sm" color="${
          withGradientBg ? "secondary" : featuredBtnColor
        }">Save 25%</Chip>
      </div>
    ),
    TabItemclassName: "pe-1",
  },
  {
    title: "quarterly",
  },
];

const PricingComponent = ({ item, pricingOption }) =>{
  ${
    withCardBg
      ? `let cardClassNames = "max-w-xs";
  ${
    highlightPro
      ? `if (item.heading === "Pro") {
    cardClassNames += " border-2 border-${featuredBtnColor} shadow-2xl shadow-${featuredBtnColor}/20";
  }
`
      : ""
  }
  return <>
    <Card className={cardClassNames}>
      <CardBody className="flex flex-col p-3 justify-center">
        ${
          type === "custom"
            ? `<div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between items-center">
              <p>{item.heading}</p>
              {item.headingEndContent}
            </div>
            <p className="text-default-400">{item.description}</p>
          </div>
          <Divider />
          <div className="flex flex-col gap-8">
            <p className="flex items-baseline gap-1">
              <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                \${pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
              </span>
              <span className="text-small font-medium text-default-400">
                {pricingOption == "yearly" ? "/per year" : "/per quarter"}
              </span>
            </p>
            <ul>
              {item.list?.map((listItem, index) => {
                return (
                  <li key={index} className="flex flex-row gap-4">
                    <BiCheck size={20} className="text-${
                      withGradientBg ? "secondary" : featuredBtnColor
                    }"
                    />
                    <p className="text-default-500">{listItem}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {item.Button}
        </div>
            `
            : `<div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-row gap-2 justify-between items-center">
            <p>{item.heading}</p>
            {item.headingEndContent}
          </div>
          <p className="flex items-baseline gap-1">
            <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
              \${pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
            </span>
            <span className="text-small font-medium text-default-400">
              {pricingOption == "yearly" ? "/per year" : "/per quarter"}
            </span>
          </p>
          <p className="text-default-400">{item.description}</p>
          {item.Button}
        </div>`
        }
      </CardBody>
    </Card>
  </>`
      : `let className = "flex flex-col p-3 rounded-large max-w-xs";
  ${
    highlightPro
      ? `if (item.heading === "Pro") {
        className += " border-2 border-${featuredBtnColor} shadow-2xl shadow-${featuredBtnColor}/20";
  }`
      : ""
  }
  ${
    withGradientBg
      ? `className += " bg-gradient-to-r from-default-50 to-secondary-100"
  if (item.heading === "Pro") {
    className += " border-medium border-secondary"
  }
  `
      : ""
  }
  return (
    <div className={className}>
      ${
        type === "custom"
          ? `<div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between items-center">
              <p>{item.heading}</p>
              {item.headingEndContent}
            </div>
            <p className="text-default-400">{item.description}</p>
          </div>
          <Divider />
          <div className="flex flex-col gap-8">
            <p className="flex items-baseline gap-1">
              <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                \${pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
              </span>
              <span className="text-small font-medium text-default-400">
                {pricingOption == "yearly" ? "/per year" : "/per quarter"}
              </span>
            </p>
            <ul>
              {item.list?.map((listItem, index) => {
                return (
                  <li key={index} className="flex flex-row gap-4">
                    <BiCheck size={20} className="text-${
                      withGradientBg ? "secondary" : featuredBtnColor
                    }" />
                    <p className="text-default-500">{listItem}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {item.Button}
        </div>`
          : `<div className="flex flex-col gap-4 h-full justify-between">
        <div className="flex flex-row gap-2 justify-between items-center">
          <p>{item.heading}</p>
          {item.headingEndContent}
        </div>
        <p className="flex items-baseline gap-1">
          <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
            \${pricingOption == "yearly" ? item.pricing : item.QuarterlyPricing}
          </span>
          <span className="text-small font-medium text-default-400">
            {pricingOption == "yearly" ? "/per year" : "/per quarter"}
          </span>
        </p>
        <p className="text-default-400">{item.description}</p>
        {item.Button}
      </div>`
      }
    </div>
  );
`
  }
}

const App = () => {
  const [pricingOption, setPricingOption] = useState("yearly");

  return (
    <div className="flex flex-col w-full h-full items-center gap-4 p-2 sm:p-4">
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="font-medium text-${
          withGradientBg ? "secondary" : featuredBtnColor
        }">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">Get unlimited access.</h1>
        <h2 className="text-large text-default-500">Discover the ideal plan, beginning at under $2 per week.</h2>
      </div>
      <Tabs
        aria-label="Select Yearly or Monthly Pricing"
        radius="full"
        selectedKey={pricingOption}
        onSelectionChange={setPricingOption}
      >
        {PricingTabsOptions.map((option) => (
          <Tab
            key={option.title}
            className={option.TabItemclassName}
            title={option.titleContent ?? (
                <p className="capitalize">{option.title}</p>
              )
            }
          />
        ))}
      </Tabs>
      <div className="flex flex-col sm:flex-row gap-4">
        {PricingList.map((item, index) => (
          <PricingComponent key={index} item={item} pricingOption={pricingOption} />
        ))}
      </div>
    </div>
  );
};

export default App;`,
    },
    {
      fileName: "data.js",
      code: PricingListCode,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/pricing-7pdcxv?file=%2FApp.jsx"
    />
  );
};

export default Pricing;
