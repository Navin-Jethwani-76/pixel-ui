"use client";
import React, { useEffect, useState } from "react";
import "@/app/components/application/sideabar/Sidebar.styles.css";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Chip,
  Input,
  InputProps,
  Listbox,
  ListboxItem,
  ListboxSection,
  ScrollShadow,
  Select,
  SelectItem,
  User,
} from "@nextui-org/react";
import {
  ViewProps,
  btnColorOptions,
  btnVariantOptions,
  inputColorOptions,
  inputVariantOptions,
} from "@/app/components";
import UiComponent from "@/components/common/ui-component";
import { SideBarContents } from "@/app/components/application/sideabar";
import { RiHome5Line } from "react-icons/ri";
import { FiSidebar } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import {
  IoIosAddCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { SiNextui, SiPivotaltracker, SiTailwindcss } from "react-icons/si";
import { FaChartPie } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiMiniGiftTop } from "react-icons/hi2";
import { CiSettings, CiViewList } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import Logo from "@/components/common/Logo";

const ExtraContent: SideBarContents[] = [
  {
    key: "organization",
    label: "Organization",
    innerContents: [
      {
        title: "Cap Table",
        startContent: <FaChartPie />,
      },
      {
        title: "Analytics",
        startContent: <TbBrandGoogleAnalytics />,
      },
      {
        title: "Perks",
        startContent: <HiMiniGiftTop />,
        endContent: (
          <Chip className="rounded-full" size="sm">
            3
          </Chip>
        ),
      },
      {
        title: "Expenses",
        startContent: <CiViewList />,
      },
      {
        title: "Settings",
        startContent: <CiSettings />,
      },
    ],
  },
  {
    key: "teams",
    label: "Your Teams",
    innerContents: [
      {
        title: "NextUI",
        startContent: <SiNextui />,
      },
      {
        title: "Tailwind Variants",
        startContent: <SiTailwindcss />,
      },
    ],
  },
];

const SideBarList: SideBarContents[] = [
  {
    key: "overview",
    label: "Overview",
    innerContents: [
      {
        title: "Home",
        startContent: <RiHome5Line />,
      },
      {
        title: "Projects",
        startContent: <GrProjects />,
        endContent: <IoIosAddCircleOutline />,
      },
      {
        title: "Tasks",
        startContent: <FaTasks />,
        endContent: <IoIosAddCircleOutline />,
      },
      {
        title: "Team",
        startContent: <MdOutlinePeople />,
      },
      {
        title: "Tracker",
        startContent: <SiPivotaltracker />,
        endContent: (
          <Chip className="rounded-full" size="sm">
            New
          </Chip>
        ),
      },
    ],
  },
];

function SideBar() {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [selected, setSelected] = useState<string[]>([]);
  const [withCardBg, setWithCardBg] = useState(false);
  const [withLogo, setWithLogo] = useState(true);
  const [withUser, setWithUser] = useState(true);
  const [withSearchInput, setWithSearchInput] = useState(true);
  const [withGradientBg, setWithGradientBg] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [withLongList, setWithLongList] = useState(true);

  const [header, setHeader] = useState("Pixel UI");
  const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("default");
  const [btnVariant, setBtnVariant] = useState<ButtonProps["variant"]>("light");
  const [inputVariant, setInputVariant] =
    useState<InputProps["variant"]>("bordered");
  const [inputColor, setInputColor] = useState<InputProps["color"]>("default");

  const [items, setitems] = useState<SideBarContents[]>(SideBarList);

  useEffect(() => {
    if (!withLongList) {
      setitems(SideBarList);
    } else {
      setitems([...SideBarList, ...ExtraContent]);
    }
  }, [withLongList]);

  useEffect(() => {
    const newSelected = [
      withUser && "withUser",
      withCardBg && "withCardBg",
      withLogo && "withLogo",
      withSearchInput && "withSearchInput",
      withGradientBg && "withGradientBg",
      withLongList && "withLongList",
    ].filter(Boolean) as string[];
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWithCardBg(selected.includes("withCardBg"));
    setWithLogo(selected.includes("withLogo"));
    setWithUser(selected.includes("withUser"));
    setWithSearchInput(selected.includes("withSearchInput"));
    setWithGradientBg(selected.includes("withGradientBg"));
    setWithLongList(selected.includes("withLongList"));
  }, [selected]);

  useEffect(() => {
    if (maxWidth === "375px") {
      setIsSidebarVisible(true);
    }
  }, [maxWidth]);

  useEffect(() => {
    if (withGradientBg) {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== "withCardBg")
      );
    }
  }, [withGradientBg]);

  const PreviewProps = () => {
    const checkboxes = [
      { label: "With User", value: "withUser" },
      { label: "With Logo", value: "withLogo" },
      { label: "With Search Input", value: "withSearchInput" },
      {
        label: "With Card Background",
        value: "withCardBg",
        isDisabled: withGradientBg,
      },
      { label: "With Gradient Background", value: "withGradientBg" },
      { label: "with Long List", value: "withLongList" },
    ];

    return (
      <>
        <Input
          label="Header"
          placeholder="Enter A Header..."
          value={header}
          onValueChange={setHeader}
          variant="bordered"
          className="max-w-xs"
        />
        <CheckboxGroup
          label="Options"
          color="secondary"
          value={selected}
          onValueChange={setSelected}
        >
          {checkboxes.map(({ label, value, isDisabled }) => (
            <Checkbox key={value} value={value} isDisabled={isDisabled}>
              {label}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <Select
          label="Button Variant"
          variant="bordered"
          placeholder="Select a variant"
          disallowEmptySelection
          defaultSelectedKeys={["light"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnVariant(e.target.value as ButtonProps["variant"]);
          }}
        >
          {btnVariantOptions.map((variant, index) => (
            <SelectItem
              key={variant ?? index}
              value={variant}
              textValue={variant}
            >
              {variant}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Button Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          onChange={(e) => {
            setBtnColor(e.target.value as ButtonProps["color"]);
          }}
        >
          {btnColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Input Variant"
          variant="bordered"
          placeholder="Select a variant"
          defaultSelectedKeys={["bordered"]}
          className="max-w-xs"
          disallowEmptySelection
          onChange={(e) => {
            setInputVariant(e.target.value as InputProps["variant"]);
          }}
        >
          {inputVariantOptions.map((variant, index) => (
            <SelectItem
              key={variant ?? index}
              value={variant}
              textValue={variant}
            >
              {variant}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Input Color"
          variant="bordered"
          placeholder="Select a color"
          disallowEmptySelection
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          onChange={(e) => {
            setInputColor(e.target.value as InputProps["color"]);
          }}
        >
          {inputColorOptions.map((color, index) => (
            <SelectItem key={color ?? index} value={color} textValue={color}>
              {color}
            </SelectItem>
          ))}
        </Select>
      </>
    );
  };

  const SideBardContent = () => {
    return (
      <>
        <div className="flex items-center gap-2">
          {withLogo && <Logo height={32} width={32} />}
          <p className="text-small font-bold uppercase">{header}</p>
        </div>
        {withUser && (
          <User
            name="Tony Reichert"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            }}
          />
        )}
        <ScrollShadow
          className={`w-full h-full max-h-[370px]`}
          hideScrollBar
          size={0}
        >
          <div className="w-full flex flex-col gap-2">
            {withSearchInput && (
              <Input
                placeholder="Search..."
                variant={inputVariant}
                color={inputColor}
                size="sm"
              />
            )}
            <Listbox
              aria-label="SideBar List"
              className="border-small rounded-small border-default-200 dark:border-default-100"
            >
              {items.map((obj) => {
                return (
                  <ListboxSection key={obj.key} title={obj.label}>
                    {obj.innerContents.map((item) => {
                      return (
                        <ListboxItem
                          key={item.title}
                          startContent={item.startContent}
                          endContent={item.endContent}
                          className="data-[hover=true]:bg-default/40 data-[selectable=true]:focus:bg-default/40 min-h-8"
                        >
                          {item.title}
                        </ListboxItem>
                      );
                    })}
                  </ListboxSection>
                );
              })}
            </Listbox>
          </div>
        </ScrollShadow>
        <div className="mt-auto flex flex-col gap-2 w-full">
          <Button
            variant={btnVariant}
            fullWidth
            color={btnColor}
            startContent={<IoIosInformationCircleOutline size={20} />}
            className="justify-start"
          >
            Help & Information
          </Button>
          <Button
            variant={btnVariant}
            fullWidth
            color={btnColor}
            startContent={<LuLogOut size={20} />}
            className="justify-start"
          >
            Log Out
          </Button>
        </div>
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
          <div className={"flex flex-row w-full h-full"}>
            {withCardBg ? (
              <>
                <Card
                  className={`h-full p-3 sidebar ${
                    isSidebarVisible
                      ? `!border-r-small border-divider`
                      : `ml-[-320px]`
                  } ${maxWidth !== "375px" ? "w-80 max-w-sm " : "w-full"}`}
                >
                  <CardBody className="w-full flex flex-col p-0 gap-4 items-start overflow-y-auto overflow-x-hidden ">
                    <SideBardContent />
                  </CardBody>
                </Card>
              </>
            ) : (
              <>
                <div
                  className={`h-full sidebar flex flex-col gap-4 items-start p-3 overflow-y-auto overflow-x-hidden rounded-large ${
                    isSidebarVisible
                      ? `!border-r-small border-divider`
                      : `ml-[-320px]`
                  } ${maxWidth !== "375px" ? "w-80 max-w-sm" : "w-full"} ${
                    withGradientBg
                      ? "bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100"
                      : ""
                  }`}
                >
                  <SideBardContent />
                </div>
              </>
            )}
            {maxWidth !== "375px" && (
              <div className={`flex flex-col p-3 w-full`}>
                <div className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
                  <Button
                    isIconOnly
                    variant="bordered"
                    onPress={() => {
                      setIsSidebarVisible(!isSidebarVisible);
                    }}
                  >
                    <FiSidebar size={24} />
                  </Button>
                  <h2 className="text-medium font-medium text-default-700">
                    Overview
                  </h2>
                </div>
                <div className="mt-4 h-full w-full overflow-visible">
                  <div className="flex h-full w-full flex-col gap-4 rounded-medium border-small border-divider"></div>
                </div>
              </div>
            )}
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
      code: `"use client";
import React, { useState } from "react";
import "./Sidebar.styles.css";
import { SideBarList } from "./data";
import { Button, Input, Listbox, ListboxItem, ListboxSection, ScrollShadow, User, Image } from "@nextui-org/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { FiSidebar } from "react-icons/fi";

const SideBardContent = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        ${
          withLogo
            ? `<Image
          src="/Logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />`
            : ``
        }
        <p className="text-small font-bold uppercase">${header}</p>
      </div>
      ${
        withUser
          ? `<User
        name="Tony Reichert"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        }}
      />`
          : ``
      }
      <ScrollShadow className="w-full h-full max-h-[500px]" hideScrollBar size={0}>
        <div className="w-full flex flex-col gap-2">
          ${
            withSearchInput
              ? `<Input
            placeholder="Search..."
            variant="${inputVariant}"
            color="${inputColor}"
            size="sm"
          />`
              : ``
          }
          <Listbox aria-label="SideBar List" className="border-small rounded-small border-default-200 dark:border-default-100">
            {SideBarList.map((obj) => {
              return (
                <ListboxSection key={obj.key} title={obj.label}>
                  {obj.innerContents.map((item) => {
                    return (
                      <ListboxItem
                        key={item.title}
                        startContent={item.startContent}
                        endContent={item.endContent}
                        className="data-[hover=true]:bg-default/40 data-[selectable=true]:focus:bg-default/40 min-h-8"
                      >
                        {item.title}
                      </ListboxItem>
                    );
                  })}
                </ListboxSection>
              );
            })}
          </Listbox>
        </div>
      </ScrollShadow>
      <div className="mt-auto flex flex-col gap-2 w-full">
        <Button
          variant="${btnVariant}"
          color="${btnColor}"
          startContent={<IoIosInformationCircleOutline size={20} />}
          className="justify-start"
          fullWidth
        >
          Help & Information
        </Button>
        <Button
          variant="${btnVariant}"
          color="${btnColor}"
          startContent={<LuLogOut size={20} />}
          className="justify-start"
          fullWidth
        >
          Log Out
        </Button>
      </div>
    </>
  );
};

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className={"flex flex-row w-full h-screen"}>
      ${
        withCardBg
          ? `<Card className={\`h-full p-3 sidebar w-full sm:w-64 max-w-md \${isSidebarVisible ? "border-small border-divider" : "sm:-ml-[18rem]"}\`}>
        <CardBody className="w-full flex flex-col p-0 gap-4 items-start overflow-y-auto overflow-x-hidden ">
          <SideBardContent />
        </CardBody>
      </Card>`
          : `<div className={\`h-full sidebar w-full sm:w-64 max-w-md flex flex-col gap-4 items-start p-3 overflow-y-auto overflow-x-hidden rounded-large \${isSidebarVisible ? "border-small border-divider" : "sm:-ml-[18rem]"} ${
              withGradientBg
                ? "bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100"
                : ""
            }\`}
      >
        <SideBardContent />
      </div>`
      }
      <div className="hidden sm:flex flex-col px-3 py-1 w-full flex-1">
        <div className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button
            isIconOnly
            variant="bordered"
            onPress={() => {
              setIsSidebarVisible(!isSidebarVisible);
            }}
          >
            <FiSidebar size={24} />
          </Button>
          <h2 className="text-medium font-medium text-default-700">
            Overview
          </h2>
        </div>
        <div className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-full w-full flex-col gap-4 rounded-medium border-small border-divider"></div>
        </div>
      </div>
    </div>
  );
}`,
    },
    {
      fileName: "data.jsx",
      code: `import React from "react";
import { Chip } from "@nextui-org/react";
import { RiHome5Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { SiNextui, SiPivotaltracker, SiTailwindcss } from "react-icons/si";
import { FaChartPie } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiMiniGiftTop } from "react-icons/hi2";
import { CiSettings, CiViewList } from "react-icons/ci";

export const SideBarList = [
  {
    key: "overview",
    label: "Overview",
    innerContents: [
      {
        title: "Home",
        startContent: <RiHome5Line />,
      },
      {
        title: "Projects",
        startContent: <GrProjects />,
        endContent: <IoIosAddCircleOutline />,
      },
      {
        title: "Tasks",
        startContent: <FaTasks />,
        endContent: <IoIosAddCircleOutline />,
      },
      {
        title: "Team",
        startContent: <MdOutlinePeople />,
      },
      {
        title: "Tracker",
        startContent: <SiPivotaltracker />,
        endContent: (
          <Chip className="rounded-full" size="sm">
            New
          </Chip>
        ),
      },
    ],
  },
  ${
    withLongList
      ? `{
    key: "organization",
    label: "Organization",
    innerContents: [
      {
        title: "Cap Table",
        startContent: <FaChartPie />,
      },
      {
        title: "Analytics",
        startContent: <TbBrandGoogleAnalytics />,
      },
      {
        title: "Perks",
        startContent: <HiMiniGiftTop />,
        endContent: (
          <Chip className="rounded-full" size="sm">
            3
          </Chip>
        ),
      },
      {
        title: "Expenses",
        startContent: <CiViewList />,
      },
      {
        title: "Settings",
        startContent: <CiSettings />,
      },
    ],
  },
  {
    key: "teams",
    label: "Your Teams",
    innerContents: [
      {
        title: "NextUI",
        startContent: <SiNextui />,
      },
      {
        title: "Tailwind Variants",
        startContent: <SiTailwindcss />,
      },
    ],
  },`
      : ``
  }
]`,
    },
    {
      fileName: "Sidebar.styles.css",
      code: `.sidebar {
  transition: 1s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/sideabar-58dqxf?file=%2FApp.jsx"
    />
  );
}

export default SideBar;
