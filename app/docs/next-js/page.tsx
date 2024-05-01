"use client";
import React from "react";
import {
  Link,
  Listbox,
  ListboxItem,
  ListboxSection,
  ScrollShadow,
  Snippet,
} from "@nextui-org/react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function Page() {
  return (
    <div className="w-full h-full flex">
      <ScrollShadow
        className="w-full h-full lg:max-w-5xl max-h-[800px] flex flex-col gap-4 p-4 lg:ps-0 scroll-smooth"
        size={0}
        hideScrollBar
      >
        <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-3xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          Next.Js
        </h1>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl" id="template">
            Template
          </h2>
          <p>
            We have a{" "}
            <Link
              href="https://github.com/Navin-Jethwani-76/pixelui-nextjs-template"
              isExternal
            >
              Next.Js template
            </Link>{" "}
            pre configured with all the packages that need to be installed to
            use Pixel UI Components and already includes some Components.
          </p>
          <p>
            Paste below command in your preferred CLI to clone the template from
            Github.
          </p>
          <Snippet
            className="w-full lg:max-w-5xl"
            classNames={{
              pre: " truncate",
            }}
          >
            npx create-next-app -e
            https://github.com/Navin-Jethwani-76/pixelui-nextjs-template
          </Snippet>
          {/* <p>checkout to pages branch if you want to use Pages Directory</p> */}
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl" id="installation-app-router">
            Installation (App Router)
          </h2>
          <ul className="list-decimal flex flex-col gap-4 lg:max-w-5xl ps-4">
            <li>
              <div className="flex flex-col gap-2">
                <p>Create A New Next.Js Project</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npx create-next-app@latest
                </Snippet>
                <p>Choose Yes when asked if you want to use App Router</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Install Required Packages</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npm install @nextui-org/react framer-motion
                  tailwindcss-animated react-icons
                </Snippet>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Tailwind CSS Setup</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animated")]
}

export default config;`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Setup Provider</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Add Provider to Root</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// app/layout.tsx
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>
                  Install next-themes to switch between light and dark themes
                  (Optional)
                </p>
                <Snippet>npm install next-themes</Snippet>
                <p>Add next-themes provider</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl" id="installation-pages-router">
            Installation (Pages Router)
          </h2>
          <ul className="list-decimal flex flex-col gap-4 lg:max-w-5xl ps-4">
            <li>
              <div className="flex flex-col gap-2">
                <p>Create A New Next.Js Project</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npx create-next-app@latest
                </Snippet>
              </div>
            </li>

            <li>
              <div className="flex flex-col gap-2">
                <p>On installation, you&#39;ll see the following prompts:</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  <span>What is your project named? my-app</span>
                  <span>Would you like to use TypeScript? No / Yes</span>
                  <span>Would you like to use ESLint? No / Yes</span>
                  <span>Would you like to use Tailwind CSS? No / Yes</span>
                  <span>Would you like to use `src/` directory? No / Yes</span>
                  <span>
                    Would you like to use App Router? No (Choose `No` here)
                  </span>
                  <span>
                    Would you like to customize the default import alias (@/*)?
                    No / Yes
                  </span>
                  <span>What import alias would you like configured? @/*</span>
                </Snippet>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Install Required Packages</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npm install @nextui-org/react framer-motion
                  tailwindcss-animated react-icons
                </Snippet>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Tailwind CSS Setup</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animated")]
}

export default config;`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>Setup Provider</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// pages/_app.js
import {NextUIProvider} from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <p>
                  Install next-themes to switch between light and dark themes
                  (Optional)
                </p>
                <Snippet>npm install next-themes</Snippet>
                <p>Add next-themes provider</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// pages/_app.js
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default MyApp;`}
                    language="jsx"
                    placeholder="Please enter JS code."
                    readOnly
                    style={{
                      fontSize: 14,
                      fontFamily:
                        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                    }}
                  />
                </ScrollShadow>
              </div>
            </li>
          </ul>
        </div>
      </ScrollShadow>
      <div className="hidden lg:flex flex-col gap-4 flex-1 h-full my-4">
        <Listbox variant="bordered" aria-label="Quick Links">
          <ListboxSection title={"On this page:"} showDivider>
            <ListboxItem key={"template"} textValue="Template" href="#template">
              Template
            </ListboxItem>
            <ListboxItem
              key={"installation-app-router"}
              textValue="Installation (App Router)"
              href="#installation-app-router"
            >
              Installation (App Router)
            </ListboxItem>
            <ListboxItem
              key={"installation-pages-router"}
              textValue="Installation (Pages Router)"
              href="#installation-pages-router"
            >
              Installation (Pages Router)
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>
    </div>
  );
}

export default Page;
