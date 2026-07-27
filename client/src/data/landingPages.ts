import { PRODUCTS } from "./products";

export interface LandingFAQ {
  question: string;
  answer: string;
}

export interface LandingPageData {
  slug: string;
  url: string;
  title: string;
  description: string;
  keywords: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSupporting: string;
  heroCTA: string;
  heroImage: string;
  whyTitle: string;
  whyParagraphs: string[];
  audienceTitle: string;
  audienceItems: string[];
  recsTitle: string;
  recsSubtitle: string;
  recsSlugs: string[];
  faqTitle: string;
  faqs: LandingFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  jsonLdBreadcrumb: { name: string; url: string }[];
}

export const LANDING_PAGES: LandingPageData[] = [
  {
    slug: "luxury-gifts-for-women-kenya",
    url: "/luxury-gifts-for-women-kenya",
    title: "Luxury Gifts For Women In Kenya, Timeless Handbags",
    description:
      "Discover the finest luxury gifts for women in Kenya. Bellavione Couture curates designer-inspired handbags and timeless statement pieces perfect for birthdays, anniversaries, and life's meaningful moments.",
    keywords:
      "luxury gifts Kenya, luxury gifts for women Kenya, unique gifts for women Nairobi, best luxury gifts Kenya, designer gifts Kenya, elegant gifts for her Kenya, statement handbags Kenya",
    heroEyebrow: "The Luxury Gift Edit · Kenya",
    heroTitle: "Luxury Gifts For Women In Kenya She Will Remember",
    heroSupporting:
      "A handbag is not just a gift, it is a feeling wrapped in leather. When you give a Bellavione piece, you are giving her confidence for dinners, memories for milestones, and a quiet reminder that she is seen.",
    heroCTA: "Explore the Collection",
    heroImage: "/gift.png",
    whyTitle: "Why A Handbag Is The Luxury Gift She Will Actually Keep",
    whyParagraphs: [
      "Flowers fade. Chocolate disappears. Perfume runs out. But a beautiful handbag? It becomes part of her story. It is carried to the job interview, the anniversary dinner, the first day in her new role, the graduation ceremony.",
      "Every time she reaches inside, she remembers the person who gave it to her. It is not just leather and stitching, it is a marker of a moment, a celebration of her, an object infused with meaning.",
      "At Bellavione we curate from established fashion houses in Turkiye so you are not just giving something pretty. You are giving something made with craftsmanship, materials that age beautifully, and silhouettes that feel elegant year after year.",
    ],
    audienceTitle: "This Gift Is Perfect For…",
    audienceItems: [
      "Your wife, celebrating an anniversary or a quiet Tuesday that deserves to feel special",
      "Your girlfriend, marking a birthday, a promotion, or the first salary she worked so hard for",
      "Your daughter, graduating university or stepping into the career she dreamed of",
      "Your sister or closest friend, celebrating a win, a new home, or simply because she deserves it",
      "Yourself, because the most meaningful Bellavione moments are the ones you choose for you",
    ],
    recsTitle: "Bellavione Recommendations For Luxury Gifting",
    recsSubtitle:
      "Timeless silhouettes loved by our customers. Every piece is beautifully packaged and ready to be given.",
    recsSlugs: ["tommy-hilfiger-bag", "zara-half-moon-bag", "michael-kors-bag", "zara-trapeze-bag"],
    faqTitle: "Luxury Gift Guidance",
    faqs: [
      {
        question: "What is a good luxury gift for a woman in Kenya?",
        answer:
          "A thoughtfully chosen designer-inspired handbag is one of the most memorable luxury gifts you can give. Unlike fleeting treats, a beautiful Bellavione piece becomes something she carries every day, to work, to dinners, to meetings, to moments you want her to remember. Add a handwritten note and the gift transforms into a keepsake.",
      },
      {
        question: "Are handbags good anniversary gifts?",
        answer:
          "Handbags make wonderful anniversary gifts because they blend usefulness with emotion. She will use and see the bag every single day, and every time she picks it up she will remember the milestone you are celebrating. Compared to flowers or dinner, it is the gift that keeps returning to her thoughts long after the day.",
      },
      {
        question: "How much should I spend on a luxury gift for her?",
        answer:
          "Thoughtfulness outweighs price, but at Bellavione our curated pieces sit between KES 5,500 and KES 6,500, a price point that feels genuinely luxurious without overstretching. The combination of quality hardware, beautiful materials, and elegant presentation is what makes the gift feel expensive to her.",
      },
      {
        question: "What handbag color should I gift?",
        answer:
          "Black and cream are the safest luxury choices, they match everything and feel timeless. If you know her wardrobe, tan and navy are also elegant staples. Rich statement colours like cobalt, burgundy, or forest green feel incredibly personal and make the gift feel chosen specifically for her, not just off a shelf.",
      },
      {
        question: "Does Bellavione offer gift packaging?",
        answer:
          "Yes. Every Bellavione order is beautifully presented, our packaging is designed so the moment she opens it already feels like the occasion. You can also add a personal handwritten note at checkout so the gift arrives with exactly the words you want her to read first.",
      },
    ],
    ctaTitle: "Find A Gift She Will Carry Forever",
    ctaSubtitle: "Every Bellavione piece is curated in Kenya, beautifully packaged, and ready to be remembered.",
    ctaButton: "Enter the Atelier",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Luxury Gifts For Women Kenya", url: "https://bellavione.shop/luxury-gifts-for-women-kenya" },
    ],
  },
  {
    slug: "graduation-gifts-for-her",
    url: "/graduation-gifts-for-her",
    title: "Graduation Gifts For Her In Kenya, Handbags She Will Love",
    description:
      "Meaningful graduation gifts for her in Kenya. Celebrate her achievement with a beautiful Bellavione handbag, the perfect keepsake for women entering their next chapter.",
    keywords:
      "graduation gifts for her Kenya, university graduation gifts Kenya, graduation gift ideas for her, graduation gifts Nairobi, meaningful graduation gifts Kenya, best graduation gift for girlfriend Kenya, graduation gift for daughter Kenya",
    heroEyebrow: "The Graduation Edit · Kenya",
    heroTitle: "Graduation Gifts For Her That Mark The Moment",
    heroSupporting:
      "She walked across the stage. She earned it. Celebrate her with more than a card, give her a Bellavione handbag she will carry to her first job, her first salary lunch, and every win that comes after.",
    heroCTA: "Shop Graduation Gifts",
    heroImage: "/fine.png",
    whyTitle: "Why A Handbag Is The Graduation Gift That Actually Lasts",
    whyParagraphs: [
      "Graduation day ends. The photos go in an album. But a handbag? It walks with her into what comes next. Into the first interview. Into the first salary. Into the first time she looks around and realises she made it.",
      "Every graduate deserves something that says I see you and how far you have come. Flowers will wilt, money will be spent, champagne will be finished, but a quality handbag becomes the companion of her next chapter.",
      "At Bellavione we curate pieces that work for both the celebration and the life after it. She can carry it to corporate interviews and date nights, to brunch with friends and to the office. It is the definition of a gift that keeps on giving.",
    ],
    audienceTitle: "Who This Graduation Gift Is Perfect For",
    audienceItems: [
      "Your daughter, celebrating the moment you dreamed of together since she was small",
      "Your girlfriend, the woman who studied late nights while you brought her tea, now stepping into her future",
      "Your wife, completing a degree, a diploma, or a masters she worked for while holding everything else together",
      "Your best friend, the one who carried you through exams, now finally crossing the stage",
      "Your sister, walking off campus into the career she prayed for",
    ],
    recsTitle: "Bellavione Graduation Gift Recommendations",
    recsSubtitle:
      "Structured classics that graduate with her. Perfect for the office, for celebrations, and for every new chapter.",
    recsSlugs: ["michael-kors-bag", "tommy-hilfiger-bag", "zara-half-moon-bag"],
    faqTitle: "Graduation Gift FAQ",
    faqs: [
      {
        question: "What is a good graduation gift for a woman in Kenya?",
        answer:
          "A thoughtful, quality handbag is one of the best graduation gifts. It is a celebration of her achievement that also becomes immediately useful in her next chapter. She will think of you the first time she carries it to a job interview, a new office, or a salary celebration dinner.",
      },
      {
        question: "How much should I spend on a graduation gift for her?",
        answer:
          "At Bellavione, most of our graduation favourite pieces are between KES 5,500 and KES 6,500. That price range carries the weight of a meaningful celebration without being excessive. Add a handwritten note referencing her journey and the gift becomes priceless to her.",
      },
      {
        question: "What is the best graduation gift for my girlfriend?",
        answer:
          "For a girlfriend graduating, choose a handbag that matches the life she is about to step into. A structured top-zip satchel says I believe in your career. A cream half-moon says I see the elegant, confident woman you are becoming. Pair it with a note listing every reason you are proud of her, she will read it many times.",
      },
      {
        question: "Is a handbag too personal a graduation gift?",
        answer:
          "Not at all, handbags are one of the few gifts that straddle the line between deeply personal and universally useful. Unlike clothing, you do not need to know her exact size. Unlike jewellery, you do not need to guess her metal preference. A well-chosen handbag fits every woman.",
      },
      {
        question: "When should I give her the graduation gift?",
        answer:
          "Either the night before graduation (over a quiet, private dinner where you can both speak) or immediately after the ceremony, before the chaos of photos and congratulations begins. Both moments create memories attached to the gift itself, so she remembers not just receiving the bag but exactly when and where.",
      },
    ],
    ctaTitle: "Celebrate Her Graduation With Something She Will Keep",
    ctaSubtitle:
      "Beautifully packaged, ready to gift, and built for the chapter she is about to begin.",
    ctaButton: "Explore Graduation Edit",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Graduation Gifts For Her Kenya", url: "https://bellavione.shop/graduation-gifts-for-her" },
    ],
  },
  {
    slug: "anniversary-gifts-for-her",
    url: "/anniversary-gifts-for-her",
    title: "Anniversary Gifts For Her In Kenya, Handbags She Will Love",
    description:
      "Meaningful anniversary gifts for her in Kenya. Celebrate your years together with a Bellavione handbag, an elegant, timeless reminder of your love, beautifully packaged and ready to surprise her.",
    keywords:
      "anniversary gifts for her Kenya, wedding anniversary gifts Kenya, romantic gifts for wife Kenya, first anniversary gift Kenya, best anniversary gift for girlfriend Kenya, anniversary handbag Kenya",
    heroEyebrow: "The Anniversary Edit · Kenya",
    heroTitle: "Anniversary Gifts For Her That Outlast The Flowers",
    heroSupporting:
      "This year, give her something that will not wilt in a week. Give her a Bellavione handbag she will reach for every morning, and think of you every time she does.",
    heroCTA: "Shop Anniversary Gifts",
    heroImage: "/date.png",
    whyTitle: "Why A Handbag Is The Anniversary Gift She Actually Remembers",
    whyParagraphs: [
      "Anniversaries are about time. Years together. Days that shaped you. The gift should match that. Flowers wilt in seven days. Dinner finishes in two hours. A handbag? It walks with her for years.",
      "Every time she opens it, at lunch with friends, at a work meeting, on your next anniversary dinner date, she will remember the year you gave it to her. It is a living marker of your love, not a one-day display.",
      "Every Bellavione piece is curated because it ages beautifully. The leather develops a patina over time, just like your relationship. The shape stays elegant year after year, just like her.",
    ],
    audienceTitle: "This Gift Is Perfect For Your…",
    audienceItems: [
      "Wife, celebrating 1 year, 5 years, 10 years, or simply another Tuesday you want to mark",
      "Girlfriend, your first anniversary together, the milestone you both joked about when you first met",
      "Fiancée, marking one more step toward the wedding day, or celebrating the life you already have",
      "Partner, the person who has been by your side through all the seasons of your life together",
    ],
    recsTitle: "Bellavione Anniversary Gift Recommendations",
    recsSubtitle:
      "Romantic silhouettes and timeless classics. Every piece comes beautifully gift-wrapped so the moment of surprise is perfect.",
    recsSlugs: ["zara-half-moon-bag", "tommy-hilfiger-bag", "michael-kors-bag"],
    faqTitle: "Anniversary Gift FAQ",
    faqs: [
      {
        question: "What is the most meaningful anniversary gift for her in Kenya?",
        answer:
          "A handbag is one of the most meaningful anniversary gifts because it sits right at the intersection of thoughtfulness and usefulness. She will use it every single day, and every time she does she will remember the milestone and the person who gave it to her. Pair it with a handwritten letter about why you chose that particular piece for her, and it becomes unforgettable.",
      },
      {
        question: "How do I choose an anniversary handbag for my wife?",
        answer:
          "Think about the moments you have shared. If your first date was a rooftop dinner, a structured evening bag reminds her of that. If she just started a new role, a work-appropriate tote says I am proud of every part of your life. The 'perfect' bag is less about trends and more about which piece has a story you can tell her when you hand it over.",
      },
      {
        question: "Is a handbag a good first anniversary gift?",
        answer:
          "Absolutely. Traditionally the first anniversary is 'paper' but modern couples prefer gifts that feel like the start of many years to come. A quality handbag will still be in her wardrobe long past your tenth anniversary, a much better marker of your first year together than something that will be recycled within a month.",
      },
      {
        question: "What colour handbag is best for an anniversary gift?",
        answer:
          "Rich deep colours feel most romantic for anniversaries, burgundy, forest green, deep navy, or a glossy black with gold hardware. Cream or ivory say soft and timeless. If you want the moment to feel like 'I see every part of you' choose one of her favourite colours rather than a generic neutral.",
      },
      {
        question: "Can I get it gift wrapped and delivered to her in Kenya?",
        answer:
          "Yes. Every Bellavione order comes beautifully packaged, we design the unboxing to already feel like the occasion. You can add a handwritten note at checkout so the first thing she reads is exactly what you want to say. We deliver across Kenya.",
      },
    ],
    ctaTitle: "Make This Anniversary The One She Talks About For Years",
    ctaSubtitle:
      "Hand-selected pieces, beautiful packaging, and your words handwritten inside. The rest is the moment you hand it to her.",
    ctaButton: "Shop Anniversary Edit",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Anniversary Gifts For Her Kenya", url: "https://bellavione.shop/anniversary-gifts-for-her" },
    ],
  },
  {
    slug: "birthday-gifts-for-women",
    url: "/birthday-gifts-for-women",
    title: "Birthday Gifts For Women In Kenya, Handbags She Will Adore",
    description:
      "The best birthday gifts for women in Kenya. A Bellavione handbag is thoughtful, personal, and perfect for birthdays, beautifully wrapped and ready to make her day unforgettable.",
    keywords:
      "birthday gifts for women Kenya, best birthday gift for her Kenya, birthday gift ideas Nairobi, unique birthday gifts for women Kenya, female birthday gifts Kenya, birthday handbag Kenya",
    heroEyebrow: "The Birthday Edit · Kenya",
    heroTitle: "Birthday Gifts For Women That Actually Feel Like Her",
    heroSupporting:
      "A generic card gets filed. A generic perfume gets passed on. But a Bellavione handbag chosen just for her? That is how you show her you actually see the woman she is becoming this year.",
    heroCTA: "Shop Birthday Gifts",
    heroImage: "/fine.png",
    whyTitle: "Why A Handbag Is The Birthday Gift She Wants, But Will Not Ask For",
    whyParagraphs: [
      "Most women buy themselves small indulgences throughout the year. But the truly special pieces? The ones that say 'I turned another year and I am proud of me'? They wait for someone to gift them, or for a milestone big enough to justify.",
      "You can be that someone. A beautiful handbag on her birthday is not just an object, it is permission for her to carry herself like the woman you already know she is. It is a confidence upgrade wrapped in paper.",
      "Every Bellavione piece is selected because it makes the woman carrying it stand a little taller. That extra half-inch of posture, that hand reaching for the bag unconsciously, it is the most visible way a birthday gift keeps giving long after the candles go out.",
    ],
    audienceTitle: "Perfect Birthday Gift For The Woman Who Is…",
    audienceItems: [
      "Turning 21, stepping into her adult wardrobe and the start of a new decade",
      "Turning 30, entering her era, quieter, more confident, clearer about what she wants",
      "Turning 40, 50, and every year beyond, choosing things because she loves them, not because they are expected",
      "Your best friend, the woman who celebrates every one of your wins like they are her own",
      "Any woman in your life whose birthday deserves to feel like an event, not just another day on the calendar",
    ],
    recsTitle: "Bellavione Birthday Gift Recommendations",
    recsSubtitle:
      "Statement pieces, classics, and conversation-starters. Chosen so every personality type finds something that feels exactly like her.",
    recsSlugs: ["zara-trapeze-bag", "michael-kors-bag", "zara-half-moon-bag", "tommy-hilfiger-bag"],
    faqTitle: "Birthday Gift FAQ",
    faqs: [
      {
        question: "What is the best birthday gift for a woman who seems to have everything?",
        answer:
          "Do not give her another generic 'luxury item'. Give her something that feels chosen specifically for her personality, not her wallet. A handbag with a story. Something in her favourite colour. A shape you know she has been secretly wanting. The value is not the price tag, it is that you paid attention.",
      },
      {
        question: "How much should I spend on a birthday handbag gift?",
        answer:
          "At Bellavione, our most-loved birthday gifts are between KES 5,500 and KES 6,500. That price point feels genuinely celebratory without feeling excessive. The combination of the gift itself, the beautiful Bellavione packaging, and a handwritten note creates a feeling far beyond the number on the receipt.",
      },
      {
        question: "Should I ask her what bag she wants or surprise her?",
        answer:
          "If you know her taste well enough to choose one, the surprise is half the magic. If you are unsure, drop subtle questions about what she has been eyeing, or choose a timeless classic in black, cream, or tan, these never miss. When in doubt, add a note that says it is exchangeable, but the note you write is what she will remember.",
      },
      {
        question: "What is the best birthday gift for a female friend in Kenya?",
        answer:
          "For a close friend, pick a handbag that matches the version of herself she wants to be this year. If she just started a business, a structured work bag. If she keeps posting about date nights, a cream half-moon she can dress up or down. The best gifts for friends say I know exactly who you are right now, and I love it.",
      },
      {
        question: "What does a handbag say as a birthday gift?",
        answer:
          "It says: I have watched you. I know the life you are building. I want to give you something that meets you there, that walks with you into restaurants, meetings, parties, and quiet days. More than 'happy birthday', it says I am on your team for whatever this year brings you.",
      },
    ],
    ctaTitle: "Give Her A Birthday Gift That Lasts Longer Than The Day",
    ctaSubtitle:
      "Beautifully wrapped, personally styled, and ready to be the best gift at her table.",
    ctaButton: "Shop Birthday Edit",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Birthday Gifts For Women Kenya", url: "https://bellavione.shop/birthday-gifts-for-women" },
    ],
  },
  {
    slug: "gifts-for-wife",
    url: "/gifts-for-wife",
    title: "Gifts For Wife In Kenya, She Deserves Something Beautiful",
    description:
      "Gifts for your wife in Kenya that actually say thank you. Bellavione handbags are elegant, thoughtful, and perfectly chosen for the woman who does everything for everyone.",
    keywords:
      "gifts for wife Kenya, best gift for wife Kenya, romantic gift for wife Nairobi, birthday gift for wife Kenya, anniversary gift for wife Kenya, wife appreciation gift Kenya",
    heroEyebrow: "For Your Wife · Kenya",
    heroTitle: "Gifts For Your Wife That Say I See Everything You Do",
    heroSupporting:
      "She carries the family, the calendar, the groceries, the birthdays, the hopes, and the quiet unseen things. This year, give her something beautiful to carry, for herself.",
    heroCTA: "Shop Gifts For Wife",
    heroImage: "/gift.png",
    whyTitle: "Why A Handbag Is The Gift Your Wife Actually Needs",
    whyParagraphs: [
      "Ask any wife what she carries in her bag during a normal week. Kids' snacks, tissues, paracetamol, receipts, passports, school letters, her husband's keys, and somewhere at the bottom, her own lip balm. The bag she carries is a tool for everyone else's life.",
      "Give her one that is just hers. A bag she does not have to fill with other people's things. One she carries because it makes her feel beautiful, not practical. One she can set on the table at dinner and think, this is mine.",
      "Every husband thinks he knows his wife. But the man who hands her a Bellavione and says 'This is for the woman you are when everyone else is looked after'? That is the man who actually sees her.",
    ],
    audienceTitle: "Perfect Moments To Gift Your Wife",
    audienceItems: [
      "On her birthday, celebrate her, not just the day she was born",
      "On your anniversary, another year of partnership, another year of her sacrifice",
      "On Mother's Day, even if she is already planning everyone else's gifts",
      "On no occasion at all, 'I noticed how hard you have been working' is the most romantic reason there is",
      "After a big life moment, a career win, a hard season, a family milestone she held everyone through",
    ],
    recsTitle: "Bellavione Recommendations For Your Wife",
    recsSubtitle:
      "Refined, grown-up elegance. The pieces she would choose for herself if she had the time to shop, and the permission to spend on her.",
    recsSlugs: ["tommy-hilfiger-bag", "michael-kors-bag", "zara-half-moon-bag"],
    faqTitle: "Gifts For Wife, FAQ",
    faqs: [
      {
        question: "What is the best gift for my wife if I do not know her style?",
        answer:
          "Start with a timeless black or cream handbag with gold hardware, this is universally elegant on every woman. Then watch her face when you give it to her. If you can tell you missed, tell her honestly 'I want you to have exactly what you love, exchange it for something that makes you light up'. The safety of knowing she gets final say removes the pressure, and the thought is still yours.",
      },
      {
        question: "My wife says she does not want anything. Should I still get her a gift?",
        answer:
          "Yes. The woman who says 'do not get me anything' is almost always the woman who puts everyone before herself. She does not want the hassle of you stressing about it. But when you hand her a beautifully wrapped gift anyway? The quiet 'you thought of me' look on her face is the real gift, to both of you.",
      },
      {
        question: "What should I write in the note for my wife?",
        answer:
          "Do not write a poem if you are not a poet. Write what you actually see. 'I noticed you have not bought yourself something nice in two years.' 'Thank you for holding us all together this year.' 'The woman you are is my favourite thing in the world.' Three sincere sentences beat a card-shop paragraph every single time.",
      },
      {
        question: "Is a handbag too practical to be romantic?",
        answer:
          "That is exactly why it is romantic. Flowers say I love you today. A handbag says I am thinking about you next Tuesday, when you walk into that meeting, when you go for coffee with your friends, when you are standing in the supermarket and feel for a second like no one sees you. Practical romance is the deepest kind.",
      },
      {
        question: "How can I make the gifting moment feel special?",
        answer:
          "Do not hand it to her next to the kitchen sink. Pack the kids out of the house for an hour. Put on music. Pour her a drink. Read her the note out loud, do not just let her open it and read it later. The bag is forever. The memory of how you gave it to her is what she will actually remember.",
      },
    ],
    ctaTitle: "Give The Woman Who Gives Everything Something Hers",
    ctaSubtitle:
      "She handles the logistics of everyone else's life. This year, let the gift be logistics-free, and entirely about her.",
    ctaButton: "Find Her Perfect Piece",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Gifts For Wife Kenya", url: "https://bellavione.shop/gifts-for-wife" },
    ],
  },
  {
    slug: "gifts-for-girlfriend",
    url: "/gifts-for-girlfriend",
    title: "Gifts For Girlfriend In Kenya, Thoughtful and Romantic",
    description:
      "Thoughtful gifts for your girlfriend in Kenya. Impress her with a Bellavione handbag, the romantic, meaningful, stylish choice she will carry everywhere and think of you.",
    keywords:
      "gifts for girlfriend Kenya, romantic gifts for girlfriend Kenya, best gift for girlfriend Kenya, surprise gift for girlfriend Nairobi, birthday gift girlfriend Kenya, cute gifts for girlfriend Kenya",
    heroEyebrow: "For Your Girlfriend · Kenya",
    heroTitle: "Gifts For Your Girlfriend That Actually Impress Her",
    heroSupporting:
      "The 'perfect' girlfriend gift is not the most expensive. It is the one that proves you pay attention. A Bellavione chosen because it fits her energy, her style, her personality? That is how you win every time.",
    heroCTA: "Shop Gifts For Girlfriend",
    heroImage: "/date.png",
    whyTitle: "Why A Handbag Makes The Perfect Girlfriend Gift",
    whyParagraphs: [
      "Guys get stuck on 'do women actually want bags?' The answer is, women want to feel like you understand them. And choosing a handbag says: I look at you. I see what you carry. I notice your style enough to match it to something beautiful. That is what she actually wants.",
      "Every time she uses the bag, out with her girls, at work, on a date with you, she will get asked 'Where did you get that?' And she will say 'My boyfriend got it for me.' That conversation, repeated across months, is why the gift keeps winning long after you gave it.",
      "Jewellery is tricky, sizes, metal preferences, whether she even wears it. Perfume is impossible to guess. But a well-chosen handbag? Every woman uses one. Every woman appreciates one. And every woman loves telling the story of how she got it.",
    ],
    audienceTitle: "This Gift Is Perfect When…",
    audienceItems: [
      "It is her birthday and you want the first thing she posts to be from you",
      "It is your anniversary, one month, six months, one year, every milestone counts",
      "You just said I love you for the first time, follow it with something tangible",
      "You messed up and want to say I am sorry in a way that actually lands",
      "There is no occasion, just a random Tuesday when she should feel loved out of nowhere",
    ],
    recsTitle: "Bellavione Recommendations For Your Girlfriend",
    recsSubtitle:
      "From sweet cream classics to bold statement shapes, styles chosen specifically for how young women in Kenya actually dress.",
    recsSlugs: ["zara-half-moon-bag", "zara-trapeze-bag", "michael-kors-bag"],
    faqTitle: "Gifts For Girlfriend, FAQ",
    faqs: [
      {
        question: "What gift makes a girlfriend feel most special?",
        answer:
          "It is not the price tag, it is the specificity. Any guy can transfer money. But the guy who says 'I saw this and thought of that green dress you wore on our second date, the colour reminded me of you'? That guy. A handbag is the perfect canvas for that level of specific, observed affection.",
      },
      {
        question: "How do I choose a handbag for my girlfriend if I do not know what she likes?",
        answer:
          "Look at her Instagram saved folder. Or her Tiktok likes. Or casually ask her one night 'Who has the best bag out of all your friends?' Whatever bag she describes, that is the style she wants. If she talks about a girl with a half-moon, get the half-moon. If she describes something structured, get the satchel. Do not overthink it, just copy what she already admires.",
      },
      {
        question: "Is it weird to gift my girlfriend a bag too early?",
        answer:
          "Not at all, as long as it matches the stage of your relationship. Two weeks in? Keep it modest and pair it with a note that says 'Saw this, thought of you, it is as cool as you are.' A year together? Go all in. The gift scales with the commitment, not the other way around.",
      },
      {
        question: "What do I say when I give it to her?",
        answer:
          "The best line is never 'happy birthday' alone. It is 'I chose this because [specific reason].' Because it looks like something your mum would have loved when she was your age. Because the shape is like your personality, soft but structured. Because gold hardware makes me think of you, expensive and impossible to look away from. Three reasons beat three words every time.",
      },
      {
        question: "Does Bellavione do surprise deliveries?",
        answer:
          "Yes. You can have it delivered to her office or her home. Write a note, she will not be expecting it, and nothing lands harder than a beautifully wrapped package showing up at her door when she is bored in a mid-afternoon meeting. Her friends at work will hear about it for weeks.",
      },
    ],
    ctaTitle: "Be The Boyfriend She Brags About To Her Friends",
    ctaSubtitle:
      "Because every time she gets asked 'where did you get this bag?', your name is the answer.",
    ctaButton: "Find Her The One",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Gifts For Girlfriend Kenya", url: "https://bellavione.shop/gifts-for-girlfriend" },
    ],
  },
  {
    slug: "big-girl-purchase",
    url: "/big-girl-purchase",
    title: "Big Girl Purchase, When You Buy Yourself The Bag",
    description:
      "The Big Girl Purchase. You earned it. Treat yourself to a Bellavione handbag, the quiet status symbol every woman in Kenya deserves to own after a milestone well-deserved.",
    keywords:
      "big girl purchase, buy myself a handbag Kenya, treat yourself Kenya, self gift Kenya, first salary gift Kenya, promotion gift for myself Kenya, self gifting Kenya, big girl bag Kenya",
    heroEyebrow: "The Big Girl Purchase · Kenya",
    heroTitle: "The Big Girl Purchase, Buy Yourself The Damn Bag",
    heroSupporting:
      "First salary. Promotion. Closing the deal. Passing the exam. Paying off the loan. Whatever your win is, this is how you mark it. Not with dinner that lasts two hours. With a bag that lasts for years.",
    heroCTA: "Treat Yourself",
    heroImage: "/hero.png",
    whyTitle: "Why The Big Girl Purchase Is Non-Negotiable, Not Indulgent",
    whyParagraphs: [
      "Every woman knows the exact moment: the bank alert hit, and for 30 seconds she considered buying the bag. Then she thought about rent, her brother's school fees, the family budget, whether she really needed it. Then she closed the tab.",
      "This is your sign to reopen the tab. The big girl purchase is not vanity, it is training. Training you to reward yourself for your own work before everyone else gets their share. Training you to put your name on the list of people whose life you make nicer.",
      "And when you carry that bag? A stranger will compliment it in a lift. A colleague will ask where it is from. A friend will say 'Wow, that is gorgeous.' And you get to say 'I bought it for myself.' That sentence? Changes how you see every purchase after it.",
    ],
    audienceTitle: "It Is Your Time If You Are Celebrating…",
    audienceItems: [
      "Your first real salary, the one that finally feels like grown-up money",
      "A promotion you worked late nights and sacrificed weekends for",
      "Finishing a course, a degree, a masters, a CPA, a driving test, anything you had to study for",
      "Closing a client, a deal, a tender, the one that felt like it was never going to happen",
      "A hard season ending, or a soft one beginning, simply because you survived it beautifully",
    ],
    recsTitle: "The Big Girl Purchase Recommendations",
    recsSubtitle:
      "Choose the piece that matches the level of woman you are becoming. The one you carry to boardrooms and brunch, both.",
    recsSlugs: ["michael-kors-bag", "tommy-hilfiger-bag", "zara-trapeze-bag", "zara-half-moon-bag"],
    faqTitle: "The Big Girl Purchase, FAQ",
    faqs: [
      {
        question: "Is buying yourself a handbag selfish?",
        answer:
          "Absolutely not. Women are taught that taking care of others is virtue and taking care of ourselves is indulgence, and that is how we end up burnt out and resentful. A big girl purchase is the exact opposite of selfish: it is how you refill your own cup so you can keep showing up for the people who need you. The best gift you can give your people is a woman who feels rewarded for her own work.",
      },
      {
        question: "What counts as a Big Girl Purchase?",
        answer:
          "It is not the amount. It is the feeling. Any purchase where you think 'I worked for this, and I am proud of myself for it, and I am going to spend this money on ME without guilt', that is a big girl purchase. It might be KES 5,500 to one woman and KES 55,000 to another. The number is not the point. The mindset is.",
      },
      {
        question: "What handbag should I buy for my first salary?",
        answer:
          "Buy the most timeless piece you can afford. A structured satchel in black, tan, or cream. Something that goes to interviews and church and dinner and dates. Something you will still love in three years. This bag is not a trend piece, it is a marker of the version of you that just walked into her career.",
      },
      {
        question: "Should I tell people I bought it for myself?",
        answer:
          "Say it loudly, proudly, and every time someone asks. The first time you say 'I bought it for myself after my promotion' it feels awkward. The fifth time? It becomes part of your identity. Other women will hear you and think, I should do that too. The big girl purchase is contagious. Good. Spread it.",
      },
      {
        question: "How do I get over the guilt of spending on myself?",
        answer:
          "Take the amount you are about to spend on the bag and mentally compare it to what you have spent this month on other people: siblings, parents, Uber for your cousin, airtime for someone. That number is always bigger. You are allowed one purchase that is entirely yours. Just one. You have earned it many times over.",
      },
    ],
    ctaTitle: "This Is Your Sign. Buy The Bag.",
    ctaSubtitle:
      "In five years, you will not remember the things you almost bought yourself. You will remember the things you actually did.",
    ctaButton: "Choose Your Big Girl Bag",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Big Girl Purchase", url: "https://bellavione.shop/big-girl-purchase" },
    ],
  },
  {
    slug: "designer-inspired-handbags-kenya",
    url: "/designer-inspired-handbags-kenya",
    title: "Designer Inspired Handbags In Kenya, Bellavione Atelier",
    description:
      "Bellavione, Kenya's destination for designer-inspired handbags from Turkiye. Michael Kors, Zara, Tommy Hilfiger and more, curated, delivered across Kenya, and beautifully packaged.",
    keywords:
      "designer inspired handbags Kenya, Michael Kors Kenya, Zara handbags Kenya, Tommy Hilfiger Kenya, designer handbags Nairobi, quality handbags Kenya, ladies handbags Kenya, Turkish handbags Kenya",
    heroEyebrow: "The Atelier · Kenya",
    heroTitle: "Designer Inspired Handbags In Kenya, Curated From Türkiye",
    heroSupporting:
      "You do not need an international credit card or a suitcase from Dubai. Bellavione brings the most-loved designer-inspired silhouettes to Kenya, curated, quality-checked, and in stock.",
    heroCTA: "Browse The Atelier",
    heroImage: "/kanta/kors%20featured.png",
    whyTitle: "Why Kenyan Women Choose Bellavione Instead Of Ordering Abroad",
    whyParagraphs: [
      "Ordering a handbag from overseas means three weeks of shipping, customs delays, surprise fees, and the anxiety of whether it actually looks like the photos when it arrives. And if it is wrong? You cannot return it. You are stuck with a bag you do not love.",
      "Bellavione changes that. We curate our favourite silhouettes from the most-respected fashion houses in Türkiye, names women already know and trust. We hand-check every single piece. We hold stock in Kenya. You order on Monday, you have it by the end of the week. And if you need to exchange, we are one WhatsApp away.",
      "Our pieces are not 'fakes' or fast-fashion. They are designer-inspired silhouettes from the original houses, Zara, Michael Kors, Tommy Hilfiger, made at the same factories, with the same quality, that would normally cost you double or triple to import yourself. That is the Bellavione difference.",
    ],
    audienceTitle: "You Belong At Bellavione If…",
    audienceItems: [
      "You have ordered bags online before and received something that looked nothing like the photos",
      "You are tired of cheap market bags that peel within a month of buying them",
      "You want international designer quality without the international price tag and wait time",
      "You shop for bags once and expect them to last you years, not months",
      "You like to walk into a space, touch the leather, feel the weight, and decide, not just swipe",
    ],
    recsTitle: "Our Most Loved Designer Inspired Handbags",
    recsSubtitle:
      "Every one of these is a bestseller for a reason. Most-loved, most-complimented, most returned-to by repeat customers.",
    recsSlugs: ["michael-kors-bag", "zara-half-moon-bag", "tommy-hilfiger-bag", "zara-trapeze-bag"],
    faqTitle: "Designer Inspired Handbags, FAQ",
    faqs: [
      {
        question: "Where does Bellavione source their handbags from?",
        answer:
          "We source directly from established fashion houses in Türkiye, working with the same suppliers who stock international retail brands. Every piece is individually selected by our team for quality of materials, durability of hardware, and how beautifully it sits when a woman wears it. We do not buy bulk; we buy one bag at a time, the same way you would if you were walking the streets of Istanbul.",
      },
      {
        question: "Are these bags original or replicas?",
        answer:
          "Our pieces are original designer-inspired silhouettes from their respective houses, Michael Kors, Zara, Tommy Hilfiger. We do not sell knockoffs or replicas. Everything is the real product from the brand, which is why the quality, stitching, packaging, and finish are what you would expect from shopping directly at the international stores.",
      },
      {
        question: "How long does delivery take in Kenya?",
        answer:
          "Nairobi deliveries are typically same-day or next-day after your order is confirmed. Countrywide deliveries to Mombasa, Kisumu, Nakuru, Eldoret and other Kenyan towns typically take 2-4 working days depending on location. We will always confirm timing via WhatsApp before we ship.",
      },
      {
        question: "What is the quality of a Bellavione bag compared to market bags?",
        answer:
          "There is no comparison. A typical market handbag in Kenya will cost you between KES 1,500 and KES 3,000 and peel, fade, or break within 1-3 months. A Bellavione handbag is between KES 5,500 and KES 6,500 and will last you years instead of months. It is actually the cheaper bag, when you stop having to replace it every season.",
      },
      {
        question: "Can I see or collect a bag before I buy it in Nairobi?",
        answer:
          "Yes. We have viewing and collection points in Nairobi. Send us a WhatsApp through the Concierge page, tell us which bag you are interested in, and we will arrange a time for you to see it, feel it, try it with an outfit, and take it with you same-day if you love it.",
      },
    ],
    ctaTitle: "Stop Paying Three Times The Price For Shipping Alone",
    ctaSubtitle:
      "The same silhouettes. The same quality. Half the hassle. Delivered to you anywhere in Kenya.",
    ctaButton: "Enter The Atelier",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Designer Inspired Handbags Kenya", url: "https://bellavione.shop/designer-inspired-handbags-kenya" },
    ],
  },
  {
    slug: "what-to-gift-a-woman-who-has-everything",
    url: "/what-to-gift-a-woman-who-has-everything",
    title: "What To Gift A Woman Who Has Everything, Handbags That Work",
    description:
      "Stuck on what to gift a woman who has everything? A designer-inspired handbag from Bellavione is the thoughtful, personal, beautifully-made gift she will actually use, even if she already has a closet full.",
    keywords:
      "what to gift a woman who has everything Kenya, gift for woman who has everything, unique gift ideas for her Kenya, thoughtful gift for woman who wants nothing, handbag gift for her Kenya, meaningful gift for wife who has everything, best gift for mom who has everything",
    heroEyebrow: "Gift Guide For Women Who Have Everything · Kenya",
    heroTitle: "What To Gift A Woman Who Already Has Everything",
    heroSupporting:
      "She already has the perfume, the jewellery, the candles, the flowers, the coffee machine. Stop guessing what she might like and give her something she will actually reach for every single day, a Bellavione handbag.",
    heroCTA: "Gift Ideas She Will Actually Use",
    heroImage: "/gift.png",
    whyTitle: "Why Handbags Beat Every Other Gift For The Woman Who Has It All",
    whyParagraphs: [
      "When a woman already has everything she needs, the worst thing you can do is give her another thing she has to find space for, use once, then put in a drawer. What she wants is something she would not buy herself, something that feels like an indulgence without being impractical.",
      "Handbags solve this perfectly. Every woman uses one. But the woman who has everything rarely buys herself the nice one. She buys the practical one. She buys the one that fits her laptop. She waits for a sale. She talks herself out of the beautiful one because she already has one that works.",
      "That is the space Bellavione lives in. We give you permission to buy her the beautiful one. The one she has been eyeing for months. The one that makes her stand a little taller when she walks into a room. The one she would never, ever buy for herself, even though she can afford it.",
    ],
    audienceTitle: "This Guide Is For You If…",
    audienceItems: [
      "You have been married 10 years and she still says she does not want anything for her birthday",
      "Your mom keeps telling you to save your money but you want to give her something that matters",
      "Your best friend just closed a huge deal and she already bought herself the champagne",
      "Your sister seems to have everything she wants but you want to show her you still pay attention",
      "She told you not to get her anything, but that feels like a test you do not want to fail",
    ],
    recsTitle: "The Bags Even Women Who Have Everything Will Love",
    recsSubtitle:
      "Timeless, elegant, and never generic. These are the pieces that make women who already own nice handbags say, 'Oh, I did not have one in that colour.'",
    recsSlugs: ["michael-kors-bag", "zara-half-moon-bag", "tommy-hilfiger-bag"],
    faqTitle: "Gifting Women Who Have Everything, FAQ",
    faqs: [
      {
        question: "What do you get a woman who literally wants nothing?",
        answer:
          "You get her something she uses every day that makes her daily life a little nicer. That is why handbags work on women who claim to want nothing. She will not have to remember to use it, she will not have to find a shelf for it, she will not feel guilty about it being a waste. She will just grab it on her way out and think of you.",
      },
      {
        question: "Is a handbag too generic a gift for someone who has expensive taste?",
        answer:
          "Not if you choose the right one. The woman who has everything can tell the difference between a bag that was chosen with her in mind and a bag that was picked off a shelf. Think about the colours she wears, the kind of places she goes, what she carries on a normal day. Then match the bag to her lifestyle, not to a generic 'gift for women' list.",
      },
      {
        question: "What if she already owns ten handbags?",
        answer:
          "Then you are halfway there, because you already know she likes handbags. Pick a silhouette or a colour that fills a gap in her collection. The structured work bag if all hers are casual. The bold burgundy if all hers are black. The statement half-moon if all hers are totes. It is not about giving her another bag, it is about giving her the specific bag she did not know she was missing.",
      },
      {
        question: "Should I give her an experience instead of a physical gift?",
        answer:
          "Experiences are beautiful, and if you know exactly the experience she wants, go for it. But experiences end after an afternoon or an evening. A handbag is the gift that keeps appearing in her life for years, in meetings, on trips, at dinners, in photos. Every time she carries it, she will remember the occasion you gave it to her. For women who have everything, that longevity is the luxury.",
      },
      {
        question: "What do I write in the card for a woman who has everything?",
        answer:
          "Do not write 'I know you said you did not want anything, but...'. Instead write something specific about her. 'I got this because I know how you always pick the black one.' 'Because every time you walk into a room you deserve to carry something that matches that energy.' 'Because you give so much to everyone, this is one thing that is just yours.' The specificity is what makes it feel like your gift, not just a gift.",
      },
    ],
    ctaTitle: "Stop Trying To Guess What She Does Not Have",
    ctaSubtitle:
      "Give her the beautiful bag she would never buy herself, even if she can afford it. Every Bellavione piece is beautifully wrapped and ready to surprise her.",
    ctaButton: "Shop The Edit",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Gift Guide, Woman Who Has Everything", url: "https://bellavione.shop/what-to-gift-a-woman-who-has-everything" },
    ],
  },
  {
    slug: "are-handbags-good-gifts",
    url: "/are-handbags-good-gifts",
    title: "Are Handbags Good Gifts, Yes, And Here Is Exactly Why",
    description:
      "Are handbags good gifts? Yes. Bellavione explains why a thoughtfully chosen handbag is one of the most memorable, useful, and personal gifts you can give a woman, from wives to girlfriends to friends to moms.",
    keywords:
      "are handbags good gifts, is a handbag a good gift for a woman, handbag as a gift meaning, do girls like handbags as gifts, best gift ideas Kenya, why handbags make great gifts, handbag gift etiquette Kenya",
    heroEyebrow: "Gift Questions Answered · Kenya",
    heroTitle: "Are Handbags Good Gifts? Yes, And Here Is Why",
    heroSupporting:
      "Everyone has debated whether a handbag is too personal, too expensive, too generic, too practical. The short answer is yes, handbags are excellent gifts, and here is every reason why, plus how to get it right every time.",
    heroCTA: "See Why Handbags Work",
    heroImage: "/fine.png",
    whyTitle: "Why Handbags Consistently Rank Among The Best Gifts For Women",
    whyParagraphs: [
      "A great gift sits at the intersection of four things, useful, personal, beautiful, and long-lasting. Most gifts only nail one or two. Flowers are beautiful but they die. A mug is useful but it is not personal. A bottle of perfume feels personal but you will probably get the scent wrong.",
      "Handbags hit all four. Every single woman uses a handbag every single day, so it is inherently useful. If you choose the right shape, colour, and size for her lifestyle, it becomes deeply personal. The hardware, the leather, the silhouette, all combine to make it a genuinely beautiful object. And a well-made handbag lasts for years, not weeks.",
      "But here is the real reason handbags are such good gifts, they carry her life. Her phone, her wallet, her keys, her lip balm, her notebook, her kids' snacks, her passport, her medication, her dreams, the small practical and emotional things she moves through the world with. When you give her a handbag, you are giving her a better place to hold all of that. That is a lot more meaningful than a candle.",
    ],
    audienceTitle: "A Handbag Is The Perfect Gift When You Are Shopping For…",
    audienceItems: [
      "Your wife or long-term partner, who already knows every gift you have ever given her",
      "Your girlfriend, when you want the gift to feel like you pay attention to who she actually is",
      "Your mom or mother-in-law, someone who always puts everyone else first",
      "Your best friend or sister, the woman who has everything and already bought herself the nice candles",
      "A colleague or mentor you admire, something professional but thoughtful without crossing a line",
    ],
    recsTitle: "Best Handbags To Gift, Guaranteed Hits",
    recsSubtitle:
      "These Bellavione bestsellers are the gifts we hear back about most often, the ones where she says, 'How did you know I needed exactly this?'",
    recsSlugs: ["zara-half-moon-bag", "tommy-hilfiger-bag", "zara-trapeze-bag", "michael-kors-bag"],
    faqTitle: "Handbag Gift Questions, Answered",
    faqs: [
      {
        question: "Is a handbag too personal a gift for someone I do not know super well?",
        answer:
          "Choose a timeless neutral in a classic shape, black or cream structured satchel, and a handbag becomes a perfectly thoughtful gift for almost anyone. It is much less personal than clothing or jewellery, where you need to know exact sizes or metal preferences. A well-made handbag in a versatile style works on every woman.",
      },
      {
        question: "What if she does not like the handbag I chose?",
        answer:
          "Bellavione offers exchanges on all our pieces, so you can rest easy. We always recommend telling the recipient in the card that if she would prefer a different colour or style, she can exchange it easily. The thought and the intent are what she will remember most, and the exchange option removes all the pressure from both of you.",
      },
      {
        question: "How much should I spend on a handbag gift?",
        answer:
          "There is no right number, but our customers find that between KES 5,500 and KES 6,500 is the sweet spot. That range feels genuinely luxurious without being excessive. The hardware feels expensive, the materials look beautiful, and the unboxing already feels like an occasion. You can absolutely spend less or more, but that is the price point where quality and presentation start to match the gifting moment.",
      },
      {
        question: "Should I ask her what handbag she wants, or should I surprise her?",
        answer:
          "If you have a very specific style in mind that you know she would love, surprise her. If you are completely unsure, try a hybrid approach. Ask casual questions about what she has been looking at, what colours she is into, what her current bag is missing. Then go choose something based on those clues. The surprise element plus the evidence that you paid attention, that combination is what makes it a great gift.",
      },
      {
        question: "Do women actually like receiving handbags as gifts?",
        answer:
          "From the thousands of messages our customers have forwarded us from the women they gifted, yes. Consistently, overwhelmingly, yes. The line we see most is, 'I love that you chose something I would actually use every day.' Handbags are not flashy. They are not performative. They are the quiet, practical luxury that quietly tells her someone was paying attention. That is the part women actually love.",
      },
    ],
    ctaTitle: "Still Wondering If Handbags Make Good Gifts?",
    ctaSubtitle:
      "Our return rate on gifted handbags is under 3%. Browse the collection and pick the one that reminds you of her, beautifully wrapped and ready.",
    ctaButton: "Browse Giftable Handbags",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "Are Handbags Good Gifts", url: "https://bellavione.shop/are-handbags-good-gifts" },
    ],
  },
  {
    slug: "how-to-choose-a-handbag-for-her",
    url: "/how-to-choose-a-handbag-for-her",
    title: "How To Choose A Handbag For Her, 7 Rules That Never Miss",
    description:
      "How to choose a handbag for her, the complete Bellavione guide. Learn exactly what to look for when buying a handbag gift for your wife, girlfriend, mom, sister, or best friend in Kenya.",
    keywords:
      "how to choose a handbag for her, choosing a handbag gift guide, best handbag to gift a woman, picking the right handbag for her Kenya, how do I choose a handbag for my wife, choosing handbag colour gift, best bag for girlfriend Kenya",
    heroEyebrow: "Handbag Gift Guide · Kenya",
    heroTitle: "How To Choose A Handbag For Her, 7 Rules That Never Miss",
    heroSupporting:
      "Buying a handbag for a woman is not about picking the most popular one, it is about picking her one. Follow these 7 rules and you will hand her a bag she actually loves, carries, and remembers forever.",
    heroCTA: "Learn How To Choose The Right One",
    heroImage: "/date.png",
    whyTitle: "Most Men Choose The Wrong Handbag, Here Is How To Get It Right",
    whyParagraphs: [
      "Most men buy the handbag they think women want, the black one with a logo, in the window, from the display. Then she receives it, smiles, says thank you, and gently never wears it because it is not her. The wrong handbag sits in a closet. The right handbag gets carried every single day.",
      "The secret to choosing a handbag for her is not to ask 'what is the best handbag?'. It is to ask 'what is the best handbag for her lifestyle, her wardrobe, and the way she actually moves through the world?'. Those are the two completely different questions.",
      "This guide is not a list of trending bags. It is a framework for observation. If you can answer even three of these questions about her, you will buy her a handbag she will carry until the leather softens and the strap patinas and she refuses to buy a new one because 'this one is my favourite'. That is the win.",
    ],
    audienceTitle: "Use This Guide If You Are Shopping For…",
    audienceItems: [
      "Your wife, and you want this to be the gift she references on every future anniversary",
      "Your girlfriend, and you want it to say, 'I see who you are becoming, not just who you were when we met'",
      "Your mom or mother-in-law, and you want something practical that also feels like an indulgence",
      "Your sister or best friend, and you want a bag that matches her energy, not a generic bestseller",
      "A mentor, colleague, or bridesmaid, and you need something elegant that does not cross a line",
    ],
    recsTitle: "The Handbags We Recommend Every Gift Buyer Look At First",
    recsSubtitle:
      "These four Bellavione pieces are the ones that fit the widest range of women and lifestyles. Start here, then adjust for the rules below.",
    recsSlugs: ["michael-kors-bag", "zara-trapeze-bag", "tommy-hilfiger-bag", "zara-half-moon-bag"],
    faqTitle: "Choosing The Right Handbag For Her, FAQ",
    faqs: [
      {
        question: "How do I know what size handbag to get her?",
        answer:
          "Look at what she carries on a normal Tuesday. If she has a laptop, notebooks, a water bottle, you need a structured tote or satchel. If she only carries a phone, wallet, keys, and lip balm, a crossbody or mini shoulder bag is perfect. The most common mistake is buying her a bag that is too small for her actual life, then she has two bags, one for gifting and one for living. Get her the one that fits her real life.",
      },
      {
        question: "What colour handbag should I buy for her?",
        answer:
          "This is the most common question, and the answer is simple, look at what she already wears. If 80% of her wardrobe is neutral, get her a statement colour like burgundy, forest green, or cobalt. If she wears a lot of colour, get her a black or cream that goes with everything. If she wears a lot of silver jewellery, choose silver hardware. If she wears gold, choose gold. Matching the hardware to her existing jewellery is the tiny detail that makes women go, 'How did he know?'",
      },
      {
        question: "Should I buy the same style I see her carrying all the time, or something different?",
        answer:
          "Here is the rule. If she has had the same bag for five years and it is falling apart and she still loves it, buy her another one exactly like it, women grieve when they wear out their favourite bag. If she has three versions of the same black tote already, buy her something different. A half-moon silhouette. A bold colour. Something she would never pick herself but compliments what she already wears. The question is, is the bag she wears, her uniform or her comfort zone?",
      },
      {
        question: "Should I include the receipt when giving a handbag gift?",
        answer:
          "Do not include the receipt visibly in the box, that makes it feel like a transaction. But do add a line in the card that says, 'If this is not exactly right, I picked up the exchange at Bellavione, just let me know and we can swap it for whichever one you love most.' Exchanges should be her safety net, not the point of the gift. Giving her permission to exchange without feeling guilty, that is what makes it safe.",
      },
      {
        question: "How do I present the handbag when I give it to her?",
        answer:
          "Presentation matters more than people admit. Do not hand it to her in a supermarket carrier bag. Every Bellavione handbag comes beautifully wrapped, so that part is handled for you. But the bigger part is when and where you give it. Do it somewhere quiet, somewhere you have a minute to talk. Give her the card first. Make her read it before she opens the box. The bag she will keep forever. The memory of how you gave it to her? That is the part that makes it priceless.",
      },
      {
        question: "Can I choose a handbag for a woman I do not know very well?",
        answer:
          "Yes, absolutely. Stick to our three rules for strangers, first, choose a classic neutral, black, cream, cognac, or tan. Second, choose a structured silhouette, a satchel or a tote, not an extreme trend shape. Third, add a note that says it is fully exchangeable. Those three things together mean you will give her a gift that feels thoughtful, expensive, and without pressure. A timeless handbag in a neutral colour is almost impossible to get wrong.",
      },
    ],
    ctaTitle: "Ready To Choose Her Handbag?",
    ctaSubtitle:
      "Use the 7 rules above, or if you are still unsure, send us a WhatsApp via Concierge. Tell us about her, what she wears, where she goes, what she carries. We will point you to the exact right one.",
    ctaButton: "Start Shopping For Her",
    jsonLdBreadcrumb: [
      { name: "Home", url: "https://bellavione.shop/" },
      { name: "How To Choose A Handbag For Her", url: "https://bellavione.shop/how-to-choose-a-handbag-for-her" },
    ],
  },
];

export function getLandingProducts(slugs: string[]) {
  return slugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PRODUCTS;
}
