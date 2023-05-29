export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
export interface InventoryType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export enum InventoryActionType {
  ADD,
  SET,
  UPDATE,
  REMOVE,
}
export interface InventoryState {
  products: Product[];
}
export interface InventoryAction {
  type: InventoryActionType;
  //   payload: Product;
  payload: any;
}
