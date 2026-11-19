const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappText = "Hello Shizuka, I'd like a valuation for my ";

/** WhatsApp deep link for every "Message us" action; falls back to the contact section until a number is set. */
export const messageHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
  : "#contact";

export const socials = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#contact",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#contact",
};

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#buy", label: "What we buy" },
  { href: "#about", label: "About us" },
  { href: "#contact", label: "Contact" },
];

export const steps = [
  {
    title: "Request a valuation",
    body: "Send photos and details on WhatsApp or through our online form. We’ll reply with a valuation range, subject to authentication.",
  },
  { title: "Collect & authenticate", body: "We’ll arrange white-glove collection of your items and authenticate them in-house." },
  {
    title: "Offers from our buyer network",
    body: "Once your item is authenticated, we invite offers from professional buyers to get you a competitive price.",
  },
  { title: "Accept the proposal", body: "If you’re happy with the best offer, accept it and the funds reach your account within 48 hours." },
];

export const categories = [
  { label: "Jewellery", image: "/images/cat-jewellery-sq.jpg" },
  { label: "Watches", image: "/images/cat-watches-sq.jpg" },
  { label: "Handbags", image: "/images/cat-bags-sq.jpg" },
];

/** Placeholders until the client supplies approved reviews. Do not replace with invented quotes. */
export const reviews = [
  { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. watch]" },
  { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. handbag]" },
  { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. jewellery]" },
];
