import hero from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section
      id="hardware"
      className="relative flex min-h-[480px] w-full scroll-mt-20 items-center overflow-hidden sm:min-h-[560px] lg:min-h-[720px]"
    >
      {/* Image container: full width minus side margins. `group` lives here so
          hover only triggers inside this exact area, not the black margins. */}
      <div className="group absolute inset-y-0 left-10 right-10 flex items-center justify-center overflow-hidden sm:left-16 sm:right-16 lg:left-24 lg:right-24">
        <img
          src={hero}
          alt="PlayStation 5 console and DualSense controller"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center transition-transform duration-500 group-hover:scale-100"
        />
        {/* Overlay: darkens on hover so the revealed text stays readable */}
        <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/55" />

        {/* Centered content: hidden by default, revealed on hover */}
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
      </div>
    </section>
  );
}