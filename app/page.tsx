import React from "react";
import { Button, Card, CardBody, CardHeader, Link } from "@/lib/nextui";
import { IconType } from "react-icons";
import { BsLightningCharge } from "react-icons/bs";
import { FaAccessibleIcon, FaArrowRight, FaListCheck } from "react-icons/fa6";
import { LuServer } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiNextdotjs, SiVercel } from "react-icons/si";

const cardContents: {
  heading: string;
  description: string;
  Icon: IconType;
}[] = [
  {
    heading: "Fast",
    description: `Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.`,
    Icon: BsLightningCharge,
  },
  {
    heading: "Light & Dark UI",
    description: `All the components are designed to work in dark mode and light mode. NextUI automatically changes the theme when detects HTML theme prop changes.`,
    Icon: MdOutlineDarkMode,
  },
  {
    heading: "React server components",
    description: `You can directly use all the components in a React Server Component (RSC). The components that need to be rendered on client include "use client" on top of the code`,
    Icon: LuServer,
  },
  {
    heading: "Accessible components",
    description: `All the components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management.`,
    Icon: FaAccessibleIcon,
  },
];

const linkedCards: {
  heading: string;
  description: string;
  Icon: IconType;
  link: string;
}[] = [
  {
    heading: "Getting Started",
    description: `Make beautiful, modern, and fast applications by installing just a few packages.`,
    Icon: FaListCheck,
    link: "/docs/installation",
  },
  {
    heading: "PixelUI + Next.js",
    description: `We have a Next.Js template with some of Pixel UI Components Included. Start your next Project with a single command.`,
    Icon: SiNextdotjs,
    link: "/docs/next-js",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full flex flex-col gap-4 items-center p-4">
        <div className="text-center leading-8 md:leading-10">
          <div className="inline-block">
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
              The&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              Open Source&nbsp;
            </h1>
          </div>
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            alternative to{" "}
            <Link
              href="https://nextui.pro/"
              isExternal
              className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl"
            >
              NextUI Pro
            </Link>
          </h1>
        </div>
        <h2 className="!w-full md:w-1/2 text-lg lg:text-xl font-normal text-default-500 block max-w-full text-center">
          Explore a collection of beautiful and responsive components, built
          with Beautiful, fast and modern React UI library{" "}
          <Link
            href="https://nextui.org/"
            isExternal
            className="text-lg lg:text-xl font-normal"
          >
            NextUI
          </Link>
        </h2>
        <div className="flex gap-4 justify-center md:justify-start items-center">
          <Button
            as={Link}
            href="/components"
            color="primary"
            endContent={<FaArrowRight />}
          >
            Explore Components
          </Button>
          <Button as={Link} href="/docs/installation" variant="bordered">
            Docs
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">
          {cardContents.map((card, index) => (
            <Card key={index} className="w-full max-w-xs min-h-44" isPressable>
              <CardHeader className="pb-0 flex gap-4 items-center text-base font-semibold">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-blue-500">
                  <card.Icon size={24} />
                </div>
                {card.heading}
              </CardHeader>
              <CardBody className="font-normal text-base text-default-500">
                {card.description}
              </CardBody>
            </Card>
          ))}
          {linkedCards.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-xs min-h-44 hover:opacity-100"
              as={Link}
              href={card.link}
            >
              <CardHeader className="pb-0 flex gap-4 items-center text-base font-semibold">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-blue-500">
                  <card.Icon size={24} />
                </div>
                {card.heading}
              </CardHeader>
              <CardBody className="font-normal text-base text-default-500">
                {card.description}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <Link
          className="flex justify-center items-center gap-2"
          color="foreground"
          href="https://www.vercel.com/"
          isExternal
        >
          <p className="font-normal">Deployed on</p>
          <div className="flex gap-1">
            <SiVercel size={24} />
            <p className="font-normal">Vercel</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
