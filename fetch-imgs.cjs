const https = require("https");
function getHtml(url) {
  return new Promise((resolve) => {
    https
      .get(
        url,
        { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
        (res) => {
          if (res.statusCode === 301 || res.statusCode === 302) {
            return getHtml(res.headers.location).then(resolve);
          }
          let data = "";
          res.on("data", (d) => (data += d));
          res.on("end", () => resolve(data));
        },
      )
      .on("error", () => resolve(""));
  });
}

(async () => {
  const sites = [
    "https://anvayavillas.com/",
    "https://vertexviva.com/vertex-florenza/",
    "https://vertexviva.com/",
    "https://www.housing.com/in/buy/projects/page/245842-riddhi-laxman-county-by-riddhi-builders-and-developers-in-tukkuguda",
    "https://www.kavurihills.com/lemon-leaf/",
    "https://www.kavurihills.com/forest-nest/",
  ];
  for (const s of sites) {
    const html = await getHtml(s);
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    const imgMatch = html.match(/<img[^>]+src=["']([^"']+\.(jpg|jpeg|png|webp))["']/i);
    console.log(s, "->", ogMatch ? ogMatch[1] : imgMatch ? imgMatch[1] : "Not found");
  }
})();
