import { useContext } from 'react';
import Counter from './Counter';
import Two from './Two';

function One() {
  const data = useContext(Counter);
  return (
    <div>
      <h1>One</h1>
      {data?.count}
      <button type="button" onClick={data?.decrementCount}>
        Inc
      </button>
      <Two />
    </div>
  );
}
export default One;
