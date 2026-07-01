type Spec = {
  label: string;
  value: string;
};

const SPECS: Spec[] = [
  { label: "CPU", value: 'x86-64-AMD Ryzen\u2122 "Zen 2"' },
  { label: "GPU", value: "AMD Radeon\u2122 RDNA 2-based graphics engine" },
  { label: "MEMORY", value: "GDDR6 16GB" },
  { label: "SSD", value: "825GB Custom NVMe SSD" },
  { label: "VIDEO OUT", value: "Support for 4K 120Hz TVs, 8K TVs, VRR" },
];

export default function TechSpecs() {
  return (
    <section className="w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-16">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Technical Specifications
        </h2>

        <div className="mt-16 flex flex-col">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-2 border-b border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                {spec.label}
              </span>
              <span className="text-lg text-white sm:text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}