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

export const launchPackages = [
  {
    name: "The Debut Visibility Suite",
    price: "$395",
    summary: "A coordinated first campaign for a new title.",
    features: ["3D book mockups", "15-second book trailer", "TikTok feature", "Instagram feature", "Goodreads placement on 2 lists"],
    featured: false,
  },
  {
    name: "The Bestseller Momentum Campaign",
    price: "$1,150",
    summary: "A broader month-long campaign combining creative, reader outreach and social content.",
    features: ["30-second book trailer", "30-day social media management · 30 content pieces", "Reader email campaign · 1,000 contacts", "Goodreads placement on 5 lists", "Standard reader book challenge"],
    featured: true,
  },
  {
    name: "The Complete Author Brand & Launch",
    price: "$2,450",
    summary: "An integrated author brand and launch package with a dedicated digital home.",
    features: ["Custom author website", "60-second book trailer", "30-day social media management · 30 content pieces", "Reader email campaign · 2,500 contacts", "Premium reader book challenge"],
    featured: false,
  },
];

export const pricingTiers = [
  {
    name: "Starter Placement",
    price: "$95",
    tag: "Single list",
    summary: "A first, careful step into Goodreads discovery.",
    features: ["Single Listopia placement", "Genre-matched list selection", "Real reader votes only", "End-of-campaign position report"],
    featured: false,
  },
  {
    name: "Standard Campaign",
    price: "$156",
    tag: "Existing middle tier",
    summary: "The existing multi-placement Listopia package.",
    features: ["Multiple Listopia placements", "Genre-matched list selection", "Real reader votes only", "Priority reader-network engagement", "Full report with live, checkable links"],
    featured: true,
  },
  {
    name: "Premium Visibility",
    price: "$375",
    tag: "Existing premium tier",
    summary: "The existing premium Listopia placement package.",
    features: ["Maximum Listopia placements", "Multi-genre targeting", "Full reader-network engagement", "Weekly progress updates", "Comprehensive documented report", "Priority support under one hour"],
    featured: false,
  },
];

export const pricingComparison = { rows: [
  { label: "Existing tier", values: ["Starter Placement", "Standard Campaign", "Premium Visibility"] },
  { label: "List placements", values: ["One", "Multiple", "Maximum"] },
  { label: "Genre targeting", values: ["Single genre", "Single genre", "Multi genre"] },
  { label: "Real reader votes", values: ["Yes", "Yes", "Yes"] },
  { label: "Network engagement", values: ["Standard", "Priority", "Full network"] },
  { label: "Progress updates", values: ["End of campaign", "Mid and end", "Weekly"] },
  { label: "Report with live links", values: ["Basic", "Full", "Comprehensive"] },
  { label: "Priority support", values: ["—", "—", "Yes"] },
] };
