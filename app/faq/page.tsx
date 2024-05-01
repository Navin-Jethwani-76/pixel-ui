"use client";
import React from "react";
import { Accordion, AccordionItem, Link } from "@/lib/nextui";
import { FaqList } from "@/app/faq/data";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const Page = () => {
  return (
    <div className="flex flex-col w-full gap-4 my-4">
      <div className="w-full flex justify-between items-center px-2 text-xl leading-7">
        <p className="inline-block sm:hidden">FAQs</p>
        <p className="hidden sm:flex">Frequently asked questions.</p>
        <Link href="/contact" color="secondary">
          Contact Us
        </Link>
      </div>
      <Accordion>
        {FaqList.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              title={faq.title}
              aria-label={faq.title}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <IoMdClose className="text-secondary" size={24} />
                ) : (
                  <IoMdAdd className="text-secondary" size={24} />
                )
              }
            >
              <p className="text-base text-default-500">{faq.content}</p>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Page;
