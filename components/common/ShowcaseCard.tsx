"use client";
import React, { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface ShowcaseCard {
  card: {
    heading: string;
    description: string;
    Icon: ReactElement<IconType>;
    link?: string;
  };
}

function ShowcaseCard({ card }: ShowcaseCard) {
  const router = useRouter();
  return (
    <Card
      className="w-full md:max-w-xs h-full"
      isPressable
      onPress={() => {
        if (card?.link) router.push(card?.link);
        return;
      }}
    >
      <CardHeader className="pb-0 flex gap-4 items-center text-base font-semibold">
        <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-blue-500">
          {card.Icon}
        </div>
        {card.heading}
      </CardHeader>
      <CardBody className="font-normal text-base text-default-500">
        {card.description}
      </CardBody>
    </Card>
  );
}

export default ShowcaseCard;
