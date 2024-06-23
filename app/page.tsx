import React from "react";
import { Button, Card, CardBody, CardHeader, Link } from "@/lib/nextui";
import { IconType } from "react-icons";
import { BsLightningCharge } from "react-icons/bs";
import { FaAccessibleIcon, FaArrowRight, FaListCheck } from "react-icons/fa6";
import { LuServer } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiNextdotjs, SiVercel } from "react-icons/si";
import ShowcaseCard from "@/components/common/ShowcaseCard";

const cardContents = [
  {
    heading: "Fast",
    description: `Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.`,
    Icon: <BsLightningCharge size={24} />,
  },
  {
    heading: "Light & Dark UI",
    description: `All the components are designed to work in dark mode and light mode. NextUI automatically changes the theme when detects HTML theme prop changes.`,
    Icon: <MdOutlineDarkMode size={24} />,
  },
  {
    heading: "React server components",
    description: `You can directly use all the components in a React Server Component (RSC). The components that need to be rendered on client include "use client" on top of the code`,
    Icon: <LuServer size={24} />,
  },
  {
    heading: "Accessible components",
    description: `All the components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management.`,
    Icon: <FaAccessibleIcon size={24} />,
  },
];

const linkedCards = [
  {
    heading: "Getting Started",
    description: `Make beautiful, modern, and fast applications by installing just a few packages.`,
    Icon: <FaListCheck size={24} />,
    link: "/docs/installation",
  },
  {
    heading: "PixelUI + Next.js",
    description: `We have a Next.Js template with some of Pixel UI Components Included. Start your next Project with a single command.`,
    Icon: <SiNextdotjs size={24} />,
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
              Prebuilt&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              <Link
                href="https://nextui.org/"
                isExternal
                className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl"
              >
                NextUI
              </Link>{" "}
              Components&nbsp;
            </h1>
          </div>
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
            <ShowcaseCard key={index} card={card} />
          ))}
          {linkedCards.map((card, index) => (
            <ShowcaseCard key={index} card={card} />
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
