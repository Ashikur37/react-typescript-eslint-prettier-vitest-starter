import { useState } from 'react';
import Counter from './context/Counter';
import One from './context/One';

function Hoc() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Counter.Provider value={{ count, incrementCount, decrementCount }}>
      <One />
    </Counter.Provider>
  );
}

export default Hoc;
