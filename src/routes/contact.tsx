import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact South Hyderabad Properties" }, { name: "description", content: "Speak with South Hyderabad Properties about luxury villas, open plots and land opportunities. Call +91 96469 52999." },
  { property: "og:title", content: "Contact South Hyderabad Properties" }, { property: "og:description", content: "Start a conversation about your property goals in South Hyderabad." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    
    const text = `Hello South Hyderabad Properties!\nI have an enquiry:\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919646952999?text=${encodedText}`, "_blank");
    setSent(true);
  };

  return <>
    <PageIntro eyebrow="Let's talk property" title="Tell us what you're looking for.">
      <p>Share your goals and our team will help you explore the right opportunities across South Hyderabad.</p>
    </PageIntro>
    <section className="section-pad">
      <div className="page-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact details</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">A helpful answer is just a conversation away.</h2>
          <div className="mt-8 grid gap-5">
            {[
              {icon:Phone,label:"Call us",value:"+91 96469 52999",href:"tel:+919646952999"},
              {icon:Mail,label:"Email us",value:"southhyderabadproperties@gmail.com",href:"mailto:southhyderabadproperties@gmail.com"},
              {icon:MapPin,label:"Our focus",value:"Shamshabad · Maheshwaram · South Hyderabad"},
              {icon:Clock3,label:"Response",value:"We aim to respond within one business day"}
            ].map(({icon:Icon,label,value,href})=>
              <div className="flex gap-4" key={label}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-soft text-primary"><Icon className="h-5 w-5"/></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                  {href?<a href={href} className="mt-1 block break-all font-semibold text-foreground">{value}</a>:<p className="mt-1 font-semibold text-foreground">{value}</p>}
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 flex gap-3">
            <a href="https://instagram.com/yahaproperties" aria-label="Instagram" className="social-button border-border text-primary" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="https://www.facebook.com/share/1E9URqKEay/?mibextid=wwXIfr" aria-label="Facebook" className="social-button border-border text-primary" target="_blank" rel="noreferrer"><Facebook/></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-md border border-border bg-background p-6 shadow-xl sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">Name<Input name="name" required placeholder="Your name"/></label>
            <label className="grid gap-2 text-sm font-bold">Email<Input name="email" required type="email" placeholder="you@example.com"/></label>
            <label className="grid gap-2 text-sm font-bold sm:col-span-2">Phone number<Input name="phone" required type="tel" placeholder="+91"/></label>
            <label className="grid gap-2 text-sm font-bold sm:col-span-2">Message<Textarea name="message" required rows={6} placeholder="Tell us about the property or location you're interested in"/></label>
          </div>
          <Button type="submit" variant="brand" size="lg" className="mt-6 w-full"><Send/> Send enquiry via WhatsApp</Button>
          {sent&&<p role="status" className="mt-4 rounded-md bg-brand-soft p-4 text-center text-sm font-semibold text-primary">Opening WhatsApp...</p>}
        </form>
      </div>
    </section>
    <section className="bg-brand-soft py-16">
      <div className="page-wrap">
        <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-md border border-primary/15 bg-primary/10 text-center">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px]"/>
          <div className="relative px-6">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-orange text-brand-orange-foreground shadow-brand"><MapPin/></span>
            <h2 className="mt-5 font-display text-2xl font-extrabold">South Hyderabad growth corridor</h2>
            <p className="mt-2 text-muted-foreground">Shamshabad · Maheshwaram · Thummaloor · ORR Exit 14</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}
