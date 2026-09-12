import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
 title:{default:"SmileCare Dental Studio",template:"%s | SmileCare"},
 description:"Modern, human-centred dental care in Bengaluru. Preventive, restorative, cosmetic and family dentistry.",
 metadataBase:new URL("https://smilecare.example"),
 openGraph:{title:"SmileCare Dental Studio",description:"Thoughtful dentistry, beautifully delivered.",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
