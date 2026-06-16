"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/infrastructure/libs";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function setter() {
      setMounted(true);
    }
    setter();
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      aria-label={label}
      onClick={toggleTheme}
      size="icon"
      variant="secondary"
    >
      {!mounted ? (
        <span className="size-4" />
      ) : resolvedTheme === "dark" ? (
        <Sun aria-hidden="true" className="size-4" strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" className="size-4" strokeWidth={1.8} />
      )}
    </Button>
  );
}
