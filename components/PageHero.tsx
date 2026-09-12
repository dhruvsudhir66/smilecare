import { Container } from "./ui/Container";
import { Reveal } from "./motion";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="hero-mesh grid-lines relative overflow-hidden border-b border-slate-200/70 py-24 md:py-32">
    <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border-[50px] border-[#12a6a0]/10"/>
    <Container><Reveal><p className="text-[11px] font-black uppercase tracking-[.22em] text-[#087b78]">{eyebrow}</p><h1 className="display mt-4 max-w-4xl text-5xl font-black leading-[.98] text-[#071d31] md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">{description}</p></Reveal></Container>
  </section>;
}