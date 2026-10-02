const fs = require("fs");
let content = fs.readFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", "utf8");

content = content.replace(/Exclusive premium duplex villas/g, "Exclusive premium plots");
content = content.replace(/contemporary duplex home/g, "layout");
content = content.replace(/expansive duplex villas/g, "expansive residential plots");
content = content.replace(
  /"Premium Acres Premium Villa Community",/,
  '"20 Acres Premium Open Plot Layout",',
);
content = content.replace(/"Only Exclusive Exclusive Villas",/, '"208 Exclusive Open Plots",');
content = content.replace(
  /"Spacious & Premium Villa Designs",/,
  '"Clear Title & HMDA Approved Layout",',
);

fs.writeFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", content, "utf8");
