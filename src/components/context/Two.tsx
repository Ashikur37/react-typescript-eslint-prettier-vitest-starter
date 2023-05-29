import { useContext } from 'react';
import Counter from './Counter';

function Two() {
  return (
    <Counter.Consumer>
      {(data) => (
        <div>
          <h1>Two</h1>
          {data?.count}
          <button type="button" onClick={data?.incrementCount}>
            Inc
          </button>
        </div>
      )}
    </Counter.Consumer>
  );
}
export default Two;
