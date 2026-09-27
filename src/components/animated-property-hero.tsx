import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay, duration: 1.7, ease: "easeInOut" }, opacity: { delay, duration: 0.2 } },
  }),
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } }),
};

function Cloud({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 190 90"
      animate={{ x: [0, 18, 0], y: [0, -5, 0] }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <path className="fill-brand-soft stroke-primary/15" strokeWidth="2" d="M26 69c-13 0-22-8-22-19 0-10 8-18 19-19 3-17 17-28 34-25 10 1 18 7 23 15 8-13 25-18 39-11 10 5 16 15 17 26 14-2 27 8 27 21 0 8-5 12-12 12H26Z" />
      <path className="fill-background/70" d="M32 58c10 3 24 4 38 1 20-4 27-17 34-30 6 12 16 20 31 23 8 2 17 1 25-1 1 11-7 18-18 18H27c-4 0-8-1-11-3 5-4 10-6 16-8Z" />
    </motion.svg>
  );
}

function Bird({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.svg aria-hidden="true" className={className} viewBox="0 0 54 22" animate={{ x: [0, 40, 0], y: [0, -14, 0], rotate: [0, 3, 0] }} transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}>
      <path className="fill-foreground/55" d="M2 13c10-1 17 1 25 6-1-5-1-9 1-13 5 6 13 8 24 7-9 4-18 5-27 2-8-3-15-3-23-2Z" />
    </motion.svg>
  );
}

export function AnimatedPropertyHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      <Cloud className="absolute -left-10 top-[22%] w-32 sm:left-[3%] sm:w-44" />
      <Cloud className="absolute -right-12 top-[8%] w-44 sm:right-[1%] sm:w-60" delay={1.8} />
      <Cloud className="absolute left-[42%] top-[9%] hidden w-24 lg:block" delay={0.9} />
      <Bird className="absolute left-[17%] top-[12%] w-10 sm:w-14" />
      <Bird className="absolute right-[31%] top-[18%] hidden w-12 sm:block" delay={1.3} />

      <motion.svg
        className="absolute bottom-0 left-1/2 h-[48%] min-h-72 w-[150%] -translate-x-1/2 text-foreground sm:h-[52%] sm:w-[115%] lg:w-full"
        viewBox="0 0 1600 560"
        preserveAspectRatio="xMidYMax meet"
        initial="hidden"
        animate="visible"
      >
        <motion.path custom={0.05} variants={draw} className="fill-none stroke-foreground/22" strokeWidth="2" d="M0 486c121-9 236-5 353 1 113 6 228 8 343-1 109-8 217-12 325-1 184 18 380 4 579-6" />

        <motion.g custom={0.2} variants={rise} className="fill-background stroke-foreground/48" strokeWidth="2">
          <path d="M38 474V194h114v280M54 194v-26h82v26M75 168v-18h41v18M164 474V134h126v340M182 134v-29h91v29M205 105V85h45v20" />
          {Array.from({ length: 7 }).map((_, row) => <path key={`tower-a-${row}`} d={`M55 ${224 + row * 33}h80M181 ${166 + row * 39}h92`} />)}
          {Array.from({ length: 5 }).map((_, row) => <path key={`tower-b-${row}`} d={`M72 ${211 + row * 48}v22M108 ${211 + row * 48}v22M201 ${153 + row * 78}v31M242 ${153 + row * 78}v31`} />)}
          <path d="M26 474h284M28 486h280M19 460c8-23 16-28 27-31M300 459c8-25 19-32 31-35" />
        </motion.g>

        <motion.g custom={0.55} variants={rise} className="fill-background stroke-foreground/52" strokeWidth="2">
          <path d="M338 474V344l114-84 170 79v135M357 344h243M381 344v-55h169l45 50M404 474V370h166v104M430 370v104M545 370v104M391 410h185" />
          <path d="M377 291c14-34 50-63 92-63 45 0 80 24 92 61M469 228v-27c0-8 7-14 15-14h50" />
          <path d="M349 474h286M327 486h329M339 452c-21-13-24-35-8-45 2-23 31-31 44-12M622 458c12-27 31-29 45-13" />
        </motion.g>

        <motion.g custom={0.9} variants={rise} className="fill-none stroke-foreground/55" strokeWidth="2.5">
          <path strokeDasharray="9 8" d="M693 439h263l-42-78H748l-55 78Z" />
          <path d="M748 361h166" />
          {["701 427", "748 350", "914 350", "956 427"].map((point) => {
            const [x, y] = point.split(" ").map(Number);
            return <path key={point} className="fill-background" d={`M${x} ${y}c-12 0-21 9-21 20 0 16 21 36 21 36s21-20 21-36c0-11-9-20-21-20Zm0 27a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z`} />;
          })}
        </motion.g>

        <motion.g custom={1.2} variants={rise} className="fill-background stroke-foreground/46" strokeWidth="2">
          <path d="M1003 474c35-82 90-124 162-125 72-2 128 39 170 125M1001 439c73-39 149-53 229-42 43 6 82 20 119 42M1037 414c74 13 143 33 205 60M1298 474c-15-60-9-121 18-184M1316 291c-21-10-42-7-60 10 14 4 27 11 38 23M1318 291c9-21 23-35 43-43-1 19-8 36-24 51M1322 295c24-13 48-13 70 1-17 8-34 15-54 19M1379 474V361h111v113M1396 361l39-37 40 37M1422 474v-65h31v65" />
          <path d="M1100 443c-4-31 3-59 21-85M1121 358c-17-8-32-5-45 7 11 4 22 10 30 19M1123 358c8-17 19-28 35-34-2 15-8 28-20 39M1124 361c18-10 37-9 53 2-12 6-26 11-41 14" />
          <path d="M1233 459c16-30 42-40 78-29M1256 432c8-24 4-44-10-62M1246 370c17 6 30 19 38 38" />
          <path d="M1468 474c16-34 40-52 71-55 17 4 30 13 39 27M1494 431l-15-35M1494 431l17-39" />
        </motion.g>

        <motion.g custom={1.55} variants={rise} className="fill-foreground/60">
          <circle cx="1478" cy="391" r="10" /><path d="M1468 403h19l8 39-11 32h-12l4-34-13-18Z" />
          <path d="M1488 411l42 20-4 8-44-15M1469 410l-27 27-7-7 27-28" />
        </motion.g>

        <motion.g custom={1.75} variants={rise} className="font-sans fill-muted-foreground text-[20px] font-medium">
          <text x="84" y="530">APARTMENTS</text><text x="416" y="530">VILLAS</text><text x="757" y="530">OPEN PLOTS</text><text x="1150" y="530">LAND</text>
        </motion.g>
      </motion.svg>
    </div>
  );
}