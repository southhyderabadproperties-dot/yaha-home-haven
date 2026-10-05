const fs = require("fs");
const buffer = fs.readFileSync("public/logo.jpg");
let i = 0;
if (buffer[i] === 0xff && buffer[i + 1] === 0xd8) {
  i += 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xff) {
      console.log("Invalid marker");
      break;
    }
    const marker = buffer[i + 1];
    i += 2;
    if (marker === 0xc0 || marker === 0xc2) {
      const height = buffer.readUInt16BE(i + 3);
      const width = buffer.readUInt16BE(i + 5);
      console.log("Dimensions: " + width + "x" + height);
      break;
    } else {
      const len = buffer.readUInt16BE(i);
      i += len;
    }
  }
} else {
  console.log("Not a JPEG");
}
