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
    author: "Sample author project",
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
    author: "Sample author project",
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
    author: "Sample author project",
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
    author: "Sample author project",
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
    name: "Sample review",
    detail: "Crime thriller · Listopia campaign",
    service: "Goodreads Listopia Promotion",
  },
  {
    quote:
      "The trailer made people feel the book before they opened it. I have used it in every pitch since.",
    name: "Sample review",
    detail: "Literary fiction · Cinematic trailer",
    service: "Cinematic Book Trailer",
  },
  {
    quote:
      "My site finally reads like my writing. Newsletter sign-ups stopped being an accident and became the point.",
    name: "Sample review",
    detail: "Historical fiction · Author website",
    service: "Author Website Design",
  },
  {
    quote:
      "The categories were wrong for two years. A week of listing work fixed what months of ads never touched.",
    name: "Sample review",
    detail: "Non-fiction · Amazon SEO",
    service: "Amazon SEO Optimisation",
  },
  {
    quote:
      "Every placement came with a link I could open myself. No dashboards, no vanity numbers, just the position.",
    name: "Sample review",
    detail: "Speculative fiction · Listopia campaign",
    service: "Goodreads Listopia Promotion",
  },
  {
    quote:
      "Replies came back in under an hour, every time. For a debut author that is worth as much as the work itself.",
    name: "Sample review",
    detail: "Debut memoir · Multiple services",
    service: "Multiple Services",
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
