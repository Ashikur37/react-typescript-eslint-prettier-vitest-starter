import {
  InventoryAction,
  InventoryActionType,
  InventoryState,
} from '../types/product';

export const reducer = (state: InventoryState, action: InventoryAction) => {
  switch (action.type) {
    case InventoryActionType.ADD:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
          },
        ],
      };
    case InventoryActionType.SET:
      return {
        ...state,
        products: action.payload.products,
      };
    case InventoryActionType.REMOVE:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export const initialState: InventoryState = {
  products: [],
};
