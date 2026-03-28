import { Quote } from "lucide-react";
import { motion } from "motion/react";

const stories = [
  {
    initials: "PS",
    name: "Priya Sharma",
    program: "MSc Computer Science",
    university: "University of Edinburgh",
    country: "🇬🇧 United Kingdom",
    quote:
      "Admission Abroad guided me through every step — from shortlisting universities to my visa approval. I couldn't have done it without their incredible team. Edinburgh has been a life-changing experience!",
    color: "oklch(65% 0.18 260)",
  },
  {
    initials: "RM",
    name: "Rahul Mehta",
    program: "MBA",
    university: "University of Toronto",
    country: "🇨🇦 Canada",
    quote:
      "The scholarship guidance alone saved me over ₹8 lakhs! Their counselors knew exactly which scholarships I qualified for and helped me craft a winning application. Truly exceptional service.",
    color: "oklch(55% 0.12 80)",
  },
  {
    initials: "AK",
    name: "Aisha Khan",
    program: "BEng Mechanical Engineering",
    university: "TU Munich",
    country: "🇩🇪 Germany",
    quote:
      "Studying in Germany seemed daunting, but Admission Abroad made it seamless. Their SOP assistance and visa support were outstanding. TU Munich has opened doors I never imagined possible.",
    color: "oklch(60% 0.14 150)",
  },
];

export default function SuccessStories() {
  return (
    <section id="success" className="section-light py-20 lg:py-24">
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
            Testimonials
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "oklch(15% 0.04 240)" }}
          >
            Student Success Stories
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Real stories from students whose lives changed with the right
            guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-card card-hover relative"
              data-ocid={`success.item.${i + 1}`}
            >
              <Quote
                className="absolute top-6 right-6 w-8 h-8 opacity-10"
                style={{ color: "oklch(15% 0.04 240)" }}
              />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: s.color }}
                >
                  {s.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(15% 0.04 240)" }}
                  >
                    {s.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {s.program}, {s.university}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(55% 0.12 80)" }}
                  >
                    {s.country}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
