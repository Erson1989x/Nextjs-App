export enum Currency {
    RON = "RON",
    EUR = "EUR"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: Currency;
}