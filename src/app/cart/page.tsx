import React from "react";
import CartClient from "./CartClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Cabinet | Blingish",
    description: "Review your selected jewellery pieces in your cabinet before finalizing your order via WhatsApp.",
};

export default function CartPage() {
    return <CartClient />;
}
