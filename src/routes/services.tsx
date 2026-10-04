import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, CtaBand } from "@/components/site-shell";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Our Services", path: "/services" }])],
    meta: [
      { property: "og:url", content: "/services" },
      { title: "Our Services | South Hyderabad Properties" },
      { property: "og:title", content: "Real Estate Services in South Hyderabad" },
      {
        property: "og:description",
        content: "Villas, apartments, open plots, farm lands, resale and investment guidance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Comprehensive real estate services in South Hyderabad, from premium residential properties and villas to investment consulting.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Residential Properties",
    description:
      "Premium residential properties in South Hyderabad's most sought-after neighborhoods.",
    image: "/services/service-gated.jpg",
  },
  {
    title: "Villas",
    description: "Exclusive luxury villas designed for comfort, space, and a premium lifestyle.",
    image: "/services/service-villas.jpg",
  },
  {
    title: "Apartments",
    description: "Modern apartments with top-tier amenities and excellent connectivity.",
    image: "/services/service-apartments.jpg",
  },
  {
    title: "Open Plots",
    description: "Verified open plots in high-growth corridors for building your dream home.",
    image: "/services/service-plots.jpg",
  },
  {
    title: "HMDA / DTCP Layout Properties",
    description: "Legally clear and approved layouts ready for immediate construction.",
    image: "/services/service-documents.jpg",
  },
  {
    title: "Farm Lands",
    description: "Serene farm lands perfect for weekend getaways or agricultural use.",
    image: "/services/service-farmlands.png",
  },
  {
    title: "Agricultural & Investment Lands",
    description: "Strategic land investments with high appreciation potential over time.",
    image: "/services/service-agricultural.jpg",
  },
  {
    title: "Commercial Properties",
    description: "Prime commercial spaces and industrial zones for business expansion.",
    image: "/services/service-industrial.jpg",
  },
  {
    title: "Rental Properties",
    description: "Hassle-free property rental management and discovery services.",
    image: "/services/service-mortgage.jpg",
  },
  {
    title: "Property Resale",
    description: "End-to-end assistance in selling your property at the best market price.",
    image: "/services/service-resale.png",
  },
  {
    title: "Property Consulting",
    description: "Expert advice on market trends, property valuation, and legal requirements.",
    image: "/services/service-consulting.jpg",
  },
  {
    title: "Property Investment Guidance",
    description: "Data-driven insights to help you make smart, profitable investment decisions.",
    image: "/services/service-homeloan.jpg",
  },
];

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Services"
        title={
          <>
            <span className="text-[#FC913A]">Comprehensive</span> real estate solutions.
          </>
        }
      >
        <p>
          From finding your dream home to strategic land investments, we provide end-to-end guidance
          for all your property needs.
        </p>
      </PageIntro>

      <section className="section-pad bg-background">
        <div className="page-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
