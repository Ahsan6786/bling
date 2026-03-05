"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (name: string, price: number, image: string, slug: string) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Initialize cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("blingish_cart");
        if (savedCart) {
            try {
                let parsedCart = JSON.parse(savedCart);
                // Sanitize legacy image paths to fix 404s
                parsedCart = parsedCart.map((item: any) => {
                    if (item.image && item.image.startsWith("/images/") &&
                        !item.image.includes("/earrings/") &&
                        !item.image.includes("/pendant/") &&
                        !item.image.includes("/blingish/")) {
                        const filename = item.image.replace("/images/", "");
                        if (filename.startsWith("pen")) {
                            return { ...item, image: `/images/pendant/${filename}` };
                        } else {
                            return { ...item, image: `/images/earrings/${filename}` };
                        }
                    }
                    return item;
                });
                setCart(parsedCart);
            } catch (error) {
                console.error("Failed to load cart from local storage", error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Persist cart to localStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("blingish_cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (name: string, price: number, image: string, slug: string) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.slug === slug);
            if (existingItem) {
                return prev.map((item) =>
                    item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            const newItem: CartItem = {
                id: Math.random().toString(36).substr(2, 9),
                slug,
                name,
                price,
                image,
                quantity: 1,
            };
            return [...prev, newItem];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                isCartOpen,
                setIsCartOpen,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
