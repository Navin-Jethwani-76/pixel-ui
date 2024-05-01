"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Link,
  Listbox,
  ListboxItem,
  ListboxSection,
  ScrollShadow,
  Snippet,
} from "@nextui-org/react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { IconType } from "react-icons";
import { SiNextdotjs, SiRemix, SiVitest } from "react-icons/si";

const linkedCards = [
  {
    heading: "Next.js",
    description: `Full-featured React framework with great developer experience.`,
    Icon: SiNextdotjs,
    link: "/docs/next-js",
  },
  {
    heading: "Vite",
    description: `Fast and modern development server and build tool.`,
    Icon: SiVitest,
    link: "/docs/vite",
  },
  {
    heading: "Remix",
    description: `Full stack framework focused on web fundamentals and modern UX.`,
    Icon: SiRemix,
    link: "/docs/remix",
  },
];

function Page() {
  return (
    <div className="w-full h-full flex">
      <ScrollShadow
        className="w-full h-full lg:max-w-5xl max-h-[800px] flex flex-col gap-4 p-4 lg:ps-0 scroll-smooth"
        size={0}
        hideScrollBar
      >
        <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          Installation
        </h1>
        <div className="w-full flex flex-col gap-2">
          <p>Requirements:</p>
          <ul className="list-disc flex flex-col gap-2 px-4">
            <li>
              <Link isExternal href="https://reactjs.org/">
                React 18
              </Link>{" "}
              or later
            </li>
            <li>
              <Link isExternal href="https://tailwindcss.com/">
                Tailwind CSS 3.4
              </Link>{" "}
              or later
            </li>
            <li>
              <Link isExternal href="https://www.framer.com/motion/">
                Framer Motion 4
              </Link>{" "}
              or later
            </li>
            <li>
              <Link isExternal href="https://nextui.org/">
                @nextui-org/react 2.2.1
              </Link>{" "}
              or later
            </li>
            <li>
              <Link isExternal href="https://www.tailwindcss-animated.com/">
                tailwindcss-animate 1.0.1
              </Link>{" "}
              or later
            </li>
            <li>
              <Link
                isExternal
                href="https://react-icons.github.io/react-icons/"
              >
                react-icons 5.0.1
              </Link>{" "}
              or later
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4" id="installation">
          <p>
            Follow the steps below to setup your React Project to use Pixel UI
            components
          </p>
          <ul className="list-decimal flex flex-col gap-4 lg:max-w-5xl ps-4">
            <li>
              <div className="flex flex-col gap-2" id="install-packages">
                <p>Install Packages</p>
                <Snippet
                  className="w-full"
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npm install @nextui-org/react framer-motion
                  tailwindcss-animated react-icons
                </Snippet>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2" id="tailwind-css-setup">
                <p>Tailwind CSS Setup</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[400px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animated")]
}

export default config;`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2" id="provider-setup">
                <p>Provider Setup</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`import * as React from "react";
// 1. import \`NextUIProvider\` component
import {NextUIProvider} from "@nextui-org/react";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <YourApplication />
    </NextUIProvider>
  );
}`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-4 w-full h-full"
          id="framework-guides"
        >
          <h2 className="text-lg">Framework Guides</h2>
          <div className="w-full flex flex-col md:justify-between items-center md:flex-row md:items-center gap-4">
            {linkedCards.map((card, index) => (
              <Card
                key={index}
                className="w-full md:max-w-xs hover:opacity-100"
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
      </ScrollShadow>
      <div className="hidden lg:flex flex-col gap-4 flex-1 h-full my-4">
        <Listbox variant="bordered" aria-label="Quick Links">
          <ListboxSection title={"Installation"} showDivider>
            <ListboxItem
              key={"install-packages"}
              textValue="Install Packages"
              href="#install-packages"
            >
              Install Packages
            </ListboxItem>
            <ListboxItem
              key={"tailwind-css-setup"}
              textValue="Tailwind CSS Setup"
              href="#tailwind-css-setup"
            >
              Tailwind CSS Setup
            </ListboxItem>
            <ListboxItem
              key={"provider-setup"}
              textValue="Provider Setup"
              href="#provider-setup"
            >
              Provider Setup
            </ListboxItem>
          </ListboxSection>
          <ListboxItem
            key={"framework-guides"}
            textValue="Framework Guides"
            href="#framework-guides"
          >
            Framework Guides
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
}

export default Page;
