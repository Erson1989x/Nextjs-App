"use client";
import { useReducer, useEffect } from "react";
import ProductForm from "@/components/ProductForm/ProductForm";
import ProductList from "@/components/ProductList/ProductList";
import { localProducts } from "@/utils/localStorage";
import { reducer, initialState } from "@/context/ProductContext";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";

export default function Home() {
  const [{ products, status, deleteId }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    try {
      const savedProducts = localProducts();
      dispatch({ type: "dataReceived", payload: savedProducts });
    } catch {
      dispatch({ type: "dataFailed" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-5xl font-extrabold text-center mb-3 text-gray-800 tracking-tight">
            Gestionarea Produselor
          </h1>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Adaugati si gestionati produsele
          </p>
          {status === "loading" && <Loading />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                  Adauga Produs Nou
                </h2>
                <ProductForm dispatch={dispatch} />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-200 overflow-y-auto max-h-[500px]">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4 sticky top-0 bg-white">
                  Lista Produse
                </h2>
                <ProductList
                  products={products}
                  dispatch={dispatch}
                  deleteId={deleteId}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
