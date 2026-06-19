// Centralized site data — used across nav, footer, schema, CTAs
// Hotshot Insurance — hotshot trucking insurance for owner-operators

export const SITE = {
  name: "Hotshot Insurance",
  legalName: "Hotshot Insurance (by Contractors Choice Agency)",
  domain: "hotshotinsurance.com",
  url: "https://hotshotinsurance.com",
  tagline: "Insurance for Hotshot Truckers & Owner-Operators",
  description:
    "Specialized commercial insurance for hotshot trucking — primary trucking liability, motor truck cargo, physical damage, bobtail & non-trucking liability, trailer interchange, occupational accident, general liability, and commercial umbrella. Built for non-CDL and CDL owner-operators running Class 3–5 pickup trucks with gooseneck, pintle, and flatbed trailers under their own MC/USDOT authority. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Hotshot",
  brandSub: "Trucking Insurance",
  nicheShort: "hotshot trucking",
  nicheShortCap: "Hotshot Trucking",
  nichePlural: "hotshot operations",
  nichePluralCap: "Hotshot Operations",
  operator: "hotshot operation",
  operatorCap: "Hotshot Operation",
  industry: "hotshot trucking",
  industryCap: "Hotshot Trucking",
  audience: "hotshot owner-operators",
  audienceCap: "Hotshot Owner-Operators",
  ownerTitle: "hotshot owner-operator",
  regionPill: "Texas · Permian · National",
  serviceSuffix: "Hotshot Operations",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "trucking-liability",
    title: "Hotshot Auto & Trucking Liability",
    short: "Primary liability — the FMCSA-mandated coverage that keeps you legal",
    description:
      "The coverage that defines a hotshot operation. Primary auto and trucking liability protects the public when you're at fault in an accident — meeting FMCSA minimums (typically $750K–$1M) for interstate hotshot carriers operating under their own MC/USDOT authority with Class 3–5 trucks and gooseneck, pintle, or flatbed trailers.",
    icon: "Truck",
    keywords: ["hotshot trucking liability insurance", "primary liability for hotshot", "FMCSA hotshot insurance requirements", "commercial auto liability hotshot"],
  },
  {
    slug: "cargo-insurance",
    title: "Motor Truck Cargo Insurance",
    short: "The load you're hauling — pipe, materials, machinery, freight",
    description:
      "Covers the freight in your care, custody, and control — oilfield pipe and equipment, building materials, machinery, steel, and time-critical LTL freight. Most brokers and shippers require $100K cargo minimum, and many oilfield and high-value loads demand more. Written for the realities of flatbed, gooseneck, and step-deck hotshot hauling.",
    icon: "PackageCheck",
    keywords: ["motor truck cargo insurance", "hotshot cargo insurance", "cargo insurance for hotshot truckers", "flatbed cargo coverage"],
  },
  {
    slug: "physical-damage",
    title: "Physical Damage (Collision & Comprehensive)",
    short: "Your truck and trailer — covered when you're off the hook",
    description:
      "Collision and comprehensive coverage for the truck and trailer you actually own — an F-350/450/550, Ram, or GM HD pulling a gooseneck, pintle, or flatbed. Liability only pays the other guy; physical damage pays to repair or replace your rig after a crash, theft, fire, vandalism, storm, or rollover, plus gap coverage when you're financed.",
    icon: "Wrench",
    keywords: ["hotshot physical damage insurance", "collision coverage hotshot truck", "comprehensive truck insurance", "hotshot truck insurance cost"],
  },
  {
    slug: "bobtail-insurance",
    title: "Bobtail & Non-Trucking Liability",
    short: "Covered when you're bobtailing or off dispatch",
    description:
      "Liability protection when you're driving your truck without a trailer attached (bobtailing) or operating outside of dispatched, load-related business (non-trucking). Primary liability only covers you under a load — bobtail and non-trucking fill the gap for personal miles, deadhead repositioning, and trips between brokers.",
    icon: "Route",
    keywords: ["bobtail insurance", "non-trucking liability insurance", "bobtail coverage hotshot", "deadhead liability trucking"],
  },
  {
    slug: "trailer-interchange",
    title: "Trailer Interchange Coverage",
    short: "For non-owned trailers you pull under an interchange agreement",
    description:
      "Physical damage coverage for trailers you don't own but are contractually responsible for under a trailer-interchange or power-only agreement. If you pull shipper-, broker-, or carrier-owned gooseneck, flatbed, or step-deck trailers and damage or lose one, interchange pays to repair or replace it — closing a gap standard physical damage leaves open.",
    icon: "Container",
    keywords: ["trailer interchange insurance", "power only trailer coverage", "non-owned trailer insurance", "interchange agreement coverage"],
  },
  {
    slug: "occupational-accident",
    title: "Occupational Accident Insurance",
    short: "On-the-job injury cover for independent owner-operators",
    description:
      "An owner-operator's alternative to workers' compensation — covering accidental death, dismemberment, and medical and disability benefits if you're injured on the job. Required by many carriers and lease agreements for independent contractors, and often the most cost-effective way for a leased or independent hotshot operator to satisfy occupational-injury requirements.",
    icon: "HeartPulse",
    keywords: ["occupational accident insurance trucking", "occ acc hotshot", "owner operator occupational accident", "trucker injury insurance"],
  },
  {
    slug: "general-liability",
    title: "General Liability for Hotshot Truckers",
    short: "Motor truck GL — the coverage that isn't auto liability",
    description:
      "Motor truck general liability covers the exposure auto liability doesn't — bodily injury and property damage while loading and unloading, at a shipper's lot, at a receiver's dock, or from your truck's operation off the roadway. Most brokers and oilfield accounts require it, and it's a common gap in a bare-bones hotshot program.",
    icon: "ShieldCheck",
    keywords: ["general liability for hotshot truckers", "motor truck general liability", "hotshot carrier insurance", "trucking GL coverage"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella / Excess Liability",
    short: "Extra limits above primary auto and GL for big claims",
    description:
      "Excess liability that sits above your primary trucking liability and general liability — kicking in when a catastrophic accident exhausts your underlying limits. A serious at-fault wreck with a loaded trailer can blow past $1M in seconds; an umbrella extends your protection to $2M, $3M, $5M and beyond, and is often required by high-value shippers and brokers.",
    icon: "Umbrella",
    keywords: ["commercial umbrella trucking", "excess liability hotshot", "truck umbrella insurance", "hotshot excess liability coverage"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-permian", name: "Texas & the Permian Basin", region: "West Texas · Eagle Ford · Haynesville", blurb: "The capital of American hotshot trucking. We insure Texas owner-operators hauling oilfield pipe, frac equipment, and field freight out of the Permian and Eagle Ford — with markets that understand oilfield cargo minimums, lease-operator requirements, and the round-the-clock demands of field hauling." },
  { slug: "gulf-coast", name: "Gulf Coast", region: "Texas · Louisiana · Mississippi · Alabama", blurb: "Refinery, petrochemical, and offshore-support hotshot freight along the Gulf. Coverage for operators running pipe, valves, and equipment into and out of Port Arthur, Houston, Lake Charles, and Mobile — including the higher cargo and environmental minimums Gulf shippers require." },
  { slug: "oklahoma-mid-continent", name: "Oklahoma & Mid-Continent", region: "OK · Southern KS · AR", blurb: "An oil-and-gas hotshot corridor through Oklahoma and the Mid-Continent. Programs for owner-operators serving the Anadarko and Arkoma basins — hauling tubular goods, pumps, and field materials with the cargo limits and authority structure Oklahoma carriers and brokers expect." },
  { slug: "bakken-northern-plains", name: "North Dakota Bakken & Northern Plains", region: "ND · Eastern MT · SD", blurb: "Williston Basin oilfield hotshot work. Coverage for operators running pipe, frac iron, and rig supplies across the Bakken and Three Forks — built for harsh-weather hauling, remote oilfield deliveries, and the high cargo minimums Bakken shippers and operators require." },
  { slug: "midwest", name: "Midwest", region: "Illinois · Indiana · Ohio · Michigan · Iowa", blurb: "Building-materials, machinery, and agricultural-equipment hotshot freight across the Midwest. Programs for owner-operators hauling steel, lumber, precast, implements, and oversize components with the cargo, GL, and permitting structure Midwest manufacturers and brokers demand." },
  { slug: "southeast", name: "Southeast", region: "Florida · Georgia · the Carolinas · Tennessee", blurb: "Time-critical LTL and construction hotshot freight across the Southeast. Coverage for owner-operators serving Georgia's logistics corridor, Florida ports, and the Carolinas — including expedited freight minimums and the cargo structure expedite and construction shippers require." },
  { slug: "mountain-west", name: "Mountain West", region: "Colorado · Wyoming · Utah · New Mexico", blurb: "Energy, mining, and outdoor-industry hotshot work across the Mountain West. Programs for operators hauling oilfield and mining equipment, building materials, and manufactured goods into the Rockies — built for steep-grade, long-distance hauling and the cargo limits western energy shippers expect." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "Washington · Oregon · Idaho", blurb: "Forestry, agricultural, and tech-manufacturing hotshot freight through the Pacific Northwest. Coverage for owner-operators serving the I-5 and I-84 corridors — hauling machinery, building materials, and components with the cargo, GL, and chain-up requirements PNW shippers and terrain demand." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Hotshot-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 240, suffix: "+", label: "Hotshot owner-operators insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trucking operations", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "I went out on my own MC authority and three agents quoted me a generic trucking policy that missed cargo minimums my broker required. Hotshot Insurance built the whole stack — liability, cargo, physical damage, and bobtail — at real limits, and had my certificates out the same day. They actually know hotshot.", name: "Marcus T.", role: "Owner-Operator", location: "Odessa, Texas" },
  { quote: "When my F-550 and gooseneck were sideswiped, physical damage paid out fast and got me back rolling without a fight. My old carrier would've lowballed the trailer. These folks understand what a loaded gooseneck and a CDL-free operation actually cost to replace.", name: "Dustin R.", role: "Leased Owner-Operator", location: "Williston, North Dakota" },
  { quote: "Two carriers declined me over a prior at-fault and oilfield cargo exposure. These guys placed a real program with an A-rated carrier, got my cargo up to what the Permian shippers require, and structured bobtail so I'm covered deadheading between fields. Real hotshot knowledge, not a call center.", name: "Hank W.", role: "Independent Carrier", location: "Oklahoma" },
] as const;
