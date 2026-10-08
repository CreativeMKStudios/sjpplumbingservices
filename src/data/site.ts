export const site = {
  legalName: "SJP Plumbing & Property Services Ltd",
  shortName: "SJP",
  companyNumber: "13779769",
  incorporated: "3 December 2021",
  jurisdiction: "England and Wales",
  phoneDisplay: "07776 366341",
  phoneTel: "+447776366341",
  mapsUrl: "https://maps.app.goo.gl/ChtuxrvyzhRkorNC6",
  placeId: "ChIJ5TMJQ2RaFiAR5PHbdPOloKM",
  writeReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ5TMJQ2RaFiAR5PHbdPOloKM",
  listingChecked: "8 October 2026",
  rating: 5,
  reviewCount: 15,
  photosOnGoogle: 35,
  googleDescription:
    "Home improvement and development company. Providing kitchen and bathroom installation, plumbing, carpentry, roofing, flooring and more.",
  categories: ["Plumber", "Bathroom remodeler", "Kitchen remodeler", "Carpenter"],
  address: {
    street: "15 St Marys Close",
    locality: "Elstow",
    region: "Bedford",
    postalCode: "MK42 9XQ",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: {
    latitude: 52.1215946,
    longitude: -0.5683796,
  },
  directors: [
    { name: "Shaun Jozef Winconek", knownAs: "Shaun" },
    { name: "Jason Robert Proud", knownAs: "Jay" },
  ],
  hours: [
    { day: "Monday", opens: "08:00", closes: "17:00" },
    { day: "Tuesday", opens: "08:00", closes: "17:00" },
    { day: "Wednesday", opens: "08:00", closes: "17:00" },
    { day: "Thursday", opens: "08:00", closes: "17:00" },
    { day: "Friday", opens: "08:00", closes: "17:00" },
  ],
  closedDays: ["Saturday", "Sunday"],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/areas", label: "Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function absoluteUrl(path: string) {
  const base = (import.meta.env.SITE ?? "").replace(/\/$/, "");
  return `${base}${path}`;
}

export function addressLine() {
  const { street, locality, region, postalCode } = site.address;
  return `${street}, ${locality}, ${region}, ${postalCode}`;
}
