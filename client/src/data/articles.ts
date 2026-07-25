export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  body: Section[];
}

interface Section {
  heading?: string;
  text: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-spot-a-quality-handbag",
    title: "How to Spot a Quality Handbag: 7 Things to Check Before You Buy",
    excerpt: "Not every beautiful bag is a well-made one. Here are the seven details that separate a bag worth investing in from one that will disappoint you in six months.",
    date: "12 June 2026",
    readTime: "5 min read",
    category: "Style Guide",
    image: "/fine.png",
    body: [
      { text: "Buying a handbag is one of the most personal fashion decisions you can make. It travels with you, holds your world, and speaks before you do. But with so many options at every price point, how do you know what is actually worth your money?" },
      { heading: "1. Check the stitching", text: "Run your finger along every seam. Stitches should be tight, even, and consistent. Loose threads or uneven spacing are the first sign of poor craftsmanship." },
      { heading: "2. Feel the weight of the hardware", text: "Quality zippers, clasps, and rings feel substantial. Lightweight, hollow hardware tarnishes quickly and breaks under daily use." },
      { heading: "3. Smell the leather", text: "Genuine leather has a distinct, rich smell. Synthetic materials often smell chemical or plastic-like, especially when new." },
      { heading: "4. Open and close every closure", text: "Zippers should glide without catching. Magnetic snaps should close firmly. Buckles should hold without slipping. Test everything before you commit." },
      { heading: "5. Look at the lining", text: "A quality bag invests in the inside too. Look for clean seams, no fraying, and a lining that is properly attached at every corner." },
      { heading: "6. Check the handles and straps", text: "Where the strap meets the bag is the highest stress point. Reinforced stitching, rivets, or metal rings at attachment points are signs of a bag built to last." },
      { heading: "7. Ask about the origin", text: "Bags handpicked from established fashion regions like Turkiye carry a standard of craftsmanship that mass-produced alternatives simply cannot match. Knowing where your bag comes from matters." },
      { text: "At Bellavione, every piece we carry has passed these checks before it reaches you. We source directly from Turkiye so you get the quality without the guesswork." },
    ],
  },
  {
    slug: "best-handbags-for-nairobi-women-2026",
    title: "The Best Handbags for Nairobi Women in 2026",
    excerpt: "From boardroom meetings in Westlands to weekend brunches in Karen, Nairobi demands a bag that can keep up. Here is what is working this year.",
    date: "5 June 2026",
    readTime: "4 min read",
    category: "Trends",
    image: "/date.png",
    body: [
      { text: "Nairobi is not one city. It is a dozen lifestyles layered on top of each other. The woman navigating it needs a wardrobe that moves with her, and her bag is the piece that ties everything together." },
      { heading: "The structured tote for the professional", text: "If your day starts in a meeting and ends at a dinner, a structured tote is your most reliable companion. It holds a laptop, a change of shoes, and still looks intentional. Dark neutrals and rich browns are leading this year." },
      { heading: "The crossbody for the weekend", text: "Nairobi weekends are active. Farmers markets, gallery openings, rooftop brunches. A crossbody keeps your hands free without sacrificing style. Look for adjustable straps and secure closures." },
      { heading: "The mini bag for evenings out", text: "When the sun goes down, less is more. A compact shoulder bag or clutch in a statement colour or texture elevates any outfit. This year, ivory, caramel, and deep forest green are the colours to reach for." },
      { heading: "What Nairobi women are choosing", text: "We have noticed a clear shift toward designer-inspired pieces that feel personal rather than logo-heavy. Women here want quality and individuality, not just a name. That is exactly the gap Bellavione was built to fill." },
      { text: "Every bag in our collection is handpicked from Turkiye with the Nairobi woman in mind. Durable enough for the city, beautiful enough for every occasion." },
    ],
  },
  {
    slug: "why-a-handbag-makes-the-perfect-gift",
    title: "Why a Handbag Makes the Perfect Gift for the Woman in Your Life",
    excerpt: "Flowers fade. Chocolates disappear. A beautifully chosen handbag stays. Here is why gifting a bag is one of the most thoughtful things you can do.",
    date: "28 May 2026",
    readTime: "4 min read",
    category: "Gift Guide",
    image: "/gift.png",
    body: [
      { text: "There is a reason handbags have been given as gifts for generations. They are personal without being too intimate. They are useful without being boring. And when chosen well, they say something that words cannot." },
      { heading: "It is something she uses every day", text: "Unlike a candle or a bouquet, a handbag becomes part of her daily life. Every time she reaches for it, she thinks of you. That kind of lasting impression is rare in a gift." },
      { heading: "It shows you paid attention", text: "Choosing a bag requires thought. What does she carry? Where does she go? What is her style? When you get it right, she knows you were paying attention. That matters more than the price tag." },
      { heading: "It is an investment, not just a purchase", text: "A quality handbag holds its value in a way that most gifts do not. You are not just giving her something beautiful today. You are giving her something she will still love in five years." },
      { heading: "How to choose the right one", text: "Think about her lifestyle first. A structured tote for the professional. A crossbody for the woman always on the move. A mini bag for the one who loves a night out. When in doubt, neutral tones work for everyone." },
      { heading: "Let us help you decide", text: "If you are not sure where to start, our Concierge page is built exactly for this. Tell us a little about her and we will point you to the right piece. No guesswork, no stress." },
      { text: "At Bellavione, every bag is wrapped with care and ready to give. Because the right gift should feel as good to give as it does to receive." },
    ],
  },
];
