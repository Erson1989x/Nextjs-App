export enum Currency {
  RON = "RON",
  EUR = "EUR",
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly currency: Currency;
}
