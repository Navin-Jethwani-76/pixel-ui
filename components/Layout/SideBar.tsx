"use client";
import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { Components, Docs } from "@/config";

const SideBar = () => {
  return (
    <Listbox variant="bordered" aria-label="SideBar">
      <ListboxSection title="Docs" showDivider>
        {Docs.map((obj) => {
          return (
            <ListboxItem
              key={obj.key}
              startContent={<obj.icon size={obj.iconSize} />}
              href={`/docs/${obj.key}`}
            >
              {obj.name}
            </ListboxItem>
          );
        })}
      </ListboxSection>
      <ListboxSection title="Components">
        {Components.map((obj) => {
          return (
            <ListboxItem href={`/components/${obj.key}`} key={obj.key}>
              {obj.name}
            </ListboxItem>
          );
        })}
      </ListboxSection>
    </Listbox>
  );
};

export default SideBar;
