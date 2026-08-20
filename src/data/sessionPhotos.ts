import type { SessionPhoto } from "@/lib/sheetGallery";
import gacs1 from "@/assets/gacs/session-1-foundation-building.png";
import gacs2 from "@/assets/gacs/session-2-automation-with-ai.png";
import gacs3 from "@/assets/gacs/session-3-build-real-automation.png";
import salamBombay from "@/assets/salam-bombay.jpg";

/**
 * Photos that ship with the site itself, independent of the Google Sheet feed.
 * These stay exactly as they've always been — nothing here should change when
 * new photos start arriving through the sheet.
 */
export const SEEDED_SESSION_PHOTOS: SessionPhoto[] = [
  {
    id: "gacs-1",
    image: gacs1,
    title: "GACS, Session 1: Foundation Building",
    date: "October 2025",
    category: "Corporate Sessions",
    description:
      "Levels 0 and 1 of the GACS AI Transformation Masterclass, taking Facility Management and Corporate Real Estate leaders from curiosity to their first working automation.",
  },
  {
    id: "gacs-2",
    image: gacs2,
    title: "GACS, Session 2: Automation with AI",
    date: "November 2025",
    category: "Corporate Sessions",
    description:
      "Level 2 of the GACS Masterclass, where repetitive FM and CRE tasks get turned into smart, AI-driven workflows.",
  },
  {
    id: "gacs-3",
    image: gacs3,
    title: "GACS, Session 3: Build Real Automation",
    date: "December 2025",
    category: "Corporate Sessions",
    description: "The final GACS session, focused on turning ideas into working, deployed AI powered apps.",
  },
  {
    id: "salam-bombay",
    image: salamBombay,
    title: "Salam Bombay NGO, Community Knowledge Session",
    date: "2025",
    category: "Community Work",
    description:
      "A knowledge session with the Salaam Bombay Foundation, helping students from underserved communities build practical AI skills.",
  },
];
