import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  ImageReveal,
  Reveal,
  Stagger,
  MotionArticle,
} from "@/components/motion";

export const metadata = {
  title: "The Studio",
  description:
    "Discover the philosophy and environment behind SmileCare Dental Studio.",
};

const principles = [
  {
    number: "01",
    title: "Listen first",
    text: "Before treatment, we understand what brought you in, what concerns you and what outcome matters most.",
  },
  {
    number: "02",
    title: "Explain clearly",
    text: "No jargon walls. We make diagnoses, treatment options and costs easy to understand.",
  },
  {
    number: "03",
    title: "Treat thoughtfully",
    text: "We favour conservative, evidence-informed treatment that protects your natural smile.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="section">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / The Studio
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9.5rem]">
              Dentistry
              <br />
              with a
              <br />
              <span className="text-[#65cdb4]">different rhythm.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#171a19] py-20 text-white md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <ImageReveal>
              <Image
                src="/clinic.png"
                alt="SmileCare dental clinic"
                width={1000}
                height={900}
                className="h-[620px] w-full object-cover"
              />
            </ImageReveal>

            <Reveal className="self-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#65cdb4]">
                02 / Philosophy
              </span>

              <h2 className="display mt-6 text-5xl leading-none md:text-7xl">
                Treat the person.
                <br />
                Not just the tooth.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
                Dental care becomes easier when you understand what is
                happening. Our clinicians take the time to listen, assess,
                explain and plan before anything begins.
              </p>

              <div className="mt-10 grid gap-4 border-t border-white/10 pt-7">
                {[
                  "Evidence-informed treatment",
                  "Modern clinical protocols",
                  "Clear treatment planning",
                  "Long-term preventive care",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-sm"
                  >
                    <Check size={16} className="text-[#65cdb4]" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal>
            <div className="border-b border-black/15 pb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
                03 / Our principles
              </span>

              <h2 className="display mt-4 text-5xl md:text-7xl">
                Three things.
              </h2>
            </div>
          </Reveal>

          <Stagger>
            {principles.map((item) => (
              <MotionArticle key={item.number}>
                <article className="grid gap-6 border-b border-black/10 py-10 md:grid-cols-[100px_1fr_1fr]">
                  <span className="font-mono text-xs text-[#65cdb4]">
                    {item.number}
                  </span>

                  <h3 className="display text-4xl md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-[#6d726f]">
                    {item.text}
                  </p>
                </article>
              </MotionArticle>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-[#e9e5dc] py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-10 md:grid-cols-4">
              {[
                ["10+", "Years of experience"],
                ["5,000+", "Patients cared for"],
                ["4.8/5", "Patient experience"],
                ["8", "Core treatments"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-black/15 pt-5">
                  <div className="display text-5xl md:text-6xl">
                    {value}
                  </div>

                  <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-[#6d726f]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="display max-w-3xl text-5xl leading-none md:text-7xl">
                Come see the space for yourself.
              </h2>

              <Link
                href="/contact"
                className="flex w-fit items-center gap-2 border-b border-black pb-2 text-sm font-bold"
              >
                Find us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}