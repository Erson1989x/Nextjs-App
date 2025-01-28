import React from "react";
import { Product } from "@/types/products";

interface ProductItemProps {
  product: Product;
  handleDelete: (id: string) => void;
}

const ProductItem = ({ product, handleDelete }: ProductItemProps) => {
  return (
    <li className="py-4 px-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out cursor-pointer hover:bg-gray-50 hover:shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {product.price} {product.currency}
            </span>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <button
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150 ease-in-out"
            onClick={() => handleDelete(product.id)}
          >
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Sterge
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
