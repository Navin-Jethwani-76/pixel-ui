"use client";
import React, { useState } from "react";
import {
  Input,
  Card,
  CardBody,
  Slider,
  Accordion as NextUiAccordion,
  AccordionItem,
  Divider,
  tv,
  useCheckbox,
  Chip,
  VisuallyHidden,
  RadioGroup,
  RadioProps,
  useRadio,
  CheckboxGroup,
  Checkbox,
  SelectItem,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  ScrollShadow,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import { FaAngleDown, FaDollarSign, FaStar } from "react-icons/fa6";

const Categories = ["Sneakers", "Boots", "Running", "Tennis"];
const Genders = ["Men", "Women", "Kids", "Unisex"];
const Brands = ["Nike", "Adidas", "Puma", "Reebok", "Asics", "Jordan", "Vans"];

const createAccordionItem = (
  title: string,
  options: string[],
  selectedValues: string[],
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
) => (
  <AccordionItem
    title={title}
    classNames={{
      title: "text-medium font-medium leading-8 text-default-600",
      trigger: "p-2",
    }}
  >
    <CheckboxGroup
      color="primary"
      value={selectedValues}
      onValueChange={setSelectedValues}
      className="px-2"
    >
      {options.map((option) => (
        <Checkbox key={option} value={option}>
          {option}
        </Checkbox>
      ))}
    </CheckboxGroup>
  </AccordionItem>
);

const CreateCheckBoxGroup = ({
  title,
  options,
}: {
  title: string;
  options: string[] | number[];
}) => {
  const checkbox = tv({
    slots: {
      base: "border-default",
      content: "text-default-500",
    },
    variants: {
      isSelected: {
        true: {
          base: "bg-primary text-foreground border-primary",
          content: "text-primary-foreground",
        },
      },
    },
  });

  const { getBaseProps, getInputProps } = useCheckbox({
    defaultSelected: true,
  });
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (
    option: string | number,
    isChecked: boolean
  ) => {
    if (isChecked) {
      setSelected([...selected, String(option)]);
    } else {
      setSelected(selected.filter((s) => s !== String(option)));
    }
  };

  return (
    <>
      <h3 className="text-medium font-medium leading-8 text-default-600">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(String(option));
          const styles = checkbox({ isSelected });
          return (
            <label key={option} {...getBaseProps()} className="cursor-pointer">
              <VisuallyHidden>
                <input
                  {...getInputProps()}
                  checked={isSelected}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked)
                  }
                  value={option}
                  name={`${title}-selector`}
                />
              </VisuallyHidden>
              <Chip
                classNames={{
                  base: styles.base(),
                  content: styles.content(),
                }}
                radius="sm"
                color="primary"
                variant="bordered"
              >
                {option}
              </Chip>
            </label>
          );
        })}
      </div>
    </>
  );
};

interface FilterType {
  type: "Card" | "PopOver";
}

interface FilterPopoverProps {
  triggerText: string;
  contentComponent: React.ReactNode;
}

const FilterPopover: React.FC<FilterPopoverProps> = ({
  triggerText,
  contentComponent,
}) => {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button
          variant="bordered"
          endContent={<FaAngleDown />}
          className="border-default-200 text-default-500"
        >
          {triggerText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-xs py-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">{contentComponent}</div>
          <Divider />
          <div className="flex justify-end gap-4">
            <Button size="sm" variant="flat" color="danger">
              Cancel
            </Button>
            <Button size="sm" color="primary">
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const Filter = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [type, setType] = useState<FilterType["type"]>("Card");

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["Card"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as FilterType["type"]);
          }}
        >
          {["Card", "PopOver"].map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      </>
    );
  };

  const Pricing = () => {
    const minValue = 0;
    const maxValue = 1000;
    const [value, setValue] = useState<number[]>([100, 500]);

    return (
      <>
        <Slider
          label="Price Range"
          size="sm"
          showTooltip
          showOutline
          color="primary"
          hideValue
          minValue={minValue}
          maxValue={maxValue}
          step={10}
          defaultValue={[100, 500]}
          formatOptions={{ style: "currency", currency: "USD" }}
          className="max-w-md"
          value={value}
          onChange={(value) => {
            if (Array.isArray(value)) setValue([value[0], value[1]]);
          }}
          classNames={{
            base: "gap-3",
            label: "text-medium font-medium leading-8 text-default-600",
          }}
        />
        <div className="flex items-center">
          <Input
            startContent={<FaDollarSign className="text-default-400" />}
            className="max-w-[200px]"
            value={String(value[0])}
            isReadOnly
            variant="bordered"
          />
          <Divider className="w-4 mx-2" />
          <Input
            startContent={<FaDollarSign className="text-default-400" />}
            className="max-w-[200px]"
            isReadOnly
            value={String(value[1])}
            variant="bordered"
          />
        </div>
      </>
    );
  };

  const SizeSelector = () => {
    const sizeValues = Array.from({ length: 12 }, (_, index) => 35 + index);
    return <CreateCheckBoxGroup title="Size" options={sizeValues} />;
  };

  const ColorSelector = () => {
    const [selected, setSelected] = useState("");

    // Define the radio options
    const radioOptions = [
      { value: "black", color: "rgb(0, 0, 0)" },
      { value: "white", color: "rgb(255, 255, 255)" },
      { value: "gray", color: "rgb(63, 63, 70)" },
      { value: "red", color: "rgb(243, 18, 96)" },
      { value: "blue", color: "rgb(0, 111, 238)" },
      { value: "green", color: "rgb(23, 201, 100)" },
      { value: "yellow", color: "rgb(245, 165, 36)" },
    ];

    interface CustomRadio extends RadioProps {
      option: {
        value: string;
        color: string;
      };
    }

    const CustomRadio = (props: CustomRadio) => {
      const {
        Component,
        isSelected,
        getBaseProps,
        getInputProps,
        getControlProps,
      } = useRadio(props);

      return (
        <Component
          {...getBaseProps()}
          className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
        >
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <span
            {...getControlProps()}
            className={`pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90 ring-2 ring-offset-2 ring-offset-content1 ${
              isSelected ? "ring-primary" : "ring-transparent"
            }`}
            style={{
              backgroundColor: props.option.color,
            }}
          />
        </Component>
      );
    };

    return (
      <>
        <h3 className="text-medium font-medium leading-8 text-default-600">
          Color
        </h3>
        <RadioGroup
          orientation="horizontal"
          value={selected}
          onValueChange={setSelected}
        >
          {radioOptions.map((option) => {
            return (
              <CustomRadio
                key={option.value}
                value={option.value}
                option={option}
              />
            );
          })}
        </RadioGroup>
      </>
    );
  };

  const Rating = () => {
    const [selected, setSelected] = useState("3");

    // Define the radio options
    const radioOptions = [
      { option: "1 stars & up", value: "1" },
      { option: "2 stars & up", value: "2" },
      { option: "3 stars & up", value: "3" },
      { option: "4 stars & up", value: "4" },
      { option: "5 stars", value: "5" },
    ];

    const CustomRadio = (props: RadioProps) => {
      const { Component, getBaseProps, getInputProps, getControlProps } =
        useRadio(props);

      const isLessThanOrEqualToSelected =
        parseInt(props.value) <= parseInt(selected);

      return (
        <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <FaStar
            {...getControlProps()}
            size={20}
            className={
              isLessThanOrEqualToSelected ? `text-primary` : `text-default-200`
            }
          />
        </Component>
      );
    };

    return (
      <>
        <h3 className="text-medium font-medium leading-8 text-default-600">
          Rating
        </h3>
        <div className="flex gap-4">
          <RadioGroup
            orientation="horizontal"
            value={selected}
            onValueChange={setSelected}
          >
            {radioOptions.map((option) => {
              return <CustomRadio key={option.option} value={option.value} />;
            })}
          </RadioGroup>
          <p className="text-medium text-default-400">
            {radioOptions.find((option) => option.value == selected)?.option}
          </p>
        </div>
      </>
    );
  };

  const Accordion = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [selected2, setSelected2] = useState<string[]>([]);
    const [selected3, setSelected3] = useState<string[]>([]);

    return (
      <NextUiAccordion className="px-0">
        {createAccordionItem("Category", Categories, selected, setSelected)}
        {createAccordionItem("Gender", Genders, selected2, setSelected2)}
        {createAccordionItem("Brand", Brands, selected3, setSelected3)}
      </NextUiAccordion>
    );
  };

  const CardList: {
    triggerText: string;
    contentComponent: React.JSX.Element;
  }[] = [
    { triggerText: "Price", contentComponent: <Pricing /> },
    { triggerText: "Size", contentComponent: <SizeSelector /> },
    { triggerText: "Color", contentComponent: <ColorSelector /> },
    { triggerText: "Rating", contentComponent: <Rating /> },
  ];

  const PopoverList: {
    triggerText: string;
    contentComponent: React.JSX.Element;
  }[] = [
    ...CardList,
    {
      triggerText: "Category",
      contentComponent: (
        <CreateCheckBoxGroup title="Category" options={Categories} />
      ),
    },
    {
      triggerText: "Gender",
      contentComponent: (
        <CreateCheckBoxGroup title="Genders" options={Genders} />
      ),
    },
    {
      triggerText: "Brands",
      contentComponent: <CreateCheckBoxGroup title="Brands" options={Brands} />,
    },
  ];

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-col w-full h-full px-6 py-2 rounded-md ${
            type == "Card" ? "justify-center" : "justify-start"
          } border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {type == "Card" ? (
            <Card className="w-full h-full max-w-lg p-0">
              <CardBody className="flex flex-col gap-4">
                <h2 className="text-large font-medium text-foreground">
                  Filters
                </h2>
                <Divider />
                <ScrollShadow
                  hideScrollBar
                  size={0}
                  className={`flex ${
                    maxWidth === "375px" ? "flex-col" : "flex-row"
                  } gap-4 max-h-[585px] p-2`}
                >
                  <div className="flex flex-col gap-3">
                    {CardList.map((item) => {
                      return (
                        <div
                          key={item.triggerText}
                          className="flex flex-col gap-3"
                        >
                          {item.contentComponent}
                        </div>
                      );
                    })}
                  </div>
                  <Accordion />
                </ScrollShadow>
              </CardBody>
            </Card>
          ) : (
            <Card className="w-full h-fit max-w-full p-6">
              <CardBody
                className={`flex ${
                  maxWidth === "375px" ? "flex-col gap-2" : "flex-row gap-4"
                } items-center p-0`}
              >
                <h2 className="text-large font-medium text-foreground">
                  Filters
                </h2>
                <div className="flex flex-wrap gap-2 py-2">
                  {PopoverList.map((item) => {
                    return (
                      <FilterPopover
                        key={item.triggerText}
                        triggerText={item.triggerText}
                        contentComponent={item.contentComponent}
                      />
                    );
                  })}
                </div>
              </CardBody>
            </Card>
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
      code: `import React from "react";
${
  type == "Card"
    ? `import { Card, CardBody, Divider } from "@nextui-org/react";`
    : `import { Card, CardBody, Divider, Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";`
}
import { CheckBoxGroup } from "./CheckBoxGroup";
${
  type == "Card"
    ? `import Accordion from "./Accordion";`
    : `import { Categories, Genders, Brands } from "./Accordion";`
}
import Pricing from "./Pricing";
import Color from "./Color";
import Rating from "./Rating";
${
  type == "PopOver"
    ? `import { FaAngleDown } from "react-icons/fa6";
`
    : ``
}
const availableSizes = Array.from({ length: 12 }, (_, index) => 35 + index);

${
  type == "Card"
    ? `const List = [
  { text: "Price", Component: <Pricing /> },
  { text: "Size", Component: <CheckBoxGroup title="Size" options={availableSizes} /> },
  { text: "Color", Component: <Color /> },
  { text: "Rating", Component: <Rating /> },
];`
    : `const List = [
  { text: "Price", Component: <Pricing /> },
  { text: "Size", Component: <CheckBoxGroup title="Size" options={availableSizes} /> },
  { text: "Color", Component: <Color /> },
  { text: "Rating", Component: <Rating /> },
  { text: "Category", Component: <CheckBoxGroup title="Category" options={Categories} /> },
  { text: "Gender", Component: <CheckBoxGroup title="Genders" options={Genders} /> },
  { text: "Brands", Component: <CheckBoxGroup title="Brands" options={Brands} /> },
];

const CustomPopover = ({ text, Component }) => {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button variant="bordered" className="border-default-200 text-default-500" endContent={<FaAngleDown />}>
          {text}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-xs py-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">{Component}</div>
          <Divider />
          <div className="flex justify-end gap-4">
            <Button size="sm" variant="flat" color="danger">Cancel</Button>
            <Button size="sm" color="primary">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};`
}

export default function App() {
  return (
    <>
      ${
        type == "Card"
          ? `<Card className="w-full h-full max-w-xl p-0">
      <CardBody className="flex flex-col gap-4 px-6 py-4">
        <h2 className="text-large font-medium text-foreground">Filters</h2>
        <Divider />
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-3">
            {List.map((item) => (
              <div key={item.text} className="flex flex-col gap-3">
                {item.Component}
              </div>
            ))}
          </div>
          <Accordion />
        </div>
      </CardBody>
    </Card>`
          : `<Card className="w-full h-fit p-6">
          <CardBody className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-center p-0">
            <h2 className="text-large font-medium text-foreground">Filters</h2>
            <div className="flex flex-wrap gap-2 py-2">
              {List.map((item) => {
                return (
                  <CustomPopover key={item.text} text={item.text} Component={item.Component} />
                );
              })}
            </div>
          </CardBody>
        </Card>`
      }
    </>
  );
}`,
    },
    {
      fileName: "Pricing.jsx",
      code: `"use client";
import React, { useState } from "react";
import { Input, Slider, Divider } from "@nextui-org/react";
import { FaDollarSign } from "react-icons/fa6";

export default function Pricing() {
  const minValue = 0;
  const maxValue = 1000;
  const [value, setValue] = useState([100, 500]);

  return (
    <>
      <Slider
        label="Price Range"
        size="sm"
        showTooltip
        showOutline
        color="primary"
        hideValue
        minValue={minValue}
        maxValue={maxValue}
        step={10}
        defaultValue={[100, 500]}
        formatOptions={{ style: "currency", currency: "USD" }}
        className="max-w-md"
        value={value}
        onChange={(value) => {
          if (Array.isArray(value)) setValue([value[0], value[1]]);
        }}
        classNames={{
          base: "gap-3",
          label: "text-medium font-medium leading-8 text-default-600",
        }}
      />
      <div className="flex items-center">
        <Input
          startContent={<FaDollarSign className="text-default-400" />}
          className="max-w-[200px]"
          isReadOnly
          value={String(value[0])}
          variant="bordered"
        />
        <Divider className="w-4 mx-2" />
        <Input
          startContent={<FaDollarSign className="text-default-400" />}
          className="max-w-[200px]"
          isReadOnly
          value={String(value[1])}
          variant="bordered"
        />
      </div>
    </>  
  );
}`,
    },
    {
      fileName: "Color.jsx",
      code: `"use client";
import React, { useState } from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";

export default function Color() {
  const [selected, setSelected] = useState("");

  const radioOptions = [
    { value: "black", color: "rgb(0, 0, 0)" },
    { value: "white", color: "rgb(255, 255, 255)" },
    { value: "gray", color: "rgb(63, 63, 70)" },
    { value: "red", color: "rgb(243, 18, 96)" },
    { value: "blue", color: "rgb(0, 111, 238)" },
    { value: "green", color: "rgb(23, 201, 100)" },
    { value: "yellow", color: "rgb(245, 165, 36)" },
  ];
  
  const CustomRadio = (props) => {
    const { Component, isSelected, getBaseProps, getInputProps, getControlProps } = useRadio(props);

    return (
      <Component
        {...getBaseProps()}
        className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span
          {...getControlProps()}
          className={\`pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90 ring-2 ring-offset-2 ring-offset-content1 \${
            isSelected ? "ring-primary" : "ring-transparent"
          }\`}
          style={{
            backgroundColor: props.option.color,
          }}
        />
      </Component>
    );
  };
  
  return (
    <>
      <h3 className="text-medium font-medium leading-8 text-default-600">Color</h3>
      <RadioGroup orientation="horizontal" value={selected} onValueChange={setSelected}>
        {radioOptions.map((option) => (
          <CustomRadio key={option.value} value={option.value} option={option} />
        ))}
      </RadioGroup>
    </>
  );
}`,
    },
    {
      fileName: "Rating.jsx",
      code: `"use client";
import React, { useState } from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

export default function Rating() {
  const [selected, setSelected] = useState("3");

  const radioOptions = [
    { option: "1 stars & up", value: "1" },
    { option: "2 stars & up", value: "2" },
    { option: "3 stars & up", value: "3" },
    { option: "4 stars & up", value: "4" },
    { option: "5 stars", value: "5" },
  ];

  const CustomRadio = (props) => {
    const { Component, getBaseProps, getInputProps, getControlProps } = useRadio(props);
    const isLessThanOrEqualToSelected = parseInt(props.value) <= parseInt(selected);

    return (
      <Component {...getBaseProps()}>
        <VisuallyHidden><input {...getInputProps()} /></VisuallyHidden>
        <FaStar
          {...getControlProps()}
          size={20}
          className={isLessThanOrEqualToSelected ? "text-primary" : "text-default-200" }
        />
      </Component>
    );
  };

  return (
    <>
      <h3 className="text-medium font-medium leading-8 text-default-600">Rating</h3>
      <div className="flex gap-4">
        <RadioGroup orientation="horizontal" value={selected} onValueChange={setSelected}>
          {radioOptions.map((option) => {
            return <CustomRadio key={option.option} value={option.value} />;
          })}
        </RadioGroup>
        <p className="text-medium text-default-400">
          {radioOptions.find((option) => option.value == selected)?.option}
        </p>
      </div>
    </>
  );
};`,
    },
    {
      fileName: "Accordion.jsx",
      code: `"use client";
import React, { useState } from "react";
import { Accordion as NextUiAccordion, AccordionItem, CheckboxGroup, Checkbox } from "@nextui-org/react";

export const createAccordionItem = (title, options, selectedValues, setSelectedValues) => (
  <AccordionItem
    title={title}
    classNames={{
      title: "text-medium font-medium leading-8 text-default-600",
      trigger: "p-2",
    }}
  >
    <CheckboxGroup color="primary" value={selectedValues} onValueChange={setSelectedValues} className="px-2">
      {options.map((option) => (
        <Checkbox key={option} value={option}>
          {option}
        </Checkbox>
      ))}
    </CheckboxGroup>
  </AccordionItem>
);

export const Categories = ["Sneakers", "Boots", "Running", "Tennis"];
export const Genders = ["Men", "Women", "Kids", "Unisex"];
export const Brands = ["Nike", "Adidas", "Puma", "Reebok", "Asics", "Jordan", "Vans"];

export default function Accordion() {
  const [category, setCategory] = useState([]);
  const [gender, setGender] = useState([]);
  const [brand, setBrand] = useState([]);

  return (
    <NextUiAccordion>
      {createAccordionItem("Category", Categories, category, setCategory)}
      {createAccordionItem("Gender", Genders, gender, setGender)}
      {createAccordionItem("Brand", Brands, brand, setBrand)}
    </NextUiAccordion>
  );
}`,
    },
    {
      fileName: "CheckBoxGroup.jsx",
      code: `"use client";
import React, { useState } from "react";
import { tv, useCheckbox, Chip, VisuallyHidden } from "@nextui-org/react";

export function CheckBoxGroup({ title, options }) {
  const checkbox = tv({
    slots: {
      base: "border-default",
      content: "text-default-500",
    },
    variants: {
      isSelected: {
        true: {
          base: "bg-primary text-foreground border-primary",
          content: "text-primary-foreground",
        },
      },
    },
  });

  const { getBaseProps, getInputProps } = useCheckbox({ defaultSelected: true });
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (option, isChecked) => {
    if (isChecked) {
      setSelected([...selected, String(option)]);
    } else {
      setSelected(selected.filter((s) => s !== String(option)));
    }
  };

  return (
    <>
      <h3 className="text-medium font-medium leading-8 text-default-600">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(String(option));
          const styles = checkbox({ isSelected });
          return (
            <label key={option} {...getBaseProps()} className="cursor-pointer">
              <VisuallyHidden>
                <input
                  {...getInputProps()}
                  checked={isSelected}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked)
                  }
                  value={option}
                  name={\`\${title}-selector\`}
                />
              </VisuallyHidden>
              <Chip
                classNames={{
                  base: styles.base(),
                  content: styles.content(),
                }}
                radius="sm"
                color="primary"
                variant="bordered"
              >
                {option}
              </Chip>
            </label>
          );
        })}
      </div>
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
      sandBoxLink="https://codesandbox.io/p/devbox/filter-n8yzwy?file=%2FApp.jsx"
    />
  );
};

export default Filter;
