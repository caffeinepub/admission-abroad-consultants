import { Building2, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Users,
    title: "Expert Counselors",
    description:
      "Our team of certified study abroad counselors brings 10+ years of experience helping students navigate global admissions.",
  },
  {
    icon: Building2,
    title: "500+ University Partnerships",
    description:
      "Strong relationships with top-ranked universities across the UK, USA, Canada, Australia, Germany, and New Zealand.",
  },
  {
    icon: ShieldCheck,
    title: "95% Visa Success Rate",
    description:
      "Our meticulous visa documentation process ensures the highest approval rates in the industry.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "From initial counseling to post-arrival settlement assistance — we are your partner throughout the entire journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-white py-20 lg:py-24">
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
            Our Edge
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "oklch(15% 0.04 240)" }}
          >
            Why Choose Admission Abroad?
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Thousands of students trust us to guide them toward a brighter
            global future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "oklch(20% 0.05 240)" }}
              >
                <r.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ backgroundColor: "oklch(72% 0.14 80)" }}
              />
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "oklch(15% 0.04 240)" }}
              >
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
