
const fs = require("fs");
let content = fs.readFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", "utf8");

// Update lucide-react imports
content = content.replace(
  /import \{ (.*?) \} from "lucide-react";/,
  "import { $1, Droplets, CloudRain, Sprout, ShieldCheck } from \"lucide-react\";"
);

// Replace amenities array
const newAmenities = `
const amenities = [
  { icon: Droplets, label: "24*7 Water Supply", img: "https://images.unsplash.com/photo-1548820863-718e2652c7c5?q=80&w=600&auto=format&fit=crop" },
  { icon: CloudRain, label: "Storm Water Drains", img: "https://images.unsplash.com/photo-1614088921876-0f83dd7b1f63?q=80&w=600&auto=format&fit=crop" },
  { icon: Sprout, label: "Rain Water Harvesting", img: "https://images.unsplash.com/photo-1534260933201-6893c8d1933c?q=80&w=600&auto=format&fit=crop" },
  { icon: ShieldCheck, label: "24*7 Security", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop" }
];
`;
content = content.replace(/const amenities = \[[\s\S]*?\];/, newAmenities.trim());

// Update section titles
content = content.replace(/<p className="eyebrow text-brand-orange">Everyday, elevated<\/p>/, `<p className="eyebrow text-brand-orange">Premium Infrastructure</p>`);
content = content.replace(/<h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">A 30,000 SFT clubhouse<br\/>at the heart of it all.<\/h2>/, `<h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">Project Amenities</h2>`);
content = content.replace(/<p className="mt-6 text-lg text-primary-foreground\/70">Experience world-class amenities designed to bring resort-style luxury to your daily life.<\/p>/, `<p className="mt-6 text-lg text-primary-foreground/70">Carefully planned infrastructure for a seamless, secure, and sustainable living experience.</p>`);

// Fix facts to match plots instead of villas
content = content.replace(
  /const facts = \[{big:"20",small:"Acres"},{big:"208",small:"Exclusive units"},{big:"3 & 4",small:"BHK duplex villas"},{big:"30,000",small:"SFT clubhouse"}\];/,
  `const facts = [{big:"20",small:"Acres"},{big:"208",small:"Exclusive plots"},{big:"HMDA",small:"Approved layout"},{big:"100%",small:"Vaastu compliant"}];`
);

fs.writeFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", content, "utf8");
console.log("Updated amenities in Kavuri");

