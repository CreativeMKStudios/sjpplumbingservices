export type Area = {
  slug: string;
  name: string;
  summary: string;
  body: string[];
};

export const nearbyPlaces = [
  "Bedford",
  "Elstow",
  "Kempston",
  "Wixams",
  "Shortstown",
  "Wilstead",
  "Cotton End",
  "Cardington",
  "Stewartby",
  "Wootton",
  "Biddenham",
  "Bromham",
  "Clapham",
  "Oakley",
  "Renhold",
  "Great Barford",
  "Willington",
];

export const areas: Area[] = [
  {
    slug: "bedford",
    name: "Bedford",
    summary: "The town SJP works around, a short drive from the Elstow base.",
    body: [
      "SJP Plumbing & Property Services Ltd is based in Elstow, on the south side of Bedford. The Google pin and the registered office are both there.",
      "Bedford has older streets near the town centre and newer houses further out. In an older house the usual calls are a tired bathroom, a kitchen that has been altered more than once, or a leak on pipework that has been there for years. Newer houses more often need a bathroom change or a kitchen fitted the way the owner wants it.",
      "The company is open Monday to Friday, 8am to 5pm. Call 07776 366341 and say which part of Bedford you are in.",
    ],
  },
  {
    slug: "elstow",
    name: "Elstow",
    summary: "The village where the company is registered and where the Google pin sits.",
    body: [
      "The registered office is 15 St Marys Close, Elstow, Bedford, MK42 9XQ. That is also where the Google map pin is placed. It is not a trade counter. Call before you visit.",
      "Elstow is a village just south of Bedford, close to Shortstown and the road into Wixams. Houses here are a mix of older village homes and later family streets.",
      "If you live in Elstow, you are as close as a customer can be to the base. The hours are still Monday to Friday, 8am to 5pm.",
    ],
  },
  {
    slug: "kempston",
    name: "Kempston",
    summary: "The town on the west side of Bedford, next to Elstow.",
    body: [
      "Kempston sits on the west side of Bedford and shares a border with Elstow, so it is local to the SJP base.",
      "A lot of Kempston is 20th century housing, with newer streets mixed in. Typical jobs in houses like these are a bathroom refit, kitchen plumbing, a toilet or tap that has failed, or a radiator that needs changing.",
      "SJP does not publish a separate Kempston price list. Call 07776 366341, say you are in Kempston, and describe the job.",
    ],
  },
  {
    slug: "wixams",
    name: "Wixams",
    summary: "The newer town south of Bedford, between Elstow and Wilstead.",
    body: [
      "Wixams is south of Bedford, between Elstow and Wilstead. Most of it is modern housing built in the last twenty years.",
      "Calls from newer houses are often a bathroom the owner wants changed, a kitchen alteration, or a fault that showed up after people had lived there for a while.",
      "The Google profile does not list a Gas Safe number. Ask about gas work before you book it. For everything else, call on a weekday between 8am and 5pm.",
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
