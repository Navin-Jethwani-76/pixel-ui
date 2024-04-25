"use client";
import React from "react";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/Layout/theme-switcher";
import Logo from "@/components/common/Logo";
import SideBar from "@/components/Layout/SideBar";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean | undefined>(
    false
  );

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <NextUiNavbar
        isBordered
        maxWidth="full"
        position="static"
        className="border-b-1 border-foreground-200 rounded-md"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <Link
              className="font-bold text-inherit capitalize flex gap-2"
              href="/"
            >
              <Logo />
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex gap-2">
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <SideBar />
        </NavbarMenu>
      </NextUiNavbar>
    </>
  );
};

export default NavBar;
