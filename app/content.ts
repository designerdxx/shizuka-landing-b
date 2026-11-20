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

/** SAMPLE reviews for layout only. Replace with approved client quotes before launch; never present these as real. */
export const reviews = [
  { quote: "“I wanted a fair price without the back-and-forth of selling online. They collected the watch from my office, and the offers came in within days.”", name: "Omar K.", item: "Sold a watch" },
  { quote: "“Everything happened over WhatsApp. The chauffeur was on time, the bag was authenticated in-house, and I accepted the best offer without leaving home.”", name: "Sara A.", item: "Sold a handbag" },
  { quote: "“I changed my mind about one piece, and it came back to me, no questions asked. That’s when I knew I could trust them with the rest.”", name: "Noor H.", item: "Sold jewellery" },
];

/** FAQ answers use only facts already in the approved copy; the client confirms them before launch. */
export const faqs = [
  { q: "How does the valuation work?", a: "Send a few photos and details of your piece on WhatsApp. We’ll reply with a valuation range, subject to authentication. The valuation is free." },
  { q: "What do you buy?", a: "Handbags, watches and jewellery, including diamonds. If you’re not sure about a piece, send us a photo and ask." },
  { q: "Who collects my piece?", a: "A chauffeur in white gloves collects it from you. It’s kept safely stored while your account manager gathers bids. Nothing to carry, nowhere to go." },
  { q: "How do you check it’s authentic?", a: "Every piece is authenticated in-house before we invite offers from our buyer network." },
  { q: "How quickly will I be paid?", a: "Within 72 hours of your first message. Once you accept an offer, the funds reach your account within 48 hours." },
  { q: "What if I don’t like the offer?", a: "Selling with us is commitment-free. If you change your mind before the sale, your piece comes back to you." },
  { q: "Will my sale stay private?", a: "Yes. Shizuka was created for clients who wish to keep their privacy: your piece is offered to professional buyers in our network, not on a public marketplace." },
];
