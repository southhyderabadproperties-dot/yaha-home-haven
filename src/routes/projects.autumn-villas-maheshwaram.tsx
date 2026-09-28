import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Baby, BedDouble, BriefcaseBusiness, Dumbbell, Flower2, MapPin, PartyPopper, Waves, CheckCircle2, TrendingUp, Wallet } from "lucide-react";
import SlotCounter from "react-slot-counter";
import { useRef } from "react";
import { useInView } from "framer-motion";

import villaImage from "@/assets/autumn-villa.jpg";
import clubhouseImage from "@/assets/clubhouse.jpg";
import { CtaBand } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/autumn-villas-maheshwaram")({
  head: () => ({ meta: [
    { title: "Autumn Luxury Villas, Maheshwaram | South Hyderabad Properties" },
    { name: "description", content: "Explore Autumn Luxury Villas at Maheshwaram, ORR Exit 14: 3 & 4 BHK duplex villas across 23 acres with a 30,000 SFT clubhouse." },
    { property: "og:title", content: "Autumn Luxury Villas — Maheshwaram" },
    { property: "og:description", content: "182 premium duplex villas in South Hyderabad's Future City corridor." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AutumnVillasPage,
});

const facts = [{big:"23",small:"Acres"},{big:"182",small:"Exclusive units"},{big:"3 & 4",small:"BHK duplex villas"},{big:"30,000",small:"SFT clubhouse"}];
const amenities = [{icon:Waves,label:"Swimming pool & changing rooms"},{icon:PartyPopper,label:"Party lawn"},{icon:Dumbbell,label:"Badminton & basketball courts"},{icon:Flower2,label:"Meditation & yoga room"},{icon:BriefcaseBusiness,label:"Work lounges"},{icon:BedDouble,label:"Guest rooms"},{icon:Baby,label:"Children’s play area"}];

function FactCard({ fact }: { fact: { big: string; small: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-extrabold text-brand-orange sm:text-4xl flex items-center justify-start">
        <SlotCounter value={isInView ? fact.big : "0"} animateUnchanged={false} />
      </p>
      <p className="mt-1 text-sm text-primary-foreground/70">{fact.small}</p>
    </div>
  );
}

function AutumnVillasPage() {
  return <>
    <section className="relative min-h-[82svh] overflow-hidden bg-brand-navy"><img src={villaImage} alt="Autumn Luxury Villas contemporary duplex home" width={1088} height={1920} className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/70 to-transparent"/><div className="page-wrap relative flex min-h-[82svh] items-center py-20"><div className="max-w-3xl text-primary-foreground"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange"><MapPin className="h-4 w-4"/>Maheshwaram · ORR Exit 14</p><h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">Autumn<br/>Luxury Villas</h1><p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">A private world of expansive duplex villas, crafted for the future of South Hyderabad living.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="orange" size="lg"><Link to="/contact">Enquire now <ArrowRight/></Link></Button><Button asChild variant="light" size="lg"><a href="mailto:southhyderabadproperties@gmail.com?subject=Autumn%20Villas%20Brochure"><ArrowDownToLine/> Request brochure</a></Button></div></div></div></section>
    <section className="bg-primary py-9 text-primary-foreground"><div className="page-wrap grid grid-cols-2 gap-8 lg:grid-cols-4">{facts.map(f=><FactCard key={f.small} fact={f} />)}</div></section>
    <section className="section-pad"><div className="page-wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="eyebrow">Future City corridor</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">A landmark address with room for every ambition.</h2><p className="mt-6 leading-8 text-muted-foreground">Set across 23 acres at Maheshwaram, Autumn brings together 182 exclusive premium units with the convenience of ORR Exit 14 and the promise of the Future City corridor.</p><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">{[["3 BHK","3,035 Sq.ft."],["4 BHK","4,035 Sq.ft."],["Plot sizes","267 & 300 Sq. Yards"],["Largest plot","400 Sq. Yards"]].map(([title,value])=><div className="bg-background p-6" key={title}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</p><p className="mt-2 font-display text-xl font-extrabold">{value}</p></div>)}</div></div><div className="image-card aspect-[9/16] max-h-[720px]"><img src={clubhouseImage} alt="Autumn Villas clubhouse and swimming pool" width={1088} height={1920} loading="lazy"/></div></div></section>
    
    <section className="section-pad bg-background border-y border-border">
      <div className="page-wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow text-brand-orange">Premium Features</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Project Highlights</h2>
        </div>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "23 Acres Premium Villa Community",
            "Only 182 Exclusive Villas",
            "Plot Sizes: 220–550+ Sq. Yards",
            "Built-up Area: 2,640–5,500+ Sq. Ft.",
            "30,000 Sq. Ft. Clubhouse",
            "25+ Lifestyle Amenities",
            "Spacious & Premium Villa Designs",
            "Bank Loan Assistance"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-border/50 bg-brand-soft/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-orange/30">
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
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange"><Wallet className="h-5 w-5" /> Starting Price</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">₹1.85 Cr</p>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-8">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange"><TrendingUp className="h-5 w-5" /> Launch Price</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">₹6,999<span className="text-xl text-white/70">/Sq.Ft.</span></p>
                <p className="mt-2 text-sm text-white/60 font-medium uppercase tracking-wider">Negotiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-pad bg-brand-soft"><div className="page-wrap"><div className="max-w-2xl"><p className="eyebrow">Everyday, elevated</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">A 30,000 SFT clubhouse at the heart of it all.</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{amenities.map(({icon:Icon,label})=><div className="bg-background p-7" key={label}><Icon className="h-7 w-7 text-brand-orange"/><p className="mt-5 font-display font-bold leading-6">{label}</p></div>)}</div></div></section>
    <CtaBand />
  </>;
}
