/* ============================================================
   SAMPADA FURNITURE — Catalog & Content Data
   ============================================================ */

const SF_DATA = {
  categories: [
    { slug: "sofas",    name: "Sofas & Seating", count: 24, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" },
    { slug: "beds",     name: "Beds & Bedroom",  count: 18, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" },
    { slug: "dining",   name: "Dining",          count: 16, img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200&auto=format&fit=crop" },
    { slug: "tables",   name: "Tables & Desks",  count: 21, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" },
    { slug: "storage",  name: "Storage",         count: 14, img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop" },
    { slug: "lighting", name: "Lighting",        count: 12, img: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=1200&auto=format&fit=crop" }
  ],

  products: [
    { id: 1,  name: "Aurelia Cloud Sofa",     cat: "sofas",    price: 84999, was: 99999,  rating: 4.9, reviews: 132, tag: "bestseller", isNew: false, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900&auto=format&fit=crop" },
    { id: 2,  name: "Verona Lounge Chair",    cat: "sofas",    price: 32499, was: null,   rating: 4.8, reviews: 86,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=900&auto=format&fit=crop" },
    { id: 3,  name: "Kaveri King Bed",        cat: "beds",     price: 72999, was: 84999,  rating: 4.9, reviews: 104, tag: "sale",      isNew: false, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop" },
    { id: 4,  name: "Malhar Dining Table",    cat: "dining",   price: 56999, was: null,   rating: 4.7, reviews: 63,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=900&auto=format&fit=crop" },
    { id: 5,  name: "Tara Writing Desk",      cat: "tables",   price: 21999, was: null,   rating: 4.6, reviews: 41,  tag: null,        isNew: false, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop" },
    { id: 6,  name: "Nalanda Bookshelf",      cat: "storage",  price: 38999, was: 44999,  rating: 4.8, reviews: 77,  tag: "sale",      isNew: false, img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=900&auto=format&fit=crop" },
    { id: 7,  name: "Diya Arc Floor Lamp",    cat: "lighting", price: 12499, was: null,   rating: 4.7, reviews: 58,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=900&auto=format&fit=crop" },
    { id: 8,  name: "Udaipur Armchair",       cat: "sofas",    price: 28999, was: null,   rating: 4.8, reviews: 92,  tag: "bestseller",isNew: false, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900&auto=format&fit=crop" },
    { id: 9,  name: "Meher Console Table",    cat: "tables",   price: 26499, was: null,   rating: 4.5, reviews: 33,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=900&auto=format&fit=crop" },
    { id: 10, name: "Nirvana Platform Bed",   cat: "beds",     price: 64999, was: null,   rating: 4.9, reviews: 118, tag: "bestseller",isNew: false, img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=900&auto=format&fit=crop" },
    { id: 11, name: "Sahil Dining Chair",     cat: "dining",   price: 9499,  was: 11999,  rating: 4.6, reviews: 149, tag: "sale",      isNew: false, img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=900&auto=format&fit=crop" },
    { id: 12, name: "Ivory Linen Sofa",       cat: "sofas",    price: 78999, was: null,   rating: 4.8, reviews: 71,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900&auto=format&fit=crop" },
    { id: 13, name: "Kansa Bar Cabinet",      cat: "storage",  price: 45999, was: null,   rating: 4.7, reviews: 39,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=900&auto=format&fit=crop" },
    { id: 14, name: "Anaya Nightstand",       cat: "beds",     price: 11999, was: null,   rating: 4.5, reviews: 54,  tag: null,        isNew: false, img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=900&auto=format&fit=crop" },
    { id: 15, name: "Rajkot Coffee Table",    cat: "tables",   price: 18499, was: 22499,  rating: 4.6, reviews: 67,  tag: "sale",      isNew: false, img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop" },
    { id: 16, name: "Leather Poet Chair",     cat: "sofas",    price: 41999, was: null,   rating: 4.9, reviews: 88,  tag: "bestseller",isNew: false, img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=900&auto=format&fit=crop" },
    { id: 17, name: "Zoya Pendant Light",     cat: "lighting", price: 8999,  was: null,   rating: 4.4, reviews: 46,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=900&auto=format&fit=crop" },
    { id: 18, name: "Harvest Dining Bench",   cat: "dining",   price: 15999, was: null,   rating: 4.6, reviews: 29,  tag: null,        isNew: false, img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=900&auto=format&fit=crop" },
    { id: 19, name: "Velvet Muse Sofa",       cat: "sofas",    price: 92999, was: 109999, rating: 5.0, reviews: 57,  tag: "sale",      isNew: true,  img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=900&auto=format&fit=crop" },
    { id: 20, name: "Arbor Study Desk",       cat: "tables",   price: 24499, was: null,   rating: 4.7, reviews: 62,  tag: null,        isNew: true,  img: "https://images.unsplash.com/photo-1493150134366-cacb0bdc03fe?q=80&w=900&auto=format&fit=crop" }
  ],

  reviews: [
    { name: "Priya Deshmukh", role: "Homeowner, Pune", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", stars: 5, text: "The Aurelia sofa transformed our living room. You can feel the craftsmanship in every seam — it arrived white-glove, assembled, and placed exactly where we wanted it." },
    { name: "Arjun Mehta", role: "Interior Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", stars: 5, text: "I specify Sampada for every residential project now. The walnut joinery is flawless, and their team honours timelines like clockwork. Rare in this industry." },
    { name: "Kavita Rao", role: "Homeowner, Mumbai", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", stars: 5, text: "We visited the showroom 'just to look' and left with a dining set and two armchairs. The staff understood our space better than we did. Delivery was impeccable." },
    { name: "Rohan Kapoor", role: "Boutique Hotelier", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", stars: 5, text: "Furnished our entire 14-room property with Sampada. Guests constantly ask where the beds are from. That says everything about the comfort and finish." },
    { name: "Sneha Iyer", role: "Homeowner, Bengaluru", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", stars: 5, text: "Three years in, our Kaveri bed still looks brand new. Solid wood, no squeaks, no sagging. Worth every rupee — this is furniture you pass down." }
  ],

  reels: [
    { id: 1, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop", caption: "Behind the craft: Aurelia sofa build", views: "24.1K" },
    { id: 2, img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop", caption: "Showroom walkthrough — new wing", views: "18.7K" },
    { id: 3, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop", caption: "Styling a reading corner in 60s", views: "31.2K" },
    { id: 4, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop", caption: "Walnut vs oak — which is you?", views: "12.4K" },
    { id: 5, img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=600&auto=format&fit=crop", caption: "Client home reveal, Koregaon Park", views: "42.9K" },
    { id: 6, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop", caption: "Dining room moodboard to reality", views: "15.8K" },
    { id: 7, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop", caption: "One chair, three ways to style", views: "9.6K" }
  ],

  posts: [
    { slug: "art-of-slow-living-rooms", tag: "Design Philosophy", title: "The Art of Slow Living Rooms", excerpt: "Why the most luxurious thing a room can offer is calm — and how to compose one with intention, texture, and restraint.", date: "Aug 12, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop", featured: true },
    { slug: "choosing-solid-wood", tag: "Craft", title: "Choosing Solid Wood: A Buyer's Field Guide", excerpt: "Teak, walnut, oak, sheesham — what each grain tells you about the life a piece will live in your home.", date: "Aug 4, 2026", read: "8 min", img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000&auto=format&fit=crop" },
    { slug: "small-space-big-comfort", tag: "Styling", title: "Small Spaces, Big Comfort", excerpt: "Five layout moves that make compact city apartments feel like boutique suites.", date: "Jul 27, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop" },
    { slug: "lighting-layers", tag: "Styling", title: "Lighting in Layers, Not Levels", excerpt: "Ambient, task, accent — the three-layer formula our stylists use in every showroom vignette.", date: "Jul 18, 2026", read: "4 min", img: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=1000&auto=format&fit=crop" },
    { slug: "behind-the-joinery", tag: "Craft", title: "Behind the Joinery: A Day in Our Workshop", excerpt: "Mortise, tenon, and 40 years of muscle memory — meet the hands behind Sampada's signature finish.", date: "Jul 9, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop" },
    { slug: "colour-story-terracotta", tag: "Trends", title: "Colour Story: The Return of Terracotta", excerpt: "Earth tones are having a renaissance. Here's how to bring warmth home without repainting a wall.", date: "Jun 30, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop" }
  ]
};
