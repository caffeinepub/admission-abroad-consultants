import { motion } from "motion/react";

const destinations = [
  { flag: "🇬🇧", country: "United Kingdom", universities: "150+ Universities" },
  { flag: "🇺🇸", country: "United States", universities: "200+ Universities" },
  { flag: "🇨🇦", country: "Canada", universities: "80+ Universities" },
  { flag: "🇦🇺", country: "Australia", universities: "40+ Universities" },
  { flag: "🇩🇪", country: "Germany", universities: "60+ Universities" },
  { flag: "🇳🇿", country: "New Zealand", universities: "20+ Universities" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(72% 0.14 80 / 0.15)",
              color: "oklch(55% 0.12 80)",
            }}
          >
            Study Destinations
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "oklch(15% 0.04 240)" }}
          >
            Our Global Destinations
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            We place students in the world&apos;s top education hubs across 6
            countries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.country}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-border card-hover shadow-card cursor-default"
              data-ocid={`destinations.item.${i + 1}`}
            >
              <span className="text-5xl mb-3">{d.flag}</span>
              <span
                className="font-semibold text-sm"
                style={{ color: "oklch(15% 0.04 240)" }}
              >
                {d.country}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {d.universities}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
