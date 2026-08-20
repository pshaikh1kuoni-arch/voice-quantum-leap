import { useMemo, useState } from "react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal, ScrollProgress, SpotlightPanel } from "@/lib/motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SEEDED_SESSION_PHOTOS } from "@/data/sessionPhotos";
import { useSheetGalleryPhotos, type SessionPhoto } from "@/lib/sheetGallery";

const Sessions = () => {
  const { data: sheetPhotos = [] } = useSheetGalleryPhotos();
  const [activeCategory, setActiveCategory] = useState("All");
  const [openPhoto, setOpenPhoto] = useState<SessionPhoto | null>(null);

  const allPhotos = useMemo(() => [...SEEDED_SESSION_PHOTOS, ...sheetPhotos], [sheetPhotos]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allPhotos.map((p) => p.category)));
    return ["All", ...unique];
  }, [allPhotos]);

  const visiblePhotos = activeCategory === "All" ? allPhotos : allPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              Sessions &amp; Speaking
            </span>
            <h1 className="font-display text-page-display font-semibold mb-5">Every session, in one place</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Knowledge sessions, guest talks, and community work. Tap a photo for the story behind it, where
              there is one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visiblePhotos.map((photo, i) => {
              const hasDetail = Boolean(photo.description);
              return (
                <Reveal key={photo.id} delay={(i % 6) * 60}>
                  <SpotlightPanel
                    className={`rounded-2xl border border-border bg-card overflow-hidden h-full ${hasDetail ? "cursor-pointer" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => hasDetail && setOpenPhoto(photo)}
                      disabled={!hasDetail}
                      className="block w-full text-left disabled:cursor-default"
                      aria-haspopup={hasDetail ? "dialog" : undefined}
                    >
                      <img src={photo.image} alt={photo.title} loading="lazy" className="w-full aspect-square object-cover" />
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground">{photo.title}</div>
                        {photo.date && <div className="text-[11px] text-muted-foreground/70 mt-0.5">{photo.date}</div>}
                      </div>
                    </button>
                  </SpotlightPanel>
                </Reveal>
              );
            })}
          </div>

          {visiblePhotos.length === 0 && (
            <p className="text-center text-sm text-muted-foreground mt-10">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <Dialog open={openPhoto !== null} onOpenChange={(open) => !open && setOpenPhoto(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {openPhoto && (
            <>
              <img src={openPhoto.image} alt={openPhoto.title} className="w-full rounded-lg mb-2" />
              <DialogHeader>
                <DialogTitle>{openPhoto.title}</DialogTitle>
                <DialogDescription>
                  {[openPhoto.category, openPhoto.date].filter(Boolean).join(" · ")}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">{openPhoto.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
};

export default Sessions;
