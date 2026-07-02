import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 500; // ms
    const startY = window.scrollY;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      // behavior: "auto" is critical here — without it, a global CSS
      // `scroll-behavior: smooth` makes the browser apply its own smoothing
      // to every single scrollTo call in this loop, which fights our
      // easing and can cancel the animation out visually.
      window.scrollTo({ top: startY * (1 - eased), left: 0, behavior: "auto" });
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 text-white/80 transition-all duration-300 hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronsUp size={28} strokeWidth={2} />
    </button>
  );
}