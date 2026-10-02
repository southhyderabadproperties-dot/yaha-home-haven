const fs = require("fs");
let content = fs.readFileSync("src/routes/index.tsx", "utf8");

// Fix sticky section
content = content.replace(
  /<section className="section-pad overflow-hidden bg-prestige-cream">/,
  `<section className="section-pad bg-prestige-cream">`,
);

fs.writeFileSync("src/routes/index.tsx", content, "utf8");
console.log("Updated index.tsx");
