"use client";

import { IconContext } from "react-icons";

export default function IconProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IconContext.Provider
      value={{ attr: { "aria-hidden": "true", focusable: "false" } }}
    >
      {children}
    </IconContext.Provider>
  );
}
