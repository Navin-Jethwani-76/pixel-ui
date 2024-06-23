"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  Card,
  CardBody,
  Textarea,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Radio,
  Modal as NextUiModal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@/lib/nextui";
import {
  CustomRadioOption,
  FeedbackType,
  FeedbackTypeOptions,
} from "@/app/components/marketing/feedback";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import { LuFrown, LuMeh, LuSmile, LuSmilePlus } from "react-icons/lu";
import { RatingRadioGroupCode } from "@/app/components/marketing/feedback/code";

const Feedback = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [type, setType] = useState<FeedbackType["type"]>("textarea");

  const RatingRadioGroup = () => {
    const [selected, setSelected] = React.useState("smile");

    // Define the radio options
    const radioOptions: CustomRadioOption[] = [
      { value: "frown", icon: LuFrown, color: "text-danger" },
      { value: "meh", icon: LuMeh, color: "text-foreground" },
      { value: "smile", icon: LuSmile, color: "text-primary" },
      { value: "smile-plus", icon: LuSmilePlus, color: "text-success" },
    ];

    // Function to render a Radio component
    const renderRadio = (option: CustomRadioOption) => (
      <Radio
        classNames={{
          wrapper: "hidden",
          labelWrapper: "ml-0",
        }}
        value={option.value}
        key={option.value}
      >
        <option.icon
          size={24}
          className={`transition-transform-colors ${
            selected === option.value
              ? option.color
              : "text-default-400 dark:text-default-300"
          } group-data-[pressed=true]:scale-90`}
        />
      </Radio>
    );

    return (
      <>
        <RadioGroup
          orientation="horizontal"
          value={selected}
          onValueChange={setSelected}
        >
          {radioOptions.map(renderRadio)}
        </RadioGroup>
      </>
    );
  };

  const TextArea = () => {
    return (
      <>
        <Card className="w-full max-w-xs bg-transparent">
          <CardBody className="flex flex-col gap-4">
            <Textarea
              variant="bordered"
              placeholder="Ideas or suggestions to improve our product"
            />
            <Divider />
            <div className="flex justify-between gap-4 items-center">
              <RatingRadioGroup />
              <Button color="secondary" size="sm">
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  };

  const PopOver = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Popover
          placement="bottom"
          classNames={{
            content: "p-0 w-[300px] bg-transparent",
          }}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Button variant="bordered">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <TextArea />
          </PopoverContent>
        </Popover>
      </>
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
          defaultSelectedKeys={["textarea"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as FeedbackType["type"]);
          }}
        >
          {FeedbackTypeOptions.map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
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
        type == "basic"
          ? `import React from "react";
import RatingRadioGroup from "./RatingRadioGroup"

const App = () => {
  return (
    <RatingRadioGroup />
  );
};

export default App;`
          : type == "textarea"
          ? `import React from "react";
import RatingRadioGroup from "./RatingRadioGroup"
import { Button, Card, CardBody, Textarea, Divider } from "@nextui-org/react";

const App = () => {
  return (
    <Card className="w-full max-w-xs">
      <CardBody className="flex flex-col gap-4">
        <Textarea
          variant="bordered"
          placeholder="Ideas or suggestions to improve our product"
        />
        <Divider />
        <div className="flex justify-between gap-4 items-center">
          <RatingRadioGroup />
          <Button color="secondary" size="sm">
            Submit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default App;`
          : type == "popover"
          ? `"use client";
import React, { useState } from "react";
import RatingRadioGroup from "./RatingRadioGroup"
import { Button, Card, CardBody, Textarea, Divider, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      placement="bottom"
      classNames={{
        content: "p-0 w-[300px]",
      }}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button variant="bordered">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Card className="w-full max-w-xs">
          <CardBody className="flex flex-col gap-4">
            <Textarea
              variant="bordered"
              placeholder="Ideas or suggestions to improve our product"
            />
            <Divider />
            <div className="flex justify-between gap-4 items-center">
              <RatingRadioGroup />
              <Button color="secondary" size="sm">
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default App;`
          : `"use client";
import React from "react";
import RatingRadioGroup from "./RatingRadioGroup"
import { Button, Textarea, Divider, Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

const App = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant="bordered" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col gap-4 pt-12 pb-4 text-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-medium">
                    Help us improve Acme.
                  </h1>
                  <p className="text-small font-normal text-default-500">
                    We value your feedback. If you have any ideas or
                    suggestions to improve our product, let us know.
                  </p>
                </div>
                <Textarea
                  variant="bordered"
                  minRows={6}
                  placeholder="Ideas or suggestions to improve our product"
                />
                <Divider />
                <div className="flex justify-between items-center gap-4">
                  <RatingRadioGroup />
                  <div className="flex gap-4">
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="secondary" onPress={onClose}>
                      Submit
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default App;`
      }`,
    },
    {
      fileName: "RatingRadioGroup.jsx",
      code: RatingRadioGroupCode,
    },
  ];

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex w-full h-full rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {type == "basic" ? (
            <RatingRadioGroup />
          ) : type == "textarea" ? (
            <TextArea />
          ) : (
            <PopOver />
          )}
        </div>
      </>
    );
  };

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/feedback-pggclc?file=%2FApp.jsx"
    />
  );
};

export default Feedback;
