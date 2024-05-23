"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function NextThemeProvider({ children }) {
  return (
    <NextThemesProvider attribure="class" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
