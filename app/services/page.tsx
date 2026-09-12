import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, MotionArticle } from "@/components/motion";
import { services } from "@/data/site";

export const metadata = {
  title: "Treatments",
  description:
    "Explore SmileCare's preventive, restorative, cosmetic and family dental treatments.",
};

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="section pb-20">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / Treatments
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9.5rem]">
              Care for
              <br />
              every
              <br />
              <span className="text-[#65cdb4]">smile.</span>
            </h1>

            <p className="mt-12 max-w-xl text-base leading-8 text-[#6d726f]">
              From preventive care to complex restorative treatment, every
              service starts with understanding what your smile actually
              needs.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-black/10">
        <Container>
          <Stagger>
            {services.map((service, index) => (
              <MotionArticle key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-7 border-b border-black/10 py-10 md:grid-cols-[90px_1fr_1fr_auto] md:items-center"
                >
                  <span className="font-mono text-xs text-[#6d726f]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h2 className="display text-4xl leading-none md:text-5xl">
                    {service.name}
                  </h2>

                  <p className="max-w-md text-sm leading-7 text-[#6d726f]">
                    {service.shortDescription}
                  </p>

                  <ArrowUpRight
                    size={22}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </MotionArticle>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-[#65cdb4] py-24 md:py-32">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Not sure where to start?
            </span>

            <h2 className="display mt-6 max-w-4xl text-6xl leading-[0.85] md:text-8xl">
              Start with a conversation.
            </h2>

            <Link
              href="/appointment"
              className="mt-10 inline-flex items-center gap-3 bg-[#171a19] px-7 py-5 text-sm font-bold text-white"
            >
              Book a consultation
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}