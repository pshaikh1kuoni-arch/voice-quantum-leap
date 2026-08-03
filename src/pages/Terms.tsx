import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site-config";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-10">Last Updated: April 3, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">This site</h2>
            <p>
              jsmnexus.in is an informational site. Browsing it doesn't involve any purchase, subscription, or
              account, so there's nothing to accept a checkout agreement for. The only interaction the site asks of
              you is an email, if you choose to send one.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Product terms live with the product</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Quantum Assistant</strong>: purchase terms, refunds, and app permissions
                are governed by the Google Play Store's own terms.
              </li>
              <li>
                <strong className="text-foreground">ATS Resume Optimizer</strong>: its terms and refund policy live on{" "}
                <a href={SITE.rezoomeUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rezoome.in</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual property</h2>
            <p>The content on this site, including its design and written material, belongs to JSM Nexus and its licensors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Governing law</h2>
            <p>These terms are governed by the laws of Maharashtra, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Questions</h2>
            <p>
              Email <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
