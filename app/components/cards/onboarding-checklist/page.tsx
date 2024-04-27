"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Input,
  Listbox,
  ListboxItem,
  Progress,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import dynamic from "next/dynamic";
const UiComponent = dynamic(() => import("@/components/common/ui-component"), {
  ssr: false,
});
import { OnboaringType } from "@/app/components/cards";
import {
  FaCircleCheck,
  FaPersonSnowboarding,
  FaRegCircleUser,
} from "react-icons/fa6";
import {
  LuBuilding2,
  LuCandlestickChart,
  LuPieChart,
  LuSend,
} from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoChevronForwardCircle } from "react-icons/io5";

const OnboardingList: OnboaringType[] = [
  {
    title: "Setup your company",
    description: "Add some details about your company.",
    icon: LuBuilding2,
    completed: true,
  },
  {
    title: "Add your team",
    description: "Invite your team members to your organization.",
    icon: FaRegCircleUser,
    completed: true,
  },
  {
    title: "Add shareholders",
    description:
      "Add your share holders to your organization and captable so they can view their holdings.",
    icon: MdOutlinePeopleAlt,
    completed: true,
  },
  {
    title: "Add valuations",
    description:
      "Add your company valuations to your captable to help track your progress.",
    icon: LuCandlestickChart,
    completed: false,
  },
  {
    title: "Create option pool",
    description: "Create an option pool to grant options to your team.",
    icon: LuPieChart,
    completed: false,
  },
  {
    title: "Create and send an offer",
    description: "Create an offer and send it to a potential employee.",
    icon: LuSend,
    completed: false,
  },
];

const OnBoardChecklist = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [selected, setSelected] = useState<string[]>([]);
  const [withIcons, setWithIcons] = useState(true);
  const [totalItems, setTotalItems] = useState(6);
  const [itemsCompleted, setItemsCompleted] = useState(3);
  const [items, setItems] = useState(OnboardingList);

  useEffect(() => {
    const newItems = OnboardingList.slice(0, totalItems);
    setItems(newItems);
    if (itemsCompleted > newItems.length) setItemsCompleted(newItems.length);
  }, [itemsCompleted, totalItems]);

  useEffect(() => {
    const updatedItems = items.map((item, index) => {
      return {
        ...item,
        completed: index < itemsCompleted,
      };
    });
    setItems(updatedItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsCompleted]);

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
          label="Completed Items"
          type="number"
          variant="bordered"
          max={totalItems}
          min={0}
          value={String(itemsCompleted)}
          onValueChange={(value) => {
            setItemsCompleted(Number(value));
          }}
        />
        <Input
          label="Total Items"
          type="number"
          variant="bordered"
          max={6}
          min={1}
          value={String(totalItems)}
          onValueChange={(value) => {
            setTotalItems(Number(value));
          }}
        />
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
          <Card
            className={`w-full ${
              maxWidth === "375px"
                ? "max-w-[360px]"
                : maxWidth === "768px"
                ? "max-w-md"
                : "max-w-lg"
            }`}
          >
            <CardBody className={`flex flex-col gap-4 w-full`}>
              <div className="flex flex-row gap-4">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-secondary-300 to-primary-500">
                  <FaPersonSnowboarding size={24} className="rounded-full" />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className="flex justify-between gap-4">
                    <p className="text-medium font-medium">Onboarding</p>
                    <p className="text-medium text-foreground/60">
                      {Math.ceil((itemsCompleted / totalItems) * 100)}%
                    </p>
                  </div>
                  <Progress
                    value={itemsCompleted}
                    maxValue={totalItems}
                    className="max-w-md rounded-full"
                    classNames={{
                      indicator:
                        "transition-transform !duration-500 bg-gradient-to-r from-primary-400 to-secondary-500",
                    }}
                  />
                </div>
              </div>
              <Listbox className="w-full">
                {items.map((item, index) => {
                  return (
                    <ListboxItem
                      key={index}
                      className="data-[hover=true]:bg-default/40 data-[selectable=true]:focus:bg-default/40 px-0 sm:px-1"
                      textValue={item.title}
                    >
                      <div className="w-full flex flex-row gap-3 justify-between items-center">
                        {withIcons && (
                          <div className="w-fit item-center flex rounded-medium border border-divider p-2">
                            <item.icon size={24} className="text-secondary" />
                          </div>
                        )}
                        <div className={`w-4/6 h-full flex flex-col`}>
                          <p className="flex-1 truncate text-medium font-medium max-w-full">
                            {item.title}
                          </p>
                          <p
                            className={`text-foreground-500 group-hover:text-current text-small w-full truncate max-h-5`}
                          >
                            {item.description}
                          </p>
                        </div>
                        <div className="w-fit flex items-center">
                          {item.completed ? (
                            <FaCircleCheck
                              size={24}
                              className="text-secondary"
                            />
                          ) : (
                            <IoChevronForwardCircle
                              size={24}
                              className="text-default-400"
                            />
                          )}
                        </div>
                      </div>
                    </ListboxItem>
                  );
                })}
              </Listbox>
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
      code: `"use client";
import React, { useMemo } from "react";
import { Card, CardBody, Listbox, ListboxItem, Progress } from "@nextui-org/react";
import { FaCircleCheck, FaPersonSnowboarding } from "react-icons/fa6";
import { IoChevronForwardCircle } from "react-icons/io5";
import { OnboardingList } from "./data";

export default function App() {
  const totalItems = ${totalItems};
  const itemsCompleted = ${itemsCompleted};

  const items = useMemo(() => {
    const updatedItems = OnboardingList.map((item, index) => {
      return {
        ...item,
        completed: index < itemsCompleted,
      };
    });
    return updatedItems.slice(0, totalItems);
  }, [itemsCompleted]);

  return (
    <Card className="w-full max-w-md">
      <CardBody className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-4">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-secondary-300 to-primary-500">
            <FaPersonSnowboarding size={24} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between gap-4">
              <p className="text-medium font-medium">Onboarding</p>
              <p className="text-medium text-foreground/60">
                {Math.ceil((itemsCompleted / totalItems) * 100)}%
              </p>
            </div>
            <Progress
              value={itemsCompleted}
              maxValue={totalItems}
              className="max-w-md rounded-full"
              classNames={{
                indicator:
                  "transition-transform !duration-500 bg-gradient-to-r from-primary-400 to-secondary-500",
              }}
            />
          </div>
        </div>
        <Listbox className="w-full">
          {items.map((item, index) => {
            return (
              <ListboxItem
                key={index}
                className="data-[hover=true]:bg-default/40 data-[selectable=true]:focus:bg-default/40 px-0 sm:px-1"
                textValue={item.title}
              >
                <div className="w-full flex flex-row gap-3 justify-between items-center">
                  ${
                    withIcons
                      ? `<div className="w-fit item-center flex rounded-medium border border-divider p-2">
                    <item.icon size={24} className="text-secondary" />
                  </div>`
                      : ``
                  }
                  <div className="h-full flex flex-col w-4/6">
                    <p className="flex-1 truncate text-medium font-medium max-w-full">
                      {item.title}
                    </p>
                    <p className="text-foreground-500 group-hover:text-current text-small truncate max-h-5 w-full">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-fit flex items-center">
                    {item.completed ? (
                      <FaCircleCheck size={24} className="text-secondary"/>
                    ) : (
                      <IoChevronForwardCircle size={24} className="text-default-400" />
                    )}
                  </div>
                </div>
              </ListboxItem>
            );
          })}
        </Listbox>
      </CardBody>
    </Card>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `import { FaRegCircleUser } from "react-icons/fa6";
import { LuBuilding2, LuCandlestickChart, LuPieChart, LuSend } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";

export const OnboardingList = [
  {
    title: "Setup your company",
    description: "Add some details about your company.",
    icon: LuBuilding2,
    completed: true,
  },
  {
    title: "Add your team",
    description: "Invite your team members to your organization.",
    icon: FaRegCircleUser,
    completed: true,
  },
  {
    title: "Add shareholders",
    description:
      "Add your share holders to your organization and captable so they can view their holdings.",
    icon: MdOutlinePeopleAlt,
    completed: true,
  },
  {
    title: "Add valuations",
    description:
      "Add your company valuations to your captable to help track your progress.",
    icon: LuCandlestickChart,
    completed: false,
  },
  {
    title: "Create option pool",
    description: "Create an option pool to grant options to your team.",
    icon: LuPieChart,
    completed: false,
  },
  {
    title: "Create and send an offer",
    description: "Create an offer and send it to a potential employee.",
    icon: LuSend,
    completed: false,
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
      sandBoxLink="https://codesandbox.io/p/devbox/onboarding-checklist-w4xfzq?file=%2FApp.jsx"
    />
  );
};

export default OnBoardChecklist;
