"use client";
import React from "react";
import { Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import { Components } from "@/config";
import ComponentCard from "@/components/common/ComponentCard";

function Page() {
  return (
    <div className="w-full h-full flex gap-4">
      <div className="w-full h-full lg:max-w-5xl flex flex-col gap-4">
        <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          Components
        </h1>
        <ScrollShadow
          className="w-full h-full max-h-[800px] flex flex-col gap-4 p-4 lg:ps-0 scroll-smooth"
          size={0}
          hideScrollBar
        >
          {Components.map((c) => (
            <React.Fragment key={c.key}>
              <h2 className="text-xl font-medium text-foreground" id={c.key}>
                {c.parent}
              </h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4">
                {c.children.map((child) => (
                  <ComponentCard
                    key={child.key}
                    component={child}
                    href={`/components/${c.key}/${child.key}`}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </ScrollShadow>
      </div>
      <div className="hidden lg:flex flex-col gap-4 flex-1 h-full my-4">
        <Listbox variant="bordered" aria-label="Components List">
          {Components.map((c) => (
            <ListboxItem key={c.key} textValue={c.parent} href={"#" + c.key}>
              {c.parent}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
}

export default Page;
