import { Product } from "@/types/products";

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList = ({ products, onDelete }: ProductListProps) => {
  return (
    <div className="mt-8">
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Nu exista produse in lista</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
            >
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-500">
                  Pret: {product.price} {product.currency}
                </p>
              </div>
              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Sterge
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
