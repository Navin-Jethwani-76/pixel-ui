"use client";
import React from "react";
import { Card, Image, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function ComponentCard({
  component,
  href,
}: {
  component: {
    key: string;
    name: string;
  };
  href: string;
}) {
  const router = useRouter();
  return (
    <Card
      isFooterBlurred
      radius="lg"
      key={component.key}
      className="w-full md:max-w-xs h-full border-none"
      isPressable
      onPress={() => {
        router.push(href);
      }}
    >
      <Image
        alt={component.name + "Component"}
        src={`${href}.png`}
        className="w-full h-56"
        removeWrapper
      />
      <CardFooter className="justify-center border-foreground/20 border-1 absolute rounded-large bottom-0 w-full z-10 min-h-10">
        <p className="text-tiny text-white/80">{component.name}</p>
      </CardFooter>
    </Card>
  );
}

export default ComponentCard;
