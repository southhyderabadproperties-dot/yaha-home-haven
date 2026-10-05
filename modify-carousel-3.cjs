const fs = require("fs");
let file = fs.readFileSync("src/components/property-ui.tsx", "utf8");

// let us extract the filtered list and check its length
file = file.replace(
  /\{properties\.filter\(\(property\) => \{[\s\S]*?\}\)\.map\(\(property, index\) => \(/,
  `{(() => {
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
            
            if (filtered.length === 0) {
              return (
                <div className="w-full text-center py-20 px-5 text-brand-navy/60 font-medium text-lg">
                  No properties found for the selected criteria. Try adjusting your search!
                </div>
              );
            }
            
            return filtered.map((property, index) => (`,
);

file = file.replace(
  /priority=\{index === 0\} \/>\n              <\/div>\n            \)\)\}/,
  `priority={index === 0} />\n              </div>\n            )));\n            })()}`,
);

fs.writeFileSync("src/components/property-ui.tsx", file, "utf8");
