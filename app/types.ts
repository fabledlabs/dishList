export enum Measurements {
  Ounce = 'oz',
  TableSpoon = 'tbsp',
  Teaspoon = 'tsp',
  Cub = 'cup',
  Quart = 'qt',
  Pint = 'pt',
  Gallon = 'gal',
  Can = 'can',
  Pound = 'lb',
  ML = 'ml',
  L = 'l',
  Mg = 'mg',
  G = 'g',
  Kg = 'kg',
  OfThem = 'of them'
}

export enum DishType {
  Appetizer = 'appetizer',
  Main = 'main',
  Side = 'side',
  Dessert = 'dessert'
}

export type Env = {
  FATHOM_ID: string | undefined
}