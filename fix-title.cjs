const fs = require("fs");
let constella = fs.readFileSync("src/routes/projects.constella-villas-tukkuguda.tsx", "utf8");

constella = constella.replace(
  /<h1 className="mt-5 font-display text-5xl font-extrabold leading-\[1\.03\] sm:text-7xl">[\s\S]*?<\/h1>/,
  `<h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] sm:text-7xl">
                Constella Villas
              </h1>`,
);

fs.writeFileSync("src/routes/projects.constella-villas-tukkuguda.tsx", constella, "utf8");
