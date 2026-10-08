export type Review = {
  name: string;
  when: string;
  text: string;
};

// Wording is copied from the public Google reviews. Times are the
// relative dates Google showed on 8 October 2026. Five of the 15
// reviews did not load on the public page without a Google sign-in.
export const reviews: Review[] = [
  {
    name: "Louise Atkinson",
    when: "2 years ago",
    text: "Shaun, Jay and their team have, over the last 3 years installed our central heating an amazing kitchen and our bathroom. They are true gents their work is top class, Shaun had a way with words that gets the job done I always say trust the process. They do not disappoint. Reasonably priced, they tidy up after themselves. We don’t hesitate to recommend them and will definitely have them back for the next job. A few before and after photos.",
  },
  {
    name: "Alan Curtis",
    when: "Edited 2 years ago",
    text: "SJP were recommended to us by friends who had been very satisfied with the work they had carried out. Having met Shaun we instantly felt that we wanted them to carry out our en-suite upgrade. The guys were excellent, they communicated at each step of the work and were completely finished by the agreed date. The workmanship was first class and with their help we selected the right products and they sourced these from the right suppliers. We are delighted with the outcome and felt that Shaun and Jason are worthy of recommendation to other people. We hope to have them back for more updates in the future.",
  },
  {
    name: "Pat Funge",
    when: "2 years ago",
    text: "Shaun and Jay, have worked in my house several times in 2022 and 2023. I have no hesitation in recommending them to people looking for quality tradesmen who deliver work to a high standard on budget and at the time agreed beforehand. Shaun and Jay are honest friendly people and I felt happy to go out knowing I could completely trust them to look after my house and lock up on occasions when I was still out at the end of the day. Specially Shaun and Jay have refurbished and refitted my kitchen and bathroom and converted my garage into a workshop. The garage was in a particularly poor state of repair and I thought it would be impossible to convert however Jay and Shaun planned and executed a top quality conversion which is still tip top over a year later, quality work which I’m confident will stand the test of time. Likewise the kitchen and bathroom were completed to a high standard with no problems after completion. I almost never leave internet reviews, however Shaun and Jay provide such outstanding workmanship and fair business ethos coupled with friendly honest service it’s only right to make comment.",
  },
  {
    name: "Emma Jones",
    when: "2 years ago",
    text: "So happy to have found Shaun when I was undertaking my bathroom renovation. He and the team were responsive, listened to what I wanted, super professional and communicative the whole way through. I’ve just purchased another property and will definitely be using them on this bathroom renovation as well!",
  },
  {
    name: "Helen Roy",
    when: "a year ago",
    text: "Shaun and Jay were recommended to us by friends and I now have no hesitation in recommending them myself. They recently remodelled and fitted our small, awkward downstairs shower room. Their standard of work is excellent and their attention to detail very thorough. Throughout the project they were cheerful and pleasant to have in the house. They were very tolerant of our questions and forthcoming with helpful suggestions. Trust them to do a great job, we did and would do so again.",
  },
  {
    name: "Belinda Nigro",
    when: "2 years ago",
    text: "We have just had our ensuite renovated by SJP. The work carried out by Shaun and Jay was to a high standard and they were helpful and easy to communicate with. We are pleased with the end result and would use them again in the future.",
  },
  {
    name: "Mark Hastings",
    when: "2 years ago",
    text: "Always a prompt and efficient service, with work completed to the highest standards. We have used them on a number of occasions and we would not hesitate to recommend SJP Plumbing & Property Services Ltd!",
  },
  {
    name: "Fiona Hubbard",
    when: "2 years ago",
    text: "They are the plumbers of our choice and we wouldn't go anywhere else. We have used them for several years for large jobs such as a new fitted bathroom to smaller jobs fitting radiators and toilet fittings etc. Family members also use them. Friendly, professional, tidy, very competent and exact. Would highly recommend.",
  },
  {
    name: "Malcolm Ladkin",
    when: "2 years ago",
    text: "Have used SJP a number of times for both plumbing and general maintenance including complete redecoration of my flat. Excellent service.",
  },
  {
    name: "Sue Burrows",
    when: "2 years ago",
    text: "Really pleased with the work carried out. Came when they said they would be at our property. Very polite and tidy workers. I have no hesitation on using their services in the future.",
  },
];

export const homeReviews = [
  reviews[6],
  reviews[4],
  reviews[7],
];

export const faqs = [
  {
    question: "What are the opening hours?",
    answer:
      "Monday to Friday, 8:00am to 5:00pm. Saturday and Sunday are closed on the Google listing. Call 07776 366341 during those hours.",
  },
  {
    question: "Can I call in at the address?",
    answer:
      "The registered office is 15 St Marys Close, Elstow, Bedford, MK42 9XQ. Google does not show a shop or trade counter. Please call before you visit.",
  },
  {
    question: "Do you fit bathrooms and kitchens?",
    answer:
      "Yes. Google lists the company as a plumber, bathroom remodeler, and kitchen remodeler. Customers have written about bathrooms, en-suites, shower rooms, and full kitchens.",
  },
  {
    question: "Are you Gas Safe registered?",
    answer:
      "A Gas Safe number is not shown on the Google profile or on the public Companies House record. If the job involves gas, ask before you book.",
  },
  {
    question: "How do I get a price?",
    answer:
      "Call or text 07776 366341 and describe the job. Prices are not listed on this site because they depend on the house and the work.",
  },
  {
    question: "Which company number is this?",
    answer:
      "SJP Plumbing & Property Services Ltd, company number 13779769. It was incorporated in England and Wales on 3 December 2021. The directors are Shaun Jozef Winconek and Jason Robert Proud.",
  },
];
