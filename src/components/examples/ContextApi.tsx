import { Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useReducer } from 'react';
import Inventory from '../context/Inventory';
import ProductList from './ProductList';
import { InventoryActionType, Product } from '../../types/product';
import AddProduct from './AddProduct';
import Nav from './Nav';
import { initialState, reducer } from '../../reucers/InventoryReducer';

export default function ContextApi() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // //   const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.products]);
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      dispatch({
        type: InventoryActionType.SET,
        payload: {
          products: JSON.parse(storedProducts),
        },
      });
    }
  }, []);
  const addProduct = (product: Product) => {
    dispatch({
      type: InventoryActionType.ADD,
      payload: product,
    });
  };
  const deleteProduct = (id: number) => {
    dispatch({
      type: InventoryActionType.REMOVE,
      payload: { id },
    });
  };
  return (
    <Inventory.Provider
      value={useMemo(
        () => ({
          products: state.products,
          addProduct,
          deleteProduct,
        }),
        [state.products]
      )}
    >
      <Nav />
      {state.products.length}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Inventory.Provider>
  );
}
