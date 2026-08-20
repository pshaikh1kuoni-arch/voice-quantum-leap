import { useQuery } from "@tanstack/react-query";
import Papa from "papaparse";

export interface SessionPhoto {
  id: string;
  image: string;
  title: string;
  date: string;
  category: string;
  /** Empty/missing means the photo is a plain flyer: no click-to-detail popup. */
  description?: string;
}

/**
 * Paste the "Publish to web" CSV link from the session-photos Google Sheet here
 * once it exists. Left blank, the gallery just shows the seeded photos below.
 */
export const GALLERY_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSs9BP3qqNUMLHEPOD5Q3iDd0zpjl0nU_398OKITSyhq5WIhyTA6fOCoSXN2guCfEejvj8OP_xjj__G/pub?gid=0&single=true&output=csv";

/**
 * Accepts a Google Drive "share" link (the kind you get from Drive's Share
 * button) and rewrites it into a URL that actually renders as an <img>.
 * Anything that isn't a recognizable Drive share link passes through
 * unchanged, so a direct image URL from anywhere else still works.
 */
export function toDirectImageUrl(url: string): string {
  const trimmed = url.trim();
  const fileIdMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) ?? trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (!fileIdMatch) return trimmed;
  // The bare (unsized) googleusercontent form passes Chrome's cross-origin
  // resource blocking (ORB) checks; every "sized" variant (?sz=, =s1600, =w1600)
  // gets blocked as an <img> subresource even though it loads fine on its own.
  return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
}

interface SheetRow {
  Photo?: string;
  Title?: string;
  Date?: string;
  Category?: string;
  Description?: string;
}

async function fetchSheetPhotos(): Promise<SessionPhoto[]> {
  if (!GALLERY_SHEET_CSV_URL) return [];

  const res = await fetch(GALLERY_SHEET_CSV_URL);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const csvText = await res.text();

  const { data } = Papa.parse<SheetRow>(csvText, { header: true, skipEmptyLines: true });

  return data
    .filter((row) => row.Photo?.trim())
    .map((row, i) => ({
      id: `sheet-${i}-${row.Title ?? "photo"}`,
      image: toDirectImageUrl(row.Photo ?? ""),
      title: row.Title?.trim() || "Untitled session",
      date: row.Date?.trim() ?? "",
      category: row.Category?.trim() || "General",
      description: row.Description?.trim() || undefined,
    }));
}

export function useSheetGalleryPhotos() {
  return useQuery({
    queryKey: ["sheet-gallery-photos", GALLERY_SHEET_CSV_URL],
    queryFn: fetchSheetPhotos,
    // If the sheet is unreachable, fail quietly rather than blocking the page.
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}
