import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import autumnVilla from "@/assets/autumn-villa.jpg";
import clubhouse from "@/assets/clubhouse.jpg";
import openPlots from "@/assets/open-plots.jpg";

export const properties = [
  {
    title: "Autumn Luxury Villas Maheshwaram",
    location: "Thummaloor Â· ORR Exit 14",
    type: "3 & 4 BHK Villas",
    image: autumnVilla,
    href: "/projects/autumn-villas-maheshwaram" as const,
  },
  {
    title: "Anvay Avillas",
    location: "Kongara Kalan",
    type: "3 & 4 BHK Villas",
    image:
      "https://housing-images.n7net.in/01c16c28/f1ae1b3dd6c98d33f953663d68cba202/v0/large/4_bhk_villa-for-sale-kongara_kalan_1-Hyderabad-outside_view.jpg",
    href: "/projects/anvay-avillas-kongara-kalan" as const,
  },
  {
    title: "Vertex Florenza",
    location: "Tukkuguda",
    type: "4 & 5 BHK Villas",
    image:
      "https://vertexviva.com/blog/wp-content/uploads/2025/12/A-Villa-at-Apartment-Cost-Vertex-Florenza.png",
    href: "/projects/vertex-florenza-tukkuguda" as const,
  },
  {
    title: "Vertex Viva Calista",
    location: "Tukkuguda",
    type: "3, 4 & 5 BHK Villas",
    image: "https://www.hyderabadprojects.com/uploads/project/1768385950_e41c3c4b434dc41bfbeb.png",
    href: "/projects/vertex-viva-calista-tukkuguda" as const,
  },
  {
    title: "Riddhi Laxman County",
    location: "Tukkuguda",
    type: "4 BHK Triplex",
    image: "https://im.proptiger.com/1/3136686/6/laxman-county-elevation-129948866.jpeg",
    href: "/projects/riddhi-laxman-county-tukkuguda" as const,
  },
  {
    title: "Kavuri Hills Lemon Leaf",
    location: "Mankhal",
    type: "Plots",
    image: "https://is1-3.housingcdn.com/012c1500/83cdbaa3f25097acc8a7ad46a0c17007/v2/medium.jpeg",
    href: "/projects/kavuri-hills-lemon-leaf-tukkuguda" as const,
  },
  {
    title: "Kavuri Forest Nest",
    location: "Immaguda",
    type: "3 to 4.5 BHK Villas",
    image:
      "https://res.cloudinary.com/jll-global-gdim/image/upload/t_ip-resi-v2-property-detail-web/IN/Horizon/Resi/Prod/JLL_Hyderabad_Kavuri%20Forest%20Nest_3706_EXT_2.png",
    href: "/projects/kavuri-forest-nest-immaguda" as const,
  },
  {
    title: "Future City Open Plots",
    location: "Maheshwaram Corridor",
    type: "Premium Plots",
    image: openPlots,
    href: "/contact" as const,
  },
];

export function VerticalPropertyCard({
  property,
  priority = false,
}: {
  property: (typeof properties)[number];
  priority?: boolean;
}) {
  return (
    <a href={property.href} className="group block">
      <div className="image-card relative aspect-[9/16]">
        <img
          src={property.image}
          alt={property.title}
          width={1088}
          height={1920}
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy via-brand-navy/75 to-transparent px-5 pb-5 pt-24 text-primary-foreground">
          <p className="flex items-center gap-1 text-xs font-semibold text-primary-foreground/75">
            <MapPin className="h-3.5 w-3.5 text-brand-orange" />
            {property.location}
          </p>
          <h3 className="mt-2 font-display text-xl font-extrabold">{property.title}</h3>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span>{property.type}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function PropertyCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [
    autoplayRef.current,
  ]);

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
            <div
              className="min-w-0 flex-[0_0_86%] pl-5 sm:flex-[0_0_46%] lg:flex-[0_0_31%]"
              key={property.title}
            >
              <VerticalPropertyCard property={property} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-end gap-2">
        <Button variant="outline" size="icon" aria-label="Previous property" onClick={prev}>
          <ChevronLeft />
        </Button>
        <Button variant="brand" size="icon" aria-label="Next property" onClick={next}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
