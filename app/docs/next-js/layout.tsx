import { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-full">{children}</section>;
}

export const metadata: Metadata = {
  title: "Next.Js",
};
