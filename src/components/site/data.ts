import sariah from "@/assets/sariah.png.asset.json";
import edith from "@/assets/edith.jpg.asset.json";
import hannah from "@/assets/hannah.png.asset.json";

export const services = [
  {
    n: "01",
    slug: "goodreads-listopia",
    title: "Goodreads Listopia Promotion",
    blurb:
      "The highest-leverage discovery surface in publishing, worked list by list until your book sits where readers browse.",
    points: [
      "Curated list targeting by genre and reader intent",
      "Voting momentum built from real readers",
      "Placement reporting with live, checkable links",
    ],
    price: "From $95",
    note: "Placement packages",
  },
  {
    n: "02",
    slug: "book-trailers",
    title: "Cinematic Book Trailers",
    blurb:
      "A short film that lets a reader feel the book before they ever open it — scripted from your manuscript, never a template.",
    points: [
      "Original score, colour grade and sound design",
      "Cut for Instagram, TikTok, YouTube and Amazon",
      "Written and storyboarded with the author",
    ],
    price: "Quoted per book",
    note: "Bespoke production",
  },
  {
    n: "03",
    slug: "author-websites",
    title: "Author Website Design",
    blurb:
      "A home that reads like a first edition: considered, quiet and unmistakably yours from the first scroll.",
    points: [
      "Bespoke editorial design, no themes",
      "Newsletter, events and retailer integrations",
      "Built to load fast on every device",
    ],
    price: "Quoted per build",
    note: "Custom author site",
  },
  {
    n: "04",
    slug: "amazon-seo",
    title: "Amazon SEO Optimisation",
    blurb:
      "Category, keyword and copy work that puts your book in front of the buyers already searching for it.",
    points: [
      "Backend keyword and category architecture",
      "A+ content and description rewriting",
      "Competitive rank tracking month to month",
    ],
    price: "Quoted per author",
    note: "Listing and keyword work",
  },
];

export const team = [
  {
    name: "Sariah Swanson",
    role: "Founder & Campaign Director",
    email: "sariahswanson.uk@gmail.com",
    image: sariah.url,
    bio: "Leads campaign strategy across Listopia, retail and launch planning, and personally scopes every book the studio takes on.",
  },
  {
    name: "Edith Homer",
    role: "Head of Film & Production",
    email: "edithhomerr@gmail.com",
    image: edith.url,
    bio: "Runs trailer production end to end — script, score, edit and grade — so each film sounds the way the book reads.",
  },
  {
    name: "Hannah Carter",
    role: "Author Brand & Web Lead",
    email: "hannahcelestecarter@gmail.com",
    image: hannah.url,
    bio: "Designs and builds author websites and shapes the listing copy that carries a book from browse to buy.",
  },
];

export const process = [
  {
    step: "I",
    title: "Read the book",
    text: "Before anything is proposed, we read the manuscript and the market it lands in. Strategy comes out of the pages, not a deck.",
  },
  {
    step: "II",
    title: "Shape the campaign",
    text: "One clear plan: the disciplines that matter for this title, the sequence they run in, and what each one is expected to move.",
  },
  {
    step: "III",
    title: "Make the work",
    text: "Film, design, listings and placements are produced in house by the people who scoped them. Nothing is passed to a template.",
  },
  {
    step: "IV",
    title: "Report honestly",
    text: "Live links, real positions, plain numbers. You always know where the book is and what happened next.",
  },
];
