import Link from "next/link";
import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./motion";

export function BookingCta() {
 return <section className="py-10"><Container><Reveal><div className="noise relative overflow-hidden rounded-[34px] bg-[#071d31] px-7 py-10 text-white md:px-12 md:py-12"><div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[55px] border-[#12a6a0]/20"/><div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-[#6bd6d1]"><Sparkles size={16}/> Your next smile starts here</div><h2 className="display mt-3 max-w-2xl text-3xl font-black md:text-4xl">A calmer way to take care of your smile.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Tell us what you need. We&apos;ll help you find the right appointment and next step.</p></div><Link href="/appointment" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#12a6a0] px-6 py-4 text-sm font-black text-white shadow-brand hover:bg-[#0c8f8a]"><CalendarDays size={18}/> Book an appointment <ArrowUpRight size={16}/></Link></div></div></Reveal></Container></section>;
}