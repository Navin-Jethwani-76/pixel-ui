"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Image,
  RadioGroup,
  RadioProps,
  ScrollShadow,
  VisuallyHidden,
  cn,
  useRadio,
} from "@/lib/nextui";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoHeartOutline } from "react-icons/io5";
import { ViewProps } from "@/app/components";
import { FaStar } from "react-icons/fa6";

interface RatingRadioProps extends RadioProps {
  rating: number;
}

const radioOptions = ["1", "2", "3", "4", "5"];

const CustomRadio = (props: RatingRadioProps) => {
  const { Component, getBaseProps, getInputProps, getControlProps } =
    useRadio(props);

  const isLessThanOrEqualToSelected = parseInt(props.value) <= props.rating;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <FaStar
        {...getControlProps()}
        size={18}
        className={
          isLessThanOrEqualToSelected ? `text-primary` : `text-default-200`
        }
      />
    </Component>
  );
};

const Rating = ({
  rating,
  peoplerated,
}: {
  rating: number;
  peoplerated: number;
}) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <RadioGroup orientation="horizontal" isReadOnly>
          {radioOptions.map((option) => {
            return (
              <CustomRadio
                key={option}
                value={option}
                rating={rating}
                className="cursor-default"
              />
            );
          })}
        </RadioGroup>
        <p className="text-medium text-default-400">{`(${peoplerated})`}</p>
      </div>
    </>
  );
};

const ProductView = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");

  const BradCrumbView = () => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
        <BreadcrumbItem>Nike Air Max 270</BreadcrumbItem>
      </Breadcrumbs>
    );
  };

  const Images = () => {
    const basicUrl =
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/";
    const [Images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState<string>();

    useEffect(() => {
      const newImages = Array.from(
        { length: 6 },
        (_, index) => `${basicUrl}${index + 1}.jpeg`
      );
      setImages(newImages);
      setCurrentImage(newImages[0]);
    }, []);

    return (
      <div className="w-full h-full flex flex-col justify-between items-center gap-2">
        <Image
          alt="Product Image"
          className="h-96 w-96"
          isZoomed
          src={currentImage}
        />
        <ScrollShadow
          orientation="horizontal"
          className="flex w-full max-w-full gap-4 p-2"
          size={10}
        >
          {Images.map((i, index) => (
            <button
              key={index}
              value={i}
              className={`relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow ${
                currentImage === i
                  ? "outline-none ring-2 ring-focus ring-offset-2"
                  : ""
              }`}
              onClick={() => {
                setCurrentImage(i);
              }}
            >
              <Image alt="Product Image" isZoomed src={i} />
            </button>
          ))}
        </ScrollShadow>
      </div>
    );
  };

  const ColorSelector = () => {
    const [selected, setSelected] = useState("white");

    // Define the radio options
    const radioOptions = [
      { value: "white", color: "rgb(255, 255, 255)" },
      { value: "gray", color: "rgb(63, 63, 70)" },
      { value: "black", color: "rgb(0, 0, 0)" },
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

  const SizeSelector = () => {
    const CustomRadio = (props: RadioProps) => {
      const { Component, children, isSelected, getBaseProps, getInputProps } =
        useRadio(props);

      return (
        <Component
          {...getBaseProps()}
          className={cn(
            "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent"
          )}
        >
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            className={`max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small ${
              isSelected ? "bg-primary" : "bg-default/40"
            } relative text-foreground select-none text-large transition-colors motion-reduce:transition-none`}
          >
            {children && (
              <span
                className={`flex-1 font-normal !text-small px-1 ${
                  isSelected ? "text-primary-foreground" : "text-foreground-600"
                }`}
              >
                {children}
              </span>
            )}
          </div>
        </Component>
      );
    };
    const sizeValues = Array.from({ length: 16 }, (_, index) => 35 + index + 1);
    return (
      <>
        <RadioGroup orientation="horizontal">
          {sizeValues.map((v) => {
            if (v % 2 == 0) {
              return (
                <CustomRadio name="size" key={v} value={String(v)}>
                  {v}
                </CustomRadio>
              );
            }
          })}
        </RadioGroup>
      </>
    );
  };

  const ProductAccordion = () => {
    const accordionItems = [
      {
        title: "Size & Fit",
        content: [
          "Fits small; we recommend ordering a half size up",
          "Mid-weight, non-stretchy fabric",
          "Designed for a mini length",
        ],
      },
      {
        title: "Shipping & Returns",
        content: [
          "Free shipping & returns",
          "Free, no-hassle returns",
          "Complimentary gift packaging",
          "Ships within 24 hours!",
        ],
      },
      {
        title: "Designer Notes",
        content: [
          "Fits small; we recommend ordering a half size up",
          "Mid-weight, non-stretchy fabric",
          "Designed for a mini length",
        ],
      },
    ];

    const AccordionContent = () => {
      return (
        <Accordion className="px-0">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              classNames={{
                title: "text-large text-default-400",
                trigger: "pb-0",
              }}
            >
              <ul className="list-inside list-disc">
                {item.content.map((contentItem, contentIndex) => (
                  <li key={contentIndex} className="text-default-500">
                    {contentItem}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      );
    };

    return (
      <>
        {maxWidth == "375px" ? (
          <>
            <AccordionContent />
          </>
        ) : (
          <ScrollShadow className="w-full max-h-40" hideScrollBar size={0}>
            <AccordionContent />
          </ScrollShadow>
        )}
      </>
    );
  };

  const ProductDetails = () => {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">
            Nike Air Max 270
          </h1>
          <Rating rating={4} peoplerated={669} />
        </div>
        <p className="text-xl font-medium tracking-tight">$80.97</p>
        <p className="line-clamp-3 text-medium text-default-500">
          The Nike Air Max 270 delivers an even more adaptive fit than before.
          Stretch material in the upper moves with your foot, while the tri-star
          outsole pattern adjusts to your every step for a ride that delivers
          support and flexibility where you need it.
        </p>
        <ColorSelector />
        <div className="flex items-center gap-2 text-default-700">
          <LiaShippingFastSolid />
          <p className="text-small font-medium">
            Free shipping and 30 days return
          </p>
        </div>
        <SizeSelector />
        <ProductAccordion />
        <div className={`flex gap-4 ${maxWidth == "375px" ? "mt-2" : ""}`}>
          <Button fullWidth color="warning" variant="flat">
            Add To Cart
          </Button>
          <Button fullWidth color="primary">
            Buy Now
          </Button>
          <Button isIconOnly variant="bordered">
            <IoHeartOutline size={20} />
          </Button>
        </div>
      </div>
    );
  };

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-row w-full h-full p-2 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <div
            className={`w-full h-full flex flex-col gap-4 justify-center px-2 ${
              maxWidth == "100%" ? "max-w-4xl" : ""
            }`}
          >
            <BradCrumbView />
            {maxWidth == "100%" ? (
              <div
                className={`w-full h-full max-h-[530px] flex flex-row gap-4`}
              >
                <div className="w-2/5">
                  <Images />
                </div>
                <div className="w-3/5">
                  <ProductDetails />
                </div>
              </div>
            ) : (
              <ScrollShadow
                className={`w-full h-full max-h-[615px] flex flex-col px-1 gap-4`}
                hideScrollBar
                size={0}
              >
                <Images />
                <ProductDetails />
              </ScrollShadow>
            )}
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
import { Button } from "@nextui-org/react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoHeartOutline } from "react-icons/io5";
import { Rating } from "./Rating";
import { Images } from "./Images";
import { Size } from "./Size";
import { Color } from "./Color";
import { Accordion } from "./Accordion";

const ProductDetails = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-2">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Nike Air Max 270</h1>
        <Rating rating={4} peoplerated={669} />
      </div>
      <p className="text-xl font-medium tracking-tight">$80.97</p>
      <p className="line-clamp-3 text-medium text-default-500">
        The Nike Air Max 270 delivers an even more adaptive fit than before.
        Stretch material in the upper moves with your foot, while the tri-star
        outsole pattern adjusts to your every step for a ride that delivers
        support and flexibility where you need it.
      </p>
      <Color />
      <div className="flex items-center gap-2 text-default-700">
        <LiaShippingFastSolid />
        <p className="text-small font-medium">Free shipping and 30 days return</p>
      </div>
      <Size />
      <Accordion />
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Button fullWidth color="warning" variant="flat">Add To Cart</Button>
        <Button fullWidth color="primary">Buy Now</Button>
        <Button isIconOnly variant="bordered"><IoHeartOutline size={20} /></Button>
      </div>
    </div>
  );
};

export default function App() {
 return (
  <div className="w-full max-w-4xl h-full flex flex-col sm:flex-row p-2 justify-start gap-4">
    <div className="w-full sm:w-2/5"><Images /></div>
    <div className="w-full sm:w-3/5"><ProductDetails /></div>
  </div>
 );
}`,
    },
    {
      fileName: "Rating.jsx",
      code: `"use client";
import React from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

const radioOptions = ["1", "2", "3", "4", "5"];

const CustomRadio = (props) => {
  const { Component, getBaseProps, getInputProps, getControlProps } = useRadio(props);
  const isLessThanOrEqualToSelected = parseInt(props.value) <= props.rating;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <FaStar
        {...getControlProps()}
        size={18}
        className={
          isLessThanOrEqualToSelected ? "text-primary" : "text-default-200"
        }
      />
    </Component>
  );
};


export const Rating = ({ rating, peoplerated }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <RadioGroup orientation="horizontal" isReadOnly>
          {radioOptions.map((option) => {
            return (
              <CustomRadio key={option} value={option} rating={rating} className="cursor-default" />
            );
          })}
        </RadioGroup>
        <p className="text-medium text-default-400">{\`(\${peoplerated})\`}</p>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Images.jsx",
      code: `"use client";
import React, { useEffect, useState } from "react";
import { Image, ScrollShadow } from "@nextui-org/react";

export function Images() {
  const [Images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState();

  // change below code to fetch your images.
  const url = "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/";

  useEffect(() => {
    const newImages = Array.from({ length: 6 }, (_, index) => \`\${url}\${index + 1}.jpeg\`);
    setImages(newImages);
    setCurrentImage(newImages[0]);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-2">
      <Image alt="Product Image" className="h-96 w-96" isZoomed src={currentImage} />
      <ScrollShadow orientation="horizontal" className="flex w-full max-w-full gap-4 p-2" size={10}>
        {Images.map((i, index) => (
          <button
            key={index}
            value={i}
            className={\`relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow \${
              currentImage === i
                ? "outline-none ring-2 ring-focus ring-offset-2"
                : ""
            }\`}
            onClick={() => {
              setCurrentImage(i);
            }}
          >
            <Image alt="Product Image" isZoomed src={i} />
          </button>
        ))}
      </ScrollShadow>
    </div>
  );
};`,
    },
    {
      fileName: "Color.jsx",
      code: `"use client";
import React, { useState } from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";

export function Color() {
  const [selected, setSelected] = useState("white");

  const radioOptions = [
    { value: "white", color: "rgb(255, 255, 255)" },
    { value: "gray", color: "rgb(63, 63, 70)" },
    { value: "black", color: "rgb(0, 0, 0)" },
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
      <RadioGroup orientation="horizontal" value={selected} onValueChange={setSelected}>
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
}`,
    },
    {
      fileName: "Size.jsx",
      code: `"use client";
import React from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";

export function Size() {
  const CustomRadio = (props) => {
    const { Component, children, isSelected, getBaseProps, getInputProps } = useRadio(props);

    return (
      <Component
        {...getBaseProps()}
        className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent"
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          className={\`max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small \${isSelected ? "bg-primary" : "bg-default/40"} relative text-foreground select-none text-large transition-colors motion-reduce:transition-none\`}
        >
          {children && (
            <span
              className={\`flex-1 font-normal !text-small px-1 \${isSelected ? "text-primary-foreground" : "text-foreground-600"}\`}
            >
              {children}
            </span>
          )}
        </div>
      </Component>
    );
  };

  const sizeValues = Array.from({ length: 16 }, (_, index) => 35 + index + 1);
  
  return (
    <>
      <RadioGroup orientation="horizontal">
        {sizeValues.map((size) => {
          if (size % 2 == 0) {
            return (
              <CustomRadio name="size" key={size} value={String(size)}>
                {size}
              </CustomRadio>
            );
          }
        })}
      </RadioGroup>
    </>
  );
}`,
    },
    {
      fileName: "Accordion.jsx",
      code: `"use client";
import React from "react";
import { Accordion as NextUiAccordion, AccordionItem, ScrollShadow } from "@nextui-org/react";

const accordionItems = [
  {
    title: "Size & Fit",
    content: [
      "Fits small; we recommend ordering a half size up",
      "Mid-weight, non-stretchy fabric",
      "Designed for a mini length",
    ],
  },
  {
    title: "Shipping & Returns",
    content: [
      "Free shipping & returns",
      "Free, no-hassle returns",
      "Complimentary gift packaging",
      "Ships within 24 hours!",
    ],
  },
  {
    title: "Designer Notes",
    content: [
      "Fits small; we recommend ordering a half size up",
      "Mid-weight, non-stretchy fabric",
      "Designed for a mini length",
    ],
  },
];

export function Accordion() {
 return (
  <ScrollShadow className="w-full sm:max-h-40" hideScrollBar size={0}>
    <NextUiAccordion>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          classNames={{
            title: "text-large text-default-400",
            trigger: "pb-0",
          }}
        >
          <ul className="list-inside list-disc">
            {item.content.map((contentItem, contentIndex) => (
              <li key={contentIndex} className="text-default-500">
                {contentItem}
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </NextUiAccordion>
  </ScrollShadow>
 );
}`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      code={code}
      //   PreviewProps={PreviewProps}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/product-view-xkzl2x?file=%2FApp.jsx"
    />
  );
};

export default ProductView;
