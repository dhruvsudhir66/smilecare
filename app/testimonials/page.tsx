import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion";
import { testimonials } from "@/data/site";

export const metadata = {
  title: "Patient Stories",
  description: "Stories from SmileCare patients.",
};

export default function TestimonialsPage() {
  return (
    <main className="pt-28">
      <section className="section">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / Patient Stories
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9.5rem]">
              The
              <br />
              experience
              <br />
              <span className="text-[#65cdb4]">matters.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#171a19] py-24 text-white md:py-36">
        <Container>
          <div className="space-y-28">
            {testimonials.map((item, index) => (
              <Reveal key={`${item.name}-${index}`}>
                <article
                  className={`grid gap-10 lg:grid-cols-[.2fr_1fr] ${
                    index !== 0 ? "border-t border-white/10 pt-20" : ""
                  }`}
                >
                  <div className="text-[#65cdb4]">
                    <Quote size={30} />
                  </div>

                  <div>
                    <blockquote className="display max-w-5xl text-4xl leading-[1.05] md:text-6xl">
                      “{item.quote}”
                    </blockquote>

                    <div className="mt-10 flex items-center gap-4">
                      <span className="h-px w-12 bg-white/20" />

                      <div>
                        <p className="text-sm font-bold">
                          {item.name}
                        </p>

                        <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/40">
                          {item.treatment}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#65cdb4] py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="display max-w-5xl text-6xl leading-[0.85] md:text-8xl">
              Your experience
              <br />
              should feel
              <br />
              different too.
            </h2>

            <Link
              href="/appointment"
              className="mt-10 inline-flex items-center gap-3 bg-[#171a19] px-7 py-5 text-sm font-bold text-white"
            >
              Book a visit
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}