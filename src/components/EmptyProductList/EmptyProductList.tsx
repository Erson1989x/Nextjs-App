import React from "react";

const EmptyProductList = () => {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
      <div className="text-gray-400 mb-4">
        <svg
          className="mx-auto h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <p className="text-gray-700 font-medium text-lg mb-2">
        Nu ai adaugat produse
      </p>
      <p className="text-sm text-gray-500">
        Adauga produse in lista de produse
      </p>
    </div>
  );
};

export default EmptyProductList;
