const fs = require("fs");
let constella = fs.readFileSync("src/routes/projects.constella-villas-tukkuguda.tsx", "utf8");

// Fix amenities images
constella = constella.replace(
  /"https:\/\/res\.cloudinary\.com\/jll-global-gdim\/image\/upload\/t_ip-resi-v2-property-detail-web\/IN\/Horizon\/Resi\/Prod\/clubhouse\.png"/,
  `"https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop"`,
);

constella = constella.replace(
  /"https:\/\/res\.cloudinary\.com\/jll-global-gdim\/image\/upload\/t_ip-resi-v2-property-detail-web\/IN\/Horizon\/Resi\/Prod\/pool\.png"/,
  `"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"`,
);

constella = constella.replace(
  /"https:\/\/res\.cloudinary\.com\/jll-global-gdim\/image\/upload\/t_ip-resi-v2-property-detail-web\/IN\/Horizon\/Resi\/Prod\/park\.png"/,
  `"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?q=80&w=1470&auto=format&fit=crop"`,
);

constella = constella.replace(
  /"https:\/\/res\.cloudinary\.com\/jll-global-gdim\/image\/upload\/t_ip-resi-v2-property-detail-web\/IN\/Horizon\/Resi\/Prod\/security\.png"/,
  `"https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=1374&auto=format&fit=crop"`,
);

// Fix name
constella = constella.replace(/Constella by<br \/>\n?\s*Speed Infra/g, "Constella Villas");
constella = constella.replace(/Constella by Speed Infra/g, "Constella Villas");
constella = constella.replace(/Constella\u2019s vision/g, "Constella Villas vision"); // Constella's vision

fs.writeFileSync("src/routes/projects.constella-villas-tukkuguda.tsx", constella, "utf8");
