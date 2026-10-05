const fs = require("fs");
let file = fs.readFileSync("src/routes/index.tsx", "utf8");

file = file.replace(
  /<section className="relative z-10 -mt-\[45vh\] bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">/,
  `<section className="relative z-10 -mt-[35vh] bg-background py-8 shadow-xl sm:-mt-10 sm:mx-auto sm:max-w-6xl sm:rounded-md sm:px-7">`,
);

fs.writeFileSync("src/routes/index.tsx", file, "utf8");
