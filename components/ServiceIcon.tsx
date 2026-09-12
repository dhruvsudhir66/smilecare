import { Baby, Crown, HeartPulse, Sparkles, Stethoscope, Syringe, Smile, WandSparkles } from "lucide-react";
const icons={tooth:Stethoscope,implant:Syringe,braces:Smile,sparkles:Sparkles,crown:Crown,root:HeartPulse,gum:HeartPulse,baby:Baby};
export function ServiceIcon({name}:{name:string}){const Icon=icons[name as keyof typeof icons]??WandSparkles;return <Icon size={24} strokeWidth={1.8}/>;}