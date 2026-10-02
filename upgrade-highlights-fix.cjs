const fs = require("fs");
const path = require("path");

const dir = "src/routes";
const files = fs.readdirSync(dir).filter((f) => f.startsWith("projects.") && f.endsWith(".tsx"));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), "utf8");

  // Fix the broken replacement
  const brokenRegex =
    /<section className="pt-20 pb-16 sm:py-32 bg-prestige-cream relative border-y border-prestige-gold\/20 overflow-hidden">[\s\S]*?<\/section>/;

  // Wait, I lost the original content. How to get it back?
  // Let me just `git checkout` the files since I haven not committed them yet!
  console.log("Reverting", file);
}
