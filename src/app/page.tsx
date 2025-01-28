"use client";
import { useState } from "react";
import ProductForm from "@/components/ProductForm/ProductForm";
import ProductList from "@/components/ProductList/ProductList";
import { Product } from "@/types/products";
import { v4 as uuidv4 } from "uuid";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (productData: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...productData,
      id: uuidv4(),
    };
    setProducts([...products, newProduct]);
    }

    const handleDeleteProduct = (id: string) =>  {
      setProducts(products.filter((product) => product.id !== id));
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Gestionarea Produselor
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Adaugati si gestionati produsele</p>
        <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Adauga Produs Nou</h2>
            <ProductForm onSubmit={handleAddProduct} />
          </div>
          <div className="bg-white dark:bg-gray-800 roudned-lg shadow-lg p-6 overflow-y-auto max-h-[400px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Lista Produse</h2>
            <ProductList products={products} onDelete={handleDeleteProduct} />
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
