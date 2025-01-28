import { Product } from "@/types/products";

const PRODUCTS_KEY = "products";

export const saveProducts = (products: Product[]): void => {
    try {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    }  catch (error) {
        console.error("Erroare la salvarea produselor in localStorage:", error);
    }
}

export const localProducts = (): Product[] => {
    try {
        const products = localStorage.getItem(PRODUCTS_KEY);
        return products ? JSON.parse(products) : [];
    }  catch (error) {
        console.error("Erroare la incarcarea produselor din localStorage:", error);
        return [];
    }
}