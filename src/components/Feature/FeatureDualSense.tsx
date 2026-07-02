import { Vibrate, Gamepad2 } from "lucide-react";
import dualsense from "../../assets/dualsense.jpg";
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Vibrate size={20} className="text-indigo-300" />,
    title: "Haptic Feedback",
    description:
      "Feel responsive tactile feedback to your in-game actions with dual actuators which replace traditional rumble motors.",
  },
  {
    icon: <Gamepad2 size={20} className="text-indigo-300" />,
    title: "Adaptive Triggers",
    description:
      "Experience varying levels of force and tension as you interact with your in-game gear and environments.",
  },
];

export default function FeatureDualSense() {
  return (
    <section className="w-full scroll-mt-20 bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-16">
        {/* Left: text content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Immersive control
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Feel the action with DualSense&trade;
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: controller image */}
        <div className="relative">
          <img
            src={dualsense}
            alt="DualSense wireless controller"
            loading="lazy"
            decoding="async"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}