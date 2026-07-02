import { ChevronRight } from "lucide-react";

// Simple placeholder block for images not yet provided.
// Swap each one for a real <img src={...} className="h-full w-full object-cover" /> later.
function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-neutral-800 text-xs text-white/30 ${className}`}
    >
      {label}
    </div>
  );
}

export default function AccessoriesShowcase() {
  return (
    <section className="w-full bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Top link */}
        <div className="flex justify-end">
          <a
            href="#"
            className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Explore all PS5 accessories
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Controllers + Gaming audio */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Controllers */}
          <div className="flex flex-col items-center bg-neutral-900 p-8 text-center">
            <ImagePlaceholder label="Controller image" className="h-40 w-full" />
            <h3 className="mt-6 text-lg font-bold text-white">Controllers</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Discover a range of vibrant DualSense wireless controller
              colors, raise your game with the ultra-customizable DualSense
              Edge&trade; wireless controller, explore a world of
              possibilities for players with diverse needs with the
              Access&trade; controller, and elevate your arcade or simulator
              game with wheels, fight sticks and other specialist
              controllers.
            </p>
            <button className="mt-6 rounded-full bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
              All controllers
            </button>
          </div>

          {/* Gaming audio */}
          <div className="flex flex-col items-center bg-neutral-900 p-8 text-center">
            <ImagePlaceholder label="Gaming audio image" className="h-40 w-full" />
            <h3 className="mt-6 text-lg font-bold text-white">
              Gaming audio
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Studio-inspired planar magnetic drivers enable our new headset
              and earbuds to reproduce PS5 3D Audio with astonishing
              accuracy. Pinpoint threats with razor-sharp precision and pick
              out subtle details, all delivered to you at lightning-fast
              speed using new PlayStation Link&trade; wireless technology.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
                PULSE Elite&trade; wireless headset
              </button>
              <button className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
                PULSE Explore&trade; wireless earbuds
              </button>
            </div>
          </div>
        </div>

        {/* Perfect your setup */}
        <div className="mt-4 grid grid-cols-1 gap-6 bg-neutral-900 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex gap-3">
            <ImagePlaceholder label="Cover" className="h-24 w-24 shrink-0" />
            <ImagePlaceholder label="Stand" className="h-24 w-24 shrink-0" />
            <ImagePlaceholder label="Media remote" className="h-24 w-24 shrink-0" />
            <ImagePlaceholder label="Disc drive" className="h-24 w-24 shrink-0" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Perfect your setup
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
              Change up your style with a PS5 console cover in a range of
              colors, add extra storage, a removable disc drive&trade;,
              vertical stand&trade;, and a charging station for your
              controllers.
            </p>
            <button className="mt-4 rounded-full bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
              Explore all accessories
            </button>
            <p className="mt-4 max-w-xl text-[10px] leading-relaxed text-white/30">
              *This product is only for PS5 digital edition consoles
              (CFI-2000 model group and later). Sold separately, disc drive
              is compatible with PS5 digital edition consoles only.
              **Compatible hardware: PS5 (CFI-1000 model group and later).
            </p>
          </div>
        </div>

        <div className="my-16 h-px w-full bg-white/10" />

        {/* PlayStation Portal */}
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
          <ImagePlaceholder
            label="PlayStation Portal image"
            className="aspect-[4/3] w-full"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">
              PlayStation Portal&trade; remote player
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
              Feel the power of PlayStation in the palm of your hand as you
              play your PS5 console over your home Wi-Fi with
              console-quality controls and a gorgeous 8-inch built-in
              display.
            </p>
            <button className="mt-6 rounded-full bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
              PS Portal details
            </button>
            <p className="mt-3 text-[10px] text-white/30">
              Screen images simulated.
            </p>
          </div>
        </div>

        <div className="my-16 h-px w-full bg-white/10" />

        {/* PlayStation App */}
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <h3 className="text-2xl font-bold text-white">
              Stay connected with PlayStation App
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
              Bring your PS5 experience with you wherever you go with the
              companion PlayStation App. Stay in touch with PlayStation
              friends via text and voice chat, view your media gallery with
              Game Captures, purchase games via PlayStation&trade; Store and
              more, all from the free app for Apple and Android devices.
            </p>
            <button className="mt-6 rounded-full bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400">
              Full PS App details
            </button>
          </div>
          <div className="order-1 flex justify-center gap-4 sm:order-2">
            <ImagePlaceholder label="App screen 1" className="h-64 w-32 sm:h-72 sm:w-36" />
            <ImagePlaceholder label="App screen 2" className="h-64 w-32 sm:h-72 sm:w-36" />
            <ImagePlaceholder label="App screen 3" className="h-64 w-32 sm:h-72 sm:w-36" />
          </div>
        </div>
      </div>
    </section>
  );
}