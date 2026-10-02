import https from "https";

function searchImages(query) {
  return new Promise((resolve) => {
    https.get(
      `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
      (res) => {
        let data = "";
        res.on("data", (d) => (data += d));
        res.on("end", () => {
          // Duckduckgo HTML actually doesn`t have images in the regular search easily unless we look at vqd.
          // Let`s just try searching standard Bing
        });
      },
    );
  });
}
