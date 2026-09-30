import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Baby, BedDouble, BriefcaseBusiness, Dumbbell, Flower2, MapPin, PartyPopper, Waves, CheckCircle2, TrendingUp, Wallet, Maximize } from "lucide-react";
import SlotCounter from "react-slot-counter";
import { useRef } from "react";
import { useInView } from "framer-motion";


import clubhouseImage from "@/assets/clubhouse.jpg";
import { CtaBand } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/riddhi-laxman-county-tukkuguda")({
  head: () => ({ meta: [
    { title: "Riddhi Laxman County | South Hyderabad Properties" },
    { name: "description", content: "Explore Riddhi Laxman County at Maheshwaram, ORR Exit 14: 4 BHK triplex villas across Premium acres with a 30,000 SFT clubhouse." },
    { property: "og:title", content: "Riddhi Laxman County €” Maheshwaram" },
    { property: "og:description", content: "Exclusive premium duplex villas in South Hyderabad's Future City corridor." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: RiddhiVillasPage,
});

const facts = [{big:"6.25",small:"Acres"},{big:"58",small:"Exclusive units"},{big:"3 & 4",small:"BHK duplex villas"},{big:"30,000",small:"SFT clubhouse"}];
const amenities = [
  { icon: Waves, label: "Swimming pool & changing rooms", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop" },
  { icon: PartyPopper, label: "Party hall", img: "/party-hall.jpg" },
  { icon: Dumbbell, label: "Badminton & basketball courts", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" },
  { icon: Flower2, label: "Meditation & yoga room", img: "/yoga-room.png" },
  { icon: BriefcaseBusiness, label: "Work lounges", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
  { icon: BedDouble, label: "Guest rooms", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop" },
  { icon: Baby, label: "Children’s play area", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop" }
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

function RiddhiVillasPage() {
  return <>
    <section className="relative min-h-[82svh] overflow-hidden bg-brand-navy"><img src="https://im.proptiger.com/1/3136686/6/laxman-county-elevation-129948866.jpeg" alt="Riddhi Laxman County contemporary duplex home" width={1088} height={1920} className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/70 to-transparent"/><div className="page-wrap relative flex min-h-[82svh] items-center py-20"><div className="max-w-3xl text-primary-foreground"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange"><MapPin className="h-4 w-4"/>Tukkuguda, Mankhal</p><h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">Riddhi<br/>Luxury Villas</h1><p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">A private world of expansive duplex villas, crafted for the future of South Hyderabad living.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="orange" size="lg"><Link to="/contact">Enquire now <ArrowRight/></Link></Button><Button asChild variant="light" size="lg"><a href="mailto:southhyderabadproperties@gmail.com?subject=Riddhi%20Villas%20Brochure"><ArrowDownToLine/> Request brochure</a></Button></div></div></div></section>
    <section className="bg-primary py-9 text-primary-foreground"><div className="page-wrap grid grid-cols-2 gap-8 lg:grid-cols-4">{facts.map(f=><FactCard key={f.small} fact={f} />)}</div></section>
    <section className="section-pad"><div className="page-wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="eyebrow">Future City corridor</p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">A landmark address with room for every ambition.</h2><p className="mt-6 leading-8 text-muted-foreground">Set across 6.25 acres at Tukkuguda, Riddhi Laxman County brings together 58 exclusive premium units with the convenience of ORR Exit 14 and the promise of the Future City corridor.</p><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">{[["3 BHK","3,035 Sq.ft."],["4 BHK","4,035 Sq.ft."],["Plot sizes","267 & 300 Sq. Yards"],["Largest plot","400 Sq. Yards"]].map(([title,value])=><div className="bg-background p-6" key={title}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</p><p className="mt-2 font-display text-xl font-extrabold">{value}</p></div>)}</div></div><div className="image-card aspect-[9/16] max-h-[720px]"><img src={clubhouseImage} alt="Riddhi Villas clubhouse and swimming pool" width={1088} height={1920} loading="lazy"/></div></div></section>
    
    <section className="section-pad bg-background border-y border-border">
      <div className="page-wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow text-brand-orange">Premium Features</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Project Highlights</h2>
        </div>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Premium Acres Premium Villa Community",
            "Only Exclusive Exclusive Villas",
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
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">₹3.62 Cr</p>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-8">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange"><Maximize className="h-5 w-5" /> Villa Sizes</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">3,516 – 4,635 Sq.Ft.</p>
                <p className="mt-2 text-sm text-white/60 font-medium uppercase tracking-wider">HMDA Approved</p>
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
          <p className="eyebrow text-brand-orange">Everyday, elevated</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">A 30,000 SFT clubhouse<br/>at the heart of it all.</h2>
          <p className="mt-6 text-lg text-primary-foreground/70">Experience world-class amenities designed to bring resort-style luxury to your daily life.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({icon:Icon,label,img})=> (
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-brand-orange/20 hover:border-brand-orange/30" key={label}>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={img} alt={label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-8 right-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy border border-white/10 text-brand-orange shadow-xl transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-brand-navy">
                  <Icon className="h-8 w-8"/>
                </div>
                <p className="mt-4 font-display text-xl font-bold leading-tight text-white pr-4">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaBand />
  </>;
}

