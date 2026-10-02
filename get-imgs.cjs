const https = require("https");
function getBingImage(query) {
  return new Promise((resolve) => {
    https.get(
      `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
      (res) => {
        let data = "";
        res.on("data", (d) => (data += d));
        res.on("end", () => {
          const match = data.match(/murl&quot;:&quot;(http[^&]+)&quot;/i);
          resolve(match ? match[1] : null);
        });
      },
    );
  });
}
(async () => {
  const q = [
    "Anvaya villas kongara kalan exterior",
    "Vertex Florenza villa exterior",
    "Vertex Viva Calista tukkuguda",
    "Riddhi Laxman County",
    "Kavuri Hills Lemon Leaf",
    "Kavuri Forest Nest",
  ];
  for (const c of q) {
    console.log(c, "->", await getBingImage(c));
  }
})();
