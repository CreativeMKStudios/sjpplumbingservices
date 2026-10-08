export type Service = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  lead: string;
  points: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "plumbing",
    title: "Plumbing",
    nav: "Plumbing",
    summary: "Leaks, taps, toilets, wastes, and the pipework behind a kitchen or bathroom.",
    lead: "SJP is listed on Google as a plumber, based in Elstow, Bedford. People call for the everyday faults and for the pipework that comes with a new kitchen or bathroom.",
    points: [
      "Dripping taps, leaking wastes, and toilets that will not flush properly",
      "Blocked baths, basins, and sinks",
      "Pipework for a new bathroom, en-suite, or kitchen",
      "Radiators and other heating pipework customers have asked them to fit",
    ],
    note: "The Google profile does not show a Gas Safe registration number. If your job involves gas, ask Shaun or Jay about that before you book.",
  },
  {
    slug: "bathrooms",
    title: "Bathrooms and shower rooms",
    nav: "Bathrooms",
    summary: "Full bathroom refits, en-suites, and awkward small shower rooms.",
    lead: "Bathroom work is the job customers mention most. Google lists SJP as a bathroom remodeler, and the profile photos are mostly finished bathrooms.",
    points: [
      "Taking out the old suite and fitting a new one",
      "Walk-in showers, bath showers, and en-suites",
      "Small or awkward rooms, including a downstairs shower room a customer asked them to remodel",
      "Basins, toilets, vanity units, and heated towel rails as part of the fit",
    ],
  },
  {
    slug: "kitchens",
    title: "Kitchens",
    nav: "Kitchens",
    summary: "Kitchen installation, including the sink, taps, and the units around them.",
    lead: "Google lists SJP as a kitchen remodeler. Customers have written about full kitchen refits, and the profile has photos of finished kitchens.",
    points: [
      "Fitting a new kitchen, including units and worktops shown in the project photos",
      "Sinks, taps, and the plumbing that feeds them",
      "Helping choose products and ordering them, which one customer described in their review",
    ],
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    nav: "Carpentry",
    summary: "Carpentry listed on the company profile, alongside kitchens and bathrooms.",
    lead: "Carpentry is one of the trades on the SJP Google profile, next to plumber, bathroom remodeler, and kitchen remodeler. A lot of that work sits inside a kitchen or bathroom fit: units, doors, and trim.",
    points: [
      "Kitchen units and fitted bathroom furniture",
      "Making a room work when the shape is awkward",
      "One customer asked them to turn a poor garage into a workshop",
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    nav: "Roofing",
    summary: "Roofing is named in the company’s own Google description.",
    lead: "The SJP Google description says the company provides roofing as well as kitchens, bathrooms, plumbing, carpentry, and flooring. The public photos are of kitchens and bathrooms, so call and describe the roof before you assume it is a job they can take this week.",
    points: [
      "Ask what is wrong: a leak, slipped tiles, or a flat roof",
      "They will tell you if it is work they can do",
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    nav: "Flooring",
    summary: "Flooring is named in the company’s own Google description.",
    lead: "Flooring is part of the work SJP lists on Google. You can see new floors in the bathroom and kitchen photos on their profile. For a floor on its own, call and say which room and what is down now.",
    points: [
      "Floors that go in with a bathroom or kitchen",
      "Replacing a tired floor as part of a bigger refit",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
