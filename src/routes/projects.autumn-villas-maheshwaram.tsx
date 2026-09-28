import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Baby, BedDouble, BriefcaseBusiness, Dumbbell, Flower2, MapPin, PartyPopper, Waves } from "lucide-react";

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

function AutumnVillasPage() {
  return <>
    <section className="relative min-h-[82svh] overflow-hidden bg-brand-navy"><img src={villaImage} alt="Autumn Luxury Villas contemporary duplex home" width={1088} height={1920} className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/70 to-transparent"/><div className="page-wrap relative flex min-h-[82svh] items-center py-20"><div className="max-w-3xl text-primary-foreground"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange"><MapPin className="h-4 w-4"/>Maheshwaram · ORR Exit 14</p><h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">Autumn<br/>Luxury Villas</h1><p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">A private world of expansive duplex villas, crafted for the future of South Hyderabad living.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="orange" size="lg"><Link to="/contact">Enquire now <ArrowRight/></Link></Button><Button asChild variant="light" size="lg"><a href="mailto:southhyderabadproperties@gmail.com?subject=Autumn%20Villas%20Brochure"><ArrowDownToLine/> Request brochure</a></Button></div></div></div></section>
    <section className="bg-primary py-9 text-primary-foreground"><div className="page-wrap grid grid-cols-2 gap-8 lg:grid-cols-4">{facts.map(f=><div key={f.small}><p className="font-display text-3xl font-extrabold text-brand-orange sm:text-4xl">{f.big}</p><p className="mt-1 text-sm text-primary-foreground/70">{f.small}</p></div>)}</div></section>
    <section className="section-pad"><div className="page-wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="eyebrow">Future City corridor</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">A landmark address with room for every ambition.</h2><p className="mt-6 leading-8 text-muted-foreground">Set across 23 acres at Maheshwaram, Autumn brings together 182 exclusive premium units with the convenience of ORR Exit 14 and the promise of the Future City corridor.</p><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">{[["3 BHK","3,035 Sq.ft."],["4 BHK","4,035 Sq.ft."],["Plot sizes","267 & 300 Sq. Yards"],["Largest plot","400 Sq. Yards"]].map(([title,value])=><div className="bg-background p-6" key={title}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</p><p className="mt-2 font-display text-xl font-extrabold">{value}</p></div>)}</div></div><div className="image-card aspect-[9/16] max-h-[720px]"><img src={clubhouseImage} alt="Autumn Villas clubhouse and swimming pool" width={1088} height={1920} loading="lazy"/></div></div></section>
    <section className="section-pad bg-background border-y border-border">
      <div className="page-wrap">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Project Highlights</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-lg text-muted-foreground list-disc pl-5">
          <li>23 Acres Premium Villa Community</li>
          <li>Only 182 Exclusive Villas</li>
          <li>Plot Sizes: 220–550+ Sq. Yards</li>
          <li>Built-up Area: 2,640–5,500+ Sq. Ft.</li>
          <li>30,000 Sq. Ft. Clubhouse</li>
          <li>25+ Lifestyle Amenities</li>
          <li>Spacious & Premium Villa Designs</li>
          <li>Bank Loan Assistance</li>
        </ul>
        <div className="mt-12 p-8 bg-brand-soft rounded-lg inline-block border border-brand-orange/20">
          <p className="text-2xl font-bold">💰 Starting Price: <span className="text-brand-orange">₹1.85 Cr</span></p>
          <p className="mt-2 text-xl font-bold">📈 Launch Price: ₹6,999/Sq. Ft. <span className="text-sm font-normal text-muted-foreground">– Negotiable</span></p>
        </div>
      </div>
    </section>
    <section className="section-pad bg-brand-soft"><div className="page-wrap"><div className="max-w-2xl"><p className="eyebrow">Everyday, elevated</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">A 30,000 SFT clubhouse at the heart of it all.</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{amenities.map(({icon:Icon,label})=><div className="bg-background p-7" key={label}><Icon className="h-7 w-7 text-brand-orange"/><p className="mt-5 font-display font-bold leading-6">{label}</p></div>)}</div></div></section>
    <CtaBand />
  </>;
}
