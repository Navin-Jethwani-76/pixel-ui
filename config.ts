import { GrInstall } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

export const Docs = [
  {
    key: "introduction",
    name: "Introduction",
    icon: IoLogoReact,
    iconSize: 20,
  },
  {
    key: "installation",
    name: "Installation",
    icon: GrInstall,
    iconSize: 20,
  },
  {
    key: "next-js",
    name: "Next.js",
    icon: SiNextdotjs,
    iconSize: 20,
  },
];

export const Components: {
  parent: string;
  key: string;
  children: {
    key: string;
    name: string;
  }[];
}[] = [
    {
      parent: "Authentication",
      key: "authentication",
      children: [
        {
          key: "login",
          name: "Login",
        },
        {
          key: "signup",
          name: "SignUp",
        },
      ],
    },
    {
      parent: "Cards",
      key: "cards",
      children: [
        {
          key: "discount-card",
          name: "Discount Card",
        },
        {
          key: "thumbnail-card",
          name: "Thumbnail card",
        },
        {
          key: "event-card",
          name: "Event Announcement",
        },
        {
          key: "actions-card",
          name: "Actions Cards",
        },
        {
          key: "notifications-card",
          name: "Notifications Card",
        },
        {
          key: "fieldset-card",
          name: "Fieldset Card",
        },
        {
          key: "onboarding-checklist",
          name: "Onboarding Checklist",
        },
        {
          key: "marketplace-card",
          name: "Marketplace Card",
        },
        {
          key: "payment-method",
          name: "Payment Method",
        },
        {
          key: "select-plan",
          name: "Select Plan",
        },
        {
          key: "notifications-settings",
          name: "Notifications Settings",
        },
        {
          key: "personal-details",
          name: "Personal Details",
        },
        {
          key: "security-settings",
          name: "Security Settings",
        },
        {
          key: "account-details",
          name: "Account Details",
        },
        {
          key: "settings-tabs",
          name: "Settings Tabs",
        },
      ],
    },
    {
      parent: "Application",
      key: "application",
      children: [
        {
          key: "sideabar",
          name: "Sidebar",
        },
        {
          key: "footer",
          name: "Footer",
        },
        {
          key: "settings-layout",
          name: "Settings Layout",
        },
      ],
    },
    {
      parent: "Marketing",
      key: "marketing",
      children: [
        {
          key: "banner",
          name: "Banner",
        },
        {
          key: "faq",
          name: "FAQ",
        },
        {
          key: "pricing",
          name: "Pricing",
        },
        {
          key: "team",
          name: "Team",
        },
        {
          key: "feedback",
          name: "Feedback",
        },
      ],
    },
    {
      parent: "E-commerce",
      key: "ecommerce",
      children: [
        {
          key: "product-view",
          name: "Product-View",
        },
        {
          key: "filter",
          name: "Filter",
        },
        {
          key: "product-list",
          name: "Product List",
        },
        {
          key: "checkout",
          name: "Checkout",
        },
        {
          key: "reviews",
          name: "Reviews",
        },
      ],
    },
  ];
