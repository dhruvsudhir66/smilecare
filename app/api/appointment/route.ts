import { NextResponse } from "next/server";

const required=["name","phone","date","time"];
export async function POST(request:Request){
 try{
  const form=await request.formData();
  const payload=Object.fromEntries([...form.entries()].map(([k,v])=>[k,String(v).trim()]));
  if(required.some(key=>!payload[key])) return NextResponse.json({error:"Missing required fields."},{status:400});
  if(payload.phone.replace(/\D/g,"").length<10) return NextResponse.json({error:"Please provide a valid phone number."},{status:400});
  // Replace this integration boundary with your DB + email/WhatsApp/SMS provider.
  console.info("Appointment request received",payload);
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request."},{status:400});}
}