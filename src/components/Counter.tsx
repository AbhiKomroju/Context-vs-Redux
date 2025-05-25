import type { CounterProps } from "../types";

export const Counter: React.FC<CounterProps> = ({
  onIncrement,
  onDecrement,
  count,
}) => {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
