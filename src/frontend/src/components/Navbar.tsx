import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Study Programs", href: "#services" },
  { label: "Student Success", href: "#success" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(20% 0.05 240)" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(72% 0.14 80)" }}
            >
              <Globe
                className="w-5 h-5"
                style={{ color: "oklch(20% 0.05 240)" }}
              />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm tracking-wide">
                ADMISSION
              </span>
              <span
                className="block font-semibold text-xs tracking-widest"
                style={{ color: "oklch(72% 0.14 80)" }}
              >
                ABROAD
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm text-white/80 hover:text-white font-medium transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              type="button"
              onClick={() => handleNav("#contact")}
              className="font-semibold text-sm px-5 py-2"
              style={{
                backgroundColor: "oklch(72% 0.14 80)",
                color: "oklch(15% 0.04 240)",
              }}
              data-ocid="nav.primary_button"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t"
            style={{
              borderColor: "oklch(30% 0.05 240)",
              backgroundColor: "oklch(18% 0.05 240)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-white/80 hover:text-white font-medium py-1"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                onClick={() => handleNav("#contact")}
                className="mt-2 font-semibold"
                style={{
                  backgroundColor: "oklch(72% 0.14 80)",
                  color: "oklch(15% 0.04 240)",
                }}
                data-ocid="nav.primary_button"
              >
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
