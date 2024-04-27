"use client";
import React, { useState } from "react";
import {
  Progress,
  Input,
  Card,
  CardBody,
  Button,
  User,
  ScrollShadow,
  Link,
  RadioGroup,
  useRadio,
  VisuallyHidden,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Divider,
  Textarea,
  RadioProps,
} from "@/lib/nextui";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import { ViewProps } from "@/app/components";
import { ReviewType } from "@/app/components/ecommerce/reviews";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight, FaPen, FaStar } from "react-icons/fa6";
import { RatingRadioProps } from "@/app/components/ecommerce/product-list";
import { MdOutlineMailOutline, MdOutlinePerson } from "react-icons/md";

const ProductReviews: ReviewType[] = [
  {
    user: (
      <User
        name="John Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Great product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 5,
  },
  {
    user: (
      <User
        name="Jane Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Fantastic product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 4,
  },
  {
    user: (
      <User
        name="Robert Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29066708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Beautiful product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 3,
  },
  {
    user: (
      <User
        name="Mark Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Average product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 2,
  },
  {
    user: (
      <User
        name="Frank Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Disappointing product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 1,
  },
  {
    user: (
      <User
        name="Zoe Doe"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29926708c",
        }}
        description={"August 1, 2021"}
      />
    ),
    heading: "Great product",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
    rating: 5,
  },
];

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
          isLessThanOrEqualToSelected ? `text-warning` : `text-default-200`
        }
      />
    </Component>
  );
};
const radioOptions = ["1", "2", "3", "4", "5"];

const Rating = ({ rating }: { rating?: number }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <RadioGroup orientation="horizontal" isReadOnly>
          {radioOptions.map((option) => {
            return (
              <CustomRadio
                key={option}
                value={option}
                rating={rating ?? 1}
                className={rating ? "cursor-default" : ""}
              />
            );
          })}
        </RadioGroup>
      </div>
    </>
  );
};

const Reviews = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");

  const Review = ({ review }: { review: ReviewType }) => {
    return (
      <Card className={`w-full `}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            {review.user}
            <Rating rating={review.rating} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-default-900">{review.heading}</p>
            <p className="text-default-500">{review.comment}</p>
          </div>
        </CardBody>
      </Card>
    );
  };

  // Define the star ratings and their corresponding values
  const starRatings = [
    { stars: 5, value: 86 },
    { stars: 4, value: 36 },
    { stars: 3, value: 18 },
    { stars: 2, value: 24 },
    { stars: 1, value: 22 },
  ];

  // Function to generate Progress components
  const renderProgressComponents = () => {
    return starRatings.map((rating) => (
      <Progress
        key={rating.stars}
        value={rating.value}
        maxValue={100}
        color="warning"
        label={`${rating.stars} stars`}
        showValueLabel={true}
      />
    ));
  };

  const ReviewsComponent = () => {
    return (
      <div className="flex flex-col justify-between gap-4 w-full h-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center gap-4">
            <p className="text-xl font-medium">136 Reviews</p>
            <Link href="#" className="flex gap-2">
              <span className="font-medium">See all</span>
              <FaArrowRight />
            </Link>
          </div>
          <Input
            placeholder="Search For Reviews"
            startContent={<FaSearch size={20} />}
            variant="bordered"
          />
        </div>
        <ScrollShadow
          className={`flex flex-wrap justify-center items-center gap-2 w-full h-full max-h-[550px]`}
          size={0}
          hideScrollBar
        >
          {ProductReviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
        </ScrollShadow>
      </div>
    );
  };

  const ReviewSumamry = () => {
    const [selected, setSelected] = useState("3");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
              isLessThanOrEqualToSelected ? `text-warning` : `text-default-200`
            }
          />
        </Component>
      );
    };

    return (
      <>
        <Card className={`w-full px-2 py-4`}>
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2 items-center">
                <FaStar className="text-warning" />
                <p className="text-xl font-medium">4.5</p>
              </div>
              <p className="text-default-500">136 reviews</p>
            </div>
            <div className="flex flex-col gap-2">
              {renderProgressComponents()}
            </div>
            <Button
              variant="bordered"
              fullWidth
              className="rounded-full"
              startContent={<FaPen size={20} />}
              onPress={onOpen}
            >
              Write a review
            </Button>
            <p className="px-2 text-small text-default-500">
              Share your experience with this product
            </p>
          </CardBody>
        </Card>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-large font-semibold">
                        Write a review
                      </h1>
                      <p className="text-small font-normal text-default-400">
                        Share your experience with this product
                      </p>
                    </div>
                    <Input
                      label="Name"
                      autoComplete="name"
                      placeholder="Enter Your Name"
                      variant="bordered"
                      startContent={<MdOutlinePerson />}
                    />
                    <Input
                      label="Email"
                      autoComplete="email"
                      placeholder="Enter Your Email"
                      variant="bordered"
                      startContent={<MdOutlineMailOutline />}
                    />
                    <Divider />
                    <div className="flex flex-col gap-2 items-start">
                      <span className="text-small">Rating</span>
                      <RadioGroup
                        orientation="horizontal"
                        value={selected}
                        onValueChange={setSelected}
                      >
                        {radioOptions.map((option) => {
                          return <CustomRadio key={option} value={option} />;
                        })}
                      </RadioGroup>
                    </div>
                    <Input
                      label="Title"
                      placeholder="Title of your review"
                      variant="bordered"
                      startContent={<FaPen size={12} />}
                    />
                    <Textarea
                      minRows={6}
                      label="Comment"
                      placeholder="Enter your comment"
                      variant="bordered"
                    />
                    <Button fullWidth color="primary" onPress={onClose}>
                      Submit Review
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  };

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-col w-full h-full p-4 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {maxWidth == "100%" ? (
            <div className={`flex flex-row gap-4 w-full max-w-5xl h-full`}>
              <div className={`flex w-1/3 h-full`}>
                <ReviewSumamry />
              </div>
              <div className="flex justify-center items-center w-2/3 h-full">
                <ReviewsComponent />
              </div>
            </div>
          ) : (
            <>
              <ScrollShadow
                className={`w-full h-full max-h-[655px]`}
                size={0}
                hideScrollBar
              >
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className={`flex w-full h-full`}>
                    <ReviewSumamry />
                  </div>
                  <ReviewsComponent />
                </div>
              </ScrollShadow>
            </>
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
import { Input, ScrollShadow, Link } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Reviews } from "./data";
import { Sumamry } from "./Sumamry";
import { ReviewCard } from "./ReviewCard";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl h-full">
      <div className="w-full lg:w-1/3 h-full lg:h-[calc(100vh-2rem)]">
        <Sumamry />
      </div>
      <div className="flex flex-col gap-2 w-full lg:w-2/3 h-full lg:h-[calc(100vh-2rem)]">
        <div className="flex justify-between items-center gap-4">
          <p className="text-xl font-medium">136 Reviews</p>
          <Link href="#" className="flex gap-2">
            <span className="font-medium">See all</span>
            <FaArrowRight />
          </Link>
        </div>
        <Input placeholder="Search For Reviews" startContent={<FaSearch size={20} />} variant="bordered" />
        <ScrollShadow className="flex flex-wrap justify-center pe-0 lg:pe-2 items-center gap-2 w-full h-full" size={0}>
          {Reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}`,
    },
    {
      fileName: "Sumamry.jsx",
      code: `"use client";
import React, { useState } from "react";
import {
  Progress,
  Input,
  Card,
  CardBody,
  Button,
  RadioGroup,
  useRadio,
  VisuallyHidden,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Divider,
  Textarea,
} from "@nextui-org/react";
import { MdOutlineMailOutline, MdOutlinePerson } from "react-icons/md";
import { FaPen, FaStar } from "react-icons/fa6";

export function Sumamry() {
  const [selected, setSelected] = useState("3");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const radioOptions = ["1", "2", "3", "4", "5"];

  const CustomRadio = (props) => {
    const { Component, getBaseProps, getInputProps, getControlProps } = useRadio(props);
    const isLessThanOrEqualToSelected = parseInt(props.value) <= parseInt(selected);

    return (
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <FaStar
          {...getControlProps()}
          size={20}
          className={
            isLessThanOrEqualToSelected ? "text-warning" : "text-default-200"
          }
        />
      </Component>
    );
  };

  // dummy values
  const starRatings = [
    { stars: 5, value: 86 },
    { stars: 4, value: 36 },
    { stars: 3, value: 18 },
    { stars: 2, value: 24 },
    { stars: 1, value: 22 },
  ];

  const renderProgressComponents = () => {
    return starRatings.map((rating) => (
      <Progress
        key={rating.stars}
        value={rating.value}
        maxValue={100}
        color="warning"
        label={\`\${rating.stars} stars\`}
        showValueLabel={true}
      />
    ));
  };

  return (
    <>
      <Card className="w-full h-full px-2 py-4">
        <CardBody className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-2 items-center">
              <FaStar className="text-warning" />
              <p className="text-xl font-medium">4.5</p>
            </div>
            <p className="text-default-500">136 reviews</p>
          </div>
          <div className="flex flex-col gap-2">
            {renderProgressComponents()}
          </div>
          <Button
            variant="bordered"
            fullWidth
            className="rounded-full"
            startContent={<FaPen size={20} />}
            onPress={onOpen}
          >
            Write a review
          </Button>
          <p className="px-2 text-small text-default-500">Share your experience with this product</p>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-large font-semibold">Write a review</h1>
                    <p className="text-small font-normal text-default-400">Share your experience with this product</p>
                  </div>
                  <Input label="Name" autoComplete="name" placeholder="Enter Your Name" variant="bordered" startContent={<MdOutlinePerson />} />
                  <Input label="Email" autoComplete="email" placeholder="Enter Your Email" variant="bordered" startContent={<MdOutlineMailOutline />} />
                  <Divider />
                  <div className="flex flex-col gap-2 items-start">
                    <span className="text-small">Rating</span>
                    <RadioGroup orientation="horizontal" value={selected} onValueChange={setSelected}>
                      {radioOptions.map((option) => {
                        return <CustomRadio key={option} value={option} />;
                      })}
                    </RadioGroup>
                  </div>
                  <Input label="Title" placeholder="Title of your review" variant="bordered" startContent={<FaPen size={12} />} />
                  <Textarea minRows={6} label="Comment" placeholder="Enter your comment" variant="bordered" />
                  <Button fullWidth color="primary" onPress={onClose}>Submit Review</Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}`,
    },
    {
      fileName: "ReviewCard.jsx",
      code: `import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Rating } from "./Rating";

export function ReviewCard({ review }) {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          {review.user}
          <Rating rating={review.rating} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-default-900">{review.heading}</p>
          <p className="text-default-500">{review.comment}</p>
        </div>
      </CardBody>
    </Card>
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
          isLessThanOrEqualToSelected ? "text-warning" : "text-default-200"
        }
      />
    </Component>
  );
};

export const Rating = ({ rating }) => {
  return (
    <div className="flex gap-2 items-center">
      <RadioGroup orientation="horizontal">
        {radioOptions.map((option) => {
          return (
            <CustomRadio key={option} value={option} rating={rating} className="cursor-default" />
          );
        })}
      </RadioGroup>
    </div>
  );
}`,
    },
    {
      fileName: "data.jsx",
      code: `import React from "react";
import { User } from "@nextui-org/react";

export const Reviews = [
  {
    user: (
      <User
        name="John Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        }}
      />
    ),
    heading: "Great product",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
  {
    user: (
      <User
        name="Jane Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
        }}
      />
    ),
    heading: "Fantastic product",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
  {
    user: (
      <User
        name="Robert Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29066708c",
        }}
      />
    ),
    heading: "Beautiful product",
    rating: 3,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
  {
    user: (
      <User
        name="Mark Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
        }}
      />
    ),
    heading: "Average product",
    rating: 2,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
  {
    user: (
      <User
        name="Frank Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
        }}
      />
    ),
    heading: "Disappointing product",
    rating: 1,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
  {
    user: (
      <User
        name="Zoe Doe"
        description={"August 1, 2021"}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29926708c",
        }}
      />
    ),
    heading: "Great product",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, nisi.",
  },
];`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/reviews-5tdnj8?file=%2FApp.jsx"
    />
  );
};

export default Reviews;
