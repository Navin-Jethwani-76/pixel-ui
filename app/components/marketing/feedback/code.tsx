export const RatingRadioGroupCode = `"use client";
import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { LuFrown, LuMeh, LuSmile, LuSmilePlus } from "react-icons/lu";

const RatingRadioGroup = () => {
 const [selected, setSelected] = useState("3");

 const radioOptions = [
    { value: "1", icon: LuFrown, color: "text-danger" },
    { value: "2", icon: LuMeh, color: "text-foreground" },
    { value: "3", icon: LuSmile, color: "text-primary" },
    { value: "4", icon: LuSmilePlus, color: "text-success" },
 ];

 const renderRadio = (option) => (
    <Radio
      classNames={{
        wrapper: "hidden",
        labelWrapper: "ml-0",
      }}
      value={option.value}
      key={option.value}
    >
      <option.icon
        size={24}
        className={\`transition-transform-colors \${selected === option.value ? option.color : "text-default-400 dark:text-default-300"} group-data-[pressed=true]:scale-90\`}
      />
    </Radio>
 );

 return (
    <>
      <RadioGroup
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
      >
        {radioOptions.map(renderRadio)}
      </RadioGroup>
    </>
 );
};

export default RatingRadioGroup;`;
