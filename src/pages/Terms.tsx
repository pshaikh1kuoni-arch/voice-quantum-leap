import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms and Conditions for JSM Nexus</h1>
        <p className="text-muted-foreground mb-10">Last Updated: April 3, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using <strong className="text-foreground">Quantum AI: Voice Task Manager</strong>, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>JSM Nexus provides an AI-powered voice assistant designed to help users manage tasks and schedule events through integration with third-party services like Google Calendar.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Conduct</h2>
            <p>You agree to use the service only for lawful purposes. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>The application, including its original content, features, and functionality, is and will remain the exclusive property of JSM Nexus and its licensors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>In no event shall JSM Nexus be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of your use of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Termination</h2>
            <p>We may terminate or suspend your access to our service immediately, without prior notice, for any reason whatsoever, including breach of these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India / Maharashtra / Mumbai.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
