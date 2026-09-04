import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

/**
 * Illustrative studio content for Fourth Group & Co.
 * Replace the sample titles, authors and quotes below with real client
 * projects and permissioned reviews before publishing.
 */

export const portfolio = [
  {
    n: "01",
    slug: "the-long-cold-water",
    title: "The Long Cold Water",
    author: "Client title",
    category: "Crime thriller & suspense",
    image: reel1,
    alt: "Rain-slicked city street at night lit by warm lamps",
    length: "2:00",
    text: "A two-minute film cut from the manuscript's opening chase: score first, dialogue last, the hook landing before a viewer can scroll.",
    disciplines: ["Cinematic trailer", "Amazon SEO"],
  },
  {
    n: "02",
    slug: "everything-we-carried",
    title: "Everything We Carried",
    author: "Client title",
    category: "Literary fiction & memoir",
    image: reel2,
    alt: "Lone figure walking through tall grass at dusk",
    length: "1:35",
    text: "An image-led film for a quiet book — voice carried by restraint rather than a logline, with cut-downs for every social format.",
    disciplines: ["Cinematic trailer", "Author website"],
  },
  {
    n: "03",
    slug: "the-attention-economy-of-ideas",
    title: "The Attention Economy of Ideas",
    author: "Client title",
    category: "Non-fiction & ideas",
    image: reel3,
    alt: "Open manuscript on a desk under a brass lamp",
    length: "2:00",
    text: "One thesis, made visual in the first eight seconds, then supported by a Listopia campaign aimed at non-fiction browsers.",
    disciplines: ["Goodreads Listopia", "Cinematic trailer"],
  },
  {
    n: "04",
    slug: "saltcliff",
    title: "Saltcliff",
    author: "Client title",
    category: "Fantasy & speculative",
    image: reel4,
    alt: "Stormy sea cliffs at blue hour",
    length: "2:05",
    text: "Scale handled with a straight face: original score, custom grade and a full author site built to catch the traffic the film created.",
    disciplines: ["Cinematic trailer", "Author website", "Listopia"],
  },
];

export const caseStudies = [
  {
    slug: "listopia-debut-thriller",
    title: "Debut thriller, cold start",
    engagement: "Goodreads Listopia campaign",
    status: "Completed",
    summary:
      "A first-time crime novelist with strong reviews and no discovery. We shortlisted eleven Listopia lists that matched the book's mood, then built voting momentum list by list.",
    metrics: [
      { label: "Lists placed", value: "6" },
      { label: "Campaign length", value: "5 weeks" },
      { label: "Reporting", value: "Live links" },
    ],
  },
  {
    slug: "trailer-led-relaunch",
    title: "Trailer-led relaunch",
    engagement: "Cinematic trailer + listing rebuild",
    status: "Completed",
    summary:
      "A two-year-old title with a tired listing. A new film gave the book something to say on social, and the rebuilt Amazon listing gave arrivals somewhere to land.",
    metrics: [
      { label: "Film length", value: "1:53" },
      { label: "Formats delivered", value: "7" },
      { label: "Listing rewrite", value: "Full" },
    ],
  },
  {
    slug: "author-platform-build",
    title: "Author platform build",
    engagement: "Author website + newsletter",
    status: "Completed",
    summary:
      "Three titles and no home for them. We built an editorial site with a books library, events page and press kit, wired to the author's newsletter.",
    metrics: [
      { label: "Build time", value: "5 weeks" },
      { label: "Pages", value: "9" },
      { label: "Lighthouse", value: "95+" },
    ],
  },
  {
    slug: "non-fiction-visibility",
    title: "Non-fiction visibility audit",
    engagement: "Amazon SEO optimisation",
    status: "Completed",
    summary:
      "Good book, wrong categories. We rebuilt the backend keywords, moved the title into two better-fitting categories and rewrote the A+ content around buyer language.",
    metrics: [
      { label: "Categories changed", value: "2" },
      { label: "Keywords rebuilt", value: "7" },
      { label: "Review cadence", value: "Monthly" },
    ],
  },
];

export const pricingTiers = [
  {
    name: "Starter Placement",
    price: "$95",
    tag: "Single list",
    summary: "A first, careful step into Goodreads discovery.",
    features: [
      "Single Listopia placement",
      "Genre-matched list selection",
      "Real reader votes only",
      "End-of-campaign position report",
    ],
    featured: false,
  },
  {
    name: "Standard Campaign",
    price: "$156",
    tag: "Most chosen",
    summary: "What most authors book once the manuscript is out.",
    features: [
      "Multiple Listopia placements",
      "Genre-matched list selection",
      "Real reader votes only",
      "Priority reader-network engagement",
      "Full report with live, checkable links",
    ],
    featured: true,
  },
  {
    name: "Premium Visibility",
    price: "$375",
    tag: "Maximum reach",
    summary: "For a launch quarter that has to count.",
    features: [
      "Maximum Listopia placements",
      "Multi-genre targeting",
      "Full reader-network engagement",
      "Weekly progress updates",
      "Comprehensive documented report",
      "Priority support under one hour",
    ],
    featured: false,
  },
];

export const pricingComparison = {
  rows: [
    { label: "List placements", values: ["One", "Multiple", "Maximum"] },
    { label: "Genre targeting", values: ["Single genre", "Single genre", "Multi genre"] },
    { label: "Real reader votes", values: ["Yes", "Yes", "Yes"] },
    { label: "Network engagement", values: ["Standard", "Priority", "Full network"] },
    { label: "Progress updates", values: ["End of campaign", "Mid and end", "Weekly"] },
    { label: "Report with live links", values: ["Basic", "Full", "Comprehensive"] },
    { label: "Priority support", values: ["—", "—", "Yes"] },
  ],
};

export const reviews = [
  {
    quote:
      "They read the whole manuscript before they said a single word about strategy. That alone put them ahead of everyone else I spoke to.",
    name: "A. Whitfield",
    detail: "Crime thriller · Listopia campaign",
    service: "Goodreads Listopia Promotion",
  },
  {
    quote:
      "The trailer made people feel the book before they opened it. I have used it in every pitch since.",
    name: "M. Deleon",
    detail: "Literary fiction · Cinematic trailer",
    service: "Cinematic Book Trailer",
  },
  {
    quote:
      "My site finally reads like my writing. Newsletter sign-ups stopped being an accident and became the point.",
    name: "R. Okonkwo",
    detail: "Historical fiction · Author website",
    service: "Author Website Design",
  },
  {
    quote:
      "The categories were wrong for two years. A week of listing work fixed what months of ads never touched.",
    name: "J. Vasquez",
    detail: "Non-fiction · Amazon SEO",
    service: "Amazon SEO Optimisation",
  },
  {
    quote:
      "Every placement came with a link I could open myself. No dashboards, no vanity numbers, just the position.",
    name: "C. Bramley",
    detail: "Speculative fiction · Listopia campaign",
    service: "Goodreads Listopia Promotion",
  },
  {
    quote:
      "Replies came back in under an hour, every time. For a debut author that is worth as much as the work itself.",
    name: "T. Ashford",
    detail: "Debut memoir · Multiple services",
    service: "Multiple Services",
  },
  {
    quote:
      "I sent three chapters on a Sunday and had a real answer, from a person who had read them, before Monday lunchtime.",
    name: "L. Marchetti",
    detail: "Historical fiction · Listopia campaign",
    service: "Goodreads Listopia Promotion",
  },
  {
    quote:
      "They pushed back on my blurb twice. Both times they were right, and the listing reads like a book people want now.",
    name: "S. Nightingale",
    detail: "Thriller · Amazon SEO",
    service: "Amazon SEO Optimisation",
  },
  {
    quote:
      "The film they cut is the only marketing asset I have never had to apologise for.",
    name: "D. Achebe",
    detail: "Speculative fiction · Cinematic trailer",
    service: "Cinematic Book Trailer",
  },
  {
    quote:
      "Working with a studio that takes four books a quarter feels completely different to being a ticket in a queue.",
    name: "H. Larsen",
    detail: "Memoir · Multiple services",
    service: "Multiple Services",
  },
  {
    quote:
      "My website now sells the backlist while I write. That was the whole point and nobody else understood it.",
    name: "P. Osei",
    detail: "Fantasy series · Author website",
    service: "Author Website Design",
  },
];

export const reviewFilters = [
  "All reviews",
  "Goodreads Listopia Promotion",
  "Cinematic Book Trailer",
  "Author Website Design",
  "Amazon SEO Optimisation",
  "Multiple Services",
];

/** Video reviews recorded by authors after their campaigns. */
export const videoReviews = [
  {
    slug: "geoffrey-arnold",
    name: "Geoffrey Arnold",
    detail: "Historical fiction · Listopia campaign & trailer",
    video: "/__l5e/assets-v1/8d935713-4cc7-4953-90ff-c4f37273d84e/review-geoffrey-arnold.mp4",
    text: "Geoffrey talks through what changed once the book had a film and a place on the right reader lists.",
  },
  {
    slug: "steve-young",
    name: "Steve Young",
    detail: "Non-fiction · Listing rebuild & author site",
    video: "/__l5e/assets-v1/add73a80-a4a2-429d-b33e-47fb3841f163/review-steve-young.mp4",
    text: "Steve on rebuilding a tired listing, and what a proper author platform did for the next launch.",
  },
];

/** Reader-facing catalogue for the Find Your Book library. */
export const bookGenres = [
  "All books",
  "Crime & Thriller",
  "Literary & Memoir",
  "Non-fiction & Ideas",
  "Fantasy & Speculative",
  "Romance & Contemporary",
  "Young Adult",
];

export const books = [
  {
    slug: "the-long-cold-water",
    title: "The Long Cold Water",
    author: "Client title",
    genre: "Crime & Thriller",
    image: reel1,
    blurb:
      "A missing-persons case reopens on the coast, and the detective who closed it has the most to lose.",
    work: ["Cinematic trailer", "Amazon SEO"],
  },
  {
    slug: "everything-we-carried",
    title: "Everything We Carried",
    author: "Client title",
    genre: "Literary & Memoir",
    image: reel2,
    blurb: "Three generations, one house, and the year everyone finally says the quiet part out loud.",
    work: ["Cinematic trailer", "Author website"],
  },
  {
    slug: "the-attention-economy-of-ideas",
    title: "The Attention Economy of Ideas",
    author: "Client title",
    genre: "Non-fiction & Ideas",
    image: reel3,
    blurb: "Why good arguments lose to loud ones, and what writers can do about it.",
    work: ["Goodreads Listopia", "Cinematic trailer"],
  },
  {
    slug: "saltcliff",
    title: "Saltcliff",
    author: "Client title",
    genre: "Fantasy & Speculative",
    image: reel4,
    blurb: "A drowned kingdom returns one tide at a time, and only the lighthouse keeper remembers why.",
    work: ["Cinematic trailer", "Author website", "Listopia"],
  },
  {
    slug: "the-second-summer-list",
    title: "The Second Summer List",
    author: "Client title",
    genre: "Romance & Contemporary",
    image: reel2,
    blurb: "Two strangers inherit the same seaside bookshop and one very stubborn list of promises.",
    work: ["Goodreads Listopia", "Author website"],
  },
  {
    slug: "north-of-quiet",
    title: "North of Quiet",
    author: "Client title",
    genre: "Literary & Memoir",
    image: reel3,
    blurb: "A translator returns to the village she wrote out of her own story.",
    work: ["Cinematic trailer"],
  },
  {
    slug: "the-glasshouse-protocol",
    title: "The Glasshouse Protocol",
    author: "Client title",
    genre: "Crime & Thriller",
    image: reel1,
    blurb: "A biotech leak, a whistleblower with a false name, and forty-eight hours of evidence.",
    work: ["Amazon SEO", "Goodreads Listopia"],
  },
  {
    slug: "small-machines-of-hope",
    title: "Small Machines of Hope",
    author: "Client title",
    genre: "Non-fiction & Ideas",
    image: reel3,
    blurb: "Field notes on the inventors quietly repairing the systems everyone else abandoned.",
    work: ["Author website", "Amazon SEO"],
  },
  {
    slug: "the-ember-year",
    title: "The Ember Year",
    author: "Client title",
    genre: "Young Adult",
    image: reel4,
    blurb: "Fire season arrives early, and the town's youngest lookout sees something in the smoke.",
    work: ["Cinematic trailer", "Listopia"],
  },
  {
    slug: "widow-tide",
    title: "Widow Tide",
    author: "Client title",
    genre: "Fantasy & Speculative",
    image: reel4,
    blurb: "The sea takes a name each winter. This year it asks for one that is still being written.",
    work: ["Cinematic trailer"],
  },
  {
    slug: "paper-anniversary",
    title: "Paper Anniversary",
    author: "Client title",
    genre: "Romance & Contemporary",
    image: reel2,
    blurb: "A divorce lawyer, a wedding stationer, and one year of letters neither meant to send.",
    work: ["Author website"],
  },
  {
    slug: "the-quiet-hours-club",
    title: "The Quiet Hours Club",
    author: "Client title",
    genre: "Young Adult",
    image: reel1,
    blurb: "Five students, a locked library, and a rule none of them agreed to keep.",
    work: ["Goodreads Listopia", "Amazon SEO"],
  },
];
