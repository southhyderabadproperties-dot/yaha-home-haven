
const fs = require("fs");
let content = fs.readFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", "utf8");
content = content.replace(/with a 30,000 SFT clubhouse\./, "with premium infrastructure.");
content = content.replace(/"30,000 Sq. Ft. Clubhouse",/g, "\"Avenue Plantation\",");
fs.writeFileSync("src/routes/projects.kavuri-hills-lemon-leaf-tukkuguda.tsx", content, "utf8");

