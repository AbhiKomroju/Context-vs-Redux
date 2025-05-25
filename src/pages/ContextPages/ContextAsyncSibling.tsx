import { useAppContext } from "../../state-management/context/useAppContext";
import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";

export default function ContextAsyncSibling(): JSX.Element {
  const { state, dispatch } = useAppContext();

  const handleAsyncIncrement = () => {
    dispatch({ type: "ASYNC_INCREMENT" });
  };

  const handleAsyncDecrement = () => {
    dispatch({ type: "ASYNC_DECREMENT" });
  };

  return (
    <div className="component-box component-box--sibling component-box--async">
      <div className="component-box__header">
        <h4>Async Sibling</h4>
        <span className="component-box__badge">(Async)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="context-async-sibling-render-count" />
      </div>
      <div className="component-box__content">
        <Counter
          count={state.asyncCount}
          onIncrement={handleAsyncIncrement}
          onDecrement={handleAsyncDecrement}
        />
      </div>
    </div>
  );
}
