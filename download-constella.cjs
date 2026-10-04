const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = "public/projects/constella";
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  "https://constella.in/assets/images/about-constella.webp",
  "https://constella.in/assets/images/spirit_of_openess.webp",
  "https://constella.in/assets/images/overlay_banner.webp",
];

images.forEach((url, i) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(path.join(dir, `image-${i + 1}.webp`));
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Downloaded ${url}`);
      });
    } else {
      console.log(`Failed to download ${url}: ${res.statusCode}`);
    }
  });
});
