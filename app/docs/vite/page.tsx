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
          Remix
        </h1>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl" id="installation">
            Installation
          </h2>
          <ul className="list-decimal flex flex-col gap-4 lg:max-w-5xl ps-4">
            <li>
              <div className="flex flex-col gap-2">
                <p>Create A New Vite Project</p>
                <Snippet
                  classNames={{
                    pre: "truncate",
                  }}
                >
                  npm create vite@latest
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
                <p>Provider Setup</p>
                <ScrollShadow
                  className="w-full max-w-full h-fit max-h-[350px] rounded-md border-1 border-default-600/10 bg-[#303036] dark:bg-content1"
                  size={0}
                >
                  <CodeEditor
                    value={`// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)`}
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
            <ListboxItem
              key={"installation"}
              textValue="Installation"
              href="#installation"
            >
              Installation
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>
    </div>
  );
}

export default Page;
