"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { ServiceIcon } from "./ServiceIcon";
import { motion } from "framer-motion";

export function ServiceCard({ service }: { service: Service }) {
 return <motion.div whileHover={{ y: -7 }} transition={{ duration: .25 }}><Link href={`/services/${service.slug}`} className="group block h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(16,42,67,.04)] transition hover:border-[#9bded9] hover:shadow-[0_22px_60px_rgba(16,42,67,.10)]"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d9f7f4] text-[#087b78] transition group-hover:rotate-3 group-hover:bg-[#12a6a0] group-hover:text-white"><ServiceIcon name={service.icon}/></span><h3 className="mt-7 text-lg font-black text-[#102a43]">{service.name}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{service.shortDescription}</p><span className="mt-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#12a6a0] group-hover:bg-[#12a6a0] group-hover:text-white"><ArrowUpRight size={17}/></span></Link></motion.div>;
}