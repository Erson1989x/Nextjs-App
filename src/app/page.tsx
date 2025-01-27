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
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Product Management
        </h1>
        <ProductForm onSubmit={handleAddProduct} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </div>
    </main>
  );
}
