import { useQuery } from "@tanstack/react-query";
import Papa from "papaparse";
import { toDirectImageUrl } from "@/lib/sheetGallery";

export type ProductCategory = "Public App" | "Client Build" | "Self Build";
export type ProductStatus = "Live" | "Upcoming";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  image?: string;
  category: ProductCategory;
  status: ProductStatus;
  /** Overrides the default category label shown on the card, e.g. "Featured App" or "rezoome.in". */
  badge?: string;
  /** Internal route (starts with "/"), external URL, or omitted to just show a description on click. */
  link?: string;
  description?: string;
}

/**
 * Paste the "Publish to web" CSV link from the products Google Sheet here
 * once it exists. Left blank, the catalog just shows the seeded products below.
 */
export const PRODUCT_SHEET_CSV_URL = "";

interface ProductSheetRow {
  Image?: string;
  Name?: string;
  Tagline?: string;
  Category?: string;
  Status?: string;
  Link?: string;
  Description?: string;
}

async function fetchSheetProducts(): Promise<Product[]> {
  if (!PRODUCT_SHEET_CSV_URL) return [];

  const res = await fetch(PRODUCT_SHEET_CSV_URL);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const csvText = await res.text();

  const { data } = Papa.parse<ProductSheetRow>(csvText, { header: true, skipEmptyLines: true });

  const validCategories: ProductCategory[] = ["Public App", "Client Build", "Self Build"];

  return data
    .filter((row) => row.Name?.trim())
    .map((row, i) => {
      const rawCategory = row.Category?.trim();
      const category = (validCategories.find((c) => c === rawCategory) ?? "Client Build") as ProductCategory;
      return {
        id: `sheet-${i}-${row.Name}`,
        name: row.Name?.trim() || "Untitled product",
        tagline: row.Tagline?.trim() ?? "",
        image: row.Image?.trim() ? toDirectImageUrl(row.Image) : undefined,
        category,
        status: (row.Status?.trim() === "Upcoming" ? "Upcoming" : "Live") as ProductStatus,
        link: row.Link?.trim() || undefined,
        description: row.Description?.trim() || undefined,
      };
    });
}

export function useSheetGalleryProducts() {
  return useQuery({
    queryKey: ["sheet-gallery-products", PRODUCT_SHEET_CSV_URL],
    queryFn: fetchSheetProducts,
    // If the sheet is unreachable, fail quietly rather than blocking the page.
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}
