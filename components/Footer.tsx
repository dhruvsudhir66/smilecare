import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

const links = [
  ["/", "Home"],
  ["/about", "Studio"],
  ["/services", "Treatments"],
  ["/team", "Clinicians"],
  ["/testimonials", "Stories"],
  ["/contact", "Visit"],
];

export function Footer() {
  return (
    <footer className="bg-[#171a19] text-white">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_.6fr_.6fr]">
          <div>
            <Logo light />

            <h2 className="display mt-12 max-w-3xl text-5xl leading-[0.9] md:text-7xl">
              Dentistry,
              <br />
              thoughtfully
              <br />
              delivered.
            </h2>

            <Link
              href="/appointment"
              className="mt-10 inline-flex items-center gap-3 bg-[#65cdb4] px-6 py-4 text-sm font-bold text-[#171a19]"
            >
              Book a consultation
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Navigate
            </p>

            <div className="mt-6 grid gap-4">
              {links.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/65 transition hover:text-[#65cdb4]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Studio
            </p>

            <div className="mt-6 grid gap-5 text-sm leading-6 text-white/65">
              <p>
                123 MG Road
                <br />
                Bengaluru 560001
              </p>

              <a
                href="tel:+919876543210"
                className="hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@smilecare.in"
                className="hover:text-white"
              >
                hello@smilecare.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-widest text-white/30 md:flex-row">
          <span>
            © {new Date().getFullYear()} SmileCare Dental Studio
          </span>

          <span>
            Bengaluru · India
          </span>
        </div>
      </Container>
    </footer>
  );
}