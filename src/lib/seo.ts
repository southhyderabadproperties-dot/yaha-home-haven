export const SITE_NAME = "South Hyderabad Properties";
export const SITE_PHONE = "+91-96469-52999";
export const SITE_EMAIL = "southhyderabadproperties@gmail.com";

export const projectPages = [
  { path: "/projects/autumn-villas-maheshwaram", name: "Autumn Luxury Villas, Maheshwaram" },
  { path: "/projects/anvay-avillas-kongara-kalan", name: "Anvay Avillas, Kongara Kalan" },
  { path: "/projects/constella-villas-tukkuguda", name: "Constella Villas, Tukkuguda" },
  { path: "/projects/vertex-florenza-tukkuguda", name: "Vertex Florenza, Tukkuguda" },
  { path: "/projects/vertex-viva-calista-tukkuguda", name: "Vertex Viva Calista, Tukkuguda" },
  { path: "/projects/riddhi-laxman-county-tukkuguda", name: "Riddhi Laxman County, Tukkuguda" },
  { path: "/projects/kavuri-hills-lemon-leaf-tukkuguda", name: "Kavuri's Lemon Leaf, Tukkuguda" },
  { path: "/projects/kavuri-forest-nest-immaguda", name: "Kavuri Forest Nest, Immaguda" },
];

export const staticPages = ["/", "/about", "/services", "/blog", "/contact"];

export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

export const organizationSchema = () =>
  jsonLd({
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    url: "/",
    logo: "/logo.jpg",
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    areaServed: [
      "Shamshabad",
      "Maheshwaram",
      "Tukkuguda",
      "Kongara Kalan",
      "Adibatla",
      "Kandukur",
      "Immaguda",
      "South Hyderabad",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: ["https://www.facebook.com/share/1E9URqKEay/"],
  });

export const breadcrumbSchema = (items: { name: string; path: string }[]) =>
  jsonLd({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  });
