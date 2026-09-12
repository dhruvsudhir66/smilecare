import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  return {
    title: service?.name ?? "Treatment",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-28">
      <section className="section pb-20">
        <Container>
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#6d726f]"
            >
              <ArrowLeft size={14} />
              All treatments
            </Link>

            <div className="mt-14 grid gap-12 lg:grid-cols-[.2fr_1fr]">
              <span className="font-mono text-xs text-[#65cdb4]">
                Treatment
              </span>

              <div>
                <h1 className="display max-w-6xl text-6xl leading-[0.82] md:text-8xl">
                  {service.name}
                </h1>

                <p className="mt-10 max-w-2xl text-base leading-8 text-[#6d726f]">
                  {service.description}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#171a19] py-24 text-white md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.25fr_1fr]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#65cdb4]">
              What&apos;s included
            </span>

            <div>
              <Reveal>
                <h2 className="display max-w-4xl text-5xl leading-none md:text-7xl">
                  Thoughtful treatment.
                  <br />
                  Clear next steps.
                </h2>
              </Reveal>

              <div className="mt-12">
                {service.bullets.map((bullet, index) => (
                  <Reveal key={bullet} delay={index * 0.06}>
                    <div className="flex items-center gap-5 border-t border-white/10 py-6">
                      <span className="font-mono text-[10px] text-[#65cdb4]">
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </span>

                      <span className="text-lg">
                        {bullet}
                      </span>

                      <Check
                        size={17}
                        className="ml-auto text-[#65cdb4]"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#65cdb4] py-24 md:py-32">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Not sure this is right for you?
            </span>

            <h2 className="display mt-6 max-w-5xl text-6xl leading-[0.85] md:text-8xl">
              You don&apos;t need
              <br />
              to know yet.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7">
              Start with a consultation. We&apos;ll assess your needs,
              answer your questions and recommend the right next step.
            </p>

            <Link
              href="/appointment"
              className="mt-9 inline-flex items-center gap-3 bg-[#171a19] px-7 py-5 text-sm font-bold text-white"
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