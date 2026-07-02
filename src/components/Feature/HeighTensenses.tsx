import { Radio, Gauge } from "lucide-react";
import audioTech from "../../assets/sound.jpg";
import ssdChip from "../../assets/chip.jpg";

type SenseCard = {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CARDS: SenseCard[] = [
  {
    image: audioTech,
    title: "Tempest 3D AudioTech",
    description:
      "Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive.",
    icon: <Radio size={22} className="text-indigo-300" />,
  },
  {
    image: ssdChip,
    title: "Ultra-High Speed SSD",
    description:
      "Maximize your play sessions with near-instant load times for installed PS5\u2122 games. Performance that redefines the possible.",
    icon: <Gauge size={22} className="text-indigo-300" />,
  },
];

export default function HeightenSenses() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black sm:py-32">
      {/* Outer: equal padding on both sides + flex-center so the box
          is always truly centered, even past the max-width cap on wide screens */}
      <div className="flex justify-center px-10 sm:px-16 lg:px-24">
        <div className="w-full max-w-7xl bg-neutral-100 py-16 dark:bg-neutral-900">
          <div className="mx-auto max-w-5xl px-6">
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
              <h2 className="my-8 text-3xl font-bold text-black dark:text-white sm:my-12 sm:text-4xl">
                Heighten Your Senses
              </h2>
              <span className="mt-4 h-[2px] w-24 bg-indigo-400" />
            </div>

            {/* Cards: photo + dark gradient overlay stay constant regardless
                of site theme, since the white title text needs to sit on a
                darkened image, not on the page background. */}
            <div className="mt-16 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="relative flex h-[420px] flex-col justify-end overflow-hidden bg-black p-8"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Gradient so text stays readable over the photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                      {card.description}
                    </p>
                    <div className="mt-5 flex h-9 w-9 items-center justify-center border border-white/30">
                      {card.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}