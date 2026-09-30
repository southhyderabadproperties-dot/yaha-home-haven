const fs = require('fs');
const content = fs.readFileSync('src/routes/projects.anvay-avillas-kongara-kalan.tsx', 'utf8');
const match = content.match(/<section[^>]*>(?:(?!<\/section>).)*?Starting Price.*?<\/section>/s);
if (match) console.log(match[0]);
