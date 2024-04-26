import React from "react";
import { Button, ButtonProps } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Separator from "@/components/common/Separator";
import { SocialButtonsProps } from "@/app/components";

const StaticSocialBtn = ({ variant, color }: SocialButtonsProps) => {
    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <Button
                className="flex items-center justify-center w-full rounded-medium h-10 font-medium shadow-input max-w-xs"
                variant={variant}
                color={color}
            >
                <FcGoogle size={20} />
                Login with Google
            </Button>
            <Button
                className="flex items-center justify-center w-full rounded-medium h-10 font-medium shadow-input max-w-xs"
                variant={variant}
                color={color}
            >
                <FaGithub size={20} />
                Login with Github
            </Button>
        </div>
    );
};

const SocialButtons = ({ placement, variant, color }: SocialButtonsProps) => {
    return (
        <>
            {placement == "bottom" ? (
                <>
                    <Separator />
                    <StaticSocialBtn variant={variant} color={color} />
                </>
            ) : (
                <>
                    <StaticSocialBtn variant={variant} color={color} />
                    <Separator />
                </>
            )}
        </>
    );
};

export default SocialButtons;
