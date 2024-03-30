"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  Image,
  InputProps,
  Link,
  CheckboxGroup,
  Checkbox,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import EmailInput from "@/components/core/inputs/EmailInput";
import PasswordInput from "@/components/core/inputs/PasswordInput";
import UiComponent from "@/components/common/ui-component";
import PropSideBar from "@/components/Layout/PropSideBar";
import SocialButtons, {
  SocialButtonsProps,
} from "@/components/core/form/SocialButtons";
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
  LanguageProps,
  LanguageOptions,
} from "@/components/core/form";

const LogoTitle: React.FC<LogoTitleProps> = ({
  withLogo,
  description,
  header,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      {withLogo && (
        <Image
          src="/Logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
      )}
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

  // code props

  const [language, setLanguage] = useState<LanguageProps["language"]>("jsx");

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

  const CodeProps = () => {
    return (
      <>
        <Select
          label="Language"
          variant="bordered"
          placeholder="Select a language"
          // defaultSelectedKeys={["jsx"]}
          selectedKeys={[language]}
          className="max-w-xs"
          disallowEmptySelection
          onChange={(e) => {
            setLanguage(e.target.value as LanguageProps["language"]);
          }}
        >
          {LanguageOptions.map((variant, index) => (
            <SelectItem
              key={variant ?? index}
              value={variant}
              textValue={variant}
            >
              {variant}
            </SelectItem>
          ))}
        </Select>
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
            <Card className="w-full max-w-sm m-4">
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
      // change code according to value of language
      code={[]}
      setMaxWidth={setMaxWidth}
      PreviewProps={PreviewProps}
      CodeProps={CodeProps}
    />
  );
};

export { LoginForm };
