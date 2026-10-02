
const fs = require("fs");
let content = fs.readFileSync("src/routes/index.tsx", "utf8");

content = content.replace(
  /<div className="grid grid-cols-2 gap-4"><div className="rounded-md bg-primary p-7 text-primary-foreground"><ShieldCheck className="h-8 w-8 text-brand-orange"\/><p className="mt-10 font-display text-2xl font-extrabold">Verified opportunities<\/p><p className="mt-2 text-sm text-primary-foreground\/70">Clarity-first property discovery\.<\/p><\/div><div className="mt-10 rounded-md bg-brand-orange p-7 text-brand-orange-foreground"><MapPin className="h-8 w-8"\/><p className="mt-10 font-display text-2xl font-extrabold">Local focus<\/p><p className="mt-2 text-sm text-brand-orange-foreground\/75">Deep South Hyderabad context\.<\/p><\/div><\/div>/,
  `<div className="grid grid-cols-2 gap-3 sm:gap-4"><div className="rounded-md bg-primary p-5 sm:p-7 text-primary-foreground"><ShieldCheck className="h-8 w-8 text-brand-orange"/><p className="mt-6 sm:mt-10 font-display text-lg sm:text-2xl font-extrabold break-words">Verified opportunities</p><p className="mt-2 text-xs sm:text-sm text-primary-foreground/70">Clarity-first property discovery.</p></div><div className="mt-10 rounded-md bg-brand-orange p-5 sm:p-7 text-brand-orange-foreground"><MapPin className="h-8 w-8"/><p className="mt-6 sm:mt-10 font-display text-lg sm:text-2xl font-extrabold break-words">Local focus</p><p className="mt-2 text-xs sm:text-sm text-brand-orange-foreground/75">Deep South Hyderabad context.</p></div></div>`
);

fs.writeFileSync("src/routes/index.tsx", content, "utf8");

