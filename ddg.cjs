
const https = require("https");
function search(q) {
  return new Promise(resolve => {
    https.get("https://html.duckduckgo.com/html/?q=" + encodeURIComponent(q), { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
      let data = "";
      res.on("data", d => data+=d);
      res.on("end", () => {
        const match = data.match(/<a class="image[^>]+href=["']([^"']+)["']/i);
        resolve(match ? match[1] : null);
      });
    });
  });
}
(async () => {
  console.log(await search("Anvaya villas kongara kalan project image filetype:jpg OR filetype:png"));
})();

