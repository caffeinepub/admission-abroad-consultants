import {
  Award,
  ClipboardList,
  FileCheck,
  GraduationCap,
  Plane,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: GraduationCap,
    title: "University Selection",
    description:
      "Personalised university shortlisting based on your academic profile, budget, and career goals.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Expert visa guidance with a 95% success rate. We handle documentation, interviews, and tracking.",
  },
  {
    icon: ClipboardList,
    title: "Application Support",
    description:
      "Complete assistance with SOPs, LORs, essays, and application submissions to top universities.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Identify and apply for scholarships worth lakhs. Maximise your funding opportunities abroad.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    description:
      "Comprehensive pre-departure sessions on accommodation, banking, culture, and settling in.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-light py-20 lg:py-24">
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
            What We Offer
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "oklch(15% 0.04 240)" }}
          >
            Our Services
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            End-to-end support for your international education journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-card card-hover flex flex-col items-center text-center"
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "oklch(72% 0.14 80 / 0.15)" }}
              >
                <s.icon
                  className="w-7 h-7"
                  style={{ color: "oklch(55% 0.12 80)" }}
                />
              </div>
              <h3
                className="font-semibold text-sm mb-2"
                style={{ color: "oklch(15% 0.04 240)" }}
              >
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
