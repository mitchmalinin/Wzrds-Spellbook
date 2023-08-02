"use client"

import { ThemeProvider } from "next-themes"

export const ThemeWrapper = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
