import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ghostOfYotei from "../../assets/game/ghost-of-yotei.jpg";
import ff7Rebirth from "../../assets/game/ff7-rebirth.jpg";
import godOfWar from "../../assets/game/god-of-war-ragnarok.jpg";
import spiderman2 from "../../assets/game/spiderman-2.jpg";
import blackMythWukong from "../../assets/game/black-myth-wukong.jpg";
import astroBot from "../../assets/game/astro-bot-poster.jpg";
import baldursGate3 from "../../assets/game/baldurs-gate-3.jpg";
import fc26 from "../../assets/game/fc26.jpg";
import redDeadImage from "../../assets/game/red-dead-redemption-2-downscaled.jpg";
import firstLight007 from "../../assets/game/first-light-007.jpg";

type Game = {
  title: string;
  description: string;
  gradient: string;
  image?: string;
};

const GAMES: Game[] = [
  {
    title: "Ghost of Y\u014dtei",
    description:
      "Roam a windswept Ezo as a lone ronin on a path of vengeance, blending swordplay with the folklore of feudal Japan.",
    gradient: "from-red-800 via-neutral-900 to-black",
    image: ghostOfYotei,
  },
  {
    title: "007 First Light",
    description:
      "Step into a young James Bond's first mission as MI6's newest recruit, navigating a world of deception before he becomes the legend.",
    gradient: "from-amber-600 via-yellow-700 to-black",
    image: firstLight007,
  },
  {
    title: "Final Fantasy VII Rebirth",
    description:
      "Continue Cloud and his allies' journey across a shattered world, as old bonds and a familiar enemy resurface.",
    gradient: "from-orange-500 via-rose-600 to-purple-900",
    image: ff7Rebirth,
  },
  {
    title: "God of War Ragnar\u00f6k",
    description:
      "Kratos and Atreus venture through the Nine Realms as prophecy and family are tested ahead of the coming Ragnar\u00f6k.",
    gradient: "from-slate-400 via-blue-500 to-slate-900",
    image: godOfWar,
  },
  {
    title: "Marvel's Spider-Man 2",
    description:
      "Swing through New York as Peter Parker and Miles Morales, facing new threats that push both heroes to their limits.",
    gradient: "from-red-600 via-red-800 to-black",
    image: spiderman2,
  },
  {
    title: "Black Myth: Wukong",
    description:
      "Step into the legend of the Monkey King in this action RPG steeped in Chinese mythology and brutal combat.",
    gradient: "from-neutral-800 via-neutral-900 to-black",
    image: blackMythWukong,
  },
  {
    title: "Astro Bot",
    description:
      "Guide Astro across imaginative galaxies built entirely around the joy and quirks of PlayStation hardware.",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    image: astroBot,
  },
  {
    title: "Baldur's Gate 3",
    description:
      "Gather a party and forge your own path through a rich, choice-driven fantasy epic rooted in tabletop RPG tradition.",
    gradient: "from-blue-900 via-indigo-900 to-black",
    image: baldursGate3,
  },
  {
    title: "EA Sports FC 26",
    description:
      "Take the pitch with the world's top clubs and players in the latest chapter of the world's biggest football sim.",
    gradient: "from-emerald-600 via-emerald-800 to-black",
    image: fc26,
  },
  {
    title: "Red Dead Redemption 2",
    description:
      "Ride into the dying days of the American frontier as an outlaw fighting for survival amid the collapse of a way of life he once knew.",
    gradient: "from-orange-500 via-pink-500 to-purple-700",
    image: redDeadImage,
  },
];

const AUTO_ADVANCE_MS = 4000;
const CARD_STEP = 220;
const CARD_STEP_MOBILE = 170;
const VISIBLE_DISTANCE = 2; // only cards within this circular distance are mounted at all

// Shortest signed circular distance from `active` to `index`, range: (-n/2, n/2]
function circularOffset(index: number, active: number, total: number) {
  let diff = (index - active) % total;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function GamesSlider() {
  const [active, setActive] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [step, setStep] = useState(CARD_STEP);
  // Tracks every index that has ever been visible, so once an image is
  // loaded it stays mounted (no repeated unmount/remount thrash) but we
  // still never mount more than necessary up front.
  const [everSeen, setEverSeen] = useState<Set<number>>(
    () => new Set([0, 1, 2, 3, 4]),
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = GAMES.length;

  useEffect(() => {
    const updateStep = () => {
      setStep(window.innerWidth < 640 ? CARD_STEP_MOBILE : CARD_STEP);
    };
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  // Single interval for the whole component lifetime; pausing just stops
  // ticking rather than tearing the interval down and rebuilding it on
  // every slide change.
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      setActive(next);
    },
    [total],
  );

  // Expand the "ever seen" set lazily as the user/timer reaches new slides,
  // so far-away images are never fetched until they're actually about to
  // be shown.
  useEffect(() => {
    setEverSeen((prev) => {
      let changed = false;
      const next = new Set(prev);
      for (let d = -VISIBLE_DISTANCE; d <= VISIBLE_DISTANCE; d++) {
        const idx = ((active + d) % total + total) % total;
        if (!next.has(idx)) {
          next.add(idx);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [active, total]);

  return (
    <section
      id="games"
      className="w-full scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#1230c9] via-[#0c1f9e] to-[#142fb8] py-20 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-light text-white sm:text-3xl">
          Incredible PS5 games
        </h2>
      </div>

      <div className="relative mt-14 flex h-64 items-center justify-center sm:h-80">
        {GAMES.map((game, index) => {
          const offset = circularOffset(index, active, total);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= VISIBLE_DISTANCE;

          // Never mount cards outside the visible range at all: no DOM
          // node, no <img>, no network request.
          if (!isVisible) return null;

          const shouldLoadImage = everSeen.has(index);

          return (
            <button
              key={game.title}
              onClick={() => goTo(index)}
              aria-label={`Show ${game.title}`}
              style={{
                transform: `translateX(${offset * step}px) scale(${
                  isActive ? 1 : 0.82
                })`,
                zIndex: 10 - Math.abs(offset),
                opacity: isActive ? 1 : 0.55,
              }}
              className={`absolute h-48 w-40 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br transition-all duration-500 ease-out sm:h-64 sm:w-56 ${
                game.gradient
              } ${isActive ? "ring-2 ring-white" : ""}`}
            >
              {game.image && shouldLoadImage && (
                <img
                  src={game.image}
                  alt={game.title}
                  width={224}
                  height={256}
                  loading={isActive ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={isActive ? "high" : "low"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 px-3 py-2 text-left text-sm font-bold text-white sm:text-base">
                {game.title}
              </span>
            </button>
          );
        })}

        <button
          aria-label="Previous game"
          onClick={() => goTo(active - 1)}
          className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 sm:left-10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next game"
          onClick={() => goTo(active + 1)}
          className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 sm:right-10"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mx-auto mt-8 max-w-xl px-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
          {GAMES[active].title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
          {GAMES[active].description}
        </p>
        <button className="mt-4 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-colors hover:bg-white/90">
          Find out more
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {GAMES.map((game, index) => (
          <button
            key={game.title}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}