import { createContext, useContext, useEffect,useRef, useState } from "react";

type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};
 
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
 
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });
  const isFirstRender = useRef(true);
 
  useEffect(() => {
    // The inline script in index.html already set the correct class
    // before React mounted, so skip the redundant DOM write (and the
    // reflow it causes) on the very first effect run.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      localStorage.setItem("theme", theme);
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
 
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}