import { addressLine, absoluteUrl, site } from "./site";

export function localBusinessNode() {
  return {
    "@type": ["Plumber", "HomeAndConstructionBusiness"],
    "@id": absoluteUrl("/#business"),
    name: site.legalName,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    image: [
      absoluteUrl("/images/work/kitchen-white-bar.webp"),
      absoluteUrl("/images/work/shower-loft.webp"),
      absoluteUrl("/images/work/bathroom-gold-shower.webp"),
    ],
    telephone: site.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Bedford" },
      { "@type": "AdministrativeArea", name: "Bedfordshire" },
    ],
    openingHoursSpecification: site.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.day,
      opens: hours.opens,
      closes: hours.closes,
    })),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "GB-COH",
      value: site.companyNumber,
    },
    slogan: site.googleDescription,
    sameAs: [site.mapsUrl],
    description: `${site.legalName} is a plumber and home improvement company based in Elstow, Bedford. ${site.googleDescription}`,
    knowsAbout: ["Plumbing", "Bathroom installation", "Kitchen installation", "Carpentry", "Roofing", "Flooring"],
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceNode(input: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${input.path}#service`),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "City", name: "Bedford" },
    serviceType: input.name,
  };
}

export function faqNode(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function addressText() {
  return addressLine();
}
