import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { breadcrumbSchema, SITE_EMAIL, SITE_NAME, SITE_PHONE } from "@/lib/seo";
import { PageIntro, CtaBand } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    links: [{ rel: "canonical", href: "/privacy-policy" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]),
    ],
    meta: [
      { property: "og:url", content: "/privacy-policy" },
      { title: "Privacy Policy | South Hyderabad Properties" },
      {
        property: "og:title",
        content: "Privacy Policy | South Hyderabad Properties",
      },
      {
        property: "og:description",
        content:
          "Read our Privacy Policy to understand how South Hyderabad Properties collects, protects, and respects your personal data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Transparent privacy policy for South Hyderabad Properties. Learn how we safeguard your personal details, property inquiries, and data.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const keyPrinciples = [
  {
    icon: Lock,
    title: "Zero Data Selling",
    desc: "We never sell, rent, or trade your personal information or contact details to third-party telemarketers or advertisers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Coordination",
    desc: "Your inquiry details are solely used to coordinate genuine property consultations, site visits, and developer updates.",
  },
  {
    icon: EyeOff,
    title: "Spam-Free Promise",
    desc: "No aggressive automated robocalls. We respect your schedule and communicate via your preferred channels.",
  },
];

const sections = [
  { id: "introduction", label: "1. Introduction & Overview" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "data-sharing", label: "4. Information Sharing & Disclosure" },
  { id: "cookies", label: "5. Cookies & Tracking Technologies" },
  { id: "security", label: "6. Data Security & Storage" },
  { id: "your-rights", label: "7. Your Privacy Rights & Choices" },
  { id: "third-party", label: "8. External & Third-Party Links" },
  { id: "updates", label: "9. Policy Updates" },
  { id: "contact-us", label: "10. Contact & Grievance Redressal" },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal & Transparency"
        title={
          <>
            Privacy <span className="text-[#FC913A]">Policy</span>
          </>
        }
      >
        <p>
          At South Hyderabad Properties, we treat your privacy with the utmost seriousness. Learn
          how we collect, use, and protect your information when you browse our website or consult
          with our team.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
          <Clock className="h-4 w-4 text-[#FC913A]" />
          <span>Effective Date: October 2026</span>
        </div>
      </PageIntro>

      {/* Trust Highlights */}
      <section className="bg-brand-soft border-b border-border py-12">
        <div className="page-wrap">
          <div className="grid gap-6 md:grid-cols-3">
            {keyPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content Body */}
      <section className="section-pad">
        <div className="page-wrap grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sticky Navigation / Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-orange">
                Table of Contents
              </p>
              <nav className="mt-4 flex flex-col gap-1.5 text-sm" aria-label="Privacy sections">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-brand-soft hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">Have privacy concerns?</p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="mt-1 inline-block text-xs font-semibold text-brand-orange hover:underline"
                >
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <article className="prose-content max-w-none text-foreground space-y-12">
            {/* Section 1 */}
            <div id="introduction" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                1. Introduction & Overview
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Welcome to <strong>South Hyderabad Properties</strong> ("we", "our", or "us"). We
                specialize in real estate marketing, advisory, and consulting services for
                residential villas, gated communities, open plots, HMDA/DTCP layouts, and commercial
                properties across South Hyderabad (including Tukkuguda, Maheshwaram, Shamshabad,
                Kongara Kalan, Adibatla, Immaguda, and the Future City corridor).
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This Privacy Policy explains how we collect, store, utilize, and protect your
                personally identifiable information when you visit{" "}
                <Link to="/" className="text-brand-orange underline font-medium">
                  southhyderabadproperties.in
                </Link>
                , fill out an enquiry or contact form, request a brochure, schedule a site visit, or
                interact with our customer representatives via telephone, WhatsApp, or email.
              </p>
            </div>

            {/* Section 2 */}
            <div id="information-collected" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                2. Information We Collect
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We collect personal information that you voluntarily provide to us, as well as
                technical data generated automatically when interacting with our digital channels:
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                    Directly Provided Information
                  </h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
                    <li>Contact details: Name, phone/mobile number, email address, and city.</li>
                    <li>
                      Property preferences: Preferred location, property type (villas, plots,
                      apartments, farm land), configuration (e.g. 4 BHK, 5 BHK), and budget range.
                    </li>
                    <li>
                      Inquiry messages: Queries submitted via forms, WhatsApp chat requests, or
                      brochure download requests.
                    </li>
                    <li>
                      Site visit scheduling: Preferred date, time, and pickup/meeting points for
                      property tours.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                    Automatically Collected Information
                  </h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
                    <li>
                      Device & browser metrics: Device type, operating system, browser version, and
                      screen resolution.
                    </li>
                    <li>
                      Usage & engagement: Pages viewed, time spent on property listings, referral
                      URLs, and interaction with project galleries.
                    </li>
                    <li>
                      Network information: Masked IP addresses and approximate geographic region
                      (city-level) derived through web analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="how-we-use" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                3. How We Use Your Information
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We strictly use your personal information to deliver our real estate consulting
                services and enhance your property discovery experience:
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Responding to inquiries, dispatching brochures, pricing sheets, and floor plans.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Coordinating and organizing physical site visits to villa projects and plots.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Providing legal clarity, HMDA/RERA verification, and layout documentation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Informing you of newly launched premium residential projects matching your
                    criteria.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Assisting property owners with resale evaluation and buyer match-making.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-background p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Analyzing website performance to ensure fast, glitch-free browsing experiences.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="data-sharing" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                4. Information Sharing & Disclosure
              </h2>
              <div className="mt-4 rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-4 text-sm text-foreground">
                <strong>Our Ironclad Commitment:</strong> We do NOT sell, rent, license, or disclose
                your personal data to external data aggregators, spam brokers, or unauthorized third
                parties under any circumstance.
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We only disclose your information in the following limited and necessary scenarios:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-muted-foreground pl-1">
                <li>
                  <strong>Project Developers & Builders:</strong> When you express interest in a
                  specific gated community or villa project (e.g. Constella Villas, Autumn Luxury
                  Villas, Vertex Florenza), we may coordinate with the project's authorized sales
                  desk to schedule appointments, lock down booking slots, or confirm unit
                  availability.
                </li>
                <li>
                  <strong>Banking & Home Loan Partners:</strong> Only upon your explicit request, we
                  can connect you with leading partner banks (SBI, HDFC, ICICI, etc.) for loan
                  pre-approvals and subsidy guidance.
                </li>
                <li>
                  <strong>Legal & Statutory Obligations:</strong> We may disclose information if
                  compelled to do so by applicable Indian laws, judicial proceedings, or lawful
                  governmental orders.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="cookies" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                5. Cookies & Tracking Technologies
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our website utilizes standard browser cookies and analytics tools (such as Google
                Analytics) to improve navigation, record anonymous visitor statistics, and ensure
                reliable performance.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Cookies are small text files stored locally on your device. You have complete
                freedom to accept or decline cookies by modifying your web browser settings. Please
                note that disabling cookies may slightly affect some interactive features on our
                site.
              </p>
            </div>

            {/* Section 6 */}
            <div id="security" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                6. Data Security & Storage
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We implement comprehensive administrative, technical, and physical security measures
                to safeguard your personal data from unauthorized access, accidental loss,
                destruction, or alteration. All web communications on this portal are encrypted
                using modern Secure Socket Layer (SSL/TLS) protocols.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We retain your contact and inquiry records only for as long as is necessary to
                fulfill your property search requests, comply with legal accounting obligations, or
                until you request data removal.
              </p>
            </div>

            {/* Section 7 */}
            <div id="your-rights" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                7. Your Privacy Rights & Choices
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In compliance with applicable Indian data protection standards, you have full
                control over your personal information:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground text-sm">Right to Access & Edit</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    You can request a copy of the personal details we hold about you or request
                    corrections to inaccurate records.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground text-sm">Right to Erasure</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    You can request complete deletion of your phone number and email from our active
                    contact database at any time.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground text-sm">Opt-Out of Updates</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    You may unsubscribe from property newsletters or WhatsApp updates by replying
                    "STOP" or contacting us directly.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground text-sm">Consent Withdrawal</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    You may withdraw your consent for property consultation at any stage without any
                    penalty.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div id="third-party" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                8. External & Third-Party Links
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our website may contain hyperlinks to external portals, such as developer websites,
                government registration portals (e.g. TG RERA, Dharani), social media platforms
                (Instagram, Facebook), or Google Maps for project locations.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We are not responsible for the privacy practices, content, or policies of external
                third-party sites. We strongly encourage you to review their independent privacy
                policies before submitting personal data.
              </p>
            </div>

            {/* Section 9 */}
            <div id="updates" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                9. Policy Updates
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We may periodically update this Privacy Policy to reflect modifications in our
                operational practices, technology updates, or Indian regulatory standards. The
                latest revised version will always be published on this page with an updated
                effective date. Continued use of our website signifies your acceptance of any
                updates.
              </p>
            </div>

            {/* Section 10 */}
            <div id="contact-us" className="scroll-mt-24 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                10. Contact Information & Grievance Redressal
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                If you have questions, feedback, or wish to exercise any of your privacy rights,
                please contact our grievance officer directly:
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-brand-soft p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{SITE_NAME}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Property Consulting & Real Estate Advisory
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card text-brand-orange shadow-xs">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call / WhatsApp</p>
                      <a
                        href="tel:+919646952999"
                        className="font-semibold text-foreground hover:text-brand-orange"
                      >
                        +91 96469 52999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card text-brand-orange shadow-xs">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Direct Email</p>
                      <a
                        href={`mailto:${SITE_EMAIL}`}
                        className="font-semibold text-foreground hover:text-brand-orange break-all"
                      >
                        {SITE_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card text-brand-orange shadow-xs">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Service Region</p>
                      <p className="font-semibold text-foreground">
                        Hyderabad & South Hyderabad Growth Corridors, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/80 pt-4 flex flex-wrap gap-3">
                  <Button asChild variant="orange">
                    <Link to="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href="https://wa.me/919646952999?text=Hello%20South%20Hyderabad%20Properties,%20I%20have%20a%20question%20regarding%20your%20privacy%20policy."
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
