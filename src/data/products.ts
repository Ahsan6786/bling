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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
        name: "Eternal Blossom Earrings",
        price: 0,
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
        price: 0,
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
        price: 0,
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
        price: 0,
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
    }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductById = (id: string) => products.find(p => p.id === id);
