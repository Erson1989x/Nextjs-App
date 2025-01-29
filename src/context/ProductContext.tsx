import { v4 as uuidv4 } from "uuid";
import { Product } from "@/types/products";
import { saveProducts } from "@/utils/localStorage";

type Status = "loading" | "error" | "ready";

interface State {
  products: Product[];
  status: Status;
  deleteId: string | null;
}

export const initialState: State = {
  products: [],
  status: "loading",
  deleteId: null,
};

export type ProductState = typeof initialState;

export type ProductAction =
  | { type: "dataReceived"; payload: Product[] }
  | { type: "dataFailed" }
  | { type: "addProduct"; payload: Omit<Product, "id"> }
  | { type: "deleteProduct"; payload: string }
  | { type: "showDeleteConfirmation"; payload: string }
  | { type: "hideDeleteConfirmation" };

export const reducer = (state: ProductState, action: ProductAction): State => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        products: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "addProduct":
      const newProduct = {
        ...action.payload,
        id: uuidv4(),
      };
      const updatedProducts = [...state.products, newProduct];
      saveProducts(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
      };
    case "deleteProduct":
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      saveProducts(filteredProducts);
      return {
        ...state,
        products: filteredProducts,
      };
    case "showDeleteConfirmation":
      return {
        ...state,
        deleteId: action.payload,
      };
    case "hideDeleteConfirmation":
      return {
        ...state,
        deleteId: null,
      };
    default:
      return state;
  }
};
