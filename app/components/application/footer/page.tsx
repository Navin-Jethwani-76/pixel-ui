"use client";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Input,
  Link,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@/lib/nextui";
import Logo from "@/components/common/Logo";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import {
  FooterColumn,
  FooterType,
  FooterTypeOptions,
} from "@/app/components/application/footer";
import {
  IoLaptopOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { PiGithubLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";

const BasicFooterLinks: string[] = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
  "Blog",
  "Careers",
];

const CustomFooterLinks: FooterColumn[] = [
  {
    heading: "Services",
    links: ["Branding", "Data", " E-commerce", "Market Research"],
  },
  {
    heading: "Support",
    links: ["Pricing", "Guides", "Tutorials", "Status"],
  },
  {
    heading: "About Us",
    links: ["Our Story", "Latest News", "Careers", "Enquiries"],
  },
  {
    heading: "Legal",
    links: ["Claim", "Privacy", "Terms", "User Agreement"],
  },
];

const Footer = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [type, setType] = useState<FooterType["type"]>("custom");
  const [withCustomLinks, setwithCustomLinks] = useState(true);
  const [withSocialLinks, setWithSocialLinks] = useState(true);
  const [withNewsLetter, setwithNewsLetter] = useState(true);
  const [withThemeSwitch, setWithThemeSwitch] = useState(true);

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const newSelected = [
      withCustomLinks && "withCustomLinks",
      withSocialLinks && "withSocialLinks",
      withNewsLetter && "withNewsLetter",
      withThemeSwitch && "withThemeSwitch",
    ].filter(Boolean) as string[];
    setSelected(newSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setwithCustomLinks(selected.includes("withCustomLinks"));
    setWithSocialLinks(selected.includes("withSocialLinks"));
    setwithNewsLetter(selected.includes("withNewsLetter"));
    setWithThemeSwitch(selected.includes("withThemeSwitch"));
  }, [selected]);

  const PreviewProps = () => {
    return (
      <>
        <Select
          label="Type"
          variant="bordered"
          placeholder="Select a type"
          disallowEmptySelection
          defaultSelectedKeys={["custom"]}
          className="max-w-xs"
          onChange={(e) => {
            setType(e.target.value as FooterType["type"]);
          }}
        >
          {FooterTypeOptions.map((type, index) => (
            <SelectItem key={type ?? index} value={type} textValue={type}>
              {type}
            </SelectItem>
          ))}
        </Select>

        <CheckboxGroup
          label="Options"
          color="secondary"
          value={selected}
          onValueChange={setSelected}
        >
          <Checkbox value="withCustomLinks" isDisabled={type == "custom"}>
            With Custom Page Links
          </Checkbox>
          <Checkbox value="withSocialLinks">With Social Link Icons</Checkbox>
          <Checkbox value="withNewsLetter">With News Letter</Checkbox>
          <Checkbox value="withThemeSwitch">With Theme Switch</Checkbox>
        </CheckboxGroup>
      </>
    );
  };

  const MainContent = () => {
    return (
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-2 items-center">
          <Logo height={24} width={24} />
          <span className="text-small font-medium">ACME</span>
        </div>
        <Divider orientation="vertical" className="h-4" />
        <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
          <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
          <span className="flex-1 text-inherit font-normal px-2">
            All systems operational
          </span>
        </div>
      </div>
    );
  };

  const ThemeSwitcherTabs = () => {
    return (
      <Tabs
        key={"theme-switcher"}
        variant={"bordered"}
        aria-label="Theme Switcher Tabs"
        size="sm"
        classNames={{
          tab: "p-1",
        }}
      >
        <Tab key="light" title={<IoSunnyOutline size={20} />} />
        <Tab key="dark" title={<IoMoonOutline size={20} />} />
        <Tab key="system" title={<IoLaptopOutline size={20} />} />
      </Tabs>
    );
  };

  const SocialIcons = () => {
    return (
      <div className="flex justify-center items-center gap-4">
        <Link color="foreground" href="#">
          <CiFacebook size={20} />
        </Link>
        <Link color="foreground" href="#">
          <PiInstagramLogo size={20} />
        </Link>
        <Link color="foreground" href="#">
          <PiTwitterLogo size={20} />
        </Link>
        <Link color="foreground" href="#">
          <PiGithubLogo size={20} />
        </Link>
      </div>
    );
  };

  const NewsLetterContent = () => {
    return (
      <>
        <Divider />
        <div
          className={`flex gap-4 ${
            maxWidth === "375px"
              ? `flex-col justify-center text-center`
              : `justify-between items-center`
          }`}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-small font-semibold text-default-600">
              Subscribe to our newsletter
            </h3>
            <p
              className={`text-small text-default-400 ${
                type === "custom" && maxWidth === "100%" ? `` : `hidden`
              }`}
            >
              Receive weekly updates with the newest insights, trends, and
              tools, straight to your email.
            </p>
          </div>
          <form
            className="flex items-center gap-2"
            onSubmit={(event: FormEvent) => {
              event.preventDefault();
            }}
          >
            <Input
              label="Email"
              type="email"
              startContent={<MdEmail />}
              placeholder="johndoe@email.com"
              size="sm"
              isRequired
              variant="bordered"
              className="min-w-[200px]"
              name="email"
            />
            <Button variant="flat" color="primary" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </>
    );
  };

  const BasicFooter = () => {
    return (
      <>
        <div
          className={`flex gap-4 ${
            maxWidth !== "375px"
              ? `flex-row items-center justify-between`
              : `flex-col justify-center`
          }`}
        >
          {withThemeSwitch && (
            <div
              className={`flex flex-col items-center justify-center gap-2 ${
                maxWidth === "375px" ? `order-1` : `order-2`
              }`}
            >
              <ThemeSwitcherTabs />
            </div>
          )}
          <div
            className={`${
              maxWidth !== "375px" ? `order-1` : `order-2`
            } flex flex-col gap-1`}
          >
            <MainContent />
            <p
              className={`text-center text-tiny text-default-400 ${
                maxWidth !== "375px" ? `text-start` : ``
              }`}
            >
              © 2024 Acme Inc. All rights reserved.
            </p>
          </div>
        </div>
        <div
          className={`${
            withCustomLinks || withSocialLinks ? "flex" : "hidden"
          } ${
            maxWidth !== "375px" ? `flex-row` : `flex-col`
          } justify-between gap-4`}
        >
          {withCustomLinks && (
            <div
              className={`flex justify-center items-center ${
                maxWidth !== "375px" ? `gap-4` : `flex-wrap gap-2`
              }`}
            >
              {BasicFooterLinks.map((link, index) => {
                return (
                  <Link key={index} href="#" color="foreground">
                    {link}
                  </Link>
                );
              })}
            </div>
          )}
          {withSocialLinks && <SocialIcons />}
        </div>
        {withNewsLetter && <NewsLetterContent />}
      </>
    );
  };

  const CustomFooter = () => {
    return (
      <div className="w-full flex flex-col gap-4 justify-start">
        <div className="w-fit">
          <MainContent />
        </div>
        <div className="w-fit">{withSocialLinks && <SocialIcons />}</div>
        <div
          className={`grid ${
            maxWidth == "375px" ? "grid-cols-2" : "grid-flow-col auto-cols-auto"
          } w-full gap-4`}
        >
          {CustomFooterLinks.map((item, index) => {
            return (
              <div
                key={index}
                style={
                  maxWidth == "375px"
                    ? index % 2 == 0
                      ? { textAlign: "start" }
                      : { textAlign: "right" }
                    : index == 0
                    ? { textAlign: "start" }
                    : index == CustomFooterLinks.length - 1
                    ? { textAlign: "right" }
                    : { textAlign: "center" }
                }
                className={`flex flex-col gap-3`}
              >
                <h3 className="text-small font-semibold text-default-600">
                  {item.heading}
                </h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href="#"
                          color="foreground"
                          className="text-default-500 dark:text-default-400"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        {withNewsLetter && <NewsLetterContent />}
        <Divider />
        <div className="flex justify-between gap-4 items-end">
          <p className={`text-start text-tiny text-default-400`}>
            © 2024 Acme Inc. All rights reserved.
          </p>
          {withThemeSwitch && (
            <div className={`flex flex-col items-center justify-center gap-2`}>
              <ThemeSwitcherTabs />
            </div>
          )}
        </div>
      </div>
    );
  };

  const CardInnerContent = () => {
    return (
      <div
        className={`flex w-full h-full rounded-large items-end border-1 border-default-600/10 gap-4`}
        style={{
          maxWidth: maxWidth,
        }}
      >
        <div className="flex flex-col gap-4 w-full max-w-7xl p-6 border-t-1 border-foreground-50">
          {type == "basic" ? <BasicFooter /> : <CustomFooter />}
        </div>
      </div>
    );
  };

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `// make sure to copy data.js if you changed type
"use client";
import React from "react";
import { Button, Divider, Input, Link, Tab, Tabs, Image } from "@nextui-org/react";
import { IoLaptopOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { PiGithubLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FooterLinks } from "./data";

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full p-6 border-t-1 border-foreground-50">
      ${
        type === "basic"
          ? `<div className="flex gap-4 flex-col justify-center sm:flex-row sm:items-center sm:justify-between">
        ${
          withThemeSwitch
            ? `<div className="flex flex-col items-center justify-center gap-2 order-1 sm:order-2">
          <Tabs
            variant="bordered"
            aria-label="Theme Switcher Tabs"
            size="sm"
            classNames={{
              tab: "p-1",
            }}
          >
            <Tab key="light" title={<IoSunnyOutline size={20} />} />
            <Tab key="dark" title={<IoMoonOutline size={20} />} />
            <Tab key="system" title={<IoLaptopOutline size={20} />} />
          </Tabs>
        </div>`
            : ``
        }
        <div className="order-2 sm:order-1 flex flex-col gap-1">
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-2 items-center">
              <Image src="/Logo.png" alt="Logo" height={24} width={24} className="rounded-full" />
              <span className="text-small font-medium">ACME</span>
            </div>
            <Divider orientation="vertical" className="h-4" />
            <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
              <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
              <span className="flex-1 text-inherit font-normal px-2">
                All systems operational
              </span>
            </div>
          </div>
          <p className="text-center text-tiny text-default-400 sm:text-start">
            © 2024 Acme Inc. All rights reserved.
          </p>
        </div>
      </div>
      ${
        withCustomLinks || withSocialLinks
          ? `<div className="flex flex-col sm:flex-row justify-between gap-4">
        ${
          withCustomLinks
            ? `<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          {FooterLinks.map((link, index) => {
            return (
              <Link key={index} href={link.href} color="foreground">{link.title}</Link>
            );
          })}
        </div>`
            : ``
        }
        ${
          withSocialLinks
            ? `<div className="flex justify-center items-center gap-4">
          <Link color="foreground" href="#"><CiFacebook size={20} /></Link>
          <Link color="foreground" href="#"><PiInstagramLogo size={20} /></Link>
          <Link color="foreground" href="#"><PiTwitterLogo size={20} /></Link>
          <Link color="foreground" href="#"><PiGithubLogo size={20} /></Link>
        </div>`
            : ``
        }
      </div>`
          : ``
      }
      ${
        withNewsLetter
          ? `<Divider />
      <div className="flex gap-4 flex-col justify-center text-center sm:flex-row sm:text-start sm:justify-between sm:items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-small font-semibold text-default-600">Subscribe to our newsletter</h3>
          <p className="text-small text-default-400">
            Receive weekly updates with the newest insights, trends, and tools, straight to your email.
          </p>
        </div>
        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Input
            label="Email"
            type="email"
            startContent={<MdEmail />}
            placeholder="johndoe@email.com"
            size="sm"
            isRequired
            variant="bordered"
            className="min-w-[200px]"
            name="email"
          />
          <Button variant="flat" color="primary" type="submit">Subscribe</Button>
        </form>
      </div>`
          : ``
      }`
          : `<div className="w-full flex flex-col gap-4 justify-start">
        <div className="w-fit">
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-2 items-center">
              <Image src="/Logo.png" alt="Logo" height={24} width={24} className="rounded-full" />
              <span className="text-small font-medium">ACME</span>
            </div>
            <Divider orientation="vertical" className="h-4" />
            <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
              <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
              <span className="flex-1 text-inherit font-normal px-2">
                All systems operational
              </span>
            </div>
          </div>
        </div>
        ${
          withSocialLinks
            ? `<div className="w-fit">
          <div className="flex justify-center items-center gap-4">
            <Link color="foreground" href="#"><CiFacebook size={20} /></Link>
            <Link color="foreground" href="#"><PiInstagramLogo size={20} /></Link>
            <Link color="foreground" href="#"><PiTwitterLogo size={20} /></Link>
            <Link color="foreground" href="#"><PiGithubLogo size={20} /></Link>
          </div>
        </div>`
            : ``
        }
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-4">
          {FooterLinks.map((item, index) => {
            return (
              <div
                key={index}
                className={\`flex flex-col gap-3 \${
                  index == 0
                    ? "text-start"
                    : index == FooterLinks.length - 1
                    ? "text-right"
                    : index % 2 !== 0 ? "text-end sm:text-center":" text-start sm:text-center"
                }\`}
              >
                <h3 className="text-small font-semibold text-default-600">
                  {item.heading}
                </h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.href} color="foreground" className="text-default-500 dark:text-default-400">
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        ${
          withNewsLetter
            ? `<Divider />
        <div className="flex gap-4 flex-col justify-center text-center sm:flex-row sm:text-start sm:justify-between sm:items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-small font-semibold text-default-600">Subscribe to our newsletter</h3>
            <p className="text-small text-default-400">
              Receive weekly updates with the newest insights, trends, and tools, straight to your email.
            </p>
          </div>
          <form
            className="flex items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input
              label="Email"
              type="email"
              startContent={<MdEmail />}
              placeholder="johndoe@email.com"
              size="sm"
              isRequired
              variant="bordered"
              className="min-w-[200px]"
              name="email"
            />
            <Button variant="flat" color="primary" type="submit">Subscribe</Button>
          </form>
        </div>`
            : ``
        }
        <Divider />
        <div className="flex justify-between gap-4 items-end">
          <p className="text-start text-tiny text-default-400">© 2024 Acme Inc. All rights reserved.</p>
          ${
            withThemeSwitch
              ? `<Tabs
            variant="bordered"
            aria-label="Theme Switcher Tabs"
            size="sm"
            classNames={{
              tab: "p-1",
            }}
          >
            <Tab key="light" title={<IoSunnyOutline size={20} />} />
            <Tab key="dark" title={<IoMoonOutline size={20} />} />
            <Tab key="system" title={<IoLaptopOutline size={20} />} />
          </Tabs>`
              : ``
          }
        </div>
      </div>`
      }
    </div>
  );
}`,
    },
    {
      fileName: "data.js",
      code: `${
        type == "basic"
          ? `export const FooterLinks = [
  { title: "Home", href: "#" },
  { title: "Services", href: "#" },
  { title: "Projects", href: "#" },
  { title: "Contact", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Careers", href: "#" },
];`
          : `export const FooterLinks = [
  {
    heading: "Services",
    links: [
      { title: "Branding", href: "#" },
      { title: "Data", href: "#" },
      { title: "E-commerce", href: "#" },
      { title: "Market Research", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { title: "Pricing", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Status", href: "#" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { title: "Our Story", href: "#" },
      { title: "Latest News", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Enquiries", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { title: "Claim", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Terms", href: "#" },
      { title: "User Agreement", href: "#" },
    ],
  },
];`
      }`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      PreviewProps={PreviewProps}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/footer-n8p5x6?file=%2FApp.jsx"
    />
  );
};

export default Footer;
