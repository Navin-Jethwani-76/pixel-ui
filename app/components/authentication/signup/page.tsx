"use client";
import React, { useEffect, useState } from "react";
import {
    Button,
    ButtonProps,
    Card,
    CardBody,
    InputProps,
    Link,
    CheckboxGroup,
    Checkbox,
    Select,
    SelectItem,
    Input,
} from "@/lib/nextui";
import EmailInput, {
    EmailInputCode,
} from "@/components/core/inputs/EmailInput";
import PasswordInput, {
    PasswordInputCode,
} from "@/components/core/inputs/PasswordInput";
import UiComponent from "@/components/common/ui-component";
import Logo from "@/components/common/Logo";
import SocialButtons from "@/app/components/authentication/SocialButtons";
import {
    alignOptionProps,
    inputVariantOptions,
    inputColorOptions,
    btnColorOptions,
    btnVariantOptions,
    SocialButtonOptions,
    alignmentOptions,
    ViewProps,
    LogoTitleProps, SocialButtonsProps
} from "@/app/components";

const LogoTitle: React.FC<LogoTitleProps> = ({
    withLogo,
    header,
    description,
}) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center w-full">
            {withLogo && <Logo height={40} width={40} />}
            <span className="flex flex-col w-full items-center">
                {header.length > 0 && <p className="text-xl font-medium">{header}</p>}
                {description.length > 0 && (
                    <p className="text-small text-default-500">{description}</p>
                )}
            </span>
        </div>
    );
};

interface SignupButtonProps extends ButtonProps {
    fullWidth?: boolean;
}

const SignupButton: React.FC<SignupButtonProps> = ({ fullWidth, ...props }) => {
    return (
        <Button className="max-w-xs" fullWidth={fullWidth} {...props}>
            Sign Up
        </Button>
    );
};

const LoginLink: React.FC = () => {
    return (
        <span>
            Already have an account? <Link href="#">Log In</Link>
        </span>
    );
};

const TermsAgreeCheck: React.FC = () => {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <Checkbox
                name="agree-terms"
                isSelected={checked}
                onValueChange={setChecked}
            >
                I agree with <Link href="#">Terms</Link> and{" "}
                <Link href="#">Privacy Policy</Link>
            </Checkbox>
        </>
    );
};

const Additional: React.FC = () => {
    return (
        <div className="flex w-full max-w-xs justify-between gap-4">
            <TermsAgreeCheck />
        </div>
    );
};

const SignUpForm = () => {
    // preview props
    const [withCardBg, setWithCardBg] = useState(true);
    const [withLogo, setWithLogo] = useState(true);
    const [isBtnFullWidth, setIsBtnFullWidth] = useState(true);
    const [withSocialLogin, setWithSocialLogin] = useState(true);
    const [withBackgroundImage, setWithBackgroundImage] = useState(false);
    const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
    const [header, setHeader] = useState("Welcome");
    const [description, setDescription] = useState(
        "Create your account to get started"
    );
    const [inputVariant, setInputVariant] =
        useState<InputProps["variant"]>("bordered");
    const [inputColor, setInputColor] = useState<InputProps["color"]>("default");
    const [btnColor, setBtnColor] = useState<ButtonProps["color"]>("primary");
    const [btnVariant, setBtnVariant] = useState<ButtonProps["variant"]>("solid");
    const [socialbtnColor, setSocialBtnColor] =
        useState<ButtonProps["color"]>("default");
    const [socialbtnVariant, setSocialBtnVariant] =
        useState<ButtonProps["variant"]>("bordered");
    const [socialBtnPlacement, setSocialBtnPlacement] =
        useState<SocialButtonsProps["placement"]>("bottom");
    const [alignment, setAlignment] =
        useState<alignOptionProps["alignment"]>("center");

    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        const newSelected = [
            withCardBg && "withCardBg",
            withLogo && "withLogo",
            isBtnFullWidth && "isBtnFullWidth",
            withSocialLogin && "withSocialLogin",
            withBackgroundImage && "withBackgroundImage",
        ].filter(Boolean) as string[]; // Filter out false values
        setSelected(newSelected);

        setMaxWidth("100%");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setWithCardBg(selected.includes("withCardBg"));
        setWithLogo(selected.includes("withLogo"));
        setIsBtnFullWidth(selected.includes("isBtnFullWidth"));
        setWithSocialLogin(selected.includes("withSocialLogin"));
        setWithBackgroundImage(selected.includes("withBackgroundImage"));
    }, [selected]);

    const PreviewProps = () => {
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

                <Input
                    label="Description"
                    placeholder="Enter A Description..."
                    value={description}
                    onValueChange={setDescription}
                    variant="bordered"
                    className="max-w-xs"
                />

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

                <Select
                    label="Button Variant"
                    variant="bordered"
                    placeholder="Select a variant"
                    disallowEmptySelection
                    defaultSelectedKeys={["solid"]}
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
                    defaultSelectedKeys={["primary"]}
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
                    label="Alignment"
                    variant="bordered"
                    placeholder="Select a color"
                    disallowEmptySelection
                    defaultSelectedKeys={["center"]}
                    className="max-w-xs"
                    onChange={(e) => {
                        setAlignment(e.target.value as alignOptionProps["alignment"]);
                    }}
                >
                    {alignmentOptions.map((option, index) => (
                        <SelectItem key={option ?? index} value={option} textValue={option}>
                            {option}
                        </SelectItem>
                    ))}
                </Select>

                {withSocialLogin && (
                    <>
                        <Select
                            label="Social Buttons Placement"
                            variant="bordered"
                            disallowEmptySelection
                            defaultSelectedKeys={["bottom"]}
                            className="max-w-xs"
                            onChange={(e) => {
                                setSocialBtnPlacement(
                                    e.target.value as SocialButtonsProps["placement"]
                                );
                            }}
                        >
                            {SocialButtonOptions.map((value, index) => {
                                return (
                                    <SelectItem key={value ?? index} value={value}>
                                        {value}
                                    </SelectItem>
                                );
                            })}
                        </Select>

                        <Select
                            label="Social Button Variant"
                            variant="bordered"
                            placeholder="Select a variant"
                            disallowEmptySelection
                            defaultSelectedKeys={["bordered"]}
                            className="max-w-xs"
                            onChange={(e) => {
                                setSocialBtnVariant(e.target.value as ButtonProps["variant"]);
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
                            label="Social Button Color"
                            variant="bordered"
                            placeholder="Select a color"
                            disallowEmptySelection
                            defaultSelectedKeys={["default"]}
                            className="max-w-xs"
                            onChange={(e) => {
                                setSocialBtnColor(e.target.value as ButtonProps["color"]);
                            }}
                        >
                            {btnColorOptions.map((color, index) => (
                                <SelectItem
                                    key={color ?? index}
                                    value={color}
                                    textValue={color}
                                >
                                    {color}
                                </SelectItem>
                            ))}
                        </Select>
                    </>
                )}

                <CheckboxGroup
                    label="Options"
                    color="secondary"
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Checkbox value="withCardBg">With Card Background</Checkbox>
                    <Checkbox value="withLogo">With Logo</Checkbox>
                    <Checkbox value="isBtnFullWidth">Button Full Width</Checkbox>
                    <Checkbox value="withSocialLogin">With Social Login</Checkbox>
                    <Checkbox value="withBackgroundImage">With Background</Checkbox>
                </CheckboxGroup>
            </>
        );
    };

    const CardInnerContent = () => {
        return (
            <>
                <LogoTitle
                    withLogo={withLogo}
                    header={header}
                    description={description}
                />
                {withSocialLogin && socialBtnPlacement == "top" && (
                    <SocialButtons
                        placement={"top"}
                        variant={socialbtnVariant}
                        color={socialbtnColor}
                    />
                )}
                <EmailInput variant={inputVariant} color={inputColor} />
                <PasswordInput variant={inputVariant} color={inputColor} />
                <Additional />
                <SignupButton
                    color={btnColor}
                    variant={btnVariant}
                    fullWidth={isBtnFullWidth}
                />
                {withSocialLogin && socialBtnPlacement == "bottom" && (
                    <SocialButtons
                        placement={"bottom"}
                        variant={socialbtnVariant}
                        color={socialbtnColor}
                    />
                )}
                <LoginLink />
            </>
        );
    };

    const code: {
        fileName: string;
        code: string;
    }[] = [
            {
                fileName: "App.jsx",
                code: `import React from "react";
import {
  Button,
  Card,
  CardBody,
  Link,
  Checkbox,
  Image,
  Divider,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
${withSocialLogin
                        ? `
const Separator = () => {
  return (
    <div className="flex items-center gap-4 py-2 w-full max-w-xs">
      <Divider className="flex-1" />
      <p className="shrink-0 text-tiny text-default-500">OR</p>
      <Divider className="flex-1" />
    </div>
  );
};

const SocialBtns = ({ variant, color }) => {
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

const SocialBtnsContainer = () => {
  return (
    ${socialBtnPlacement == "bottom"
                            ? `<>
      <Separator />
      <SocialBtns variant="${socialbtnVariant}" color="${socialbtnColor}" />
    </>`
                            : `<>
      <SocialBtns variant="${socialbtnVariant}" color="${socialbtnColor}" />
      <Separator />
    </>`
                        }
  );
};`
                        : ``
                    }

const Header = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      ${withLogo
                        ? `<Image
        src="/Logo.png" // add image with same name in /public dir.
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="flex flex-col w-full items-center">
      ${header.length > 0
                            ? `  <p className="text-xl font-medium">${header}</p>`
                            : ``
                        }
      ${description.length > 0
                            ? `  <p className="text-small text-default-500">${description}</p>`
                            : ``
                        }
      </span>`
                        : ` <span className="flex flex-col w-full items-center">
          ${header.length > 0
                            ? `  <p className="text-xl font-medium">${header}</p>`
                            : ``
                        }
          ${description.length > 0
                            ? `  <p className="text-small text-default-500">${description}</p>`
                            : ``
                        }
        </span>`
                    }
    </div>
  );
}

const Content = () => {
  return (
    <form className="w-full h-full flex flex-col gap-4 items-center">
      <Header />
      ${withSocialLogin && socialBtnPlacement == "top"
                        ? `<SocialBtnsContainer />`
                        : ``
                    }
      <EmailInput variant="${inputVariant}" color="${inputColor}" />
      <PasswordInput variant="${inputVariant}" color="${inputColor}" />
      <div className="flex w-full max-w-xs justify-between gap-4">
        <Checkbox isRequired name="agree">
          I agree with <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>
        </Checkbox>
      </div>
      <Button className="max-w-xs" type="submit" color="${btnColor}" variant="${btnVariant}" fullWidth={${isBtnFullWidth}}>Sign Up</Button>
      ${withSocialLogin && socialBtnPlacement == "bottom"
                        ? `<SocialBtnsContainer />`
                        : ``
                    }
      <span>Already have an account? <Link href="#">Log In</Link></span>
    </form>
  );
};

const SignUp = () => {
  return (
    <div 
      className="flex w-full h-full rounded-md justify-${alignment} items-center gap-4"
    ${withBackgroundImage
                        ? `  style={{
        backgroundImage: "url('/signUp-background.jpeg')", // add image with same name in /public dir.
        backgroundSize: "cover",
      }}
    >`
                        : `>`
                    }
      ${withCardBg
                        ? `<Card className="w-full max-w-sm m-4">
        <CardBody>
          <Content />
        </CardBody>
      </Card>`
                        : `<div className="w-full max-w-sm m-4">
        <Content />
      </div>`
                    }
    </div>
  );
};

export default SignUp;`,
            },
            {
                fileName: "EmailInput.jsx",
                code: EmailInputCode,
            },
            {
                fileName: "PasswordInput.jsx",
                code: PasswordInputCode,
            },
        ];

    return (
        <UiComponent
            preview={
                <div
                    className={`flex w-full h-full rounded-md justify-${alignment} border-1 border-default-600/10 items-center gap-4`}
                    style={
                        withBackgroundImage
                            ? {
                                backgroundImage: `url("/black-background-texture.jpeg")`,
                                backgroundSize: "cover",
                                maxWidth: maxWidth,
                            }
                            : {
                                maxWidth: maxWidth,
                            }
                    }
                >
                    {withCardBg ? (
                        <Card className="w-full max-w-sm">
                            <CardBody className="flex flex-col gap-4 items-center">
                                <CardInnerContent />
                            </CardBody>
                        </Card>
                    ) : (
                        <div className="w-full max-w-xs flex flex-col gap-4 items-center">
                            <CardInnerContent />
                        </div>
                    )}
                </div>
            }
            code={code}
            sandBoxLink="https://codesandbox.io/p/devbox/signup-zrhx25?file=%2FApp.jsx"
            setMaxWidth={setMaxWidth}
            PreviewProps={PreviewProps}
        />
    );
};

export default SignUpForm;
