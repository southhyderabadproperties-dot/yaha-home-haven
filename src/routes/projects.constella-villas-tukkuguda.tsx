import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Wallet,
  Maximize,
  Dumbbell,
  Waves,
  Wind,
  ShieldCheck,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useInView, AnimatePresence, motion } from "framer-motion";
// fixed

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";

import bannerImg from "@/../public/projects/constella/image-2.webp";

export const Route = createFileRoute("/projects/constella-villas-tukkuguda")({
  head: () => ({
    meta: [
      { title: "Constella by Speed Infra | South Hyderabad Properties" },
      {
        name: "description",
        content:
          "Explore Constella by Speed Infra at Tukkuguda, ORR Exit 14: Ultra Luxury 4 & 5 BHK Courtyard Villas starting from ₹4.88 Cr.",
      },
      { property: "og:title", content: "Constella by Speed Infra | Tukkuguda" },
      {
        property: "og:description",
        content:
          "Ultra Luxury Villas for Sale in Hyderabad | 4 & 5 BHK Courtyard Villas in a 27-acre gated community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConstellaVillasPage,
});

const GALLERY_IMAGES = [
  "/projects/constella/image-1.webp",
  "/projects/constella/image-3.webp",
  "/projects/constella/gallery-1.png",
  "/projects/constella/gallery-2.png",
  "/projects/constella/gallery-3.png",
  "/projects/constella/gallery-4.png",
];

function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || GALLERY_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div ref={ref} className="relative h-full w-full bg-brand-navy">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={currentIndex}
          src={GALLERY_IMAGES[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          loading={currentIndex === 0 ? "eager" : "lazy"}
          alt="Constella Villas layout"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-brand-orange" : "w-2 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const facts = [
  { small: "Location", large: "Tukkuguda", desc: "1 min from Nehru ORR Exit 14" },
  { small: "Land area", large: "27 Acres", desc: "Premium gated community" },
  { small: "Configuration", large: "4 & 5 BHK", desc: "Courtyard Villas" },
  { small: "Status", large: "Pre-launch", desc: "Enquire for availability" },
];

function FactCard({ fact }: { fact: { small: string; large: string; desc: string } }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
        {fact.small}
      </p>
      <p className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{fact.large}</p>
      <p className="mt-2 text-sm text-brand-orange">{fact.desc}</p>
    </div>
  );
}

const amenities = [
  {
    icon: Dumbbell,
    label: "25,000+ sq ft Clubhouse",
    img: "https://res.cloudinary.com/jll-global-gdim/image/upload/t_ip-resi-v2-property-detail-web/IN/Horizon/Resi/Prod/clubhouse.png",
  },
  {
    icon: Waves,
    label: "Private Courtyards",
    img: "https://res.cloudinary.com/jll-global-gdim/image/upload/t_ip-resi-v2-property-detail-web/IN/Horizon/Resi/Prod/pool.png",
  },
  {
    icon: Wind,
    label: "70% Open Green Cover",
    img: "https://res.cloudinary.com/jll-global-gdim/image/upload/t_ip-resi-v2-property-detail-web/IN/Horizon/Resi/Prod/park.png",
  },
  {
    icon: ShieldCheck,
    label: "Gated Security",
    img: "https://res.cloudinary.com/jll-global-gdim/image/upload/t_ip-resi-v2-property-detail-web/IN/Horizon/Resi/Prod/security.png",
  },
];

function ConstellaVillasPage() {
  return (
    <>
      <section className="relative min-h-[82svh] overflow-hidden bg-brand-navy">
        <img
          src={bannerImg}
          alt="Constella Villas courtyard home"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
        <div className="page-wrap relative flex min-h-[82svh] items-center py-20">
          <div className="max-w-3xl text-primary-foreground">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              <MapPin className="h-4 w-4" /> Near RGI Airport, Tukkuguda
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">
              Constella by
              <br />
              Speed Infra
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">
              A 27-acre gated community offering ultra-luxury courtyard villas, just 1 minute away
              from Nehru ORR Exit 14. Designed for those who live remarkably.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="orange" size="lg">
                <Link to="/contact">
                  Enquire now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <a href="mailto:southhyderabadproperties@gmail.com?subject=Constella%20Villas%20Brochure">
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
                Tukkuguda corridor
              </p>
            </div>
            <h2 className="mt-7 font-prestige text-4xl font-semibold leading-tight text-prestige-deep sm:text-5xl">
              Live the Spirit of Openness Within.
            </h2>
            <p className="mt-6 font-prestige-body text-lg font-light leading-8 text-prestige-green">
              Constella by Speed Infra is a 27-acre, zoning-protected enclave offering ultra-luxury
              villas in Hyderabad for discerning homeowners. This concept-led master plan revives
              courtyard living through wider-façade, landscape-oriented villas to maximise light,
              airflow and garden views.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-prestige-gold/20 bg-prestige-gold/20 sm:grid-cols-2">
              {[
                ["Area", "27 Acres"],
                ["Villas", "4 & 5 BHK Courtyard"],
                ["Location", "Tukkuguda"],
                ["Starting Price", "₹4.88 Cr"],
              ].map(([title, value]) => (
                <div className="bg-prestige-cream p-6 transition-colors hover:bg-white" key={title}>
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
              "27-Acre Award Winning Masterplan",
              "Ultra Luxury G+2 Courtyard Villas",
              "Expansive Landscape Oriented Villas",
              "70% Open Green Cover",
              "Height-restricted Low-rise Skyline",
              "25,000+ Sq. Ft. Clubhouse",
              "120 ft HMDA Master Plan Approach",
              "Just 1 min from Nehru ORR Exit 14",
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
                    ₹4.88 Cr
                  </p>
                </div>
                <div className="sm:border-l sm:border-white/10 sm:pl-8">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
                    <Maximize className="h-5 w-5" /> Villa Layout
                  </p>
                  <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
                    4 & 5 BHK
                  </p>
                  <p className="mt-2 text-sm text-white/60 font-medium uppercase tracking-wider">
                    Courtyard Villas
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
            <p className="eyebrow text-brand-orange">A Quiet Galaxy of</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">
              Only the Exceptional
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Constella’s vision, inspired by tradition, is rooted in space, spatial freedom, open
              skies, and low-density living that restores balance to urban life.
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
