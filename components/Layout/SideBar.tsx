"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@/lib/nextui";
import { Components, Docs } from "@/config";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 rounded-lg h-8 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const defaultExpandedKeys = [];

  const pathname = usePathname();
  const pathArray = pathname.split("/components")
  const newArr = pathArray[pathArray.length - 1].split("/")
  if (newArr[newArr.length - 2]) {
    const openKey = Components.find((c) => c.key == newArr[newArr.length - 2])?.key;
    defaultExpandedKeys.push(openKey);
  }

  return (
    <div className="flex flex-col">
      <Listbox variant="bordered" aria-label="Docs">
        <ListboxSection showDivider>
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
      </Listbox>
      <Accordion
        showDivider={false}
        className="p-0 xl:p-2 flex flex-col gap-1 w-full lg:max-w-[300px]"
        variant="light"
        itemClasses={itemClasses}
        isCompact
        defaultExpandedKeys={defaultExpandedKeys as []}
      >
        {Components.map((obj) => {
          return (
            <AccordionItem
              key={obj.key}
              aria-label={obj.parent}
              title={obj.parent}
            >
              <Listbox variant="bordered" aria-label="Components">
                {obj.children.map((child) => {
                  return (
                    <ListboxItem
                      href={`/components/${obj.key}/${child.key}`}
                      key={child.key}
                      className={
                        newArr[newArr.length - 1] == child.key ? "border-default" : ""
                      }
                    >
                      {child.name}
                    </ListboxItem>
                  );
                })}
              </Listbox>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SideBar;
