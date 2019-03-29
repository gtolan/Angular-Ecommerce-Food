export interface IBurgers {
  description: string;
  name: string;
  image: string;
  price: number;
}

export interface IDesserts {
  description: string;
  name: string;
  image: string;
  price: number;
}

export interface IPizzas {
  toppings: string;
  name: string;
  image: string;
  price: number;
}

export interface IProduct {
  toppings: string;
  description: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
