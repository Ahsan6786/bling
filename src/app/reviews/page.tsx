import React from "react";
import ReviewsClient from "./ReviewsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Stories | Testimonials | Blingish",
    description: "Read the personal accounts of our patrons. Every piece we craft tells a unique story of celebration and aesthetic dedication.",
};

export default function ReviewsPage() {
    return <ReviewsClient />;
}
