import { useState } from "react";
import { X } from "lucide-react";

function SignupModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your actual signup endpoint/service.
    setSubmitted(true);
  };

  return (
    // Backdrop stays a constant dark scrim regardless of site theme — this
    // is a modal overlay convention, not page background.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white p-8 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <h3 className="text-xl font-bold text-black dark:text-white">
              You're in!
            </h3>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
              We'll email you the latest PS5 news, launch updates, and
              exclusive offers.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Sign up for PS5 updates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60">
              Get restock alerts, launch news, and exclusive offers sent
              straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-black/20 bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-indigo-400 dark:border-white/20 dark:text-white dark:placeholder:text-white/40"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Notify me
              </button>
            </form>

            <p className="mt-4 text-[10px] leading-relaxed text-black/30 dark:text-white/30">
              By signing up, you agree to receive marketing emails. You can
              unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function BuyNow() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="w-full bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-black dark:text-white sm:text-6xl">
          Ready to Upgrade?
        </h2>
        <p className="mt-6 text-base text-black/60 dark:text-white/60 sm:text-lg">
          Step into the future of play. Choose your console and start your
          next adventure today.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setShowSignup(true)}
            className="bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Sign up now
          </button>
        </div>
      </div>

      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </section>
  );
}