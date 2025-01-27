import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Product } from "@/types/products";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Numele produsului este obligatoriu")
    .min(3, "Numele produsului trebuie sa aiba cel putin 3 caractere"),
  price: Yup.number()
    .required("Pretul produsului este obligatoriu")
    .positive("Pretul produsului trebuie sa fie pozitiv"),
  currency: Yup.string().required("Valuta produsului este obligatorie"),
});

interface ProductFormProps {
  onSubmit: (product: Omit<Product, "id">) => void;
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  return (
    <Formik
      initialValues={{ name: "", price: "", currency: "EUR" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          name: values.name,
          price: Number(values.price),
          currency: values.currency,
        });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Field
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <Field
              type="number"
              name="price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Moneda
            </label>
            <Field
              as="select"
              name="currency"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="EUR">EUR</option>
              <option value="RON">RON</option>
            </Field>
            <ErrorMessage
              name="currency"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
