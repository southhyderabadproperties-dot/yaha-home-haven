const fs = require("fs");
let siteShell = fs.readFileSync("src/components/site-shell.tsx", "utf8");

// Add to desktop dropdown
siteShell = siteShell.replace(
  /\{\s*name: "Vertex Florenza",\s*loc: "Tukkuguda",\s*to: "\/projects\/vertex-florenza-tukkuguda",\s*\},/,
  `{ name: "Constella Villas", loc: "Tukkuguda", to: "/projects/constella-villas-tukkuguda" },
                  { name: "Vertex Florenza", loc: "Tukkuguda", to: "/projects/vertex-florenza-tukkuguda" },`,
);

// Add to mobile dropdown (same regex might catch it again if replaceAll, but let us use a global regex or do it twice)
// Replace first one
// Replace second one?
siteShell = siteShell.replace(
  /\{\s*name: "Vertex Florenza",\s*loc: "Tukkuguda",\s*to: "\/projects\/vertex-florenza-tukkuguda",\s*\}/g,
  `{ name: "Constella Villas", loc: "Tukkuguda", to: "/projects/constella-villas-tukkuguda" },\n                  { name: "Vertex Florenza", loc: "Tukkuguda", to: "/projects/vertex-florenza-tukkuguda" }`,
);

// Add to footer
siteShell = siteShell.replace(
  /<Link\s*to="\/projects\/vertex-florenza-tukkuguda"\s*className="hover:text-brand-orange transition-colors"\s*>\s*Vertex Florenza\s*<\/Link>/g,
  `<Link to="/projects/constella-villas-tukkuguda" className="hover:text-brand-orange transition-colors">Constella Villas</Link>
              <Link to="/projects/vertex-florenza-tukkuguda" className="hover:text-brand-orange transition-colors">Vertex Florenza</Link>`,
);

fs.writeFileSync("src/components/site-shell.tsx", siteShell, "utf8");
