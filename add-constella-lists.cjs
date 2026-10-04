const fs = require("fs");

let propUi = fs.readFileSync("src/components/property-ui.tsx", "utf8");
propUi = propUi.replace(
  /\{\s*title: "Vertex Florenza",/,
  `{
    title: "Constella Villas",
    location: "Tukkuguda",
    type: "4 & 5 BHK Courtyard Villas",
    image: "/projects/constella/image-1.webp",
    href: "/projects/constella-villas-tukkuguda" as const,
  },
  {
    title: "Vertex Florenza",`,
);
fs.writeFileSync("src/components/property-ui.tsx", propUi, "utf8");

let seo = fs.readFileSync("src/lib/seo.ts", "utf8");
seo = seo.replace(
  /\{\s*path: "\/projects\/vertex-florenza-tukkuguda",\s*name: "Vertex Florenza, Tukkuguda"\s*\},/,
  `{ path: "/projects/constella-villas-tukkuguda", name: "Constella Villas, Tukkuguda" },
  { path: "/projects/vertex-florenza-tukkuguda", name: "Vertex Florenza, Tukkuguda" },`,
);
fs.writeFileSync("src/lib/seo.ts", seo, "utf8");

let llms = fs.readFileSync("public/llms.txt", "utf8");
llms = llms.replace(
  /- \[Vertex Florenza, Tukkuguda\]\(\/projects\/vertex-florenza-tukkuguda\)/,
  `- [Constella Villas, Tukkuguda](/projects/constella-villas-tukkuguda)\n- [Vertex Florenza, Tukkuguda](/projects/vertex-florenza-tukkuguda)`,
);
fs.writeFileSync("public/llms.txt", llms, "utf8");
