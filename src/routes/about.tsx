import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";

import heroImage from "@/assets/about-us-hero.jpg";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
      ]),
    ],
    meta: [
      { property: "og:url", content: "/about" },
      { title: "About Us | South Hyderabad Properties" },
      {
        name: "description",
        content:
          "Meet the property advisors helping buyers discover premium, verified real estate opportunities across South Hyderabad.",
      },
      { property: "og:title", content: "About South Hyderabad Properties" },
      {
        property: "og:description",
        content: "Transparent advice and modern real estate marketing for South Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title={
          <>
            <span className="text-[#FC913A]">Real estate</span> guidance with a clearer point of
            view.
          </>
        }
      >
        <p>
          We connect thoughtful buyers with premium property opportunities across the growth
          corridors of South Hyderabad.
        </p>
      </PageIntro>
      <section className="section-pad">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="image-card aspect-[4/3]">
            <img
              src={heroImage}
              alt="A premium villa community representing South Hyderabad growth"
              width={1920}
              height={1088}
            />
          </div>
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">
              The right property starts with the right conversation.
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Looking to buy or sell a Property in South Hyderabad? South Hyderabad Properties is
              your trusted Real Estate partner, helping buyers and sellers connect with the right
              opportunities across Tukkuguda, Shamshabad, Maheshwaram, Adibatla, Kandukur, Hyderabad
              Future City Corridor & nearby developing areas.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              We specialize in buying and selling Residential Properties, Villas,Apartments,
              residential plots, HMDA & DTCP approved layouts, open plots, resale plots and
              investment properties. Whether you're a first-time buyer or an experienced investor,
              our team is committed to helping you find the right property at the right price.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              If you own a Property or are planning to sell, we help you get the best possible
              market price through our local market expertise and extensive network of genuine
              buyers.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/contact">
                Start a conversation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft">
        <div className="page-wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold">
              Clarity is our most valuable amenity.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Transparent",
                text: "Straightforward information and honest context at every stage.",
              },
              {
                icon: ShieldCheck,
                title: "Diligent",
                text: "A careful, documentation-first view of every opportunity.",
              },
              {
                icon: Handshake,
                title: "Personal",
                text: "Recommendations shaped around your goals, not a sales script.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article className="rounded-md border border-border bg-background p-8" key={title}>
                <Icon className="h-8 w-8 text-brand-orange" />
                <h3 className="mt-8 font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="page-wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-md bg-primary p-8 text-primary-foreground">
            <Lightbulb className="h-10 w-10 text-brand-orange" />
            <p className="mt-16 text-sm font-bold uppercase tracking-widest text-primary-foreground/65">
              Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold">A. Srikanth</h2>
            <p className="mt-2 text-primary-foreground/70">Senior Sales & CRM Executive</p>
          </div>
          <div className="self-center">
            <p className="eyebrow">Modern by design</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold">
              Better property marketing starts with better information.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Under the direction of A. Srikanth, the company combines local market insight with
              modern storytelling, focused digital discovery and responsive communication.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              The aim is not simply to showcase property, but to help buyers understand location,
              lifestyle and long-term relevance before taking the next step.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
