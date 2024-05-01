import { Link } from "@nextui-org/react";
import React from "react";
import { ReactNode } from "react";

export const FaqList: {
  title: string;
  content: ReactNode;
}[] = [
  {
    title: "What is Pixel UI?",
    content: (
      <>
        Picel UI is an open source alternative to{" "}
        <Link href="https://nextui.pro/" isExternal>
          NextUI Pro
        </Link>
      </>
    ),
  },
  {
    title: "How is Pixel UI different from NextUi Pro?",
    content: `Pixel UI components are open source and we do not charge any fee or subscription for the code of the components`,
  },
  {
    title: "Are the components copied from NextUI Pro?",
    content: `No. All the components are developed by the team behind Pixel UI. We have designed the components to look similar to the ones listed on NextUI Pro.`,
  },
  {
    title: "Will Pixel UI remain Open Source in Future?",
    content: `Yes. We will never charge any fee to use the code for components listed on the website.`,
  },
  {
    title: "I found a bug in one of the component. How do I report?",
    content: (
      <>
        You can report bugs on <Link href="/report-bug">Here</Link>
      </>
    ),
  },
  {
    title: "Will Pixel UI add AI components listed on NextUI Pro?",
    content: `For now, we have no intention to develop AI components listed on NextUI Pro but we might add them if enough people request it.`,
  },
  {
    title:
      "Can I use Pixel UI with other front-end frameworks such as Vue or Angular?",
    content: `Pixel UI is built on top of NextUI which is specifically designed for React.`,
  },
  {
    title:
      "I wish to contribute in the code of components listed. How do I react out?",
    content: (
      <>
        <Link href="/contact">Contact Us</Link> by sending a message. We will
        react out to you soon.
      </>
    ),
  },
  {
    title: "Will the code of a component change on changing the props?",
    content: `Yes, The code we provide is dynamic and will change on changing the props listed on the right side of the component.`,
  },
  {
    title: "Do you accept offers to develop custom components?",
    content: (
      <>
        Yes, We will be happy to develop custom components specific to your use
        case for standard freelancing rate.{" "}
        <Link href="/contact">Contact Us</Link>
      </>
    ),
  },
  {
    title: "How do I Support Pixel UI?",
    content: (
      <>
        We will soon add a Patreon link. <Link href="/contact">Contact Us</Link>{" "}
        if you wish to support now
      </>
    ),
  },
];
