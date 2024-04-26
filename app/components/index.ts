import {
    ButtonProps,
    ChipProps,
    InputProps,
    SwitchProps,
} from "@nextui-org/react";

export interface SocialButtonsProps {
    placement?: "top" | "bottom";
    variant: ButtonProps["variant"];
    color: ButtonProps["color"];
}

export interface alignOptionProps {
    alignment: "start" | "center" | "end";
}

export interface ViewProps {
    current: "375px" | "768px" | "100%";
}

export interface LogoTitleProps {
    withLogo: boolean;
    header: string;
    description: string;
}

export interface LanguageProps {
    language: "jsx" | "tsx";
}

const inputVariantOptions: InputProps["variant"][] = [
    "bordered",
    "underlined",
    "flat",
    "faded",
];

const inputColorOptions: InputProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
];

const btnColorOptions: ButtonProps["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
];

const btnVariantOptions: ButtonProps["variant"][] = [
    "bordered",
    "solid",
    "light",
    "flat",
    "faded",
    "shadow",
    "ghost",
];

const chipVariantOptions: ChipProps["variant"][] = [
    "bordered",
    "dot",
    "faded",
    "flat",
    "light",
    "shadow",
    "solid",
];

const chipColorOptions: ChipProps["color"][] = [
    "danger",
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
];

const switchColorOptions: SwitchProps["color"][] = [
    "danger",
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
];

const SocialButtonOptions: SocialButtonsProps["placement"][] = [
    "top",
    "bottom",
];

const alignmentOptions: alignOptionProps["alignment"][] = [
    "start",
    "center",
    "end",
];

const LanguageOptions: LanguageProps["language"][] = ["jsx", "tsx"];

export {
    inputVariantOptions,
    inputColorOptions,
    btnColorOptions,
    btnVariantOptions,
    SocialButtonOptions,
    alignmentOptions,
    LanguageOptions,
    chipVariantOptions,
    chipColorOptions,
    switchColorOptions,
};
