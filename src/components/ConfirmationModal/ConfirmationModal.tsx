import { Product } from "@/types/products";
import React from "react";

interface DeleteConfirmationModalProps {
  product: Product;
  handleCancelDelete: () => void;
  handleDeleteConfirm: () => void;
}

const ConfirmationModal = ({
  product,
  handleDeleteConfirm,
  handleCancelDelete,
}: DeleteConfirmationModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-auto shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Confirmare stergere
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Sunteti sigur ca doriti sa stergeti produsul{" "}
          <span className="font-bold">{product.name}</span>?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancelDelete}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
          >
            Anuleaza
          </button>
          <button
            onClick={handleDeleteConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
          >
            Sterge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
