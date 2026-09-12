 "use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"loading"|"success"|"error">("idle");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus("loading");const res=await fetch("/api/contact",{method:"POST",body:new FormData(e.currentTarget)});setStatus(res.ok?"success":"error");if(res.ok)e.currentTarget.reset();}
 return <form onSubmit={submit} className="grid gap-5 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
  {status==="success"&&<div className="rounded-2xl bg-[#d9f7f4] p-4 text-sm font-bold text-[#087b78]"><CheckCircle2 className="mr-2 inline" size={18}/>Message received. We&apos;ll be in touch shortly.</div>}
  <div className="grid gap-5 md:grid-cols-2"><Field name="name" label="Full name" required/><Field name="phone" label="Phone number" type="tel" required/></div><Field name="email" label="Email address" type="email"/>
  <label className="grid gap-2 text-sm font-bold text-[#102a43]">Message<textarea name="message" rows={6} required className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#12a6a0]" placeholder="How can we help?"/></label>
  {status==="error"&&<p className="text-sm font-semibold text-red-600">Something went wrong. Please call us directly.</p>}
  <button disabled={status==="loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12a6a0] px-5 py-4 text-sm font-black text-white hover:bg-[#087b78] disabled:opacity-60">{status==="loading"&&<Loader2 className="animate-spin" size={17}/>} {status==="loading"?"Sending…":"Send message"}</button>
 </form>
}
function Field({name,label,type="text",required=false}:{name:string;label:string;type?:string;required?:boolean}){return <label className="grid gap-2 text-sm font-bold text-[#102a43]">{label}<input name={name} type={type} required={required} className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#12a6a0]"/></label>}
