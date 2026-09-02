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

export const serviceDetails: Record<
  string,
  { intro: string; deliverables: string[]; timeline: string; ideal: string }
> = {
  "goodreads-listopia": {
    intro:
      "Listopia is where readers browse by mood, genre and theme long before they browse by bestseller rank. We work your title onto the lists that match it and build genuine voting momentum behind it.",
    deliverables: [
      "List research and shortlist tailored to the book",
      "Placement and voting campaign run over several weeks",
      "Live link report so every position can be checked",
      "Post-campaign position hold review",
    ],
    timeline: "Typically 3 to 6 weeks",
    ideal: "Authors with a published title who need discovery rather than more ads.",
  },
  "book-trailers": {
    intro:
      "A trailer is a short film, not a slideshow. We read the manuscript, write the script from it, then score, shoot or source, edit and grade a piece that lets a reader feel the book.",
    deliverables: [
      "Script and storyboard written with the author",
      "Original score and full sound design",
      "Colour grade and final master",
      "Cut-downs for Instagram, TikTok, YouTube and Amazon",
    ],
    timeline: "Typically 4 to 8 weeks",
    ideal: "Launches, relaunches and awards pushes that need one strong asset.",
  },
  "author-websites": {
    intro:
      "Your website is the only place online you fully control. We design and build an editorial home that reads like a first edition and turns visitors into subscribers.",
    deliverables: [
      "Bespoke design, no themes or page builders",
      "Books, events and press sections",
      "Newsletter and retailer integrations",
      "Fast, accessible build with SEO groundwork",
    ],
    timeline: "Typically 4 to 6 weeks",
    ideal: "Authors with more than one title, or a launch that needs a proper home.",
  },
  "amazon-seo": {
    intro:
      "Most books are invisible because of their categories and keywords, not their writing. We rebuild the listing around how buyers in your genre actually search.",
    deliverables: [
      "Backend keyword and category architecture",
      "Title, subtitle and description rewriting",
      "A+ content layout and copy",
      "Monthly competitive rank tracking",
    ],
    timeline: "Typically 1 to 2 weeks, then monthly review",
    ideal: "Published titles with good reviews but weak visibility.",
  },
};

export const faqs = [
  {
    q: "How many books do you take on?",
    a: "A small number each quarter. We would rather turn a book down than give it half the attention it needs.",
  },
  {
    q: "Do you read the manuscript first?",
    a: "Always. Nothing is proposed and nothing is priced until we have read the book and looked at the market it lands in.",
  },
  {
    q: "Can I book a single service?",
    a: "Yes. Listopia, trailers, websites and Amazon work can each run on their own, or be sequenced into one campaign.",
  },
  {
    q: "What does it cost?",
    a: "Listopia placement packages start from $95. Trailers, websites and listing work are quoted per book once we know the scope.",
  },
  {
    q: "How do I see results?",
    a: "Live links and real positions. You can check every placement yourself, during the campaign and after it ends.",
  },
  {
    q: "Do you work with debut authors?",
    a: "Often. A first book with a clear reader is easier to move than a fifth with none.",
  },
];

export const reasons = [
  {
    title: "We read before we pitch",
    text: "Strategy comes out of the manuscript, not a template deck reused from the last client.",
  },
  {
    title: "Made in house",
    text: "The people who scope the work make the work. Nothing is passed to a freelancer marketplace.",
  },
  {
    title: "Checkable reporting",
    text: "Live links and plain numbers. If a position moved, you can see it yourself.",
  },
  {
    title: "A short client list",
    text: "Capacity is deliberately limited so every book keeps a director's attention.",
  },
];
