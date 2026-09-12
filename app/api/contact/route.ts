import { NextResponse } from "next/server";

export async function POST(request:Request){
 try{
  const form=await request.formData();
  const payload=Object.fromEntries([...form.entries()].map(([k,v])=>[k,String(v).trim()]));
  if(!payload.name||!payload.phone||!payload.message) return NextResponse.json({error:"Name, phone and message are required."},{status:400});
  if(payload.phone.replace(/\D/g,"").length<10) return NextResponse.json({error:"Please provide a valid phone number."},{status:400});
  // Replace this integration boundary with your CRM/email provider.
  console.info("Contact enquiry received",payload);
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request."},{status:400});}
}