import React from "react";
import { LoginForm } from "@/components/core/form/LoginForm";
import { SignUpForm } from "@/components/core/form/SignupForm";
import { GrInstall } from "react-icons/gr";
import { TbRouteAltRight } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

export const Docs = [
  {
    key: "introduction",
    name: "Introduction",
    component: React.Fragment,
    icon: IoLogoReact,
    iconSize: 20,
  },
  {
    key: "installation",
    name: "Installation",
    component: React.Fragment,
    icon: GrInstall,
    iconSize: 20,
  },
  {
    key: "routing",
    name: "Routing",
    component: React.Fragment,
    icon: TbRouteAltRight,
    iconSize: 20,
  },
  {
    key: "next-js",
    name: "Next.js",
    component: React.Fragment,
    icon: SiNextdotjs,
    iconSize: 20,
  },
];

export const Components = [
  {
    key: "login-form",
    name: "Login Form",
    component: LoginForm,
  },
  {
    key: "signup-from",
    name: "SignUp Form",
    component: SignUpForm,
  },
];
