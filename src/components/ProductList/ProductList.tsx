import { Product } from "@/types/products";
import React from "react";
import EmptyProductList from "../EmptyProductList/EmptyProductList";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ProductItem from "../ProductItem/ProductItem";
import { ProductAction } from "@/context/ProductContext";

interface ProductListProps {
  products: Product[];
  dispatch: React.Dispatch<ProductAction>;
  deleteId: string | null;
}

const ProductList = ({ products, dispatch, deleteId }: ProductListProps) => {
  const handleDelete = (id: string) => {
    dispatch({
      type: "showDeleteConfirmation",
      payload: id,
    });
  };

  const handleDeleteConfirm = () => {
    dispatch({
      type: "deleteProduct",
      payload: deleteId as string,
    });
    dispatch({
      type: "hideDeleteConfirmation",
    });
  };

  const handleCancelDelete = () => {
    dispatch({
      type: "hideDeleteConfirmation",
    });
  };

  if (products.length === 0) {
    return <EmptyProductList />;
  }

  const productToDelete = products.find((product) => product.id === deleteId);

  return (
    <div className="space-y-4">
      <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
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
