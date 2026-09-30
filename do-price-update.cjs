const fs = require('fs');
const path = require('path');

const data = {
  'projects.autumn-villas-maheshwaram.tsx': {
    price: '₹1.85 Cr',
    priceLabel: 'Starting Price',
    secondValue: '₹6,999<span className="text-xl text-white/70">/Sq.Ft.</span>',
    secondLabel: 'Launch Price',
    secondIcon: 'TrendingUp',
    sub: 'Negotiable'
  },
  'projects.anvay-avillas-kongara-kalan.tsx': {
    price: '₹3.5 Cr*',
    priceLabel: 'Starting Price',
    secondValue: '2,820 – 4,654 Sq.Ft.',
    secondLabel: 'Villa Sizes',
    secondIcon: 'Maximize',
    sub: '*Approximate'
  },
  'projects.vertex-florenza-tukkuguda.tsx': {
    price: '₹6.3 Cr',
    priceLabel: 'Starting Price',
    secondValue: '5,000 – 6,873 Sq.Ft.',
    secondLabel: 'Villa Sizes',
    secondIcon: 'Maximize',
    sub: 'Premium Layout'
  },
  'projects.vertex-viva-calista-tukkuguda.tsx': {
    price: '₹3.2 Cr*',
    priceLabel: 'Starting Price',
    secondValue: '3,035 – 4,035 Sq.Ft.',
    secondLabel: 'Villa Sizes',
    secondIcon: 'Maximize',
    sub: '*Approximate'
  },
  'projects.riddhi-laxman-county-tukkuguda.tsx': {
    price: '₹3.62 Cr',
    priceLabel: 'Starting Price',
    secondValue: '3,516 – 4,635 Sq.Ft.',
    secondLabel: 'Villa Sizes',
    secondIcon: 'Maximize',
    sub: 'HMDA Approved'
  },
  'projects.kavuri-hills-lemon-leaf-tukkuguda.tsx': {
    price: '₹41.99 L',
    priceLabel: 'Starting Price',
    secondValue: '197 – 1,300 Sq.Yds.',
    secondLabel: 'Plot Sizes',
    secondIcon: 'Map',
    sub: 'HMDA Approved'
  },
  'projects.kavuri-forest-nest-immaguda.tsx': {
    price: '₹6,200/Sq.Ft.',
    priceLabel: 'Starting Price',
    secondValue: '2,160 – 4,505 Sq.Ft.',
    secondLabel: 'Villa Sizes',
    secondIcon: 'Maximize',
    sub: 'HMDA Approved'
  }
};

for (const [file, info] of Object.entries(data)) {
  const filePath = path.join('src/routes', file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the pricing section. We know it starts with `<div className="relative overflow-hidden rounded-2xl bg-brand-navy`
  // and ends two `</div></div></div>` later.
  
  const regex = /<div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 sm:p-12 shadow-2xl">.*?<\/div>\s*<\/div>\s*<\/div>/s;
  
  const newSection = `<div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 sm:p-12 shadow-2xl">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--brand-orange)_1px,transparent_1px),linear-gradient(90deg,var(--brand-orange)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative grid gap-8 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange"><Wallet className="h-5 w-5" /> ${info.priceLabel}</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">${info.price}</p>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-8">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-orange"><${info.secondIcon} className="h-5 w-5" /> ${info.secondLabel}</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">${info.secondValue}</p>
                <p className="mt-2 text-sm text-white/60 font-medium uppercase tracking-wider">${info.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  if (regex.test(content)) {
    content = content.replace(regex, newSection);
    
    // Also inject Maximize or Map icon import if it's missing
    if (info.secondIcon === 'Maximize' && !content.includes('Maximize')) {
      content = content.replace('Wallet,', 'Wallet, Maximize,');
      content = content.replace('{ Wallet }', '{ Wallet, Maximize }');
      content = content.replace('{ Wallet, TrendingUp }', '{ Wallet, TrendingUp, Maximize }');
    }
    if (info.secondIcon === 'Map' && !content.includes('Map,')) {
      content = content.replace('Wallet,', 'Wallet, Map,');
      content = content.replace('{ Wallet }', '{ Wallet, Map }');
      content = content.replace('{ Wallet, TrendingUp }', '{ Wallet, TrendingUp, Map }');
    }
    
    // Also fix any remaining â€“ mojibake
    content = content.replace(/â€“/g, '–');
    content = content.replace(/â/g, ''); // Clean up any hanging mojibake
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed ' + file);
  } else {
    console.log('Could not match pricing section in ' + file);
  }
}
