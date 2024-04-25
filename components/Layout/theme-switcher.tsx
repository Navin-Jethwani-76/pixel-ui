"use client";
import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from "@/lib/nextui";
import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

export function ThemeSwitcher({ props }: { props?: ButtonProps }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="bordered"
      onPress={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      {...props}
    >
      {theme == "light" && <LuMoonStar />}
      {theme == "dark" && <MdOutlineWbSunny />}
    </Button>
  );
}
