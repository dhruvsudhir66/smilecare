import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Visit SmileCare",
  description: "Contact SmileCare Dental Studio in Bengaluru.",
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="section pb-20">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / Visit
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9.5rem]">
              Come
              <br />
              <span className="text-[#65cdb4]">say hello.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-black/10">
        <Container>
          <div className="grid lg:grid-cols-2">
            <Reveal className="border-b border-black/10 py-16 lg:border-r lg:border-b-0 lg:pr-16">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6d726f]">
                The studio
              </span>

              <h2 className="display mt-6 text-5xl md:text-6xl">
                123 MG Road,
                <br />
                Bengaluru.
              </h2>

              <div className="mt-12 grid gap-6">
                <a
                  href="tel:+919876543210"
                  className="group flex items-center justify-between border-b border-black/10 pb-5"
                >
                  <span className="flex items-center gap-4 text-sm font-bold">
                    <Phone size={18} />
                    +91 98765 43210
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="mailto:hello@smilecare.in"
                  className="group flex items-center justify-between border-b border-black/10 pb-5"
                >
                  <span className="flex items-center gap-4 text-sm font-bold">
                    <Mail size={18} />
                    hello@smilecare.in
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <div className="flex items-center gap-4 text-sm font-bold">
                  <MapPin size={18} />
                  Bengaluru 560001
                </div>
              </div>

              <div className="mt-16 border-t border-black/10 pt-7">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#6d726f]">
                  Opening hours
                </span>

                <div className="mt-5 grid gap-3 text-sm">
                  <div className="flex justify-between">
                    <span>Monday — Friday</span>
                    <b>09:00 — 19:00</b>
                  </div>

                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <b>09:00 — 15:00</b>
                  </div>

                  <div className="flex justify-between text-[#6d726f]">
                    <span>Sunday</span>
                    <b>Closed</b>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="py-16 lg:pl-16"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6d726f]">
                Send a message
              </span>

              <h2 className="display mt-6 text-5xl md:text-6xl">
                How can we help?
              </h2>

              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#65cdb4] py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="display max-w-3xl text-5xl leading-none md:text-7xl">
                Prefer to choose a time directly?
              </h2>

              <Link
                href="/appointment"
                className="flex w-fit items-center gap-3 bg-[#171a19] px-6 py-4 text-sm font-bold text-white"
              >
                Book a visit
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}