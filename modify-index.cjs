const fs = require("fs");
let file = fs.readFileSync("src/routes/index.tsx", "utf8");

// Change the state to include search terms
file = file.replace(
  /const \[location, setLocation\] = useState\("Shamshabad"\);\s*const \[type, setType\] = useState\("Luxury Villas"\);\s*const go = \(\) => navigate\(\{ to: "\/contact", search: \{ location, type \} as never \}\);/,
  `const [location, setLocation] = useState("Tukkuguda");
  const [type, setType] = useState("Luxury Villas");
  const [activeSearch, setActiveSearch] = useState<{location?: string, type?: string} | null>(null);

  const go = () => {
    setActiveSearch({ location, type });
    document.getElementById("featured-properties")?.scrollIntoView({ behavior: "smooth" });
  };`,
);

// Add id to the section
file = file.replace(
  /<section className="section-pad bg-brand-soft">/,
  `<section id="featured-properties" className="section-pad bg-brand-soft">`,
);

// Pass activeSearch to PropertyCarousel
file = file.replace(
  /<PropertyCarousel \/>/,
  `<PropertyCarousel filterLocation={activeSearch?.location} filterType={activeSearch?.type} />`,
);

// Remove "Land Development" from the Property type options
// And optionally "Open Plots" if they only want villas? The user said "remove the opation of land development"
file = file.replace(/<option>Land Development<\/option>/g, ``);

fs.writeFileSync("src/routes/index.tsx", file, "utf8");
