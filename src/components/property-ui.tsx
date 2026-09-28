import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import autumnVilla from "@/assets/autumn-villa.jpg";
import clubhouse from "@/assets/clubhouse.jpg";
import openPlots from "@/assets/open-plots.jpg";

export const properties = [
  { title: "Autumn Luxury Villas Maheshwaram", location: "Thummaloor · ORR Exit 14", type: "3 & 4 BHK Villas", image: autumnVilla, href: "/projects/autumn-villas-maheshwaram" as const },
  { title: "Anvay Avillas", location: "Kongara Kalan", type: "3 & 4 BHK Villas", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/anvay-avillas-kongara-kalan" as const },
  { title: "Vertex Florenza", location: "Tukkuguda", type: "4 & 5 BHK Villas", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/vertex-florenza-tukkuguda" as const },
  { title: "Vertex Viva Calista", location: "Tukkuguda", type: "3, 4 & 5 BHK Villas", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/vertex-viva-calista-tukkuguda" as const },
  { title: "Riddhi Laxman County", location: "Tukkuguda", type: "4 BHK Triplex", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/riddhi-laxman-county-tukkuguda" as const },
  { title: "Kavuri Hills Lemon Leaf", location: "Mankhal", type: "Plots", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/kavuri-hills-lemon-leaf-tukkuguda" as const },
  { title: "Kavuri Forest Nest", location: "Immaguda", type: "3 to 4.5 BHK Villas", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", href: "/projects/kavuri-forest-nest-immaguda" as const },
  { title: "Future City Open Plots", location: "Maheshwaram Corridor", type: "Premium Plots", image: openPlots, href: "/contact" as const },
];

export function VerticalPropertyCard({ property, priority = false }: { property: (typeof properties)[number]; priority?: boolean }) {
  return (
    <a href={property.href} className="group block">
      <div className="image-card relative aspect-[9/16]">
        <img src={property.image} alt={property.title} width={1088} height={1920} loading={priority ? "eager" : "lazy"} />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy via-brand-navy/75 to-transparent px-5 pb-5 pt-24 text-primary-foreground">
          <p className="flex items-center gap-1 text-xs font-semibold text-primary-foreground/75"><MapPin className="h-3.5 w-3.5 text-brand-orange" />{property.location}</p>
          <h3 className="mt-2 font-display text-xl font-extrabold">{property.title}</h3>
          <div className="mt-3 flex items-center justify-between text-sm"><span>{property.type}</span><span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange"><ArrowRight className="h-4 w-4" /></span></div>
        </div>
      </div>
    </a>
  );
}

export function PropertyCarousel() {
  const autoplayRef = useRef(Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [autoplayRef.current]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) autoplayRef.current.stop();
  }, []);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-5">
          {properties.map((property, index) => (
            <div className="min-w-0 flex-[0_0_86%] pl-5 sm:flex-[0_0_46%] lg:flex-[0_0_31%]" key={property.title}>
              <VerticalPropertyCard property={property} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-end gap-2">
        <Button variant="outline" size="icon" aria-label="Previous property" onClick={prev}><ChevronLeft /></Button>
        <Button variant="brand" size="icon" aria-label="Next property" onClick={next}><ChevronRight /></Button>
      </div>
    </div>
  );
}
