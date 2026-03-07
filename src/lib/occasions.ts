import { useEffect, useState } from "react";

export type Occasion = {
    name: string;
    startMonth: number; // 0-indexed (Jan is 0)
    startDate: number;
    endMonth: number;
    endDate: number;
    themeProps: {
        accent: string;
        accentSecondary: string;
        gradient: string;
        greeting: string;
        emoji: string;
        particleType?: "flower" | "heart" | "light" | "confetti" | "snow";
    };
};

const occasions: Occasion[] = [
    {
        name: "Women's Day",
        startMonth: 2, // March
        startDate: 7,
        endMonth: 2,
        endDate: 9, // Let it run till 9th
        themeProps: {
            accent: "#D63484", // Vibrant Pink
            accentSecondary: "#FF9BD2",
            gradient: "linear-gradient(135deg, #D63484 0%, #FF9BD2 100%)",
            greeting: "Empowering Beauty, Celebrating You.",
            emoji: "🌸",
            particleType: "flower"
        }
    },
    {
        name: "Valentine's Week",
        startMonth: 1, // Feb
        startDate: 7,
        endMonth: 1,
        endDate: 14,
        themeProps: {
            accent: "#E90064", // Deep Passion Red
            accentSecondary: "#FFBDCD",
            gradient: "linear-gradient(135deg, #E90064 0%, #FF55BB 100%)",
            greeting: "Crafted for Love, Worn with Passion.",
            emoji: "💝",
            particleType: "heart"
        }
    },
    {
        name: "Diwali Season",
        startMonth: 9, // Oct
        startDate: 25,
        endMonth: 10, // Nov
        endDate: 5,
        themeProps: {
            accent: "#FF8C00", // Bright Marigold
            accentSecondary: "#FFD700", // Gold
            gradient: "linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)",
            greeting: "Illuminate Your Aura with Blingish.",
            emoji: "🪔",
            particleType: "light"
        }
    },
    {
        name: "Christmas/New Year",
        startMonth: 11, // Dec
        startDate: 20,
        endMonth: 0, // Jan
        endDate: 3,
        themeProps: {
            accent: "#008170", // Forest Green
            accentSecondary: "#D21312", // Red
            gradient: "linear-gradient(135deg, #008170 0%, #00BF63 100%)",
            greeting: "Gift Perfection, Shine Forever.",
            emoji: "🎄",
            particleType: "snow"
        }
    }
];

export const getCurrentOccasion = () => {
    if (typeof window === "undefined") return null;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();

    return occasions.find(o => {
        const isSameMonth = currentMonth >= o.startMonth && currentMonth <= o.endMonth;
        if (!isSameMonth) return false;

        // Simplified check, could be more robust for cross-month
        const withinStart = currentMonth === o.startMonth ? currentDate >= o.startDate : true;
        const withinEnd = currentMonth === o.endMonth ? currentDate <= o.endDate : true;

        return withinStart && withinEnd;
    }) || null;
};
