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
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Confirmare stergere
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Sunteti sigur ca doriti sa stergeti produsul `{product.name}`?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancelDelete}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150"
          >
            Anuleaza
          </button>
          <button
            onClick={handleDeleteConfirm}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150"
          >
            Sterge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
