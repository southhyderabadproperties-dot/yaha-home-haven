import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, LandPlot, MapPin, Search, ShieldCheck, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

import { AnimatedPropertyHero } from "@/components/animated-property-hero";
import { PropertyCarousel } from "@/components/property-ui";
import { Button } from "@/components/ui/button";

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

      <section className="section-pad">
        <div className="page-wrap">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow">Purposeful real estate</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Local intelligence for every kind of move.</h2></div><p className="leading-7 text-muted-foreground">We bring documentation-first advice and a clear view of South Hyderabad’s evolving infrastructure to every property conversation.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {[{icon:LandPlot,title:"Open plots",text:"Well-connected opportunities across emerging residential corridors."},{icon:Building2,title:"Land development",text:"Growth-focused land with clear documentation and long-term perspective."},{icon:Home,title:"Luxury properties",text:"Contemporary villa living, designed around space and community."}].map(({icon:Icon,title,text}) => <div key={title} className="bg-background p-8"><Icon className="h-8 w-8 text-brand-orange"/><h3 className="mt-6 font-display text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>)}
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
