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
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
            Gestionarea Produs
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Adaugati si gestionati produsele
          </p>
          {status === "loading" && <Loading />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Adauga Produs Nou
                </h2>
                <ProductForm dispatch={dispatch} />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[400px]">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
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
