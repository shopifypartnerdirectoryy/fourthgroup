/**
 * Public proof is intentionally empty until client work and reviews have been
 * verified and the relevant authors have approved publication.
 */
export const portfolio: { slug: string; title: string; author: string; category: string; image: string; alt: string; length: string; text: string; disciplines: string[] }[] = [];
export const caseStudies: { slug: string; title: string; engagement: string; status: string; summary: string; metrics: {label:string;value:string}[] }[] = [];
export const reviews: { quote: string; name: string; detail: string; service: string }[] = [];
export const videoReviews: { slug: string; name: string; detail: string; video: string; text: string }[] = [];

export const reviewFilters = [
  "All reviews",
  "Targeted Reader Email Campaigns",
  "Goodreads Discovery & Listopia Placement",
  "Interactive Reader Book Challenges",
  "TikTok Book Features",
  "Instagram Book Features",
  "Full-Service Social Media Management",
  "Cinematic Book Trailer Creation",
  "Editorial 3D Book Mockup Suite",
  "Audiobook Production Services",
  "Bespoke Author Website Design",
  "Author Website Overhaul & Redesign",
  "Amazon SEO & Book Listing Optimisation",
];

export const pricingTiers = [
  { name: "The Debut Visibility Suite", legacyName: "Starter Placement", price: "$95", tag: "Entry campaign", summary: "A focused first step into Goodreads discovery for a published title.", features: ["Single Listopia placement", "Genre-matched list selection", "Genuine reader activity only; no purchased votes", "End-of-campaign position report"], featured: false },
  { name: "The Bestseller Momentum Campaign", legacyName: "Standard Campaign", price: "$156", tag: "Expanded discovery", summary: "A broader Listopia placement campaign with more extensive reporting.", features: ["Multiple Listopia placements", "Genre-matched list selection", "Genuine reader activity only; no purchased votes", "Campaign progress update", "Report with live, checkable links"], featured: true },
  { name: "The Complete Author Brand & Launch", legacyName: "Premium Visibility", price: "$375", tag: "Broader launch support", summary: "The existing premium Listopia tier, presented as a starting point for a wider author launch conversation.", features: ["Maximum Listopia placements within agreed scope", "Multi-genre targeting where relevant", "Genuine reader activity only; no purchased votes", "Weekly progress updates", "Comprehensive documented report", "Priority support"], featured: false },
];

export const pricingComparison = { rows: [
  { label: "Existing tier", values: ["Starter Placement", "Standard Campaign", "Premium Visibility"] },
  { label: "List placements", values: ["One", "Multiple", "Maximum within agreed scope"] },
  { label: "Genre targeting", values: ["Single genre", "Single genre", "Multi-genre where relevant"] },
  { label: "Reader activity", values: ["Genuine only", "Genuine only", "Genuine only"] },
  { label: "Progress updates", values: ["End of campaign", "Campaign update", "Weekly"] },
  { label: "Report with live links", values: ["Basic", "Full", "Comprehensive"] },
  { label: "Priority support", values: ["—", "—", "Yes"] },
] };
