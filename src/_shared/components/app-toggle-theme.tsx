"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { EThemeType } from "../enums/theme.enum";
import { Button } from "@/_core/components/fragments/button";

export function AppToggleTheme() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full relative"
      />
    );
  }

  return (
    <Button
      size="icon"
      variant="secondary"
      className="rounded-full relative"
      onClick={() =>
        setTheme(
          theme === EThemeType.light ? EThemeType.dark : EThemeType.light
        )
      }
    >
      {theme === EThemeType.light ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
    </Button>
  );
}
