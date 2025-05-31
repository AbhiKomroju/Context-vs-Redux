import { useAppContext } from "../../state-management/context/useAppContext";
import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";
import { ExplanationBox } from "../../components/ExplanationBox";

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
        <span className="component-box__badge">(Context Async)</span>
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
      <ExplanationBox
        title="Context Async Operations"
        explanation="Component consuming async counter state from Context which gets updated after 2 seconds when the context component mounts."
        keyPoints={[
          "Re-renders on every Context state change",
          "Updating the state updates all the components consuming the Context",
        ]}
        variant="minimal"
      />
    </div>
  );
}
