const fs = require("fs");
let file = fs.readFileSync("src/components/animated-property-hero.tsx", "utf8");

file = file.replace(
  /className="absolute inset-0 z-0 pointer-events-none bg-white"/,
  `className="absolute inset-0 md:static md:inset-auto z-0 pointer-events-none bg-white flex flex-col justify-end"`,
);

// wait, it is absolute on mobile as well. Let us make it static on mobile, and absolute on desktop!
file = file.replace(
  /className="absolute inset-0 md:static md:inset-auto z-0 pointer-events-none bg-white flex flex-col justify-end"/,
  `className="relative md:absolute md:inset-0 z-0 pointer-events-none bg-white w-full h-full flex flex-col justify-center"`,
);

// update index.tsx to restore original -mt-1 and change section height on mobile
let indexFile = fs.readFileSync("src/routes/index.tsx", "utf8");
indexFile = indexFile.replace(
  /<section className="relative z-10 -mt-\[35vh\] bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">/,
  `<section className="relative z-10 -mt-2 bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">`,
);

fs.writeFileSync("src/routes/index.tsx", indexFile, "utf8");
