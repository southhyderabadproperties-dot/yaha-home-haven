const fs = require("fs");
let file = fs.readFileSync("src/routes/__root.tsx", "utf8");

file = file.replace(
  /\{ rel: "icon", href: "\/logo.jpg", type: "image\/jpeg" \},/,
  `{ rel: "icon", href: "/logo.jpg", type: "image/jpeg", sizes: "any" },
      { rel: "apple-touch-icon", href: "/logo.jpg" },`,
);

fs.writeFileSync("src/routes/__root.tsx", file, "utf8");
