import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] w-full items-center overflow-hidden sm:min-h-[720px] lg:min-h-[820px]">
      {/* Image container: full width, edge-to-edge like the reference site */}
      <div className="absolute inset-y-0 left-10 right-10 overflow-hidden sm:left-16 sm:right-16 lg:left-24 lg:right-24">
        <img
          src={hero}
          alt="PlayStation 5 console and DualSense controller"
          className="h-full w-full scale-110 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Centered content */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl">
          Play has no limits
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Experience lightning-fast loading with an ultra-high speed SSD,
          deeper immersion with support for haptic feedback, adaptive
          triggers, and 3D Audio.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white/90">
            Explore the console
          </button>
          <button className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10">
            Watch the trailer
          </button>
        </div>
      </div>
    </section>
  );
}