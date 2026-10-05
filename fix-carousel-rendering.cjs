const fs = require("fs");
let file = fs.readFileSync("src/components/property-ui.tsx", "utf8");

// replace the entire PropertyCarousel function
file = file.replace(
  /export function PropertyCarousel[\s\S]*?\}\n\}/,
  `export function PropertyCarousel({ filterLocation, filterType }: { filterLocation?: string | undefined, filterType?: string | undefined }) {
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

  const filtered = properties.filter(property => {
    if (filterLocation && !property.location.toLowerCase().includes(filterLocation.toLowerCase())) return false;
    if (filterType) {
      const searchType = filterType.toLowerCase();
      const pType = property.type.toLowerCase();
      if (searchType.includes("villa") && !pType.includes("villa") && !pType.includes("triplex")) return false;
      if (searchType.includes("plot") && !pType.includes("plot")) return false;
    }
    return true;
  });

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-5">
          {filtered.length === 0 ? (
            <div className="w-full pl-5 py-12 text-center text-lg text-brand-navy/60 font-medium">
              No properties found for the selected criteria. Try adjusting your search!
            </div>
          ) : (
            filtered.map((property, index) => (
              <div
                className="min-w-0 flex-[0_0_86%] pl-5 sm:flex-[0_0_46%] lg:flex-[0_0_31%]"
                key={property.title}
              >
                <VerticalPropertyCard property={property} priority={index === 0} />
              </div>
            ))
          )}
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
}`,
);

fs.writeFileSync("src/components/property-ui.tsx", file, "utf8");
