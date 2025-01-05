import { useStore } from './store/store';

const CounterZustand = () => {
  const { count, inc, dec } = useStore();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default CounterZustand;
