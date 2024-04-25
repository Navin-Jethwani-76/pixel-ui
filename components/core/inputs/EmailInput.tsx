import React from "react";
import { Input, InputProps } from "@nextui-org/react";

const EmailInput = (props: InputProps) => {
  return (
    <Input
      label="Email"
      name="email"
      placeholder="you@example.com"
      autoComplete="email"
      variant="bordered"
      isRequired
      className="max-w-xs"
      {...props}
    />
  );
};

export default EmailInput;

export const EmailInputCode = `import React from "react";
import { Input } from "@nextui-org/react";

const EmailInput = (props) => {
  return (
    <Input
      label="Email"
      name="email"
      placeholder="you@example.com"
      autoComplete="email"
      isRequired
      className="max-w-xs"
      {...props}
    />
  );
};

export default EmailInput;`;
