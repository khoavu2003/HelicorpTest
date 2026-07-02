import { useState } from "react";
import { Search, Menu, X, Sun, Moon } from "lucide-react";

import { useTheme } from "../context/ThemeContext";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Hardware", href: "#hardware" },
  { label: "Games", href: "#games" },
  { label: "Accessories", href: "#accessories" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("Hardware");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
  ) => {
    e.preventDefault();
    setActiveLink(label);
    setMobileOpen(false);

    window.history.pushState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white dark:border-white/10 dark:bg-[#0a0a0c]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="shrink-0 text-2xl font-bold tracking-tight text-black dark:text-white"
        >
          PlayStation 5
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.label)}
                  className={`relative pb-2 text-[15px] transition-colors ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-black/60 hover:text-black/90 dark:text-white/60 dark:hover:text-white/90"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-indigo-400" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="text-black/80 transition-colors hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Sun size={20} strokeWidth={2} />
            ) : (
              <Moon size={20} strokeWidth={2} />
            )}
          </button>
          <button
            aria-label="Search"
            className="text-black/80 transition-colors hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            <Search size={20} strokeWidth={2} />
          </button>
          <button className="bg-black px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
            BUY NOW
          </button>
        </div>

        <button
          className="text-black dark:text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-black/10 px-6 py-4 dark:border-white/10 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.label)}
                    className={`text-[15px] ${
                      isActive
                        ? "font-medium text-black dark:text-white"
                        : "text-black/60 dark:text-white/60"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex items-center gap-6">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="text-black/80 dark:text-white/80"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button aria-label="Search" className="text-black/80 dark:text-white/80">
              <Search size={20} strokeWidth={2} />
            </button>
            <button className="bg-black px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white dark:bg-white dark:text-black">
              BUY NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}