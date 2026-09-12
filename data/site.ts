import type { Doctor, Service } from "@/types";

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDescription: "Routine checkups, cleaning, fillings and preventive care.",
    description: "Keep your smile healthy with comprehensive preventive and restorative dental care tailored to your needs.",
    icon: "tooth",
    bullets: ["Dental examinations", "Professional cleaning", "Tooth-coloured fillings", "Preventive care plans"]
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Natural-looking, long-lasting solutions for missing teeth.",
    description: "Replace missing teeth with stable, functional and natural-looking implants planned around your smile and bite.",
    icon: "implant",
    bullets: ["Implant consultation", "Single-tooth implants", "Implant-supported bridges", "Aftercare guidance"]
  },
  {
    slug: "braces-aligners",
    name: "Braces & Aligners",
    shortDescription: "Straighten your smile with modern orthodontic solutions.",
    description: "Improve alignment, bite and confidence with treatment options selected for your lifestyle.",
    icon: "braces",
    bullets: ["Clear aligners", "Ceramic braces", "Traditional braces", "Retention plans"]
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "A brighter smile with professional whitening care.",
    description: "Professional whitening designed to brighten your smile while keeping comfort and enamel safety in mind.",
    icon: "sparkles",
    bullets: ["In-clinic whitening", "Take-home options", "Shade assessment", "Sensitivity guidance"]
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortDescription: "Restore damaged teeth and everyday function.",
    description: "Restore strength, shape and function with carefully planned crowns and bridges.",
    icon: "crown",
    bullets: ["Porcelain crowns", "Zirconia crowns", "Dental bridges", "Replacement planning"]
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    shortDescription: "Relieve infection and preserve your natural tooth.",
    description: "Modern root canal care focused on relieving discomfort, controlling infection and saving your natural tooth.",
    icon: "root",
    bullets: ["Diagnosis and imaging", "Root canal therapy", "Pain management", "Restoration planning"]
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    shortDescription: "Healthier gums for a healthier smile.",
    description: "Treat and manage gum problems with personalised hygiene advice and periodontal care.",
    icon: "gum",
    bullets: ["Gum health assessment", "Deep cleaning", "Periodontal maintenance", "Home-care coaching"]
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDescription: "Gentle, positive dental visits for little ones.",
    description: "Friendly, age-appropriate dental care that helps children build healthy habits and confidence.",
    icon: "baby",
    bullets: ["Child checkups", "Preventive fluoride care", "Cavity management", "Habit counselling"]
  }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Ananya Menon",
    role: "Chief Dentist",
    specialty: "Cosmetic & Restorative Dentistry",
    bio: "Focused on comfortable, conservative treatment and natural-looking smile transformations."
  },
  {
    name: "Dr. Rahul Kapoor",
    role: "Dental Surgeon",
    specialty: "Implant & General Dentistry",
    bio: "Combines evidence-based dentistry with a calm, patient-first approach to complex restorative care."
  },
  {
    name: "Dr. Meera Pillai",
    role: "Pediatric Dentist",
    specialty: "Pediatric Dentistry",
    bio: "Passionate about making dental care simple, positive and stress-free for children and parents."
  }
];

export const testimonials = [
  { quote: "The team made my implant treatment feel simple and comfortable. Everything was explained clearly.", name: "Ananya S.", treatment: "Dental Implant" },
  { quote: "Professional, friendly and very hygienic. I always feel at ease during my visits.", name: "Rahul K.", treatment: "General Dentistry" },
  { quote: "My kids love coming here! The pediatric team is patient and incredibly kind.", name: "Meera P.", treatment: "Pediatric Dentistry" }
];