import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal, ImageReveal } from "@/components/motion";
import { doctors } from "@/data/site";

export const metadata = {
  title: "Clinicians",
  description: "Meet the clinicians behind SmileCare Dental Studio.",
};

export default function TeamPage() {
  return (
    <main className="pt-28">
      <section className="section pb-24">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / Clinicians
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9rem]">
              People
              <br />
              behind the
              <br />
              <span className="text-[#65cdb4]">practice.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#e9e5dc] py-20 md:py-28">
        <Container>
          <div className="space-y-24">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name} delay={index * 0.08}>
                <article
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ImageReveal>
                    <div className="overflow-hidden">
                      <Image
                        src={`/doctor-${index + 1}.png`}
                        alt={doctor.name}
                        width={800}
                        height={900}
                        className="h-[600px] w-full object-cover"
                      />
                    </div>
                  </ImageReveal>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6d726f]">
                      {doctor.role}
                    </span>

                    <h2 className="display mt-4 text-5xl leading-none md:text-7xl">
                      {doctor.name}
                    </h2>

                    <p className="mt-4 text-sm font-bold text-[#65cdb4]">
                      {doctor.specialty}
                    </p>

                    <p className="mt-8 max-w-xl text-base leading-8 text-[#6d726f]">
                      {doctor.bio}
                    </p>

                    <div className="mt-9 border-t border-black/15 pt-6">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#6d726f]">
                        Approach
                      </span>

                      <p className="mt-3 text-sm leading-7">
                        Precise clinical care, clear communication and
                        treatment plans built around the individual.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="display max-w-3xl text-5xl leading-none md:text-7xl">
                Good care starts with good conversation.
              </h2>

              <Link
                href="/appointment"
                className="flex w-fit items-center gap-3 bg-[#171a19] px-6 py-4 text-sm font-bold text-white"
              >
                Meet us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}