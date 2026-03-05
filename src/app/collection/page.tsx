import React from "react";
import { products } from "@/data/products";
import CollectionClient from "./CollectionClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Collection | Premium Artificial Jewellery | Blingish",
    description: "Explore our exquisite collection of artisanal jewellery. Each piece is a testament to beauty and craftsmanship.",
};

export default function CollectionPage() {
    return <CollectionClient products={products} />;
}
