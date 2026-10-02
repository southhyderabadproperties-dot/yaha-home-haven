const fs = require("fs");
const path = require("path");

const dir = "src/routes";
const files = fs.readdirSync(dir).filter((f) => f.startsWith("projects.") && f.endsWith(".tsx"));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), "utf8");

  const sectionRegex =
    /<section className="(?:section-pad|pt-16 pb-6 sm:py-28)"><div className="page-wrap grid gap-10 lg:gap-14 lg:grid-cols-\[1\.05fr_0\.95fr\]"><div><p className="eyebrow">([\s\S]*?)<\/p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">([\s\S]*?)<\/h2><p className="mt-6 leading-8 text-muted-foreground">([\s\S]*?)<\/p><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">\{(\[.*?\])\.map\(\(\[title,value\]\)=><div className="bg-background p-6" key=\{title\}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">\{title\}<\/p><p className="mt-2 font-display text-xl font-extrabold">\{value\}<\/p><\/div>\)\}<\/div><\/div><div className="image-card aspect-\[.*?\] max-h-\[.*?px\]">([\s\S]*?)<\/div><\/div><\/section>/;
  const sectionRegex2 =
    /<section className="(?:section-pad|pt-16 pb-6 sm:py-28)"><div className="page-wrap grid gap-14 lg:grid-cols-\[1\.05fr_0\.95fr\]"><div><p className="eyebrow">([\s\S]*?)<\/p><h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">([\s\S]*?)<\/h2><p className="mt-6 leading-8 text-muted-foreground">([\s\S]*?)<\/p><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">\{(\[.*?\])\.map\(\(\[title,value\]\)=><div className="bg-background p-6" key=\{title\}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">\{title\}<\/p><p className="mt-2 font-display text-xl font-extrabold">\{value\}<\/p><\/div>\)\}<\/div><\/div><div className="image-card aspect-\[.*?\] max-h-\[.*?px\]">([\s\S]*?)<\/div><\/div><\/section>/;

  const replacer = (match, eyebrow, title, desc, statsArray, rightMedia) => {
    return `
      <section className="pt-20 pb-16 sm:py-32 bg-prestige-cream relative border-y border-prestige-gold/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-prestige-gold/5 rounded-l-full blur-3xl mix-blend-multiply opacity-50" />
        <div className="page-wrap grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr] relative z-10">
          <div className="pr-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-prestige-gold" />
              <p className="font-prestige-body text-[10px] font-bold uppercase tracking-[0.32em] text-prestige-green">${eyebrow}</p>
            </div>
            <h2 className="mt-7 font-prestige text-4xl font-semibold leading-tight text-prestige-deep sm:text-5xl">${title}</h2>
            <p className="mt-6 font-prestige-body text-lg font-light leading-8 text-prestige-green">${desc}</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-prestige-gold/20 bg-prestige-gold/20 sm:grid-cols-2">
              {${statsArray}.map(([title,value])=>
                <div className="bg-prestige-cream p-6 transition-colors hover:bg-white" key={title}>
                  <p className="font-prestige-body text-[10px] font-bold uppercase tracking-[0.2em] text-prestige-gold">{title}</p>
                  <p className="mt-2 font-prestige text-2xl font-medium text-prestige-deep">{value}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <span className="pointer-events-none absolute -inset-3 hidden border border-prestige-gold/30 lg:block opacity-70" />
            <div className="image-card aspect-[4/3] sm:aspect-[16/10] max-h-[600px] bg-prestige-deep/5 overflow-hidden">
              ${rightMedia}
            </div>
          </div>
        </div>
      </section>
    `.trim();
  };

  if (content.match(sectionRegex)) {
    content = content.replace(sectionRegex, replacer);
    fs.writeFileSync(path.join(dir, file), content, "utf8");
    console.log("Updated (Regex 1)", file);
  } else if (content.match(sectionRegex2)) {
    content = content.replace(sectionRegex2, replacer);
    fs.writeFileSync(path.join(dir, file), content, "utf8");
    console.log("Updated (Regex 2)", file);
  } else {
    console.log("No match found in", file);
  }
}
