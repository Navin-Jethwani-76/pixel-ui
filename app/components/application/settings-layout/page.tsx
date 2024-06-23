"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  ScrollShadow,
  User,
  Tabs,
  Tab,
  Textarea,
  Select,
  SelectItem,
  Switch,
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  RadioProps,
  Divider,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@/lib/nextui";
import { ViewProps } from "@/app/components";
import UiComponent from "@/lib/ui";
import { FaLink, FaRegCreditCard } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const SettingsLayout = () => {
  const [maxWidth, setMaxWidth] = useState<ViewProps["current"]>("100%");

  const ProfileContent = () => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Profile</p>
              <p className="text-sm font-normal text-default-400">
                This displays your public profile on the site.
              </p>
            </div>
            <Card className="bg-transparent">
              <CardBody>
                <User
                  name="Kate Moore"
                  className="justify-start"
                  avatarProps={{
                    className: "w-16 h-16",
                    src: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
                  }}
                  description={
                    <>
                      <div className="flex flex-col">
                        <p className="text-xs text-default-400">
                          Customer Support
                        </p>
                        <p className="text-xs text-default-400">
                          kate.moore@acme.com
                        </p>
                      </div>
                    </>
                  }
                />
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Title</p>
              <p className="text-sm font-normal text-default-400">
                Set your current role.
              </p>
            </div>
            <Input placeholder="e.g Customer Support" variant="bordered" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Location</p>
              <p className="text-sm font-normal text-default-400">
                Set your current location.
              </p>
            </div>
            <Input
              placeholder="e.g Buenos Aires, Argentina"
              variant="bordered"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Biography
              </p>
              <p className="text-sm font-normal text-default-400">
                Specify your present whereabouts.
              </p>
            </div>
            <Textarea
              placeholder="e.g., 'Kate Moore - Acme.com Support Specialist. Passionate about solving tech issues, loves hiking and volunteering."
              variant="bordered"
            />
          </div>
          <div className="w-fit">
            <Button variant="bordered" size="sm">
              Update Profile
            </Button>
          </div>
        </div>
      </>
    );
  };
  const AppearanceContent = () => {
    const FontOptions = [
      {
        label: "Large",
        value: "Large",
      },
      {
        label: "Medium",
        value: "Medium",
      },
      {
        label: "Small",
        value: "Small",
      },
    ];

    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Theme</p>
              <p className="text-sm font-normal text-default-400">
                Change the appearance of the web.
              </p>
            </div>
            <RadioGroup
              orientation="horizontal"
              defaultValue="Dark"
              color="secondary"
            >
              {["Light", "Dark"].map((theme) => (
                <Radio
                  key={theme}
                  value={theme}
                  classNames={{
                    control: "bg-default-foreground",
                    wrapper:
                      "border-2 border-default group-data-[selected=true]:border-default-foreground",
                  }}
                >
                  {theme}
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Font size
              </p>
              <p className="text-sm font-normal text-default-400">
                Adjust the web font size.
              </p>
            </div>
            <Select
              defaultSelectedKeys={[FontOptions[0].value]}
              disallowEmptySelection
              className="max-w-[140px]"
              variant="bordered"
            >
              {FontOptions.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  {font.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Translucent UI
              </p>
              <p className="text-sm font-normal text-default-400">
                Use transparency in UI elements like the sidebar and modal
                dialogs.
              </p>
            </div>
            <Switch
              color="secondary"
              size="sm"
              aria-label="Translucent UI Switch"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Use pointer cursor
              </p>
              <p className="text-sm font-normal text-default-400">
                Change the cursor to a pointer when hovering
              </p>
            </div>
            <Switch
              size="sm"
              color="secondary"
              aria-label="pointer cursor Switch"
            />
          </div>
        </div>
      </>
    );
  };
  const AccountContent = () => {
    const timezones = [
      {
        zone: "US/Pacific",
        gmt: "(GMT-08:00)",
        name: "Pacific Time (US Canada)",
      },
      {
        zone: "US/Arizona",
        gmt: "(GMT-07:00)",
        name: "Arizona",
      },
      {
        zone: "US/Central",
        gmt: "(GMT-06:00)",
        name: "Central Time (US Canada)",
      },
      {
        zone: "US/Eastern",
        gmt: "(GMT-05:00)",
        name: "Eastern Time (US Canada)",
      },
      {
        zone: "Europe/London",
        gmt: "(GMT)",
        name: "London",
      },
      {
        zone: "Europe/Paris",
        gmt: "(GMT+01:00)",
        name: "Paris",
      },
      {
        zone: "Europe/Prague",
        gmt: "(GMT+01:00)",
        name: "Prague",
      },
      {
        zone: "Europe/Rome",
        gmt: "(GMT+01:00)",
        name: "Rome",
      },
      {
        zone: "Asia/Kolkata",
        gmt: "(GMT+05:30)",
        name: "Kolkata",
      },
      {
        zone: "Asia/Dhaka",
        gmt: "(GMT+06:00)",
        name: "Dhaka",
      },
      {
        zone: "Asia/Jakarta",
        gmt: "(GMT+07:00)",
        name: "Jakarta",
      },
    ];

    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Full name
              </p>
              <p className="text-sm font-normal text-default-400">
                Name to be used for emails.
              </p>
            </div>
            <Input placeholder="e.g Kate Moore" variant="bordered" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Username</p>
              <p className="text-sm font-normal text-default-400">
                Nickname or first name.
              </p>
            </div>
            <Input placeholder="e.g kate.moore" variant="bordered" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Email Address
              </p>
              <p className="text-sm font-normal text-default-400">
                The email address associated with your account.
              </p>
            </div>
            <Input placeholder="e.g kate.moore@acme.com" variant="bordered" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Timezone</p>
              <p className="text-sm font-normal text-default-400">
                Set your current timezone.
              </p>
            </div>
            <Select
              placeholder="Select a TimeZone"
              variant="bordered"
              className="w-full max-w-[250px]"
            >
              {timezones.map((timezone) => (
                <SelectItem key={timezone.zone} value={timezone.zone}>
                  {timezone.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="w-fit">
            <Button variant="bordered" size="sm">
              Update Settings
            </Button>
          </div>
        </div>
      </>
    );
  };
  const BillingContent = () => {
    const CustomRadio = (props: RadioProps) => {
      const {
        Component,
        children,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
      } = useRadio(props);

      return (
        <Component
          {...getBaseProps()}
          className={
            "group px-4 py-4 max-w-[300px] cursor-pointer gap-4 rounded-lg border-2 border-transparent flex-1 data-[selected=true]:border-default-foreground"
          }
        >
          <section className="flex flex-row-reverse justify-between">
            <VisuallyHidden>
              <input {...getInputProps()} />
            </VisuallyHidden>
            <span {...getWrapperProps()}>
              <span {...getControlProps()} />
            </span>
            <div {...getLabelWrapperProps()}>
              {children && <span {...getLabelProps()}>{children}</span>}
            </div>
          </section>
          {description && <>{description}</>}
        </Component>
      );
    };

    return (
      <>
        <div className="flex flex-col gap-4">
          <Card className="bg-transparent">
            <CardBody className="flex flex-row justify-between items-center gap-2 px-4">
              <div className="flex gap-4 items-center">
                <FaRegCreditCard size={24} />
                <div>
                  <p className="text-sm font-medium text-default-600">
                    Payment method
                  </p>
                  <p className="text-xs text-default-400">
                    MasterCard credit card ending in ***3456
                  </p>
                </div>
              </div>
              <Button variant="bordered" size="sm">
                Update
              </Button>
            </CardBody>
          </Card>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Current Plan
              </p>
              <p className="text-sm font-normal text-default-400">
                Your free trial ends in{" "}
                <span className="text-default-500">8 days.</span>
              </p>
            </div>
            <RadioGroup
              orientation={maxWidth == "375px" ? "vertical" : "horizontal"}
            >
              <CustomRadio
                classNames={{
                  wrapper:
                    "border-2 border-default group-data-[selected=true]:border-default-foreground",
                  control: "bg-default-foreground",
                }}
                value="Monthly"
                description={
                  <div className="flex flex-col gap-2 px-2">
                    <p className="pt-2">
                      <span className="text-[30px] font-semibold leading-7 text-default-foreground">
                        $12
                      </span>
                      &nbsp;
                      <span className="text-xs font-medium text-default-400">
                        /per month
                      </span>
                    </p>
                    <ul className="list-inside list-disc text-xs font-normal text-default-500">
                      <li>Unlimited users</li>
                      <li>All features</li>
                      <li>Support via email and chat</li>
                      <li>Billed monthly, cancel any time</li>
                    </ul>
                  </div>
                }
              >
                Pro Monthly
              </CustomRadio>
              <CustomRadio
                classNames={{
                  wrapper:
                    "border-2 border-default group-data-[selected=true]:border-default-foreground",
                  control: "bg-default-foreground",
                }}
                value="Yearly"
                description={
                  <div className="flex flex-col gap-2 px-2">
                    <p className="pt-2">
                      <span className="text-[30px] font-semibold leading-7 text-default-foreground">
                        $72
                      </span>
                      &nbsp;
                      <span className="text-xs font-medium text-default-400">
                        /per year
                      </span>
                    </p>
                    <ul className="list-inside list-disc text-xs font-normal text-default-500">
                      <li>Unlimited users</li>
                      <li>All features</li>
                      <li>Support via email and chat</li>
                      <li>Billed Yearly, cancel any time</li>
                    </ul>
                  </div>
                }
              >
                Pro Yearly
              </CustomRadio>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">
                Billing Address
              </p>
              <p className="text-sm font-normal text-default-400">
                If you&#39;d like to add a postal address to every invoice,
                enter it here.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Input
                variant="bordered"
                autoComplete="address-line1"
                name="address-line1"
                placeholder="Address Line 1"
              />
              <Input
                variant="bordered"
                autoComplete="address-line2"
                name="address-line2"
                placeholder="Address Line 2"
              />
              <div className="flex gap-2 justify-between items-center">
                <Input
                  variant="bordered"
                  autoComplete="home city"
                  name="city"
                  placeholder="City"
                />
                <Input variant="bordered" name="state" placeholder="State" />
              </div>
              <div className="flex gap-2 justify-between items-center">
                <Input
                  variant="bordered"
                  autoComplete="postal-code"
                  name="postal-code"
                  placeholder="Zip"
                />
                <Input
                  variant="bordered"
                  autoComplete="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="w-fit">
              <Button variant="bordered" size="sm">
                Save
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const TeamContent = () => {
    const Roles = [
      {
        label: "Member",
      },
      {
        label: "Admin",
      },
      {
        label: "Owner",
      },
    ];

    const columns = [
      {
        key: "user",
        label: "USER",
      },
      {
        key: "role",
        label: "ROLE",
      },
      {
        key: "status",
        label: "STATUS",
      },
      {
        key: "actions",
        label: "ACTIONS",
      },
    ];

    const users = [
      {
        id: 1,
        user: (
          <User
            name="Tony Reichert"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            description="tony.reichert@example.com"
          />
        ),
        role: "Owner",
        status: (
          <Chip color="success" variant="flat" size="sm">
            active
          </Chip>
        ),
        actions: (
          <Dropdown className="bg-background border-1 border-default-200">
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <BsThreeDots className="h-6 w-6 text-default-400" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>View</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ),
      },
      {
        id: 2,
        user: (
          <User
            name="Zoey Lang"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            }}
            description="zoey.lang@example.com"
          />
        ),
        status: (
          <Chip color="danger" variant="flat" size="sm">
            pending
          </Chip>
        ),
        role: "Member",
        actions: (
          <Dropdown className="bg-background border-1 border-default-200">
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <BsThreeDots className="h-6 w-6 text-default-400" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>View</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ),
      },
    ];

    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-default-700">Team</p>
              <p className="text-sm font-normal text-default-400">
                Manage and invite Team Members.
              </p>
            </div>
            <Card className="bg-transparent">
              <CardBody className="flex flex-col gap-4 px-0">
                <div className="flex gap-2 justify-between items-center">
                  <p className="text-sm font-medium text-default-700">
                    Invite new members by email address
                  </p>
                  <Button
                    variant="bordered"
                    size="sm"
                    endContent={<FaLink size={18} />}
                  >
                    Invite Link
                  </Button>
                </div>
                <Divider />
                <div className="flex flex-col gap-4">
                  <div
                    className={`flex ${
                      maxWidth === "375px"
                        ? "flex-col items-center justify-center"
                        : "flex-row items-center justify-between"
                    } gap-3`}
                  >
                    <Input
                      placeholder="e.g kate.moore@acme.com"
                      variant="bordered"
                      name="email"
                      label="Email Address"
                      labelPlacement="outside"
                      className="w-full max-w-xs"
                    />
                    <Select
                      variant="bordered"
                      className="w-full max-w-xs"
                      label="Role"
                      labelPlacement="outside"
                      defaultSelectedKeys={[Roles[0].label]}
                      disallowEmptySelection
                    >
                      {Roles.map((role) => {
                        return (
                          <SelectItem key={role.label} value={role.label}>
                            {role.label}
                          </SelectItem>
                        );
                      })}
                    </Select>
                  </div>
                  <div className="w-fit">
                    <Button
                      size="sm"
                      variant="bordered"
                      endContent={<IoAddCircleOutline size={18} />}
                    >
                      Add More
                    </Button>
                  </div>
                </div>
                <Divider />
                <div className="flex gap-2 justify-between items-center">
                  <p className="relative text-xs text-default-500">
                    Learn more about{" "}
                    <span className="text-default-foreground">
                      Team Members
                    </span>
                  </p>
                  <Button variant="bordered" size="sm">
                    Send Invite
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Table
              aria-label="Users"
              hideHeader
              classNames={{
                wrapper: "border border-default-200 bg-transparent",
              }}
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody items={users}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </>
    );
  };

  const TabsContent = [
    { label: "Profile", content: ProfileContent },
    { label: "Appearance", content: AppearanceContent },
    { label: "Account", content: AccountContent },
    { label: "Billing", content: BillingContent },
    { label: "Team", content: TeamContent },
  ];

  const CardInnerContent = () => {
    return (
      <>
        <div
          className={`flex flex-col w-full h-full p-4 pb-0 rounded-md justify-center border-1 border-default-600/10 items-center gap-4`}
          style={{
            maxWidth: maxWidth,
          }}
        >
          <div className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-col gap-2 px-2">
              <h1 className="text-xl font-medium leading-9 text-default-foreground">
                Settings
              </h1>
              <h2 className="text-small text-default-500">
                Customize settings, email preferences, and web appearance.
              </h2>
            </div>

            <Tabs
              classNames={{
                base: "w-full",
                tabList: "w-full",
                cursor: "bg-content1 dark:bg-content1",
                panel: "py-0",
              }}
              variant="light"
            >
              {TabsContent.map((tab) => {
                return (
                  <Tab key={tab.label} title={tab.label}>
                    <ScrollShadow
                      className={`w-full h-full pb-4 ${
                        maxWidth == "375px" ? "max-h-[515px]" : "max-h-[530px]"
                      }`}
                      hideScrollBar
                      size={0}
                    >
                      {tab.content()}
                    </ScrollShadow>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </>
    );
  };

  const code: {
    fileName: string;
    code: string;
  }[] = [
    {
      fileName: "App.jsx",
      code: `"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Profile from "./Profile";
import Appearance from "./Appearance";
import Account from "./Account";
import Billing from "./Billing";
import Team from "./Team";

const TabsContent = [
  { label: "Profile", content: Profile },
  { label: "Appearance", content: Appearance },
  { label: "Account", content: Account },
  { label: "Billing", content: Billing },
  { label: "Team", content: Team },
];

export default function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-2">
          <h1 className="text-xl font-medium leading-9 text-default-foreground">Settings</h1>
          <h2 className="text-small text-default-500">
            Customize settings, email preferences, and web appearance.
          </h2>
        </div>
        <div className="w-full h-full p-2">
          <Tabs
            classNames={{
              base: "w-full",
              tabList: "w-full",
              cursor: "bg-content1 dark:bg-content1",
            }}
          >
            {TabsContent.map((tab) => (
              <Tab key={tab.label} title={tab.label}>
                {tab.content()}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Profile.jsx",
      code: `import React from "react";
import { Button, Card, CardBody, Input, User, Textarea } from "@nextui-org/react";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Profile</p>
            <p className="text-sm font-normal text-default-400">
              This displays your public profile on the site.
            </p>
          </div>
          <Card>
            <CardBody>
              <User
                name="Kate Moore"
                className="justify-start"
                avatarProps={{
                  className: "w-16 h-16",
                  src: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
                }}
                description={
                  <div className="flex flex-col">
                    <p className="text-xs text-default-400">Customer Support</p>
                    <p className="text-xs text-default-400">kate.moore@acme.com</p>
                  </div>
                }
              />
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Title</p>
            <p className="text-sm font-normal text-default-400">
              Set your current role.
            </p>
          </div>
          <Input placeholder="e.g Customer Support" variant="bordered" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Location</p>
            <p className="text-sm font-normal text-default-400">
              Set your current location.
            </p>
          </div>
          <Input placeholder="e.g Buenos Aires, Argentina" variant="bordered" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Biography</p>
            <p className="text-sm font-normal text-default-400">
              Specify your present whereabouts.
            </p>
          </div>
          <Textarea
            placeholder="e.g., 'Kate Moore - Acme.com Support Specialist. Passionate about solving tech issues, loves hiking and volunteering."
            variant="bordered"
          />
        </div>
        <div className="w-fit">
          <Button className="bg-default-foreground text-background" size="sm">Update Profile</Button>
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Appearance.jsx",
      code: `import React from "react";
import { Select, SelectItem, Switch, RadioGroup, Radio } from "@nextui-org/react";

const fontOptions = ["Large", "Medium", "Small"];

export default function Appearance() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Theme</p>
            <p className="text-sm font-normal text-default-400">Change the appearance of the web.</p>
          </div>
          <RadioGroup orientation="horizontal" defaultValue="Dark" color="secondary">
            {["Light", "Dark"].map((theme) => (
              <Radio
                key={theme}
                value={theme}
                classNames={{
                  control: "bg-default-foreground",
                  wrapper:
                    "border-2 border-default group-data-[selected=true]:border-default-foreground",
                }}
              >
                {theme}
              </Radio>
            ))}
          </RadioGroup>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Font size</p>
            <p className="text-sm font-normal text-default-400">Adjust the web font size.</p>
          </div>
          <Select 
            variant="bordered"
            defaultSelectedKeys={["Large"]} 
            disallowEmptySelection 
            className="max-w-[140px]" 
            classNames={{
              trigger: "h-10 py-0",
              innerWrapper: "pt-0",
            }}
          >
            {fontOptions.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Translucent UI</p>
            <p className="text-sm font-normal text-default-400">
              Use transparency in UI elements like the sidebar and modal dialogs.
            </p>
          </div>
          <Switch color="secondary" size="sm" aria-label="Translucent UI Switch" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Use pointer cursor</p>
            <p className="text-sm font-normal text-default-400">Change the cursor to a pointer when hovering</p>
          </div>
          <Switch size="sm" color="secondary" aria-label="pointer cursor Switch" />
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Account.jsx",
      code: `import React from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const timezones = [
  { zone: "US/Pacific", gmt: "(GMT-08:00)", name: "Pacific Time (US Canada)" },
  { zone: "US/Arizona", gmt: "(GMT-07:00)", name: "Arizona" },
  { zone: "US/Central", gmt: "(GMT-06:00)", name: "Central Time (US Canada)" },
  { zone: "US/Eastern", gmt: "(GMT-05:00)", name: "Eastern Time (US Canada)" },
  { zone: "Europe/London", gmt: "(GMT)", name: "London" },
  { zone: "Europe/Paris", gmt: "(GMT+01:00)", name: "Paris" },
  { zone: "Europe/Prague", gmt: "(GMT+01:00)", name: "Prague" },
  { zone: "Europe/Rome", gmt: "(GMT+01:00)", name: "Rome" },
  { zone: "Asia/Kolkata", gmt: "(GMT+05:30)", name: "Kolkata" },
  { zone: "Asia/Dhaka", gmt: "(GMT+06:00)", name: "Dhaka" },
  { zone: "Asia/Jakarta", gmt: "(GMT+07:00)", name: "Jakarta" },
];

export default function Account() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Full name</p>
            <p className="text-sm font-normal text-default-400">Name to be used for emails.</p>
          </div>
          <Input placeholder="e.g Kate Moore" variant="bordered" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Username</p>
            <p className="text-sm font-normal text-default-400">Nickname or first name.</p>
          </div>
          <Input placeholder="e.g kate.moore" variant="bordered" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Email Address</p>
            <p className="text-sm font-normal text-default-400">
              The email address associated with your account.
            </p>
          </div>
          <Input placeholder="e.g kate.moore@acme.com" variant="bordered" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Timezone</p>
            <p className="text-sm font-normal text-default-400">Set your current timezone.</p>
          </div>
          <Select
            placeholder="Select a TimeZone"
            variant="bordered"
            className="w-full max-w-[250px]"
            classNames={{
              trigger: "h-10 py-0",
              innerWrapper: "pt-0",
            }}
          >
            {timezones.map((timezone) => (
              <SelectItem key={timezone.zone} value={timezone.zone}>
                {timezone.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-fit">
          <Button className="bg-default-foreground text-background" size="sm">
            Update Settings
          </Button>
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Billing.jsx",
      code: `import React from "react";
import { Button, Card, CardBody, Input, RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";
import { FaRegCreditCard } from "react-icons/fa6";

const CustomRadio = (props) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={
        "group px-4 py-4 max-w-[300px] cursor-pointer gap-4 rounded-lg border-2 border-transparent flex-1 bg-default-100 data-[selected=true]:border-default-foreground"
      }
    >
      <section className="flex flex-row-reverse justify-between hover:bg-content2">
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
        </div>
      </section>
      {description && <>{description}</>}
    </Component>
  );
};

const pricingOptions = [
  {
    value: "Monthly",
    price: "$12",
    per: "per month",
    features: [
      "Unlimited users",
      "All features",
      "Support via email and chat",
      "Billed monthly, cancel any time",
    ],
  },
  {
    value: "Yearly",
    price: "$72",
    per: "per year",
    features: [
      "Unlimited users",
      "All features",
      "Support via email and chat",
      "Billed Yearly, cancel any time",
    ],
  },
];

export default function Billing() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card>
          <CardBody className="flex flex-row justify-between items-center gap-2 px-4">
            <div className="flex gap-4 items-center">
              <FaRegCreditCard size={24} />
              <div>
                <p className="text-sm font-medium text-default-600">Payment method</p>
                <p className="text-xs text-default-400">
                  MasterCard credit card ending in ***3456
                </p>
              </div>
            </div>
            <Button className="bg-default-foreground text-background" size="sm">Update</Button>
          </CardBody>
        </Card>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Current Plan</p>
            <p className="text-sm font-normal text-default-400">
              Your free trial ends in{" "}
              <span className="text-default-500">8 days.</span>
            </p>
          </div>
          <RadioGroup
            classNames={{
              wrapper: "flex-col sm:flex-row",
            }}
          >
            {pricingOptions.map((option) => (
              <CustomRadio
                key={option.value}
                value={option.value}
                classNames={{
                  wrapper:
                    "border-2 border-default group-data-[selected=true]:border-default-foreground",
                  control: "bg-default-foreground",
                }}
                description={
                  <div className="flex flex-col gap-2 px-2">
                    <p className="pt-2">
                      <span className="text-[30px] font-semibold leading-7 text-default-foreground">{option.price}</span>
                      &nbsp;
                      <span className="text-xs font-medium text-default-400">{option.per}</span>
                    </p>
                    <ul className="list-inside list-disc text-xs font-normal text-default-500">
                      {option.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                }
              >
                {option.value}
              </CustomRadio>
            ))}
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Billing Address</p>
            <p className="text-sm font-normal text-default-400">
              If you&#39;d like to add a postal address to every invoice, enter it here.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Input variant="bordered" autoComplete="address-line1" name="address-line1" placeholder="Address Line 1" />
            <Input variant="bordered" autoComplete="address-line2" name="address-line2" placeholder="Address Line 2" />
            <div className="flex gap-2 justify-between items-center">
              <Input variant="bordered" autoComplete="home city" name="city" placeholder="City" />
              <Input variant="bordered" name="state" placeholder="State" />
            </div>
            <div className="flex gap-2 justify-between items-center">
              <Input variant="bordered" autoComplete="postal-code" name="postal-code" placeholder="Zip" />
              <Input variant="bordered" autoComplete="country" name="country" placeholder="Country" />
            </div>
          </div>
          <div className="w-fit">
            <Button className="bg-default-foreground text-background" size="sm">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}`,
    },
    {
      fileName: "Team.jsx",
      code: `import React from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  User,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Divider,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
} from "@nextui-org/react";
import { FaLink } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const ActionsDropDown = () => {
  return (
    <Dropdown className="bg-background border-1 border-default-200">
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <BsThreeDots className="h-6 w-6 text-default-400" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>View</DropdownItem>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const users = [
  {
    id: 1,
    user: (
      <User
        name="Tony Reichert"
        description="tony.reichert@example.com"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        }}
      />
    ),
    role: "Owner",
    status: (
      <Chip color="success" variant="flat" size="sm">active</Chip>
    ),
    actions: <ActionsDropDown />,
  },
  {
    id: 2,
    user: (
      <User
        name="Zoey Lang"
        description="zoey.lang@example.com"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        }}
      />
    ),
    role: "Member",
    status: (
      <Chip color="danger" variant="flat" size="sm">pending</Chip>
    ),
    actions: <ActionsDropDown />,
  },
];

export default function Team() {
  const Roles = ["Member", "Admin", "Owner"];

  const columns = [
    { key: "user", label: "USER" },
    { key: "role", label: "ROLE" },
    { key: "status", label: "STATUS" },
    { key: "actions", label: "ACTIONS" },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-default-700">Team</p>
            <p className="text-sm font-normal text-default-400">
              Manage and invite Team Members.
            </p>
          </div>
          <Card className="p-2">
            <CardBody className="flex flex-col gap-4">
              <div className="flex gap-2 justify-between items-center">
                <p className="text-sm font-medium text-default-700">Invite new members by email address</p>
                <Button className="bg-default-foreground text-background" size="sm" endContent={<FaLink size={18} />}>
                  Invite Link
                </Button>
              </div>
              <Divider />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between gap-3">
                  <Input
                    placeholder="e.g kate.moore@acme.com"
                    variant="bordered"
                    name="email"
                    label="Email Address"
                    labelPlacement="outside"
                    className="w-full max-w-xs"
                  />
                  <Select
                    variant="bordered"
                    className="w-full max-w-xs"
                    label="Role"
                    labelPlacement="outside"
                    defaultSelectedKeys={[Roles[0]]}
                    disallowEmptySelection
                  >
                    {Roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="w-fit">
                  <Button className="bg-default-200 text-default-700" size="sm" endContent={<IoAddCircleOutline size={18} />}>
                    Add More
                  </Button>
                </div>
              </div>
              <Divider />
              <div className="flex gap-2 justify-between items-center">
                <p className="relative text-xs text-default-500">
                  Learn more about{" "}
                  <Link href="#" color="foreground" size="sm">Team Members</Link>
                </p>
                <Button className="bg-default-foreground text-background" size="sm">
                  Send Invite
                </Button>
              </div>
            </CardBody>
          </Card>
          <Table
            aria-label="Users"
            hideHeader
            classNames={{
              wrapper: "border border-default-200 bg-transparent",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}`,
    },
  ];

  return (
    <UiComponent
      preview={CardInnerContent()}
      code={code}
      setMaxWidth={setMaxWidth}
      sandBoxLink="https://codesandbox.io/p/devbox/settings-layout-c57jzk?file=%2FApp.jsx"
    />
  );
};

export default SettingsLayout;
