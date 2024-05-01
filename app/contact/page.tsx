"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Input, Textarea } from "@/lib/nextui";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data?.error);
        throw new Error(data?.error || "Internal Server Error");
      }
      setMessageSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center px-2">
      {messageSent ? (
        <Card>
          <CardBody>
            <div className="flex gap-4">
              <IoMdCheckmarkCircleOutline size={24} color="green" />
              <p>Your message has been sent successfully!</p>
            </div>
          </CardBody>
        </Card>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="w-full flex justify-center">
            <h2 className="text-2xl">Contact Us</h2>
          </div>
          <form
            onSubmit={handleContact}
            className="flex flex-col gap-4 items-center"
          >
            <Input
              label="Name"
              disabled={loading}
              isRequired
              name="name"
              variant="bordered"
              autoComplete="name"
            />
            <Input
              label="Email"
              type="email"
              isRequired
              disabled={loading}
              name="email"
              variant="bordered"
              autoComplete="email"
            />
            <Textarea
              label="Messgae"
              isRequired
              disabled={loading}
              name="message"
              variant="bordered"
              autoComplete="off"
            />
            <div className="flex items-center w-full">
              <Button
                type="submit"
                disabled={loading}
                isLoading={loading}
                color="secondary"
                fullWidth
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
