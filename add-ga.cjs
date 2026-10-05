const fs = require("fs");
let file = fs.readFileSync("src/routes/__root.tsx", "utf8");

const gaCode = `
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-59JDNBE9VB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "G-59JDNBE9VB");
            \`,
          }}
        />`;

file = file.replace(/<head>/, `<head>\${gaCode}`);

fs.writeFileSync("src/routes/__root.tsx", file, "utf8");
