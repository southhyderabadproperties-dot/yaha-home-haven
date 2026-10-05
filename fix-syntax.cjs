const fs = require("fs");
let file = fs.readFileSync("src/components/property-ui.tsx", "utf8");

file = file.replace(/<\/div>\n\s*\)\)\}/, `</div>\n            )));\n            })()}`);

fs.writeFileSync("src/components/property-ui.tsx", file, "utf8");
