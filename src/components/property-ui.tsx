import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import autumnVilla from "@/assets/autumn-villa.jpg";
import clubhouse from "@/assets/clubhouse.jpg";
import openPlots from "@/assets/open-plots.jpg";

export const properties = [
  { title: "Autumn Luxury Villas", location: "Thummaloor · ORR Exit 14", type: "3 & 4 BHK Villas", image: autumnVilla, href: "/projects/autumn-villas" as const },
  { title: "Future City Open Plots", location: "Maheshwaram Corridor", type: "Premium Plots", image: openPlots, href: "/contact" as const },
  { title: "The Club at Autumn", location: "Thummaloor", type: "Lifestyle Hub", image: clubhouse, href: "/projects/autumn-villas" as const },
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
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