const fs = require("fs");

// 1. Fix the video position in AnimatedPropertyHero
let heroFile = fs.readFileSync("src/components/animated-property-hero.tsx", "utf8");
heroFile = heroFile.replace(
  /className="block md:hidden w-full h-full object-contain object-bottom pb-8"/,
  `className="block md:hidden w-full h-full object-contain object-top pt-16"`,
);
fs.writeFileSync("src/components/animated-property-hero.tsx", heroFile, "utf8");

// 2. Fix the gap using negative margin in index.tsx
let indexFile = fs.readFileSync("src/routes/index.tsx", "utf8");
indexFile = indexFile.replace(
  /<section className="relative z-10 -mt-2 bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">/,
  `<section className="relative z-10 -mt-[45vh] bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">`,
);
fs.writeFileSync("src/routes/index.tsx", indexFile, "utf8");
