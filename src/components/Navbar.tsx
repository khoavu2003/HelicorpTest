import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

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

  return (
    <header className="w-full bg-[#0a0a0c] border-b border-white/10">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
       
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white shrink-0"
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
                  onClick={() => setActiveLink(link.label)}
                  className={`relative pb-2 text-[15px] transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
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
            aria-label="Search"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Search size={20} strokeWidth={2} />
          </button>
          <button className="bg-white text-black text-xs font-semibold tracking-[0.15em] px-6 py-3 hover:bg-white/90 transition-colors">
            BUY NOW
          </button>
        </div>

    
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

   
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMobileOpen(false);
                    }}
                    className={`text-[15px] ${
                      isActive ? "text-white font-medium" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-6 mt-6">
            <button aria-label="Search" className="text-white/80">
              <Search size={20} strokeWidth={2} />
            </button>
            <button className="bg-white text-black text-xs font-semibold tracking-[0.15em] px-6 py-3">
              BUY NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}