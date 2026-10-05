const fs = require("fs");
let file = fs.readFileSync("src/components/property-ui.tsx", "utf8");

file = file.replace(
  /export function PropertyCarousel\(\) \{/,
  `export function PropertyCarousel({ filterLocation, filterType }: { filterLocation?: string, filterType?: string }) {`,
);

// Add filtering logic before mapping
file = file.replace(
  /\{properties\.map\(\(property, index\) => \(/,
  `{properties.filter(property => {
              if (filterLocation && !property.location.toLowerCase().includes(filterLocation.toLowerCase())) return false;
              if (filterType) {
                const searchType = filterType.toLowerCase();
                const pType = property.type.toLowerCase();
                if (searchType.includes("villa") && !pType.includes("villa") && !pType.includes("triplex")) return false;
                if (searchType.includes("plot") && !pType.includes("plot")) return false;
              }
              return true;
            }).map((property, index) => (`,
);

fs.writeFileSync("src/components/property-ui.tsx", file, "utf8");
