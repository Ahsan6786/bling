import { useEffect, useState } from "react";

export type Occasion = {
    name: string;
    startMonth: number; // 0-indexed (Jan is 0)
    startDate: number;
    endMonth: number;
    endDate: number;
    themeProps: {
        accent?: string;
        accentSecondary?: string;
        bgColor?: string;
        textColor?: string;
        greeting?: string;
        icon?: string;
        emoji?: string;
    };
};

const occasions: Occasion[] = [
    {
        name: "Women's Day",
        startMonth: 2, // March
        startDate: 7,
        endMonth: 2,
        endDate: 8,
        themeProps: {
            accent: "#D14D72", // Deep Blush Pink
            accentSecondary: "#FCC8D1", // Soft Pink
            greeting: "Celebrating the Power of Every Woman.",
            emoji: "🌸",
        }
    },
    {
        name: "Valentine's Week",
        startMonth: 1, // Feb
        startDate: 7,
        endMonth: 1,
        endDate: 14,
        themeProps: {
            accent: "#C2115E", // Rich Magenta
            accentSecondary: "#FFDDEE",
            greeting: "Wrapped in Love, Crafted with Passion.",
            emoji: "💝",
        }
    },
    {
        name: "Independence Day",
        startMonth: 7, // Aug
        startDate: 15,
        endMonth: 7,
        endDate: 15,
        themeProps: {
            accent: "#FF9933", // Saffron
            accentSecondary: "#138808", // Green
            greeting: "The Brilliance of Freedom. Made in India.",
            emoji: "🇮🇳",
        }
    },
    {
        name: "Diwali Season",
        startMonth: 9, // Oct (approximate for general use in this year or standard range)
        startDate: 25,
        endMonth: 10, // Nov
        endDate: 5,
        themeProps: {
            accent: "#E59400", // Deep Gold/Marigold
            accentSecondary: "#911D00", // Earthy Red
            greeting: "Bring Home the Light of Luxury.",
            emoji: "🪔",
        }
    },
    {
        name: "Christmas/New Year",
        startMonth: 11, // Dec
        startDate: 20,
        endMonth: 0, // Jan
        endDate: 3,
        themeProps: {
            accent: "#165B33", // Pine Green
            accentSecondary: "#BB2528", // Classic Red
            greeting: "The Season of Giving & Shining.",
            emoji: "🎄",
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
