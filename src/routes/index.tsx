import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, LandPlot, MapPin, Search, ShieldCheck, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

import { AnimatedPropertyHero } from "@/components/animated-property-hero";
import { PropertyCarousel } from "@/components/property-ui";
import { Button } from "@/components/ui/button";
import openPlotsImage from "@/assets/open-plots.jpg";
import landDevelopmentImage from "@/assets/south-hyderabad-hero.jpg";
import luxuryPropertyImage from "@/assets/autumn-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "South Hyderabad Properties | Plots, Land & Luxury Villas" },
    { name: "description", content: "Discover verified open plots, land developments and luxury villas in Shamshabad, Maheshwaram and South Hyderabad." },
    { property: "og:title", content: "South Hyderabad Properties" },
    { property: "og:description", content: "Premium property opportunities across South Hyderabad's fastest-growing corridors." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Shamshabad");
  const [type, setType] = useState("Luxury Villas");
  const go = () => navigate({ to: "/contact", search: { location, type } as never });

  return (
    <div>
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
        <AnimatedPropertyHero />

      </section>

      <section className="relative z-10 -mt-1 bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">
        <form onSubmit={(event) => { event.preventDefault(); go(); }} className="page-wrap grid gap-4 sm:w-full sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <label className="grid gap-2 text-sm font-bold text-foreground">Where are you looking?<select value={location} onChange={(e) => setLocation(e.target.value)} className="h-12 rounded-md border border-input bg-background px-4 font-normal"><option>Shamshabad</option><option>Maheshwaram</option><option>Thummaloor</option></select></label>
          <label className="grid gap-2 text-sm font-bold text-foreground">Property type<select value={type} onChange={(e) => setType(e.target.value)} className="h-12 rounded-md border border-input bg-background px-4 font-normal"><option>Luxury Villas</option><option>Open Plots</option><option>Land Development</option></select></label>
          <Button type="submit" variant="brand" size="lg" className="h-12"><Search /> Find properties</Button>
        </form>
      </section>

      <section className="section-pad overflow-hidden bg-prestige-cream">
        <div className="page-wrap grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-32 lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-prestige-gold" />
              <p className="font-prestige-body text-[10px] font-bold uppercase tracking-[0.32em] text-prestige-green">Purposeful real estate</p>
            </div>
            <h2 className="mt-7 font-prestige text-5xl font-semibold leading-[0.95] text-prestige-deep sm:text-6xl lg:text-7xl">
              Local intelligence<br />
              <em className="font-normal">for every kind of move.</em>
            </h2>
            <p className="mt-8 max-w-md font-prestige-body text-lg font-light leading-8 text-prestige-green">We bring documentation-first advice and a clear view of South Hyderabad’s evolving infrastructure to every property conversation.</p>
            <Button asChild variant="ghost" className="mt-8 h-auto gap-5 p-0 font-prestige-body text-xs font-bold uppercase tracking-[0.14em] text-prestige-deep hover:bg-transparent hover:text-prestige-green">
              <Link to="/about">
                <span className="border-b border-prestige-gold pb-1">View our philosophy</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-prestige-gold transition-transform duration-300 group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-7 lg:col-span-7">
            {[
              { numeral: "I", kicker: "Foundations", title: "Open plots", text: "Well-connected opportunities across emerging residential corridors.", image: openPlotsImage, offset: "pt-14 sm:pt-24" },
              { numeral: "II", kicker: "Transformation", title: "Land development", text: "Growth-focused land with clear documentation and long-term perspective.", image: landDevelopmentImage, offset: "" },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className={`group min-w-0 ${item.offset}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
              >
                <div className="relative">
                  <span className="pointer-events-none absolute -inset-2 border border-prestige-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  <div className="aspect-[3/4] overflow-hidden bg-prestige-deep/10">
                    <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                </div>
                <p className="mt-5 font-prestige text-sm text-prestige-gold">{item.numeral}. {item.kicker}</p>
                <h3 className="mt-1 font-prestige text-2xl font-semibold text-prestige-deep sm:text-3xl">{item.title}</h3>
                <p className="mt-2 hidden font-prestige-body text-sm leading-6 text-prestige-green sm:block">{item.text}</p>
              </motion.article>
            ))}

            <motion.article
              className="group col-span-2 mx-0 sm:mx-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <span className="pointer-events-none absolute -inset-3 border border-prestige-gold/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="aspect-[16/9] overflow-hidden bg-prestige-deep">
                  <img src={luxuryPropertyImage} alt="" className="h-full w-full object-cover object-[center_58%] transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between gap-5">
                <div>
                  <p className="font-prestige text-sm text-prestige-gold">III. Legacy</p>
                  <h3 className="mt-1 font-prestige text-3xl font-semibold text-prestige-deep">Luxury properties</h3>
                  <p className="mt-2 max-w-md font-prestige-body text-sm leading-6 text-prestige-green">Contemporary villa living, designed around space and community.</p>
                </div>
                <Link to="/projects/autumn-villas" className="hidden shrink-0 border-b border-prestige-gold pb-1 font-prestige-body text-[10px] font-bold uppercase tracking-[0.16em] text-prestige-green transition-colors hover:text-prestige-deep sm:block">Discover more</Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-soft">
        <div className="page-wrap"><div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Featured properties</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">See what’s taking shape.</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">Selected opportunities across the region’s most promising growth pockets.</p></div><PropertyCarousel /></div>
      </section>

      <section className="overflow-hidden border-y border-border bg-background py-5"><div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-[0.15em] text-muted-foreground">{Array.from({length: 2}).map((_,i)=><div className="flex gap-10" key={i}><span>Shamshabad</span><span className="text-brand-orange">✦</span><span>Maheshwaram</span><span className="text-brand-orange">✦</span><span>Future City</span><span className="text-brand-orange">✦</span><span>ORR Exit 14</span><span className="text-brand-orange">✦</span></div>)}</div></section>

      <section className="section-pad"><div className="page-wrap grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">Confidence at every step</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Property advice without the pressure.</h2><p className="mt-6 leading-8 text-muted-foreground">Clear information, responsive guidance and a modern approach to discovering the right property. We help you understand the opportunity before you make the decision.</p><Button asChild variant="brand" size="lg" className="mt-8"><Link to="/about">Why work with us <ArrowRight /></Link></Button></div><div className="grid grid-cols-2 gap-4"><div className="rounded-md bg-primary p-7 text-primary-foreground"><ShieldCheck className="h-8 w-8 text-brand-orange"/><p className="mt-10 font-display text-2xl font-extrabold">Verified opportunities</p><p className="mt-2 text-sm text-primary-foreground/70">Clarity-first property discovery.</p></div><div className="mt-10 rounded-md bg-brand-orange p-7 text-brand-orange-foreground"><MapPin className="h-8 w-8"/><p className="mt-10 font-display text-2xl font-extrabold">Local focus</p><p className="mt-2 text-sm text-brand-orange-foreground/75">Deep South Hyderabad context.</p></div></div></div></section>
    </div>
  );
}
