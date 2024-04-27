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
  CheckboxGroup,
  Checkbox,
  Skeleton,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import {
  Product,
  ProductListOptions,
  ProductListType,
  RatingRadioProps,
} from "@/app/components/ecommerce/product-list";
import {
  Products,
  dataCode,
} from "@/app/components/ecommerce/product-list/data";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

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
  peoplerated: string;
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

const ProductList = () => {
  const [type, setType] = useState<ProductListType["type"]>("All Products");
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [isLoading, setIsLoading] = useState(false);
  const baseImgUrl =
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes";

  const ProductItem = ({
    product,
    index,
  }: {
    product: Product;
    index: number;
  }) => {
    return (
      <div
        className={`relative flex ${
          maxWidth === "768px" ? "w-56" : "w-64"
        } max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium snap-start`}
      >
        {isLoading ? (
          <>
            <div className="flex flex-col items-stretch gap-2 h-full">
              <Skeleton className="rounded-medium">
                <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2"></div>
              </Skeleton>
              <div className="flex items-center justify-between gap-2">
                <Skeleton className="rounded-md w-4/5">
                  <div className="w-full h-6"></div>
                </Skeleton>
                <Skeleton className="rounded-md w-1/5">
                  <div className="w-full h-6"></div>
                </Skeleton>
              </div>
              <Skeleton className="rounded-md w-full">
                <div className="w-full h-16"></div>
              </Skeleton>
              <Skeleton className="rounded-md w-full">
                <div className="w-full h-6"></div>
              </Skeleton>
              <Skeleton className="rounded-md w-full">
                <div className="w-full h-10"></div>
              </Skeleton>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-stretch gap-4 h-full">
            <Button
              size="sm"
              isIconOnly
              className="absolute right-6 top-6 z-20 rounded-full"
            >
              <FaStar
                className={
                  product.isInWishlist ? `text-warning-500` : `text-default-500`
                }
              />
            </Button>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
              <Image
                alt={product.title}
                src={`${baseImgUrl}/${index + 1}.png`}
                className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-125"
                removeWrapper
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <Link href="#" color="foreground">
                  <h3 className="text-medium font-medium text-default-700">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-medium font-medium text-default-500">
                  ${product.price}
                </p>
              </div>
              <p className="text-small text-default-500">
                {product.description}
              </p>
              <Rating
                rating={product.rating}
                peoplerated={product.peopleRated}
              />
              <div className="flex gap-2">
                <Button
                  color={product.isAddedToCart ? "default" : `primary`}
                  fullWidth
                >
                  {product.isAddedToCart ? "View Cart" : "Add To Cart"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["All Products"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as ProductListType["type"]);
          }}
        >
          {ProductListOptions.map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
        <CheckboxGroup label="Options" color="secondary">
          <div className="flex justify-between items-center gap-2 w-full">
            <Checkbox isSelected={isLoading} onValueChange={setIsLoading}>
              Loading UI
            </Checkbox>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states"
              isExternal
            >
              <FiExternalLink size={20} />
            </Link>
          </div>
        </CheckboxGroup>
      </>
    );
  };

  const AllProductsList = () => {
    return (
      <>
        <ScrollShadow
          className="w-full h-full max-h-[670px]"
          hideScrollBar
          size={0}
        >
          <div
            className={`w-full h-full py-4 flex ${
              maxWidth === "375px"
                ? "flex-col items-center"
                : "flex-wrap justify-center"
            } gap-4`}
          >
            {Products.map((product, index) => {
              return (
                <ProductItem key={index} index={index} product={product} />
              );
            })}
          </div>
        </ScrollShadow>
      </>
    );
  };

  const PopularProductsList = () => {
    return (
      <>
        <ScrollShadow
          className="w-full h-full max-h-[670px]"
          hideScrollBar
          size={0}
        >
          <div className="flex w-full flex-col items-start gap-3 py-2">
            <div className="flex w-full items-baseline justify-between">
              <h2 className="text-xl font-medium">Popular</h2>
              <Link href="#" className="flex gap-2">
                <span className="font-medium">See all</span>
                <FaArrowRight />
              </Link>
            </div>

            <div
              className={`w-full h-full py-4 flex ${
                maxWidth === "375px"
                  ? "flex-col items-center"
                  : "flex-wrap justify-center"
              } gap-4`}
            >
              {Products.slice(0, 3).map((product, index) => {
                return (
                  <ProductItem key={index} index={index} product={product} />
                );
              })}
            </div>
          </div>
        </ScrollShadow>
      </>
    );
  };

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-col w-full h-full p-2 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {type == "All Products" ? (
            <AllProductsList />
          ) : (
            <PopularProductsList />
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
import { Products } from "./data";
import { ProductCard } from "./ProductCard";
import { LoadingCard } from "./Loading";
${
  type == "All Products"
    ? ``
    : `import { Link } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
`
}
export default function App() {
  const loading = ${isLoading};

  if(loading) {
    return (
      <div className="w-full h-full py-4 flex flex-wrap justify-center items-center gap-4">
        {Array.from({ length: ${
          type == "All Products" ? `10` : `3`
        }}, (_, i) => i + 1).map((i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    );
  }
  return (
    ${
      type == "All Products"
        ? `<div className="w-full h-full py-4 flex flex-wrap justify-center items-center gap-4">
    {Products.map((product, index) => {
      return (
        <ProductCard key={index} index={index} product={product} />
      );
    })}
  </div>`
        : `<div className="flex w-full max-w-xl lg:max-w-[50rem] flex-col items-start gap-3 py-2">
      <div className="flex w-full items-baseline justify-between">
        <h2 className="text-xl font-medium">Popular</h2>
        <Link href="#" className="flex gap-2">
          <span className="font-medium">See all</span>
          <FaArrowRight />
        </Link>
      </div>

      {/* map another array. using first 3 products as dummy data */}
      <div className="w-full h-full py-4 flex flex-wrap justify-center sm:justify-between items-center gap-4">
        {Products.slice(0, 3).map((product, index) => {
          return (
            <ProductCard key={index} index={index} product={product} />
          );
        })}
      </div>
  </div>`
    }
  );
}`,
    },
    {
      fileName: "ProductCard.jsx",
      code: `import React from "react";
import { Button, Image, Link } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import { Rating } from "./Rating";

export function ProductCard({ product, index }) {
  // fetch product image
  const baseImgUrl = "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes";

  return (
    <div className="relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium snap-start">
      <div className="flex flex-col items-stretch gap-4 h-full">
        <Button size="sm" isIconOnly className="absolute right-6 top-6 z-20 rounded-full">
          <FaStar className={product.isInWishlist ? "text-warning-500" : "text-default-500"} />
        </Button>
        <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
          <Image
            alt={product.title}
            src={\`\${baseImgUrl}/\${index + 1}.png\`}
            className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-125"
            removeWrapper
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <Link href="#" color="foreground">
              <h3 className="text-medium font-medium text-default-700">{product.title}</h3>
            </Link>
            <p className="text-medium font-medium text-default-500">{product.price}</p>
          </div>
          <p className="text-small text-default-500">{product.description}</p>
          <Rating rating={product.rating} peoplerated={product.peopleRated} />
          <div className="flex gap-2">
            <Button color={product.isAddedToCart ? "default" : "primary"} fullWidth>
              {product.isAddedToCart ? "View Cart" : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
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
      fileName: "Loading.jsx",
      code: `import React from "react";
import { Skeleton } from "@nextui-org/react";

export function LoadingCard() {
  return (
    <div className="relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium snap-start">
      <div className="flex flex-col items-stretch gap-2 h-full">
        <Skeleton className="rounded-medium">
          <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2" />
        </Skeleton>
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="rounded-md w-4/5"><div className="w-full h-6" /></Skeleton>
          <Skeleton className="rounded-md w-1/5"><div className="w-full h-6" /></Skeleton>
        </div>
        <Skeleton className="rounded-md w-full"><div className="w-full h-16" /></Skeleton>
        <Skeleton className="rounded-md w-full"><div className="w-full h-6" /></Skeleton>
        <Skeleton className="rounded-md w-full"><div className="w-full h-10" /></Skeleton>
      </div>
    </div>
  );
}`,
    },
    {
      fileName: "data.js",
      code: dataCode,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/product-list-xnx9xs?file=%2FApp.jsx"
    />
  );
};

export default ProductList;
