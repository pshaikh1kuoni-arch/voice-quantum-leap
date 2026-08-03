import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site-config";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Effective Date: April 3, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Where to find each product's policy</h2>
            <p>
              JSM Nexus is a personal site, not a store. It doesn't process payments, and it doesn't collect any
              personal data itself beyond what you choose to send by email. Each product has its own home, and its
              own policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-foreground">Quantum Assistant</strong>: purchases, refunds, and app permissions are
                governed by the Google Play Store. The Google API disclosure below covers what the app itself does
                with your data, since that's required for its Play Store listing.
              </li>
              <li>
                <strong className="text-foreground">ATS Resume Optimizer</strong>: its privacy policy and refund terms live on
                its own site, <a href={SITE.rezoomeUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rezoome.in</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Quantum Assistant: Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Account Information:</strong> When you sign up, we may collect your name and email address.</li>
              <li><strong className="text-foreground">Google User Data:</strong> To provide our core functionality, our application requests access to your Google Calendar. This includes reading your calendar events and creating new tasks or events based on your voice commands.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Data</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the Quantum Assistant service.</li>
              <li>Sync your voice generated tasks directly with your Google Calendar.</li>
              <li>Improve and personalize your user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Google API Disclosure</h2>
            <p>Quantum Assistant's use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements. We do not share your Google Calendar data with third-party AI models for training purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Data Storage and Security</h2>
            <p>We implement industry standard security measures to protect your data. Your Google OAuth tokens are encrypted and stored securely. We do not store your calendar events on our servers longer than necessary to process your immediate requests.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights and Data Deletion</h2>
            <p>You can revoke access to your Google account at any time via your Google Security Settings. You may also request the deletion of your account and all associated data by contacting us at <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
