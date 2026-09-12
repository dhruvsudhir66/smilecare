import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" aria-label="SmileCare Dental Clinic home">
      <span className={`grid h-11 w-11 place-items-center rounded-2xl ${light ? "bg-white/10 text-white" : "bg-[#d9f7f4] text-[#087b78]"}`}>
        <Sparkles size={22} strokeWidth={2.2}/>
      </span>
      <span><span className={`block text-[18px] font-black leading-none ${light ? "text-white" : "text-[#102a43]"}`}>SmileCare</span>
      <span className={`mt-1 block text-[8px] font-black tracking-[.28em] ${light ? "text-white/60" : "text-slate-500"}`}>DENTAL STUDIO</span></span>
    </Link>
  );
}