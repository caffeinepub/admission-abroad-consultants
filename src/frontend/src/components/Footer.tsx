import { Globe } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const quickLinks = [
  "Services",
  "Destinations",
  "Success Stories",
  "About Us",
  "Contact",
];
const linkIds = [
  "#services",
  "#destinations",
  "#success",
  "#about",
  "#contact",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(18% 0.05 240)" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(72% 0.14 80)" }}
              >
                <Globe
                  className="w-5 h-5"
                  style={{ color: "oklch(18% 0.05 240)" }}
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
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              India's most trusted study abroad consultancy. Guiding students to
              their dream universities since 2010.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(28% 0.05 240)" }}
                aria-label="LinkedIn"
                data-ocid="footer.link"
              >
                <SiLinkedin className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(28% 0.05 240)" }}
                aria-label="Facebook"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(28% 0.05 240)" }}
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => handleNav(linkIds[i])}
                    className="text-sm text-white/55 hover:text-white transition-colors text-left"
                    data-ocid="footer.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@admissionabroad.com</li>
              <li>📍 123 Consultancy Lane, New Delhi, India 110001</li>
              <li>🕐 Mon–Sat, 9 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35"
          style={{ borderTop: "1px solid oklch(30% 0.04 240)" }}
        >
          <span>
            © {year} Admission Abroad Consultants. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
