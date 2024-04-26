"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tabs, Tab, ScrollShadow, Button, Link } from "@nextui-org/react";
import PropSideBar from "@/components/Layout/PropSideBar";

import "@uiw/react-textarea-code-editor/dist.css";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Components } from "@/config";
import { usePathname } from "next/navigation";

type ComponentObject = {
    key: string;
    name: string;
} | null;

function UiComponent({
    preview,
    code,
    PreviewProps,
    setMaxWidth,
    sandBoxLink,
}: {
    preview: React.JSX.Element;
    code: {
        fileName: string;
        code: string;
    }[];
    PreviewProps?: () => React.JSX.Element;
    setMaxWidth?: Dispatch<SetStateAction<"375px" | "768px" | "100%">>;
    sandBoxLink?: string;
}) {
    const [selected, setSelected] = useState("preview");
    const [selectedCode, setselectedCode] = useState("0");
    const [prevComponent, setPrevComponent] = useState<ComponentObject>(null);
    const [nextComponent, setNextComponent] = useState<ComponentObject>(null);
    const pathname = usePathname();
    const pathArray = pathname.split("/components")
    const newArr = pathArray[pathArray.length - 1].split("/")
    const [prevComponentKey, setPrevComponentKey] = useState(newArr[newArr.length - 2]);
    const [nextComponentKey, setNextComponentKey] = useState(newArr[newArr.length - 2]);
    const currentComponentKey = newArr[newArr.length - 1];

    useEffect(() => {
        let currentIndex = -1;
        let currentParent = "";
        let prevParentKey: string | undefined = undefined;
        let nextParentKey: string | undefined = undefined;

        Components.forEach((component, index) => {
            component.children.forEach((child, childIndex) => {
                if (child.key === currentComponentKey) {
                    currentIndex = childIndex;
                    currentParent = component.parent;
                    if (index - 1 >= 0) {
                        prevParentKey = Components.find((_, i) => i === index - 1)?.key;
                    }
                    if (childIndex === component.children.length - 1) {
                        nextParentKey = Components.find((_, i) => i === index + 1)?.key;
                    }
                }
            });
        });

        if (currentIndex !== -1) {
            const parentComponents =
                Components.find((component) => component.parent === currentParent)
                    ?.children || [];
            const prevParentComponents =
                Components.find((component) => component.key === prevParentKey)
                    ?.children || [];
            const nextParentComponents =
                Components.find((component) => component.key === nextParentKey)
                    ?.children || [];

            const prevComponent =
                currentIndex > 0
                    ? parentComponents[currentIndex - 1]
                    : prevParentKey
                        ? prevParentComponents[prevParentComponents.length - 1]
                        : null;
            const nextComponent =
                currentIndex < parentComponents.length - 1
                    ? parentComponents[currentIndex + 1]
                    : nextParentKey
                        ? nextParentComponents[0]
                        : null;

            setPrevComponent(prevComponent);
            setNextComponent(nextComponent);

            if (currentIndex === 0 && prevParentKey) {
                setPrevComponentKey(prevParentKey);
            }
            if (currentIndex === parentComponents.length - 1 && nextParentKey) {
                setNextComponentKey(nextParentKey);
            }
        }
    }, [currentComponentKey]);

    const CustomCodeEditor = ({ index }: { index: number }) => {
        return (
            <CodeEditor
                value={String(code[index].code)}
                language="jsx"
                placeholder="Please enter JS code."
                readOnly
                style={{
                    fontSize: 14,
                    fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                }}
            />
        );
    };

    return (
        <div className="flex w-full h-full flex-row gap-4 justify-between">
            <div className="w-full h-full flex flex-col">
                <Tabs
                    variant="underlined"
                    aria-label="Component Tabs"
                    classNames={{
                        panel:
                            `flex flex-col md:flex-row gap-4 w-full justify-between h-full min-h-screen ${selected === 'preview' ? "pb-0" : "py-0"} max-h-[780px]`,
                    }}
                    selectedKey={selected}
                    onSelectionChange={(key) => setSelected(key as string)}
                    className="w-full"
                >
                    <Tab key="preview" title="Preview">
                        <ScrollShadow
                            className="w-full max-w-full h-full rounded-md p-0 flex justify-center sm:justify-start"
                            size={0}
                        >
                            {preview}
                        </ScrollShadow>
                    </Tab>
                    <Tab key="code" title="Code">
                        <div className="w-full h-full">
                            <Tabs
                                variant="underlined"
                                aria-label="File Tabs"
                                selectedKey={selectedCode}
                                onSelectionChange={(key) => setselectedCode(key as string)}
                                classNames={{
                                    panel: "pb-0"
                                }}
                            >
                                {code.map((file, i) => (
                                    <Tab key={i} title={file.fileName}>
                                        <ScrollShadow
                                            className="w-full max-w-full h-[650px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                                            size={0}
                                        >
                                            <CustomCodeEditor index={i} />
                                        </ScrollShadow>
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                    </Tab>
                </Tabs>
                <div className="flex justify-between items-center gap-4">
                    <Button
                        className="bg-background px-1"
                        startContent={<FcPrevious />}
                        isDisabled={prevComponent == null}
                        as={Link}
                        href={
                            prevComponent
                                ? "/components/" +
                                prevComponentKey +
                                "/" +
                                prevComponent.key
                                : "#"
                        }
                    >
                        {prevComponent ? prevComponent.name : "Prev"}
                    </Button>
                    <Button
                        className="bg-background px-1"
                        endContent={<FcNext />}
                        isDisabled={nextComponent == null}
                        as={Link}
                        href={
                            nextComponent
                                ? "/components/" +
                                nextComponentKey +
                                "/" +
                                nextComponent.key
                                : "#"
                        }
                    >
                        {nextComponent ? nextComponent.name : "Next"}
                    </Button>
                </div>
            </div>
            {PreviewProps && (
                <PropSideBar
                    setMaxWidth={setMaxWidth}
                    PreviewProps={PreviewProps}
                    currentView={selected}
                    sandBoxLink={sandBoxLink}
                    currentCode={String(code[Number(selectedCode)]?.code) ?? undefined}
                    codeLength={code.length}
                />
            )}
        </div>
    );
}

export default UiComponent;
