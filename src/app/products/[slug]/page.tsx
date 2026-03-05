import React from "react";
import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: "Product Not Found | Blingish" };

    return {
        title: `${product.name} | Premium Artificial Jewellery | Blingish`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Blingish`,
            description: product.description,
            images: [{ url: "/images/blingish/hero.jpeg" }],
        },
    };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return <ProductClient product={product} />;
}
