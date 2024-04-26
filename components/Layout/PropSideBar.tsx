"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  ScrollShadow,
  Tab,
  Tabs,
  Tooltip,
  Link,
} from "@nextui-org/react";
import { FaLaptopCode, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { PiCodesandboxLogo } from "react-icons/pi";
import { FaBug, FaCheck, FaGithub, FaRegCopy } from "react-icons/fa6";

interface PropSideBarProps {
  PreviewProps: () => React.JSX.Element;
  setMaxWidth?: Dispatch<SetStateAction<"375px" | "768px" | "100%">>;
  currentView: string;
  sandBoxLink?: string;
  currentCode?: string | undefined;
  codeLength: number;
}

const PropSideBar = ({
  PreviewProps,
  setMaxWidth,
  currentView,
  sandBoxLink,
  currentCode,
  codeLength,
}: PropSideBarProps) => {
  const isPreviewEnabled = currentView == "preview";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (setMaxWidth) {
      if (window.innerWidth > 1024) {
        setMaxWidth("100%");
      } else if (window.innerWidth >= 768) {
        setMaxWidth("768px");
      } else if (window.innerWidth >= 320) {
        setMaxWidth("375px");
      }
    }
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-3 items-center w-1/4">
      <div
        className={`flex w-full gap-4 justify-${isPreviewEnabled ? "between" : "end"
          } items-center max-w-[230px] px-2`}
      >
        {isPreviewEnabled && (
          <Tabs
            variant="bordered"
            aria-label="View Tabs"
            defaultSelectedKey={"laptop"}
            size="sm"
            onSelectionChange={(key) => {
              {
                if (setMaxWidth)
                  if (key === "mobile") {
                    setMaxWidth("375px");
                  } else if (key === "tablet") {
                    setMaxWidth("768px");
                  } else {
                    setMaxWidth("100%");
                  }
              }
            }}
          >
            <Tab key={"mobile"} title={<FaMobileAlt />} />
            <Tab key={"tablet"} title={<FaTabletAlt />} />
            <Tab key={"laptop"} title={<FaLaptopCode />} />
          </Tabs>
        )}
        {!isPreviewEnabled && (
          <>
            <Tooltip content={copied ? "Copied" : "Copy"} size="sm">
              <Button
                isIconOnly
                variant="bordered"
                size="sm"
                onPress={() => {
                  if (codeLength == 0) return;
                  navigator.clipboard.writeText(currentCode ?? "");
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                }}
              >
                {copied ? <FaCheck color="green" /> : <FaRegCopy />}
              </Button>
            </Tooltip>
            <Tooltip content="Report a bug" size="sm">
              <Button isIconOnly variant="bordered" size="sm">
                <FaBug />
              </Button>
            </Tooltip>
            <Tooltip content="Edit on Github" size="sm">
              <Button isIconOnly variant="bordered" size="sm">
                <FaGithub />
              </Button>
            </Tooltip>
          </>
        )}
        <Tooltip content="Open in Code Sandbox" size="sm">
          <Button
            isIconOnly
            variant="bordered"
            size="sm"
            as={Link}
            href={sandBoxLink ?? "#"}
            isExternal
          >
            <PiCodesandboxLogo />
          </Button>
        </Tooltip>
      </div>
      <ScrollShadow
        className={`sticky left-0 hidden md:flex flex-col gap-4 w-full h-full max-w-[230px] ${isPreviewEnabled ? "max-h-[733px]" : "max-h-[738px]"} border-small px-2 py-4 rounded-small border-default-200 dark:border-default-100`}
        hideScrollBar
        size={0}
      >
        {PreviewProps()}
      </ScrollShadow>
    </div>
  );
};

export default PropSideBar;
