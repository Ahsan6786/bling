export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    category: string;
    images: string[];
    description: string;
    provenance: string;
    specs: {
        metal: string;
        stone: string;
        origin: string;
        closure: string;
    };
    trending?: boolean;
    soldInLast7Days?: number;
}

export const products: Product[] = [
    {
        id: "earring-01",
        slug: "radiant-bloom-earrings",
        name: "Radiant Bloom Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/earring1.png", "/images/earrings/earring1.1.png"],
        description: "Exquisite hand-finished earrings that capture the delicate essence of blooming flora.",
        provenance: "Part of our Signature Artisanal collection, designed for timeless appeal.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Premium Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        },
        trending: true
    },
    {
        id: "21",
        slug: "ethereal-blossom-earrings",
        name: "Ethereal Blossom Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/b.png", "/images/earrings/b.1.png"],
        description: "Delicately crafted floral earrings that capture the essence of a spring garden in full bloom.",
        provenance: "Hand-finished by our master artisans to ensure every petal reflects light with natural grace.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Crystal Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "22",
        slug: "midnight-petal-earrings",
        name: "Midnight Petal Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/c.png", "/images/earrings/c.1.png"],
        description: "Inspired by the mystery of the night, these petal-shaped earrings bring a touch of drama to any look.",
        provenance: "Part of our Dark Flora collection, celebrating the beauty of twilight-blooming flowers.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Onyx Style Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        },
        trending: true,
        soldInLast7Days: 124
    },
    {
        id: "23",
        slug: "celestial-dewdrop-earrings",
        name: "Celestial Dewdrop Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/e.png", "/images/earrings/e.1.png"],
        description: "A cascade of shimmering dewdrops that catch the light with every movement.",
        provenance: "Inspired by the morning dew on the high-altitude meadows of the Himalayas.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Sparkling Zirconia",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        },
        trending: true,
        soldInLast7Days: 89
    },
    {
        id: "24",
        slug: "imperial-radiance-pendant",
        name: "Imperial Radiance Pendant",
        price: 899,
        category: "Pendant/Necklace",
        images: ["/images/pendant/pen1.png", "/images/pendant/pen1.1.png"],
        description: "A bold statement piece that exudes authority and elegance with its regal sunburst design.",
        provenance: "Crafted to embody the solar deities of ancient myth, radiating light and power.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Central Solitaire",
            origin: "Artisan Studio, India",
            closure: "Adjustable Chain"
        }
    },
    {
        id: "25",
        slug: "silver-mist-studs",
        name: "Silver Mist Studs",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/i.png", "/images/earrings/i.1.png"],
        description: "Understated elegance for the modern minimalist. These studs are perfect for everyday luxury.",
        provenance: "Designed in our London studio, reflecting the cool, misty mornings of the English countryside.",
        specs: {
            metal: "Polished Steel Finish",
            stone: "Frosted Glass Finish",
            origin: "London Atelier",
            closure: "Friction Post"
        }
    },
    {
        id: "26",
        slug: "gilded-orchid-earrings",
        name: "Gilded Orchid Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/a.png", "/images/earrings/a.1.png"],
        description: "The exotic beauty of the orchid captured in gold tones, designed to flatter and inspire.",
        provenance: "Each piece is hand-molded from real orchid blooms to maintain the intricate organic texture.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Pearl Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "27",
        slug: "moonlit-serenity-earrings",
        name: "Moonlit Serenity Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/d.png", "/images/earrings/d.1.png"],
        description: "Soft, reflected light and curved forms create an aura of calm and timeless beauty.",
        provenance: "Inspired by the reflections of the moon on a still lake at midnight.",
        specs: {
            metal: "Silver Toned Plating",
            stone: "Moonstone Style Zirconia",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "28",
        slug: "golden-majesty-hoops",
        name: "Golden Majesty Hoops",
        price: 899,
        category: "Earrings",
        images: ["/images/earrings/f.png", "/images/earrings/f.1.png"],
        description: "Classic hoops reimagined with a regal twist, featuring hand-etched textures and bold profiles.",
        provenance: "A tribute to the crown jewels of bygone eras, made for the modern queen.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "29",
        slug: "royal-verdant-earrings",
        name: "Royal Verdant Earrings",
        price: 599,
        category: "Earrings",
        images: ["/images/earrings/g.png", "/images/earrings/g.1.png"],
        description: "Rich emerald tones set within complex golden patterns for a look of unparalleled sophistication.",
        provenance: "Inspired by the lush gardens of the Taj Mahal, capturing the vibrant spirit of nature.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Green Crystal",
            origin: "Artisan Studio, India",
            closure: "Screw Back"
        }
    },
    {
        id: "30",
        slug: "solar-flare-earrings",
        name: "Solar Flare Earrings",
        price: 699,
        category: "Earrings",
        images: ["/images/earrings/h.png", "/images/earrings/h.1.png"],
        description: "Radiant energy captured in aesthetic form, these earrings are a burst of warmth and light.",
        provenance: "Designed to channel the energy of the solstice, bringing light to the wearer's path.",
        specs: {
            metal: "Matt Gold Toned Plating",
            stone: "Amber Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "31",
        slug: "celestial-pearl-intertwined-earrings",
        name: "Celestial Pearl Intertwined Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/j.png", "/images/earrings/j.1.png"],
        description: "A celestial-inspired design featuring intertwined gold-toned curves holding a lustrous pearl.",
        provenance: "Celebrating the harmonious dance of light and form in the night sky.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Artisan Pearl & Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "32",
        slug: "triple-layered-radiance-hoops",
        name: "Triple Layered Radiance Hoops",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/k.png", "/images/earrings/k.1.png"],
        description: "Three layers of polished gold-toned loops create a bold, architectural statement.",
        provenance: "Reflecting the strength and multi-faceted nature of the modern individual.",
        specs: {
            metal: "Polished Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Friction Post"
        }
    },
    {
        id: "33",
        slug: "heart-hoops",
        name: "Heart Hoops",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/l.png", "/images/earrings/l.1.png"],
        description: "A playful yet sophisticated twist on the classic hoop, mimicking the fluid grace of a silk ribbon.",
        provenance: "Hand-bent in our Indian studio to achieve the perfect balance of form and shadow.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "34",
        slug: "nebula-whisper-earrings",
        name: "Nebula Whisper Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/n.png", "/images/earrings/n.1.jpg"],
        description: "Intricately designed pieces inspired by the ethereal beauty of distant nebulae.",
        provenance: "Part of our Celestial collection, crafted with precision in our artisan studio.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Zirconia",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "35",
        slug: "opaline-dream-earrings",
        name: "Opaline Dream Earrings",
        price: 999,
        category: "Earrings",
        images: ["/images/earrings/o.png", "/images/earrings/o.1.png"],
        description: "Soft, iridescent tones that capture the dreamlike quality of opals.",
        provenance: "Designed to reflect the gentle light of the moon.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Opal Style Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "36",
        slug: "pure-radiance-studs",
        name: "Pure Radiance Studs",
        price: 1999,
        category: "Earrings",
        images: ["/images/earrings/p.png", "/images/earrings/p.1.jpg"],
        description: "Clean, elegant studs that bring a pure radiant glow to any ensemble.",
        provenance: "A minimalist masterpiece from our London atelier.",
        specs: {
            metal: "Polished Steel",
            stone: "Clear Crystal",
            origin: "London Atelier",
            closure: "Friction Post"
        }
    },
    {
        id: "37",
        slug: "quartz-crystal-hoops",
        name: "Quartz Crystal Hoops",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/q.png", "/images/earrings/q.1.png"],
        description: "Sophisticated hoops adorned with the natural clarity of quartz-inspired crystals.",
        provenance: "Handcrafted to highlight the organic beauty of crystalline forms.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Quartz Style Zirconia",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "38",
        slug: "radiant-sunburst-earrings",
        name: "Radiant Sunburst Earrings",
        price: 2099,
        category: "Earrings",
        images: ["/images/earrings/r.png", "/images/earrings/r.1.png"],
        description: "Express your inner light with these stunning sunburst-inspired earrings.",
        provenance: "Inspired by the architectural motifs of royal Indian palaces.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Amber Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "39",
        slug: "starlight-seraph-earrings",
        name: "Starlight Seraph Earrings",
        price: 2499,
        category: "Earrings",
        images: ["/images/earrings/s.png", "/images/earrings/s.1.png"],
        description: "Angelic forms meeting celestial brilliance in these unique statement pieces.",
        provenance: "Designed for those who seek beauty beyond the ordinary.",
        specs: {
            metal: "Silver Toned Plating",
            stone: "Starboard Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "40",
        slug: "twilight-bloom-earrings",
        name: "Twilight Bloom Earrings",
        price: 799,
        category: "Earrings",
        images: ["/images/earrings/t.1.png", "/images/earrings/t.png"],
        description: "Capturing the fleeting beauty of flowers that bloom under the twilight sky.",
        provenance: "Meticulously crafted to preserve the delicate texture of petals.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Midnight Zirconia",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "41",
        slug: "urban-chic-studs",
        name: "Urban Chic Studs",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/u.png", "/images/earrings/u.1.png"],
        description: "Modern, sharp, and undeniably chic—perfect for the contemporary lifestyle.",
        provenance: "Part of our Modern Minimalist collection.",
        specs: {
            metal: "Polished Gold Toned",
            stone: "None",
            origin: "London Atelier",
            closure: "Friction Post"
        }
    },
    {
        id: "42",
        slug: "velvet-petal-earrings",
        name: "Velvet Petal Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/v.png", "/images/earrings/v.1.png"],
        description: "Soft textures and rich colors combine in these luxuriously crafted petal earrings.",
        provenance: "Inspired by the deep hues of Indian flora.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Velvet Finish Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "43",
        slug: "whisper-of-gold-hoops",
        name: "Whisper of Gold Hoops",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/w.png", "/images/earrings/w.1.png"],
        description: "Thin, elegant hoops that whisper sophistication with every turn.",
        provenance: "Hand-finished to achieve the ultimate high-polish shine.",
        specs: {
            metal: "Polished Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "44",
        slug: "x-factor-statement-earrings",
        name: "X-Factor Statement Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/x.png", "/images/earrings/x.1.png"],
        description: "Bold, geometric, and unforgettable—the ultimate statement piece for any occasion.",
        provenance: "Pushing the boundaries of traditional jewelry design.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Mixed Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "45",
        slug: "regal-aura-earrings",
        name: "Regal Aura Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/ear2.png", "/images/earrings/ear2.1.png", "/images/earrings/ear2.2.png"],
        description: "Exquisite earrings that radiate a regal aura, perfect for statement-making elegance.",
        provenance: "Hand-finished to perfection in our Indian studio.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Premium Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "46",
        slug: "serene-glow-earrings",
        name: "Serene Glow Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/ear3.2.png", "/images/earrings/ear3.png"],
        description: "A serene and glowing design that captures the gentle light of a peaceful evening.",
        provenance: "Part of our Serenity collection, celebrating tranquility.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Opaline Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "47",
        slug: "ethereal-charm-earrings",
        name: "Ethereal Charm Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/ear4.png", "/images/earrings/ear4.1.png"],
        description: "Enchanting earrings with an ethereal charm, designed to inspire wonder.",
        provenance: "Crafted with delicate attention to detail by master artisans.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Zirconia",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "48",
        slug: "radiant-petal-earrings-new",
        name: "Radiant Petal Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/ear5.png", "/images/earrings/ear5.1.png"],
        description: "Capturing the radiant beauty of a flower in bloom, these earrings are a burst of life.",
        provenance: "Inspired by the vibrant flora of our Himalayan gardens.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Clear Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "49",
        slug: "midnight-sparkle-earrings",
        name: "Midnight Sparkle Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/ear6.png", "/images/earrings/ear6.1.png"],
        description: "Shimmering like the stars in a midnight sky, these earrings bring a touch of celestial magic.",
        provenance: "A tribute to the beauty of the night sky.",
        specs: {
            metal: "Black Rhodium Finish",
            stone: "Stellar Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "50",
        slug: "luminous-drop-earrings",
        name: "Luminous Drop Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/ear7.png", "/images/earrings/ear7.1.png"],
        description: "Luminous drops of light that cascade effortlessly, adding a sophisticated glow.",
        provenance: "Designed to catch and reflect light from every angle.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Dazzling Zirconia",
            origin: "Artisan Studio, India",
            closure: "Hook"
        }
    },
    {
        id: "51",
        slug: "golden-harmony-earrings",
        name: "Golden Harmony Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/ear8.png", "/images/earrings/ear8.1.png"],
        description: "A harmonious blend of traditional gold tones and modern design aesthetics.",
        provenance: "Celebrating the balance of tradition and contemporary style.",
        specs: {
            metal: "Polished Gold Toned",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "52",
        slug: "celestial-whisper-earrings",
        name: "Celestial Whisper Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/ear9.png", "/images/earrings/ear9.1.png"],
        description: "A soft whisper of celestial beauty, these earrings are subtle yet profound.",
        provenance: "Part of our Whisper collection, embodying quiet elegance.",
        specs: {
            metal: "White Gold Toned",
            stone: "Tiny Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "53",
        slug: "eternal-blossom-earrings",
        name: "Eternal Blossom Ear",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/ear10.png", "/images/earrings/ear10.1.png"],
        description: "Artfully crafted to represent the eternal beauty of life in bloom.",
        provenance: "Each piece is unique, reflecting the organic patterns of nature.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Pearl Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        },
        trending: true,
        soldInLast7Days: 142
    },
    {
        id: "54",
        slug: "majestic-swirl-earrings",
        name: "Majestic Swirl Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/ear11.png", "/images/earrings/ear11.1.png"],
        description: "Bold swirls of majestic gold tones create a dynamic and unforgettable look.",
        provenance: "Inspired by the movement of desert sands at sunset.",
        specs: {
            metal: "Matt Gold Toned",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Friction Post"
        },
        trending: true,
        soldInLast7Days: 89
    },
    {
        id: "55",
        slug: "infinite-radiance-earrings",
        name: "Infinite Radiance Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/ear12.png", "/images/earrings/ear12.1.png"],
        description: "Radiating infinite beauty, these earrings are a timeless addition to any collection.",
        provenance: "Crafted for the woman who appreciates enduring luxury.",
        specs: {
            metal: "Polished Gold Toned",
            stone: "Brilliant Zirconia",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "56",
        slug: "velvet-breeze-earrings",
        name: "Velvet Breeze Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/ear13.png", "/images/earrings/ear13.1.png"],
        description: "Soft and graceful as a velvet breeze, these earrings add a touch of luxury.",
        provenance: "Part of our Breeze collection, focusing on light and airy designs.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Velvet Matte Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "57",
        slug: "whispering-elegance-earrings",
        name: "Whispering Elegance Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we1.png", "/images/earrings/we1.1.png"],
        description: "Delicate and understated, these earrings whisper elegance with every movement.",
        provenance: "Hand-finished to capture the subtle grace of morning sunlight.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Clear Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "58",
        slug: "weavers-grace-earrings",
        name: "Weaver's Grace Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/we2.png", "/images/earrings/we2.1.png"],
        description: "Intricately woven designs that reflect the timeless skill of master artisans.",
        provenance: "Inspired by the traditional weaving patterns of Bihar's heritage.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "59",
        slug: "willow-wisp-earrings",
        name: "Willow Wisp Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we4.png", "/images/earrings/we4.1.png"],
        description: "Lightweight and ethereal, these earrings dance like willow wisps in the breeze.",
        provenance: "Designed to evoke the magical atmosphere of an enchanted forest.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Sparkling Accents",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "60",
        slug: "white-emerald-earrings",
        name: "White Emerald Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we6.png", "/images/earrings/we6.1.png"],
        description: "A stunning combination of white tones and emerald-inspired cuts for ultimate sophistication.",
        provenance: "Part of our Royal collection, inspired by palace gardens.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Teardrop Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "61",
        slug: "wild-enchantment-earrings",
        name: "Wild Enchantment Earrings",
        price: 599,
        category: "Earrings",
        images: ["/images/earrings/we7.png", "/images/earrings/we7.1.png"],
        description: "Bold and untamed, these earrings capture the essence of wild floral beauty.",
        provenance: "Inspired by the mountain blooms of the North.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Mixed Stones",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "62",
        slug: "wonder-eve-earrings",
        name: "Wonder Eve Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we8.png", "/images/earrings/we8.1.png"],
        description: "The perfect accessory for a memorable evening, radiating wonder and charm.",
        provenance: "Crafted to celebrate the magic of special occasions.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Brilliant Zirconia",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "63",
        slug: "winter-embrace-earrings",
        name: "Winter Embrace Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we13.png", "/images/earrings/we13.1.png"],
        description: "Cool tones and crystalline forms that capture the beauty of the winter season.",
        provenance: "Inspired by frost patterns on a winter morning.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Frost Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "64",
        slug: "wandering-ethereal-earrings",
        name: "Wandering Ethereal Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we16.png", "/images/earrings/we16.1.png"],
        description: "For the wanderer at heart, these earrings add an ethereal touch to any adventure.",
        provenance: "Designed for the modern nomad pursuing timeless beauty.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Soft Zirconia",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "65",
        slug: "western-elegance-earrings",
        name: "Western Elegance Earrings",
        price: 599,
        category: "Earrings",
        images: ["/images/earrings/we17.png", "/images/earrings/we17.1.png"],
        description: "A perfect blend of contemporary western style and traditional artisanal craft.",
        provenance: "Bridging the gap between Bihar's soul and London's heart.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Minimalist Accents",
            origin: "London Studio",
            closure: "Push Back"
        }
    },
    {
        id: "66",
        slug: "woven-essence-earrings",
        name: "Woven Essence Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we20.png", "/images/earrings/we20.1.png"],
        description: "Capturing the essential beauty of artisanal craft through intricate woven forms.",
        provenance: "A tribute to the centuries-old techniques of Indian jewelry makers.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "68",
        slug: "white-empress-earrings",
        name: "White Empress Earrings",
        price: 99,
        category: "Earrings",
        images: ["/images/earrings/we24.png", "/images/earrings/we24.1.png"],
        description: "Command attention with these regal earrings designed for modern-day royalty.",
        provenance: "Part of our Imperial collection, exuding power and grace.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Premium White Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "69",
        slug: "wishful-echo-earrings",
        name: "Wishful Echo Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we26.png", "/images/earrings/we26.1.png"],
        description: "A soft echo of traditional designs, bringing a wishful charm to your collection.",
        provenance: "Hand-crafted to tell a story of hope and heritage.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Small Crystal Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "70",
        slug: "woodish-elegance-earrings",
        name: "Woodlish Elegance Earrings",
        price: 599,
        category: "Earrings",
        images: ["/images/earrings/we27.png", "/images/earrings/we27.1.png"],
        description: "Earthy tones meeting elegant forms in these unique, nature-inspired earrings.",
        provenance: "Inspired by the organic textures and warm colors of the forest.",
        specs: {
            metal: "Copper Toned Finish",
            stone: "Matte Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "71",
        slug: "waltz-enchantment-earrings",
        name: "Waltz Enchantment Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we28.png", "/images/earrings/we28.1.png"],
        description: "Dazzle and dance with these enchanting earrings that move with kinetic grace.",
        provenance: "Designed to capture the rhythm and elegance of a timeless waltz.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Sparkling Zirconia",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "72",
        slug: "winged-elegance-earrings",
        name: "Winged Elegance Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/we30.png", "/images/earrings/we30.1.png"],
        description: "Taking flight with elegant designs that celebrate the beauty of avian movement.",
        provenance: "Inspired by the flight of the phoenix, representing rebirth and beauty.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Feather Detail Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "73",
        slug: "wispy-ethereal-earrings",
        name: "Wispy Ethereal Earrings",
        price: 99,
        category: "Earrings",
        images: ["/images/earrings/we31.png", "/images/earrings/we31.1.png"],
        description: "Delicate wisps of gold and crystal that create a truly ethereal and magical look.",
        provenance: "Part of nuestro Dreamscape collection, capturing the unseen.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Micro Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "74",
        slug: "we3-earrings",
        name: "Aura Bloom Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/we3.png", "/images/earrings/we3.1.png"],
        description: "A blooming aura of craftsmanship and light.",
        provenance: "Hand-finished by our master artisans.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Premium Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "75",
        slug: "we9-earrings",
        name: "Silver Mist Hoops",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we9.png", "/images/earrings/we9.1.png"],
        description: "Elegant hoops with a silver mist finish.",
        provenance: "Inspired by morning dew.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "76",
        slug: "we10-earrings",
        name: "Royal Petal Studs",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we10.png", "/images/earrings/we10.1.png"],
        description: "Regal studs shaped like delicate petals.",
        provenance: "Artisan crafted for eternal beauty.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Zirconia",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "77",
        slug: "we11-earrings",
        name: "Celestial Swirls",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/we11.png", "/images/earrings/we11.1.png"],
        description: "Dynamic swirls reflecting cosmic energy.",
        provenance: "Inspired by the dance of stars.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Friction Post"
        }
    },
    {
        id: "78",
        slug: "we12-earrings",
        name: "Lumina Drops",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we12.png", "/images/earrings/we12.1.png"],
        description: "Shimmering drops that illuminate your presence.",
        provenance: "Part of our Lumina collection.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Clear Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "79",
        slug: "we14-earrings",
        name: "Golden Weaver Hoops",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/we14.png", "/images/earrings/we14.1.png"],
        description: "Intricately woven gold-toned hoops.",
        provenance: "A tribute to heritage weaving.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "80",
        slug: "we15-earrings",
        name: "Velvet Breeze Studs",
        price: 599,
        category: "Earrings",
        images: ["/images/earrings/we15.png", "/images/earrings/we15.1.png"],
        description: "Soft and graceful studs with a velvet finish.",
        provenance: "Inspired by gentle spring breezes.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Matte Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "81",
        slug: "we18-earrings",
        name: "Wild Enchantress Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/we18.png", "/images/earrings/we18.1.png"],
        description: "Bold and untamed floral designs.",
        provenance: "Capturing wild beauty.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Mixed Stones",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "82",
        slug: "we19-earrings",
        name: "Winter Glow Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/we19.png", "/images/earrings/we19.1.png"],
        description: "Cool tones meeting a brilliant glow.",
        provenance: "Inspired by winter mornings.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Frost Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "83",
        slug: "we22-earrings",
        name: "Water Ripple Earrings",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/we22.png", "/images/earrings/we22.1.png"],
        description: "Fluid curves mimicking water's surface.",
        provenance: "Serene and moving design.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Azure Accents",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "85",
        slug: "we25-earrings",
        name: "Celestial Whisper Hoops",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we25.png", "/images/earrings/we25.1.png"],
        description: "A soft whisper of stellar beauty.",
        provenance: "Hand-finished for subtle radiance.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "86",
        slug: "we32-earrings",
        name: "Ethereal Wing Studs",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we32.png", "/images/earrings/we32.1.png"],
        description: "Taking flight with delicate winged forms.",
        provenance: "Inspired by the magic of flight.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Clear Crystals",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "87",
        slug: "we33-earrings",
        name: "Golden Harmony Studs",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we33.png", "/images/earrings/we33.1.png"],
        description: "A perfect balance of form and light.",
        provenance: "Handcrafted for timeless elegance.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Friction Post"
        }
    },
    {
        id: "88",
        slug: "we34-earrings",
        name: "Starlight Bloom Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we34.png", "/images/earrings/we34.1.png"],
        description: "Floral beauty meeting celestial sparkle.",
        provenance: "Part of our signature collection.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Sparkling Zirconia",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "pendant-02",
        slug: "pen2-pendant",
        name: "Regal Sunburst Pendant",
        price: 599,
        category: "Pendant/Necklace",
        images: ["/images/pendant/pen2.png", "/images/pendant/pen2.1.png"],
        description: "A bold sunburst design radiating warmth.",
        provenance: "Inspired by ancient solar motifs.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Central Solitaire",
            origin: "Artisan Studio, India",
            closure: "Adjustable Chain"
        }
    },
    {
        id: "pendant-03",
        slug: "pen3-pendant",
        name: "Moonlit Serenity Pendant",
        price: 599,
        category: "Pendant/Necklace",
        images: ["/images/pendant/pen3.png", "/images/pendant/pen3.1.png"],
        description: "Soft, reflected light and curved forms.",
        provenance: "Inspired by moonlight on water.",
        specs: {
            metal: "Silver Toned Plating",
            stone: "Moonstone Style Zirconia",
            origin: "Artisan Studio, India",
            closure: "Adjustable Chain"
        }
    },
    {
        id: "89",
        slug: "we35-earrings",
        name: "Celestial Radiance Earrings",
        price: 299,
        category: "Earrings",
        images: ["/images/earrings/we35.png", "/images/earrings/we35.1.png"],
        description: "Capturing the brilliance of a stellar event, these earrings bring a profound glow to your look.",
        provenance: "Part of our High-Altitude collection, capturing mountain light.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Premium Zirconia",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "90",
        slug: "we36-earrings",
        name: "Imperial Bloom Earrings",
        price: 399,
        category: "Earrings",
        images: ["/images/earrings/we36.png", "/images/earrings/we36.1.png"],
        description: "Regal floral motifs meeting master-crafted gold tones for a presence of authority.",
        provenance: "Inspired by the royal heritage gardens of India.",
        specs: {
            metal: "Matt Gold Toned Finish",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "91",
        slug: "we37-earrings",
        name: "Starlight Whisper Earrings",
        price: 499,
        category: "Earrings",
        images: ["/images/earrings/we37.png", "/images/earrings/we37.1.png"],
        description: "A delicate whisper of stellar brilliance, perfect for subtle yet striking elegance.",
        provenance: "Handcrafted to catch the moonlight with every movement.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Tiny Star Crystals",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    },
    {
        id: "92",
        slug: "we38-earrings",
        name: "Ethereal Glow Earrings",
        price: 99,
        category: "Earrings",
        images: ["/images/earrings/we38.png", "/images/earrings/we38.1.png"],
        description: "Soft, dreamlike curves that seem to emit their own ethereal light.",
        provenance: "Designed to capture the fleeting beauty of a sunrise breeze.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Soft-Focus Zirconia",
            origin: "Artisan Studio, India",
            closure: "French Wire"
        }
    },
    {
        id: "93",
        slug: "we40-earrings",
        name: "Regal Petal Earrings",
        price: 99,
        category: "Earrings",
        images: ["/images/earrings/we40.png", "/images/earrings/we40.1.png"],
        description: "Broad, architectural petals that frame the face with architectural grace and luxury.",
        provenance: "A modern tribute to classical floral design elements.",
        specs: {
            metal: "High-Polish Gold Tone",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Clutch Back"
        }
    },
    {
        id: "waist-chain-01",
        slug: "imperial-grace-waist-chain",
        name: "Imperial Grace Waist Chain",
        price: 999,
        category: "Waist Chain",
        images: ["/images/pendant/pen4.png", "/images/pendant/pen4.1.png"],
        description: "A centerpiece that embodies grace and strength through its interlocking solar patterns, designed to elegantly drape around the waist.",
        provenance: "Part of our Heritage collection, celebrating artisanal legacy.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Mixed Brilliance Zirconia",
            origin: "Artisan Studio, India",
            closure: "Adjustable Chain"
        }
    },
    {
        id: "br-01",
        slug: "celestial-flow-bracelet",
        name: "Celestial Flow Bracelet",
        price: 99,
        category: "Bracelets",
        images: ["/images/bracelets/br1.png", "/images/bracelets/br1.1.png"],
        description: "A fluid and elegant bracelet that mimics the graceful movement of the night sky.",
        provenance: "Part of our Celestial collection, capturing ethereal beauty.",
        specs: {
            metal: "Gold Toned Finish",
            stone: "Clear Crystals",
            origin: "Artisan Studio, India",
            closure: "Adjustable Clasp"
        }
    },
    {
        id: "br-02",
        slug: "gilded-link-bracelet",
        name: "Gilded Link Bracelet",
        price: 99,
        category: "Bracelets",
        images: ["/images/bracelets/br2.png", "/images/bracelets/br2.1.png"],
        description: "Classic links reimagined with a high-polish gold tone for a sophisticated presence.",
        provenance: "Hand-finished to ensure a seamless and luxurious feel on the wrist.",
        specs: {
            metal: "High-Polish Gold Tone",
            stone: "None",
            origin: "Artisan Studio, India",
            closure: "Toggle Clasp"
        }
    },
    {
        id: "94",
        slug: "we41-earrings",
        name: "Midnight Glow Earrings",
        price: 799,
        category: "Earrings",
        images: ["/images/earrings/we41.png", "/images/earrings/we41.1.png"],
        description: "Capturing the mysterious glow of the midnight moon, these earrings are a statement of subtle power.",
        provenance: "Designed in our London studio for the mysterious and confident.",
        specs: {
            metal: "Silver Toned Finish",
            stone: "Dark Zirconia",
            origin: "London Atelier",
            closure: "Push Back"
        }
    },
    {
        id: "95",
        slug: "we42-earrings",
        name: "Verdant Breeze Earrings",
        price: 2099,
        category: "Earrings",
        images: ["/images/earrings/we42.png", "/images/earrings/we42.1.png"],
        description: "Soft green accents meeting delicate gold-toned patterns for a look of natural grace.",
        provenance: "Inspired by the spring breezes of the Himalayan foothills.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Green Crystal Accents",
            origin: "Artisan Studio, India",
            closure: "Butterfly Back"
        }
    },
    {
        id: "96",
        slug: "we43-earrings",
        name: "Rose Quartz Serenity Studs",
        price: 1499,
        category: "Earrings",
        images: ["/images/earrings/we43.png", "/images/earrings/we43.1.png"],
        description: "Understated studs featuring the soft, calming pink of rose quartz-style crystals.",
        provenance: "Part of our Serenity collection, promoting inner peace and beauty.",
        specs: {
            metal: "Rose Gold Toned",
            stone: "Rose Quartz Style Zirconia",
            origin: "Artisan Studio, India",
            closure: "Friction Post"
        }
    },
    {
        id: "97",
        slug: "we44-earrings",
        name: "Silver Mist Hoops",
        price: 99,
        category: "Earrings",
        images: ["/images/earrings/we44.png", "/images/earrings/we44.1.png"],
        description: "Modern silver-toned hoops with a frosted finish for a chic and contemporary look.",
        provenance: "Reflecting the cool, misty mornings of urban landscapes.",
        specs: {
            metal: "Polished Silver Finish",
            stone: "None",
            origin: "London Atelier",
            closure: "Hinge Clasp"
        }
    },
    {
        id: "98",
        slug: "we45-earrings",
        name: "Golden Orchid Studs",
        price: 199,
        category: "Earrings",
        images: ["/images/earrings/we45.png", "/images/earrings/we45.1.png"],
        description: "Intricately detailed studs that capture the exotic beauty of a golden orchid.",
        provenance: "Each piece is hand-molded to preserve the delicate texture of real orchid petals.",
        specs: {
            metal: "Gold Toned Plating",
            stone: "Pearl Accents",
            origin: "Artisan Studio, India",
            closure: "Push Back"
        }
    }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductById = (id: string) => products.find(p => p.id === id);
