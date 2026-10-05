import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  Baby,
  BedDouble,
  BriefcaseBusiness,
  Dumbbell,
  Flower2,
  MapPin,
  PartyPopper,
  Waves,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Map,
  Droplets,
  CloudRain,
  Sprout,
  ShieldCheck,
} from "lucide-react";
import SlotCounter from "react-slot-counter";
import { useRef } from "react";
import { useInView, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { jsonLd, breadcrumbSchema } from "@/lib/seo";

import clubhouseImage from "@/assets/clubhouse.jpg";
import { CtaBand } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/kavuri-hills-lemon-leaf-tukkuguda")({
  head: () => ({
    links: [{ rel: "canonical", href: "/projects/kavuri-hills-lemon-leaf-tukkuguda" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Kavuri's Lemon Leaf", path: "/projects/kavuri-hills-lemon-leaf-tukkuguda" },
      ]),
      jsonLd({
        "@type": "Residence",
        name: "Kavuri's Lemon Leaf",
        url: "/projects/kavuri-hills-lemon-leaf-tukkuguda",
        address: { "@type": "PostalAddress", addressRegion: "Telangana", addressCountry: "IN" },
      }),
    ],
    meta: [
      { property: "og:url", content: "/projects/kavuri-hills-lemon-leaf-tukkuguda" },
      { title: "Kavuri's Lemon Leaf | South Hyderabad Properties" },
      {
        name: "description",
        content:
          "Explore Kavuri's Lemon Leaf at Maheshwaram, ORR Exit 14: Plots across Premium acres with premium infrastructure.",
      },
      { property: "og:title", content: "Kavuri's Lemon Leaf €” Maheshwaram" },
      {
        property: "og:description",
        content: "Exclusive premium plots in South Hyderabad's Future City corridor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KavuriVillasPage,
});

const facts = [
  { big: "20", small: "Acres" },
  { big: "208", small: "Exclusive plots" },
  { big: "HMDA", small: "Approved layout" },
  { big: "100%", small: "Vaastu compliant" },
];
const amenities = [
  { icon: Droplets, label: "24*7 Water Supply", img: "/projects/kavuri/amenities/water.png" },
  { icon: CloudRain, label: "Storm Water Drains", img: "/projects/kavuri/amenities/drains.png" },
  { icon: Sprout, label: "Rain Water Harvesting", img: "/projects/kavuri/amenities/rainwater.png" },
  { icon: ShieldCheck, label: "24*7 Security", img: "/projects/kavuri/amenities/security.png" },
];

function FactCard({ fact }: { fact: { big: string; small: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-extrabold text-[#FC913A] sm:text-4xl flex items-center justify-start">
        <SlotCounter value={isInView ? fact.big : "0"} animateUnchanged={false} />
      </p>
      <p className="mt-1 text-sm text-primary-foreground/70">{fact.small}</p>
    </div>
  );
}

const heroImages = ["/projects/kavuri/1.png", "/projects/kavuri/2.jpg", "/projects/kavuri/3.jpg"];

function GallerySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={heroImages[index]}
          alt="Kavuri's Lemon Leaf"
          initial={{ x: "100%", opacity: 0.8 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-contain sm:object-cover object-center"
        />
      </AnimatePresence>
    </div>
  );
}

function KavuriVillasPage() {
  return (
    <>
      <section className="relative min-h-[82svh] overflow-hidden bg-brand-navy">
        <img
          src="/projects/kavuri/hero.png"
          alt="Kavuri's Lemon Leaf layout"
          width={1088}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
        <div className="page-wrap relative flex min-h-[82svh] items-center py-20">
          <div className="max-w-3xl text-primary-foreground">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              <MapPin className="h-4 w-4" />
              Mankhal, Tukkuguda
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">
              Kavuri's
              <br />
              Lemon Leaf
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">
              A private world of expansive residential plots, crafted for the future of South
              Hyderabad living.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="orange" size="lg">
                <Link to="/contact">
                  Enquire now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <a href="mailto:southhyderabadproperties@gmail.com?subject=Kavuri's%20Lemon%20Leaf%20Brochure">
                  <ArrowDownToLine /> Request brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-9 text-primary-foreground">
        <div className="page-wrap grid grid-cols-2 gap-8 lg:grid-cols-4">
          {facts.map((f) => (
            <FactCard key={f.small} fact={f} />
          ))}
        </div>
      </section>
      <section className="pt-20 pb-16 sm:py-32 bg-prestige-cream relative border-y border-prestige-gold/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-prestige-gold/5 rounded-l-full blur-3xl mix-blend-multiply opacity-50" />
        <div className="page-wrap grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr] relative z-10">
          <div className="pr-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-prestige-gold" />
              <p className="font-prestige-body text-[10px] font-bold uppercase tracking-[0.32em] text-prestige-green">
                Future City corridor
              </p>
            </div>
            <h2 className="mt-7 font-prestige text-4xl font-semibold leading-tight text-prestige-deep sm:text-5xl">
              A landmark address with room for every ambition.
            </h2>
            <p className="mt-6 font-prestige-body text-lg font-light leading-8 text-prestige-green">
              Set across 20 acres at Mankhal, Kavuri's Lemon Leaf brings together 208 exclusive
              premium units with the convenience of ORR Exit 14 and the promise of the Future City
              corridor.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-prestige-gold/20 bg-prestige-gold/20 sm:grid-cols-2">
              {[
                ["3 BHK", "3,035 Sq.ft."],
                ["4 BHK", "4,035 Sq.ft."],
                ["Plot sizes", "267 & 300 Sq. Yards"],
                ["Largest plot", "400 Sq. Yards"],
              ].map(([title, value]) => (
                <div
                  className="bg-prestige-cream p-6 text-center sm:text-left transition-colors hover:bg-white"
                  key={title}
                >
                  <p className="font-prestige-body text-[10px] font-bold uppercase tracking-[0.2em] text-prestige-gold">
                    {title}
                  </p>
                  <p className="mt-2 font-prestige text-2xl font-medium text-prestige-deep">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <span className="pointer-events-none absolute -inset-3 hidden border border-prestige-gold/30 lg:block opacity-70" />
            <div className="image-card aspect-[4/3] sm:aspect-[16/10] max-h-[600px] bg-prestige-deep/5 overflow-hidden">
              <GallerySlideshow />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16 sm:py-28 bg-background border-y border-border">
        <div className="page-wrap">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="eyebrow text-brand-orange">Premium Features</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              Project Highlights
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "20 Acres Premium Open Plot Layout",
              "208 Exclusive Open Plots",
              "Plot Sizes: 220–550+ Sq. Yards",
              "Built-up Area: 2,640–5,500+ Sq. Ft.",
              "Avenue Plantation",
              "25+ Lifestyle Amenities",
              "Clear Title & HMDA Approved Layout",
              "Bank Loan Assistance",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-brand-soft/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-orange/30"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-orange" />
                <p className="font-semibold leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 sm:p-12 shadow-2xl">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--brand-orange)_1px,transparent_1px),linear-gradient(90deg,var(--brand-orange)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="relative grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
                    <Wallet className="h-5 w-5" /> Starting Price
                  </p>
                  <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
                    ₹41.99 L
                  </p>
                </div>
                <div className="sm:border-l sm:border-white/10 sm:pl-8">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
                    <Map className="h-5 w-5" /> Plot Sizes
                  </p>
                  <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
                    197 – 1,300 Sq.Yds.
                  </p>
                  <p className="mt-2 text-sm text-white/60 font-medium uppercase tracking-wider">
                    HMDA Approved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-navy text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('@/assets/clubhouse.jpg')] opacity-[0.03] mix-blend-overlay bg-cover bg-center" />
        <div className="page-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-brand-orange">Premium Infrastructure</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">
              Project Amenities
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Carefully planned infrastructure for a seamless, secure, and sustainable living
              experience.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, label, img }) => (
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-brand-orange/20 hover:border-brand-orange/30"
                key={label}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img}
                    alt={label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 right-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy border border-white/10 text-brand-orange shadow-xl transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-brand-navy">
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="mt-4 font-display text-xl font-bold leading-tight text-white pr-4">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
