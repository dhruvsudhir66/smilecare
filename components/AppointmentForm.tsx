 "use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function AppointmentForm() {
 const [status,setStatus]=useState<"idle"|"loading"|"success"|"error">("idle");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus("loading");const res=await fetch("/api/appointment",{method:"POST",body:new FormData(e.currentTarget)});setStatus(res.ok?"success":"error");if(res.ok)e.currentTarget.reset();}
 if(status==="success") return <div className="grid min-h-[430px] place-items-center rounded-[30px] border border-[#bcebe7] bg-white p-8 text-center"><div><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#d9f7f4] text-[#087b78]"><CheckCircle2 size={30}/></span><h2 className="mt-6 text-2xl font-black text-[#071d31]">Request received.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">Thank you. Our team will contact you to confirm the final appointment slot.</p><button onClick={()=>setStatus("idle")} className="mt-7 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold">Send another request</button></div></div>;
 return <form onSubmit={submit} className="grid gap-5 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
  <div className="grid gap-5 md:grid-cols-2"><Field name="name" label="Full name" required/><Field name="phone" label="Phone number" type="tel" required/></div>
  <div className="grid gap-5 md:grid-cols-2"><Field name="email" label="Email address" type="email"/><Field name="date" label="Preferred date" type="date" required/></div>
  <div className="grid gap-5 md:grid-cols-2"><Field name="time" label="Preferred time" type="time" required/><Select/></div>
  <label className="grid gap-2 text-sm font-bold text-[#102a43]">Anything we should know?<textarea name="notes" rows={4} className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#12a6a0]" placeholder="Tell us about your concern or preference…"/></label>
  {status==="error"&&<p className="text-sm font-semibold text-red-600">We couldn&apos;t submit this request. Please call us directly.</p>}
  <button disabled={status==="loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102a43] px-5 py-4 text-sm font-black text-white transition hover:bg-[#071d31] disabled:opacity-60">{status==="loading"&&<Loader2 className="animate-spin" size={17}/>} {status==="loading"?"Sending request…":"Request appointment"}</button>
 </form>;
}
function Field({name,label,type="text",required=false}:{name:string;label:string;type?:string;required?:boolean}){return <label className="grid gap-2 text-sm font-bold text-[#102a43]">{label}<input name={name} type={type} required={required} className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#12a6a0]"/></label>}
function Select(){return <label className="grid gap-2 text-sm font-bold text-[#102a43]">Service<select name="service" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none"><option>General Dentistry</option><option>Dental Implants</option><option>Braces & Aligners</option><option>Teeth Whitening</option><option>Crowns & Bridges</option><option>Root Canal Treatment</option><option>Gum Treatment</option><option>Pediatric Dentistry</option></select></label>}
