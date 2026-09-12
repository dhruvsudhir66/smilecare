import { Reveal } from "./motion";

export function SectionHeading({ eyebrow, title, description, center = true, dark = false }: { eyebrow: string; title: string; description?: string; center?: boolean; dark?: boolean }) {
  return <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}><p className="text-[11px] font-black uppercase tracking-[.22em] text-[#087b78]">{eyebrow}</p><h2 className={`display mt-4 text-4xl font-black leading-tight md:text-5xl ${dark ? "text-white" : "text-[#071d31]"}`}>{title}</h2>{description && <p className={`mt-5 text-[15px] leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}</Reveal>;
}
