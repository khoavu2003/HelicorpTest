import { Globe, MonitorPlay, Share2 } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Health Warning", href: "#" },
  { label: "Contact Us", href: "#" },
];

const SOCIAL_ICONS = [
  { icon: Globe, label: "Region" },
  { icon: MonitorPlay, label: "Media" },
  { icon: Share2, label: "Share" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="text-sm font-semibold tracking-[0.3em] text-white">
          SONY
        </span>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-10 text-xs tracking-wide text-white/30">
          &copy; 2024 Sony Interactive Entertainment Inc. All rights
          reserved.
        </p>

        <div className="mt-8 flex items-center gap-6">
          {SOCIAL_ICONS.map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
            >
              <Icon size={18} strokeWidth={1.75} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}