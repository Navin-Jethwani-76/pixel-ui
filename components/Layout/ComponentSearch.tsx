"use client";
import React, { useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Divider,
  Input,
  Chip,
  ScrollShadow,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { Components } from "@/config";

function ComponentSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const allComponents = useMemo(() => {
    const components: {
      key: string;
      slug: string;
    }[] = [];
    Components.map((c) =>
      c.children.map((child) =>
        components.push({
          key: child.key,
          slug: `${c.key}/${child.key}`,
        })
      )
    );
    return components;
  }, []);

  const matchedComponents = useMemo(() => {
    return allComponents.filter((c) => c.key.includes(searchValue));
  }, [allComponents, searchValue]);

  return (
    <>
      <Button
        startContent={<FiSearch size={20} />}
        onPress={onOpen}
        className="hidden md:flex"
        variant="bordered"
      >
        Quick Search
      </Button>
      <Button
        startContent={<FiSearch size={20} />}
        isIconOnly
        onPress={onOpen}
        className="flex md:hidden"
        variant="bordered"
      ></Button>
      <Modal
        isOpen={isOpen}
        disableAnimation
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="px-2">
                <Input
                  placeholder="Search Components"
                  className="w-full"
                  variant="bordered"
                  value={searchValue}
                  onValueChange={setSearchValue}
                  autoFocus
                  startContent={<FiSearch size={20} />}
                  endContent={
                    <Chip size="sm" radius="sm">
                      ESC
                    </Chip>
                  }
                />
                <Divider />
                <ScrollShadow className="w-full h-60" hideScrollBar size={10}>
                  <Listbox variant="bordered" aria-label="Components">
                    {matchedComponents.map((c) => (
                      <ListboxItem
                        onPress={onClose}
                        key={c.key}
                        href={`/components/${c.slug}`}
                      >
                        {c.key}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ComponentSearch;
