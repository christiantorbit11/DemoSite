export const company = {
  name: "Farnen & Dermer Inc.",
  shortName: "Farnen & Dermer",
  founded: 1948,
  tagline: "Baltimore's Heating & Cooling Craftsmen",
  phone: "(410) 555-0148",
  phoneHref: "tel:+14105550148",
  email: "service@farnendermer.com",
  address: "1847 Fleet Street, Baltimore, MD 21231",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Emergency Service Only" },
  ],
  emergencyNote: "24/7 Emergency Service Available",
  license: "MD HVAC License #2201948",
};

export const serviceArea = [
  "Baltimore City",
  "Fells Point",
  "Canton",
  "Roland Park",
  "Towson",
  "Catonsville",
  "Dundalk",
  "Glen Burnie",
  "Columbia",
  "Ellicott City",
  "Pikesville",
  "Essex",
];

export const services = [
  {
    id: "heating",
    title: "Heating & Furnace",
    summary: "Repair, replacement, and installation for furnaces, boilers, and heat pumps — built for Baltimore's rowhouse radiators and modern systems alike.",
    details: [
      "Furnace & boiler repair and full replacement",
      "Heat pump installation and servicing",
      "Radiator and steam-heat system restoration",
      "Emergency no-heat response",
    ],
  },
  {
    id: "cooling",
    title: "Air Conditioning",
    summary: "Central air, ductless mini-splits, and whole-home cooling solutions engineered for Maryland's humid summers.",
    details: [
      "Central AC installation and repair",
      "Ductless mini-split systems",
      "Seasonal tune-ups and refrigerant service",
      "High-efficiency system upgrades",
    ],
  },
  {
    id: "ductwork",
    title: "Ductwork & Ventilation",
    summary: "Custom duct design and sealing for historic homes and new construction, improving airflow and efficiency throughout.",
    details: [
      "Duct design, installation & repair",
      "Duct sealing and insulation",
      "Ventilation balancing for older homes",
      "Attic and crawlspace fitting",
    ],
  },
  {
    id: "air-quality",
    title: "Indoor Air Quality",
    summary: "Whole-home air purification, humidity control, and filtration to keep every room comfortable and clean.",
    details: [
      "Whole-house air purifiers",
      "Humidifiers & dehumidifiers",
      "Advanced filtration systems",
      "UV germicidal lighting",
    ],
  },
  {
    id: "maintenance",
    title: "The Heritage Club Maintenance Plan",
    summary: "Our signature membership plan — priority scheduling, seasonal tune-ups, and preferred pricing, passed down like a family trust.",
    details: [
      "Two seasonal tune-ups per year",
      "Priority emergency scheduling",
      "15% preferred member pricing",
      "No overtime charges, ever",
    ],
  },
  {
    id: "commercial",
    title: "Commercial HVAC",
    summary: "Full-service heating and cooling for Baltimore's shops, restaurants, and offices — from rooftop units to boiler rooms.",
    details: [
      "Rooftop unit installation & service",
      "Commercial boiler maintenance",
      "Preventive maintenance contracts",
      "Emergency commercial response",
    ],
  },
];

export const reviews = [
  {
    name: "Margaret O'Donnell",
    location: "Fells Point",
    rating: 5,
    text: "Farnen & Dermer has serviced our rowhouse's ancient radiators for three winters now. They treat a hundred-year-old boiler with more care than most companies treat a brand-new one. True craftsmen.",
  },
  {
    name: "James Whitfield",
    location: "Roland Park",
    rating: 5,
    text: "Our AC gave out on the hottest day of the year and they had a technician at the door in under two hours. Professional, courteous, and the pricing was exactly what they quoted. No surprises.",
  },
  {
    name: "Patricia Nguyen",
    location: "Towson",
    rating: 5,
    text: "Four generations of the same family business still doing the work themselves — you can feel the difference. They replaced our entire duct system and it looks like it was always meant to be there.",
  },
  {
    name: "Robert Alessi",
    location: "Canton",
    rating: 5,
    text: "The Heritage Club membership has paid for itself twice over. Never had to wait, never got upsold on something I didn't need. This is what a family business is supposed to feel like.",
  },
  {
    name: "Diane Carter",
    location: "Catonsville",
    rating: 4,
    text: "Excellent installation work on our new heat pump system. Took a bit longer than expected to schedule during peak season, but the finished job was flawless and they cleaned up perfectly.",
  },
  {
    name: "Michael Brennan",
    location: "Ellicott City",
    rating: 5,
    text: "Called them for a commercial boiler emergency at our restaurant on a Sunday night. They picked up, walked us through a temporary fix over the phone, and had a crew out first thing Monday. Lifesavers.",
  },
];

export const timeline = [
  {
    year: "1948",
    title: "A Handshake on Fleet Street",
    text: "Walter Farnen and Henry Dermer, two coal-furnace fitters from Fells Point, open a small storefront converting Baltimore rowhomes from coal to oil heat.",
  },
  {
    year: "1962",
    title: "The Second Generation",
    text: "Walter's son, Charles Farnen, joins the trade and pushes the company into the growing world of residential air conditioning.",
  },
  {
    year: "1979",
    title: "1847 Fleet Street",
    text: "The company purchases and renovates its permanent home — the same brick storefront that still serves as headquarters today.",
  },
  {
    year: "1998",
    title: "Expanding to Commercial",
    text: "Third-generation leadership brings Farnen & Dermer into commercial HVAC, serving Baltimore's restaurants, shops, and offices.",
  },
  {
    year: "2015",
    title: "Modern Efficiency, Old-World Care",
    text: "High-efficiency heat pumps and smart climate systems join the lineup, without ever losing the personal touch of a family business.",
  },
  {
    year: "Today",
    title: "Fourth Generation, Same Address",
    text: "Farnen & Dermer remains proudly family-owned and independently operated — still fixing radiators one street over from where it all began.",
  },
];

export const stats = [
  { value: "77", suffix: "", label: "Years in Business" },
  { value: "4", suffix: "th", label: "Generation Family-Owned" },
  { value: "38,000", suffix: "+", label: "Homes Serviced" },
  { value: "24", suffix: "/7", label: "Emergency Response" },
];
