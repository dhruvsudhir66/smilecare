import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion";
import { AppointmentForm } from "@/components/AppointmentForm";

export const metadata = {
  title: "Book a Consultation",
  description: "Request an appointment with SmileCare Dental Studio.",
};

export default function AppointmentPage() {
  return (
    <main className="pt-28">
      <section className="section pb-16">
        <Container>
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6d726f]">
              01 / Appointment
            </span>

            <h1 className="display mt-8 max-w-6xl text-6xl leading-[0.82] md:text-8xl lg:text-[9rem]">
              Let&apos;s find
              <br />
              your
              <br />
              <span className="text-[#65cdb4]">time.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-black/10">
        <Container>
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <Reveal className="border-b border-black/10 py-14 lg:border-r lg:border-b-0 lg:pr-16">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6d726f]">
                Before you book
              </span>

              <h2 className="display mt-6 text-5xl leading-none md:text-6xl">
                A simple first step.
              </h2>

              <p className="mt-7 text-sm leading-7 text-[#6d726f]">
                Tell us what you need and when you&apos;d like to visit.
                This is a request rather than an instant confirmation.
                Our team will contact you to finalise your appointment.
              </p>

              <div className="mt-10 grid gap-4 border-t border-black/10 pt-7">
                {[
                  "Consultation before treatment",
                  "Clear treatment recommendations",
                  "No-pressure decision making",
                  "Family-friendly scheduling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold"
                  >
                    <span className="grid h-7 w-7 place-items-center bg-[#65cdb4]">
                      <Check size={14} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="py-14 lg:pl-16">
              <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6d726f]">
                  Appointment request
                </span>

                <ArrowUpRight size={18} />
              </div>

              <AppointmentForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}