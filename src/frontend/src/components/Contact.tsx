import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@admissionabroad.com",
    href: "mailto:info@admissionabroad.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Consultancy Lane, New Delhi, India 110001",
    href: null,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Sat, 9 AM – 6 PM",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        toast.success(
          "Your inquiry has been submitted! We will contact you shortly.",
        );
        setForm({ name: "", email: "", phone: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section id="contact" className="section-light py-20 lg:py-24">
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
            Reach Out
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "oklch(15% 0.04 240)" }}
          >
            Get in Touch
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Ready to start your study abroad journey? Book a free consultation
            today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-card"
            data-ocid="contact.panel"
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: "oklch(15% 0.04 240)" }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="h-11"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-11"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="h-11"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your study plans, preferred country, or any questions…"
                  rows={4}
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={isPending || isSuccess}
                className="w-full h-12 font-semibold text-base"
                style={{
                  backgroundColor: "oklch(72% 0.14 80)",
                  color: "oklch(15% 0.04 240)",
                }}
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Inquiry Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "oklch(20% 0.05 240)" }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "oklch(72% 0.14 80 / 0.18)" }}
                    >
                      <c.icon
                        className="w-5 h-5"
                        style={{ color: "oklch(72% 0.14 80)" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-0.5">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm text-white/85 hover:text-white transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-sm text-white/85">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{
                backgroundColor: "oklch(72% 0.14 80 / 0.12)",
                border: "1px solid oklch(72% 0.14 80 / 0.25)",
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                🎓
              </div>
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "oklch(15% 0.04 240)" }}
                >
                  Free Consultation Available
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Book a 30-minute free counseling session with our expert
                  advisors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
