import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plus,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  ImageReveal,
  Reveal,
  Stagger,
  MotionArticle,
} from "@/components/motion";
import { services, testimonials } from "@/data/site";

export const metadata = {
  title: "SmileCare — Dental Studio",
  description:
    "A contemporary dental studio in Bengaluru built around precision, comfort and long-term oral health.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f4f1ea] pt-28 lg:min-h-[calc(100vh-80px)]">
  <Container>
    <div className="grid items-center gap-12 py-14 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-16">

      {/* LEFT */}
      <div className="relative z-10">
        <Reveal>
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#171a19]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6d726f]">
              Bengaluru · Dental Studio
            </span>
          </div>

          <h1 className="display max-w-5xl text-[16vw] leading-[0.78] tracking-[-0.06em] sm:text-[12vw] lg:text-[7.8rem]">
            Dentistry
            <br />

            <span className="ml-[5vw] text-[#65cdb4]">
              reimagined.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 grid max-w-3xl gap-7 border-t border-black/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-[#6d726f] md:text-base md:leading-8">
              A calmer, more considered way to experience dental care.
              Precision treatment, honest conversations and an environment
              designed to make you feel at ease.
            </p>

            <Link
              href="/appointment"
              className="group flex w-fit items-center gap-4 border-b border-black pb-2 text-sm font-bold"
            >
              Start your visit

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* RIGHT */}
      <ImageReveal delay={0.15} className="relative">
        <div className="relative mx-auto w-full max-w-[560px]">

          <div className="overflow-hidden">
            <Image
              src="/hero-dental.png"
              alt="SmileCare dental treatment"
              width={900}
              height={1000}
              priority
              className="h-[460px] w-full object-cover sm:h-[540px] lg:h-[650px]"
            />
          </div>

          {/* Floating label */}
          <div className="absolute bottom-5 left-5 bg-[#65cdb4] px-5 py-4 sm:-left-5">
            <span className="block font-mono text-[8px] uppercase tracking-[0.2em]">
              SmileCare Studio
            </span>

            <span className="mt-1 block text-xs font-bold">
              Open today · 09:00 — 19:00
            </span>
          </div>

          {/* Image index */}
          <div className="absolute right-4 top-4 bg-[#171a19] px-3 py-2 font-mono text-[9px] text-white">
            01 / 01
          </div>

        </div>
      </ImageReveal>
    </div>
  </Container>

  {/* Bottom scroll indicator */}
  <div className="absolute bottom-6 right-8 hidden items-center gap-3 lg:flex">
    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#6d726f]">
      Scroll to explore
    </span>

    <ArrowDownRight size={15} />
  </div>
</section>

      {/* INTRO */}
      <section className="bg-[#171a19] py-28 text-white md:py-40">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[.25fr_1fr]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#65cdb4]">
                01 / Philosophy
              </span>

              <div>
                <h2 className="display max-w-5xl text-5xl leading-[0.95] md:text-7xl lg:text-[7rem]">
                  You are not a
                  <span className="text-[#65cdb4]"> treatment plan.</span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-white/55">
                  Every SmileCare visit begins with listening. We explain
                  what we see, why it matters and which options make sense
                  for you. No pressure. No unnecessary complexity.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-7 border-b border-black/15 pb-8 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
                  02 / Treatments
                </span>

                <h2 className="display mt-4 text-5xl md:text-7xl">
                  What we do.
                </h2>
              </div>

              <Link
                href="/services"
                className="flex items-center gap-2 text-sm font-bold"
              >
                View all
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Stagger className="mt-2">
            {services.slice(0, 6).map((service, index) => (
              <MotionArticle key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-[50px_1fr_auto] items-center gap-5 border-b border-black/10 py-7 transition hover:px-4"
                >
                  <span className="font-mono text-[10px] text-[#6d726f]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="display text-3xl md:text-5xl">
                      {service.name}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm text-[#6d726f]">
                      {service.shortDescription}
                    </p>
                  </div>

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

      {/* IMAGE STATEMENT */}
      <section className="bg-[#e9e5dc] py-24 md:py-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <ImageReveal>
              <Image
                src="/clinic.png"
                alt="SmileCare dental studio"
                width={1000}
                height={800}
                className="h-[560px] w-full object-cover"
              />
            </ImageReveal>

            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
                03 / The Studio
              </span>

              <h2 className="display mt-6 text-5xl leading-[0.95] md:text-7xl">
                A clinical space
                <br />
                that feels
                <br />
                <span className="text-[#65cdb4]">human.</span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-8 text-[#6d726f]">
                Warm materials, natural light and thoughtful details create
                a space that feels less like a conventional clinic and
                more like somewhere you can breathe.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-bold"
              >
                Discover the studio
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[.3fr_1fr]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
                04 / Patient voice
              </span>

              <div>
                <Plus className="mb-8 text-[#65cdb4]" size={32} />

                <blockquote className="display max-w-5xl text-4xl leading-[1.05] md:text-6xl">
                  “{testimonials[0].quote}”
                </blockquote>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-black/20" />
                  <div>
                    <p className="text-sm font-bold">
                      {testimonials[0].name}
                    </p>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#6d726f]">
                      {testimonials[0].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#65cdb4] py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                  Your next chapter
                </span>

                <h2 className="display mt-5 max-w-5xl text-6xl leading-[0.85] md:text-8xl">
                  Let&apos;s look
                  <br />
                  after your smile.
                </h2>
              </div>

              <Link
                href="/appointment"
                className="group flex w-fit items-center gap-4 bg-[#171a19] px-7 py-5 text-sm font-bold text-white"
              >
                Book a consultation
                <ArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}