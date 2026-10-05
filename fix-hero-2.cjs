const fs = require("fs");

let indexFile = fs.readFileSync("src/routes/index.tsx", "utf8");
// revert negative margin
indexFile = indexFile.replace(
  /<section className="relative z-10 -mt-\[45vh\] bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">/,
  `<section className="relative z-10 -mt-2 bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">`,
);
// fix min-h-screen
indexFile = indexFile.replace(
  /<section className="relative min-h-screen flex flex-col overflow-hidden bg-background">/,
  `<section className="relative min-h-[70vh] sm:min-h-screen flex flex-col overflow-hidden bg-background">`,
);
fs.writeFileSync("src/routes/index.tsx", indexFile, "utf8");
