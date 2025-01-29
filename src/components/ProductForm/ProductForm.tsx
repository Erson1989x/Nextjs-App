import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Currency } from "@/types/products";
import { ProductAction } from "@/context/ProductContext";

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
  dispatch: React.Dispatch<ProductAction>;
}

const ProductForm = ({ dispatch }: ProductFormProps) => {
  return (
    <Formik
      initialValues={{ name: "", price: "", currency: "EUR" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({
          type: "addProduct",
          payload: {
            name: values.name,
            price: Number(values.price),
            currency: values.currency as Currency,
          },
        });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nume
            </label>
            <Field
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:border-gray-800"
              placeholder="Nume produs"
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Pret
            </label>
            <Field
              type="number"
              name="price"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:border-gray-800"
              placeholder="Pret produs"
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Moneda
            </label>
            <Field
              as="select"
              name="currency"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:border-gray-800 cursor-pointer"
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
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adaugare...
              </span>
            ) : (
              "Adauga produs"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
