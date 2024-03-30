import React, { Dispatch, SetStateAction } from "react";
import { Button, ScrollShadow, Tab, Tabs, Tooltip } from "@nextui-org/react";
import { FaLaptopCode, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { PiCodesandboxLogo } from "react-icons/pi";

interface PropSideBarProps {
  PreviewProps: () => React.JSX.Element;
  CodeProps: () => React.JSX.Element;
  setMaxWidth: Dispatch<SetStateAction<"375px" | "768px" | "100%">>;
  currentView: string;
}

const PropSideBar = ({
  PreviewProps,
  setMaxWidth,
  currentView,
  CodeProps,
}: PropSideBarProps) => {
  const isPreviewEnabled = currentView == "preview";
  return (
    <div className="hidden md:flex flex-col gap-7 lg:gap-3 items-center w-2/5">
      <div
        className={`flex w-full gap-4 justify-${
          isPreviewEnabled ? "between" : "end"
        } items-center max-w-[230px] px-2`}
      >
        {isPreviewEnabled && (
          <Tabs
            variant="solid"
            aria-label="View Tabs"
            defaultSelectedKey={"laptop"}
            onSelectionChange={(key) => {
              if (key === "mobile") {
                setMaxWidth("375px");
              } else if (key === "tablet") {
                setMaxWidth("768px");
              } else {
                setMaxWidth("100%");
              }
            }}
          >
            <Tab key={"mobile"} title={<FaMobileAlt />} />
            <Tab key={"tablet"} title={<FaTabletAlt />} />
            <Tab key={"laptop"} title={<FaLaptopCode />} />
          </Tabs>
        )}
        <Tooltip content="Open in Code Sandbox">
          <Button isIconOnly variant="bordered" size="sm">
            <PiCodesandboxLogo />
          </Button>
        </Tooltip>
      </div>
      <ScrollShadow
        className="sticky left-0 hidden md:flex flex-col gap-4 w-full h-full max-w-[230px] max-h-[670px] border-small px-2 py-4 rounded-small border-default-200 dark:border-default-100"
        hideScrollBar
      >
        {isPreviewEnabled ? <>{PreviewProps()}</> : <>{CodeProps()}</>}
      </ScrollShadow>
    </div>
  );
};

export default PropSideBar;
