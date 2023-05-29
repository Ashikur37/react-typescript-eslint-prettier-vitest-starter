import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import Inventory from '../context/Inventory';

export default function ProductList() {
  const data = useContext(Inventory);
  const removeProduct = (id: number) => {
    if (!data) {
      return null;
    }
    const { deleteProduct } = data;
    deleteProduct(id);
    return redirect('/');
  };
  return (
    <div>
      ProductList
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img className="w-[100px]" src={product.image} alt="" />
              </td>
              <td>
                <button type="button" onClick={() => removeProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
