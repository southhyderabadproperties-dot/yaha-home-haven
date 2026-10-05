const fs = require("fs");
let file = fs.readFileSync("src/components/property-ui.tsx", "utf8");

file = file.replace(
  /export function PropertyCarousel\(\{ filterLocation, filterType \}: \{ filterLocation\?: string, filterType\?: string \}\) \{/,
  `export function PropertyCarousel({ filterLocation, filterType }: { filterLocation?: string | undefined, filterType?: string | undefined }) {`,
);

fs.writeFileSync("src/components/property-ui.tsx", file, "utf8");
