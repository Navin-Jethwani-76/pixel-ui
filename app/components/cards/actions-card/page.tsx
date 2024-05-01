"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Checkbox, CheckboxGroup } from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import { CardsContentsType } from "@/app/components/cards";
import UiComponent from "@/lib/ui";
import {
  MdDeleteOutline,
  MdOutlineAirplanemodeInactive,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

const CardsContents: CardsContentsType[] = [
  {
    title: "Create a new agreement",
    description: "Create a new Direct Employee Agreement template.",
    icon: MdOutlineCreateNewFolder,
    iconColor: "default",
  },
  {
    title: "Edit agreement",
    description: "Edit the Direct Employee Agreement template.",
    icon: FaUserEdit,
    iconColor: "secondary",
  },
  {
    title: "Verify identity",
    description: "Verify your identity to access all features.",
    icon: BsPersonCheck,
    iconColor: "success",
  },
  {
    title: "Add payment method",
    description: "Add a new payment method to your account.",
    icon: RiSecurePaymentLine,
    iconColor: "primary",
  },
  {
    title: "Set to inactive",
    description: "Deactivate the employee agreement.",
    icon: MdOutlineAirplanemodeInactive,
    iconColor: "warning",
  },
  {
    title: "Delete agreement",
    description: "Delete the employee agreement.",
    icon: MdDeleteOutline,
    iconColor: "danger",
  },
];

const ActionsCards = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [withIcons, setWithIcons] = useState(true);
  const [cardAsButton, setCardAsButton] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const newSelected = [
      withIcons && "withIcons",
      cardAsButton && "cardasbutton",
    ].filter(Boolean) as string[]; // Filter out false values
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithIcons(selected.includes("withIcons"));
    setCardAsButton(selected.includes("cardasbutton"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
        <CheckboxGroup
          label="Options"
          color="secondary"
          value={selected}
          onValueChange={setSelected}
        >
          <Checkbox value="withIcons">With Icons</Checkbox>
          <Checkbox value="cardasbutton">card as button</Checkbox>
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
          <div
            className={`flex flex-col items-center gap-4 w-full ${
              maxWidth === "375px" ? "max-w-[360px]" : "max-w-sm"
            }`}
          >
            {CardsContents.map((card) => {
              return (
                <Card
                  key={card.title}
                  isPressable={cardAsButton}
                  className="w-full max-w-sm"
                >
                  <CardBody className="flex flex-row gap-4 items-center">
                    {withIcons && (
                      <div
                        className={`item-center flex rounded-medium p-2 bg-${card.iconColor}-50 border-${card.iconColor}-100`}
                      >
                        {card.icon && (
                          <card.icon
                            size={24}
                            className={`text-${card.iconColor}`}
                          />
                        )}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-medium">{card.title}</p>
                      <p className="text-small text-default-400">
                        {card.description}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
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
import { CardsContents } from "./data";
import { Card, CardBody } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs sm:max-w-sm">
      {CardsContents.map((card) => (
        <Card key={card.title} isPressable={${cardAsButton}} className="w-full max-w-sm">
          <CardBody className="flex flex-row gap-4 items-center">
            ${
              withIcons
                ? `<div className={\`item-center flex rounded-medium p-2 bg-\${card.iconColor}-50 border-\${card.iconColor}-100\`}>
              {card.icon && (
                <card.icon size={24} className={\`text-\${card.iconColor}\`} />
              )}
            </div>`
                : ``
            }
            <div className="flex flex-col">
              <p className="text-medium">{card.title}</p>
              <p className="text-small text-default-400">{card.description}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineAirplanemodeInactive, MdOutlineCreateNewFolder } from "react-icons/md";

export const CardsContents = [
  {
    title: "Create a new agreement",
    description: "Create a new Direct Employee Agreement template.",
    icon: MdOutlineCreateNewFolder,
    iconColor: "default",
  },
  {
    title: "Edit agreement",
    description: "Edit the Direct Employee Agreement template.",
    icon: FaUserEdit,
    iconColor: "secondary",
  },
  {
    title: "Verify identity",
    description: "Verify your identity to access all features.",
    icon: BsPersonCheck,
    iconColor: "success",
  },
  {
    title: "Add payment method",
    description: "Add a new payment method to your account.",
    icon: RiSecurePaymentLine,
    iconColor: "primary",
  },
  {
    title: "Set to inactive",
    description: "Deactivate the employee agreement.",
    icon: MdOutlineAirplanemodeInactive,
    iconColor: "warning",
  },
  {
    title: "Delete agreement",
    description: "Delete the employee agreement.",
    icon: MdDeleteOutline,
    iconColor: "danger",
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
      sandBoxLink="https://codesandbox.io/p/devbox/actions-card-x4r4gh?file=%2FApp.jsx"
    />
  );
};

export default ActionsCards;
