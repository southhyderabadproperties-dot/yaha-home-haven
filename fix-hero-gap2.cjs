const fs = require("fs");
let file = fs.readFileSync("src/routes/index.tsx", "utf8");

file = file.replace(
  /<section className="relative h-\[60vh\] md:min-h-screen flex flex-col overflow-hidden bg-background">/,
  `<section className="relative h-[55vh] md:min-h-screen flex flex-col overflow-hidden bg-background">`,
);

fs.writeFileSync("src/routes/index.tsx", file, "utf8");
