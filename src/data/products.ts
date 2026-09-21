import type { Product } from "@/lib/productSheet";
import quantumLogo from "@/assets/quantum-logo.png";
import rezoomeShot from "@/assets/rezoome-screenshot.png";
import groundTruthShot from "@/assets/ground-truth-screenshot.png";
import mjaidzShot from "@/assets/mjaidz-screenshot.png";

/**
 * Software that ships with the site itself, independent of the Google Sheet feed.
 * New products go in the sheet once it exists; this stays as the confirmed baseline.
 */
export const SEEDED_PRODUCTS: Product[] = [
  {
    id: "quantum-assistant",
    name: "Quantum Assistant",
    tagline: "Voice based Android app for reminders and to-do lists, made shareable.",
    description:
      "A voice command based, one of a kind app: speak, and your reminders and to-do list get created instantly. Lists can be shared straight to friends, family, or professional contacts, so nothing has to be retyped or explained twice. Built to make everyday execution easier and more productive.",
    image: quantumLogo,
    category: "Public App",
    status: "Live",
    badge: "Featured App",
    link: "/quantum-assistant",
  },
  {
    id: "rezoome",
    name: "ATS Resume Optimizer",
    tagline: "Tailor made resume, application tracker, best ATS friendly resume maker.",
    description:
      "One of the first apps built specifically to beat applicant tracking systems: bring any resume you already have, and get back a tailor made, ATS friendly version built around the exact job you're applying for, plus a tracker to keep every application organized in one place.",
    image: rezoomeShot,
    category: "Public App",
    status: "Live",
    badge: "rezoome.in",
    link: "/ats-resume-optimizer",
  },
  {
    id: "ground-truth",
    name: "Ground Truth",
    tagline: "Create your own dashboard. No dependency.",
    description:
      "Not just a dashboard visualizer, a dashboard you can speak with. Trained on your own manuals, SLAs, logs, and maintenance updates, so when you ask a question, it answers from your real operational data, not a guess. It's less about the data itself and more about decision making and strategy, which is exactly why it's called Ground Truth.",
    image: groundTruthShot,
    category: "Self Build",
    status: "Live",
  },
  {
    id: "fm-chatbot",
    name: "FM Chatbot",
    tagline: "Skip the form, just ask.",
    description:
      "Speaks directly with employees to pass along everyday information: canteen menus, visitor management, room booking, and more, cutting out manual back and forth entirely.",
    category: "Self Build",
    status: "Live",
  },
  {
    id: "mjaidz-id-card-platform",
    name: "MJAIDZ ID Card Platform",
    tagline: "ID card printing solution with built in data management.",
    description:
      "Built for a school where ID card data was scattered, printing errors were common, and there was no way to track a request end to end, leaving parents and teachers chasing updates. Every step, from data collection to print ready cards, now runs through one tailor made system, delivered flawlessly in just seven days.",
    image: mjaidzShot,
    category: "Client Build",
    status: "Live",
    link: "http://mjaidz.in/",
  },
  {
    id: "gacs-job-automation",
    name: "GACS",
    tagline: "All the jobs, in one place.",
    description:
      "Scrapes job listings from across the web, including LinkedIn, and brings them together in one place for the admin fraternity, published on a dedicated website.",
    category: "Client Build",
    status: "Live",
  },
  {
    id: "data-health-agent",
    name: "Data Health Agent",
    tagline: "Bad data doesn't get to hide anymore.",
    description:
      "An agent built directly into the workflow that continuously checks incoming operational data and flags what's wrong in real time, so errors get caught before they turn into bad decisions.",
    category: "Client Build",
    status: "Live",
  },
  {
    id: "predictive-maintenance-agent",
    name: "Predictive Maintenance Agent",
    tagline: "Ask your maintenance history a question.",
    description:
      "A RAG powered agent trained on maintenance records, so instead of digging through logs, you can ask directly and get the maintenance information you need, exactly when you need it.",
    category: "Client Build",
    status: "Live",
  },
  {
    id: "esg-occupancy-attendant-agent",
    name: "ESG Occupancy Attendant Agent",
    tagline: "Are you consuming what you should be?",
    description:
      "Correlates occupancy and attendance data against electricity consumption, checking whether energy use actually matches who's really in the building, supporting accurate ESG reporting and catching waste early.",
    category: "Client Build",
    status: "Live",
  },
  {
    id: "lease-abstraction-automation",
    name: "Lease Abstraction Automation",
    tagline: "Just chat with your lease.",
    description:
      "Most crucial lease terms stay buried in pages nobody rereads. Open a lease and start chatting with it directly, ask anything, and it reads and answers like someone who has the whole agreement memorized.",
    category: "Client Build",
    status: "Live",
  },
  {
    id: "whatsapp-real-estate-leads",
    name: "WhatsApp Lead Administration",
    tagline: "Grow the business through WhatsApp.",
    description:
      "In progress for a service industry client who wants to use WhatsApp automation to generate and manage leads and grow their business end to end.",
    category: "Client Build",
    status: "Upcoming",
  },
  {
    id: "esg-dashboard-carbon-calculator",
    name: "ESG Dashboard & Carbon Calculator",
    tagline: "ESG reporting, without the spreadsheet grind.",
    description: "Early planning stage: a dashboard for ESG reporting with built in carbon footprint calculation.",
    category: "Client Build",
    status: "Upcoming",
  },
  {
    id: "fm-llm",
    name: "LLM for Facility Management",
    tagline: "A dedicated large language model for facility management.",
    description: "Early planning stage: conversations are underway on what a dedicated FM focused LLM could look like.",
    category: "Client Build",
    status: "Upcoming",
  },
];
