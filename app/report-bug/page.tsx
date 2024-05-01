"use client";
import React, { useState } from "react";
import { Components } from "@/config";
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@/lib/nextui";
import { FaCheck } from "react-icons/fa6";

function generateSlugs(components: typeof Components): string[] {
  const slugs: string[] = [];

  components.forEach((component) => {
    component.children.forEach((child) => {
      const slug = `${component.key}-${child.key}`;
      slugs.push(slug);
    });
  });

  return slugs;
}

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const component = searchParams.component;
  const slugs = generateSlugs(Components);
  const frameworks = ["Next.Js", "Vite", "Remix"];
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = {
      email: form.email.value,
      component: form.component.value,
      nextuiversion: form.nextuiversion.value,
      framework: form.framework.value,
      frameworkversion: form.frameworkversion.value,
      codesandboxlink: form.codesandboxlink.value,
      bugdescription: form.bugdescription.value,
      stepstoreplicate: form.stepstoreplicate.value,
    };
    setEmail(data.email);
    setLoading(true);
    const response = await fetch(`/api/report-bug`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setFormSubmitted(true);
    } else {
      alert("An Error Occured");
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center md:justify-start items-center my-4">
      <h2 className="text-2xl">Report Bug</h2>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner color="current" />
        </div>
      ) : (
        <>
          {formSubmitted ? (
            <div className="w-full h-full flex justify-center items-center">
              <Card className="w-full max-w-xs">
                <CardBody className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex gap-4">
                    <p>Bug Reported</p>
                    <FaCheck size={24} color="green" />
                  </div>
                  <p className="text-center">
                    We will soon reach out to {email}
                  </p>
                </CardBody>
              </Card>
            </div>
          ) : (
            <div className="w-full max-w-2xl">
              <form
                className="flex flex-wrap gap-4 justify-center md:justify-between items-center"
                onSubmit={handleSubmit}
              >
                <Select
                  label="Component"
                  name="component"
                  className="max-w-xs"
                  variant="bordered"
                  isRequired
                  disallowEmptySelection
                  defaultSelectedKeys={component ? [component as string] : []}
                >
                  {slugs.map((slug) => (
                    <SelectItem key={slug} value={slug}>
                      {slug}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  label="NextUi Version"
                  name="nextuiversion"
                  defaultValue="2.3.6"
                  variant="bordered"
                  className="max-w-xs"
                  isRequired
                />
                <Select
                  label="Framework"
                  name="framework"
                  className="max-w-xs"
                  variant="bordered"
                  isRequired
                  disallowEmptySelection
                  defaultSelectedKeys={["Next.Js"]}
                >
                  {frameworks.map((framework) => (
                    <SelectItem key={framework} value={framework}>
                      {framework}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  label="Framework Version"
                  name="frameworkversion"
                  defaultValue="14.2"
                  variant="bordered"
                  className="max-w-xs"
                  isRequired
                />
                <Input
                  label="Code-Sandbox Link"
                  name="codesandboxlink"
                  type="url"
                  variant="bordered"
                  placeholder="https://codesandbox.io/"
                  isRequired
                  className="max-w-xs md:max-w-2xl"
                />
                <Textarea
                  label="Bug Description"
                  name="bugdescription"
                  variant="bordered"
                  isRequired
                  className="max-w-xs md:max-w-2xl"
                />
                <Textarea
                  label="Steps to Replicate the Bug"
                  name="stepstoreplicate"
                  variant="bordered"
                  className="max-w-xs md:max-w-2xl"
                />
                <Input
                  label="Email"
                  name="email"
                  placeholder="Your Email Address"
                  isRequired
                  variant="bordered"
                  type="email"
                  className="max-w-xs md:max-w-2xl"
                />
                <div className="w-full max-w-xs md:max-w-2xl">
                  <Button type="submit" color="secondary" fullWidth>
                    Report
                  </Button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}
