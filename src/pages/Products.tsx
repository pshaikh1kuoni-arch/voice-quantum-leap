import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal, TiltCard } from "@/lib/motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEEDED_PRODUCTS } from "@/data/products";
import { useSheetGalleryProducts, type Product } from "@/lib/productSheet";

function visitLabel(link: string) {
  if (link.includes("play.google.com")) return "Open in Play Store";
  return "Visit the website";
}

const Products = () => {
  const { data: sheetProducts = [] } = useSheetGalleryProducts();
  const [activeCategory, setActiveCategory] = useState("All");
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  const allProducts = useMemo(() => [...SEEDED_PRODUCTS, ...sheetProducts], [sheetProducts]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allProducts.map((p) => p.category)));
    return ["All", ...unique];
  }, [allProducts]);

  const visibleProducts = activeCategory === "All" ? allProducts : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              Proof, Not Just Theory
            </span>
            <h1 className="font-display text-page-display font-semibold mb-5">Software I've built and shipped</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Live consumer apps and specialized software built for real clients. Not side projects, proof.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold uppercase tracking-wider rounded-full px-4 py-2 transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {visibleProducts.map((product, i) => {
              const hasInternalPage = product.link?.startsWith("/");

              const card = (
                <TiltCard className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                  <div className="p-8 flex flex-col h-full">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-contain mb-5" />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary font-display font-semibold text-xl">
                        {product.name.charAt(0)}
                      </div>
                    )}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
                        {product.badge ?? product.category}
                      </span>
                      {product.status === "Upcoming" && (
                        <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-3 py-1">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.tagline}</p>
                    <span className="mt-auto text-sm font-semibold text-primary">
                      Learn more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </TiltCard>
              );

              return (
                <Reveal key={product.id} delay={(i % 4) * 80}>
                  {hasInternalPage ? (
                    <Link to={product.link as string} className="group block h-full">
                      {card}
                    </Link>
                  ) : (
                    <button type="button" onClick={() => setOpenProduct(product)} className="group block h-full w-full text-left">
                      {card}
                    </button>
                  )}
                </Reveal>
              );
            })}
          </div>

          {visibleProducts.length === 0 && (
            <p className="text-center text-sm text-muted-foreground mt-10">No software in this category yet.</p>
          )}
        </div>
      </section>

      <Dialog open={openProduct !== null} onOpenChange={(open) => !open && setOpenProduct(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {openProduct && (
            <>
              {openProduct.image && (
                <img src={openProduct.image} alt={openProduct.name} className="w-full rounded-lg mb-2" />
              )}
              <DialogHeader>
                <DialogTitle>{openProduct.name}</DialogTitle>
                <DialogDescription>{[openProduct.badge ?? openProduct.category, openProduct.status].filter(Boolean).join(" · ")}</DialogDescription>
              </DialogHeader>
              <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                {openProduct.description || openProduct.tagline}
              </p>
              {openProduct.link && (
                <a
                  href={openProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-xl px-5 py-2.5 mt-2 font-semibold text-sm text-primary-foreground w-fit"
                  style={{ background: "var(--gradient-quantum)" }}
                >
                  {visitLabel(openProduct.link)}{" "}
                  <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
};

export default Products;
