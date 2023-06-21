export type ButtonT = "button" | "submit";

export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type Filters = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};
