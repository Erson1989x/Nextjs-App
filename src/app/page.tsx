"use client";
import { useState, useEffect } from "react";
import ProductForm from "@/components/ProductForm/ProductForm";
import ProductList from "@/components/ProductList/ProductList";
import { Product } from "@/types/products";
import { v4 as uuidv4 } from "uuid";
import { saveProducts, localProducts } from "@/utils/localStorage";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saveProducts = localProducts();
    setProducts(saveProducts);
  }, []);

  const handleAddProduct = (productData: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...productData,
      id: uuidv4(),
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
            Gestionarea Produselor
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Adaugati si gestionati produsele
          </p>
          <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Adauga Produs Nou
              </h2>
              <ProductForm onSubmit={handleAddProduct} />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[400px]">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Lista Produse
              </h2>
              <ProductList products={products} onDelete={handleDeleteProduct} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
