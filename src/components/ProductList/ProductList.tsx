import { Product } from "@/types/products";
import React, { useState } from "react";
import EmptyProductList from "../EmptyProductList/EmptyProductList";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ProductItem from "../ProductItem/ProductItem";
import { ProductAction } from "@/context/ProductContext";

interface ProductListProps {
  products: Product[];
  dispatch: React.Dispatch<ProductAction>;
}

const ProductList = ({ products, dispatch }: ProductListProps) => {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      dispatch({
        type: "deleteProduct",
        payload: deleteId,
      });
      setDeleteId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  if (products.length === 0) {
    return <EmptyProductList />;
  }

  const productToDelete = products.find((product) => product.id === deleteId);

  return (
    <div className="space-y-4">
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {deleteId && productToDelete && (
        <ConfirmationModal
          product={productToDelete}
          handleDeleteConfirm={handleDeleteConfirm}
          handleCancelDelete={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
