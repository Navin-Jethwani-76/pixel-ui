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
import UiComponent from "@/lib/ui";
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
  LogoTitleProps,
  SocialButtonsProps,
} from "@/app/components";

const LogoTitle: React.FC<LogoTitleProps> = ({
  withLogo,
  description,
  header,
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

interface LoginButtonProps extends ButtonProps {
  fullWidth?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ fullWidth, ...props }) => {
  return (
    <Button className="max-w-xs" fullWidth={fullWidth} {...props}>
      Log In
    </Button>
  );
};

const SignUpLink: React.FC = () => {
  return (
    <span>
      Don&#39;t Have an Account? <Link href="#">Sign Up</Link>
    </span>
  );
};

const ForgotPassword: React.FC = () => {
  return <Link href="#">Forgor Password?</Link>;
};

const RememberMe: React.FC = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Checkbox
        name="remember-me"
        isSelected={checked}
        onValueChange={setChecked}
      >
        Remember Me
      </Checkbox>
    </>
  );
};

const Additional: React.FC = () => {
  return (
    <div className="flex w-full max-w-xs justify-between gap-4">
      <RememberMe />
      <ForgotPassword />
    </div>
  );
};

const LoginForm = () => {
  const [withCardBg, setWithCardBg] = useState(true);
  const [withLogo, setWithLogo] = useState(true);
  const [isBtnFullWidth, setIsBtnFullWidth] = useState(true);
  const [withSocialLogin, setWithSocialLogin] = useState(true);
  const [withBackgroundImage, setWithBackgroundImage] = useState(false);
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");
  const [header, setHeader] = useState("Welcome Back");
  const [description, setDescription] = useState(
    "Log in to your account to continue"
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
          className="max-w-xs"
          disallowEmptySelection
          selectedKeys={new Set([String(inputVariant)])}
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
          className="max-w-xs"
          selectedKeys={new Set([String(inputColor)])}
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
          className="max-w-xs"
          selectedKeys={new Set([String(btnVariant)])}
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
          className="max-w-xs"
          selectedKeys={new Set([String(btnColor)])}
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
          className="max-w-xs"
          selectedKeys={new Set([String(alignment)])}
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
              className="max-w-xs"
              value={socialBtnPlacement}
              selectedKeys={new Set([String(socialBtnPlacement)])}
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
              className="max-w-xs"
              selectedKeys={new Set([String(socialbtnVariant)])}
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
              className="max-w-xs"
              selectedKeys={new Set([String(socialbtnColor)])}
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
        <LoginButton
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
        <SignUpLink />
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
${
  withSocialLogin
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
    ${
      socialBtnPlacement == "bottom"
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
      ${
        withLogo
          ? `<Image
        src="/Logo.png" // add image with same name in /public dir.
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="flex flex-col w-full items-center">
      ${
        header.length > 0
          ? `  <p className="text-xl font-medium">${header}</p>`
          : ``
      }
      ${
        description.length > 0
          ? `  <p className="text-small text-default-500">${description}</p>`
          : ``
      }
      </span>`
          : ` <span className="flex flex-col w-full items-center">
          ${
            header.length > 0
              ? `  <p className="text-xl font-medium">${header}</p>`
              : ``
          }
          ${
            description.length > 0
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
      ${
        withSocialLogin && socialBtnPlacement == "top"
          ? `<SocialBtnsContainer />`
          : ``
      }
      <EmailInput variant="${inputVariant}" color="${inputColor}" />
      <PasswordInput variant="${inputVariant}" color="${inputColor}" />
      <div className="flex w-full max-w-xs justify-between gap-4">
        <Checkbox name="remember">Remember Me</Checkbox>
        <Link href="#">Forgor Password?</Link>
      </div>
      <Button className="max-w-xs" type="submit" color="${btnColor}" variant="${btnVariant}" fullWidth={${isBtnFullWidth}}>Log In</Button>
      ${
        withSocialLogin && socialBtnPlacement == "bottom"
          ? `<SocialBtnsContainer />`
          : ``
      }
      <span>Don&#39;t Have an Account? <Link href="#">Sign Up</Link></span>
    </form>
  );
};

const Login = () => {
  return (
    <div 
      className="flex w-full h-full rounded-md justify-${alignment} items-center gap-4"
    ${
      withBackgroundImage
        ? `  style={{
        backgroundImage: "url('/login-background.jpeg')", // add image with same name in /public dir.
        backgroundSize: "cover",
      }}
    >`
        : `>`
    }
      ${
        withCardBg
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

export default Login;`,
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
          className={`flex w-full h-full rounded-md justify-${alignment} border-1 border-default-200 dark:border-default-100 items-center gap-4`}
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
            <div className="w-full max-w-xs flex flex-col gap-4 justify-center items-center m-4">
              <CardInnerContent />
            </div>
          )}
        </div>
      }
      code={code}
      sandBoxLink="https://codesandbox.io/p/devbox/login-5h7mtz?file=%2FApp.jsx"
      setMaxWidth={setMaxWidth}
      PreviewProps={PreviewProps}
    />
  );
};

export default LoginForm;
