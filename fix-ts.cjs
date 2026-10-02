
const fs = require("fs");
let content = fs.readFileSync("src/components/animated-property-hero.tsx", "utf8");

content = content.replace(
  /if \(entry\.isIntersecting\) \{/,
  `if (entry?.isIntersecting) {`
);

fs.writeFileSync("src/components/animated-property-hero.tsx", content, "utf8");

