import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";
import { useAppContext } from "../../state-management/context/useAppContext";
import ContextSimpleConsumer from "./ContextSimpleConsumer";
import ContextMemoizedConsumer from "./ContextMemoizedConsumer";
import ContextConditionalConsumer from "./ContextConditionalConsumer";

export default function ContextStateDemo(): JSX.Element {
  const { state, dispatch } = useAppContext();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="state-demo-container">
      <div className="component-box component-box--state-demo">
        <div className="component-box__header">
          <h3>Context State Demo</h3>
        </div>
        <div className="component-box__render">
          <RenderCounter id="render-context-state-demo-count" />
        </div>
        <div className="component-box__content">
          <Counter
            count={state.count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      </div>

      <div className="tree-connection tree-connection--demo"></div>

      <div className="consumer-children">
        <div className="consumer-box">
          <ContextSimpleConsumer />
        </div>
        <div className="consumer-box">
          <ContextMemoizedConsumer />
        </div>
        {state.isTrue && (
          <div className="consumer-box consumer-box--conditional">
            <ContextConditionalConsumer />
          </div>
        )}
      </div>
    </div>
  );
}
