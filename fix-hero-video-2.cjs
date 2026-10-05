const fs = require("fs");
let file = fs.readFileSync("src/components/animated-property-hero.tsx", "utf8");

file = file.replace(
  /className="block md:hidden w-full h-\[85vh\] object-contain object-bottom"/,
  `className="block md:hidden w-full h-full object-contain object-bottom pb-8"`,
);

fs.writeFileSync("src/components/animated-property-hero.tsx", file, "utf8");
