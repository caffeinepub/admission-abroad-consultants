import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient hero-pattern pt-16 lg:pt-20 overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "oklch(72% 0.14 80)" }}
      />
      <div
        className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "oklch(55% 0.1 240)" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(80% 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(80% 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "oklch(72% 0.14 80 / 0.18)",
                color: "oklch(72% 0.14 80)",
              }}
            >
              Your Trusted Study Abroad Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Unlock Your{" "}
            <span className="gold-gradient-text">Global Future.</span>
            <br />
            Study Abroad Today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            Expert guidance for students aspiring to study at world-renowned
            universities. From university selection to visa approval — we are
            with you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScroll("#contact")}
              className="font-semibold text-base px-8 py-6 rounded-xl flex items-center gap-2"
              style={{
                backgroundColor: "oklch(72% 0.14 80)",
                color: "oklch(15% 0.04 240)",
              }}
              data-ocid="hero.primary_button"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#success")}
              className="font-semibold text-base px-8 py-6 rounded-xl flex items-center gap-2 bg-transparent border-white/40 text-white hover:bg-white/10"
              data-ocid="hero.secondary_button"
            >
              <PlayCircle className="w-5 h-5" /> Success Stories
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: "5000+", label: "Students Placed" },
              { value: "500+", label: "University Partners" },
              { value: "95%", label: "Visa Success Rate" },
              { value: "25+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "oklch(72% 0.14 80)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
