import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";
import { ExplanationBox } from "../../components/ExplanationBox";
import { useAppContext } from "../../state-management/context/useAppContext";
import ContextSimpleChild from "./ContextSimpleChild";
import ContextMemoizedChild from "./ContextMemoizedChild";
import ContextConditionalChild from "./ContextConditionalChild";

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
        <ExplanationBox
          title="State Management Hub"
          explanation="Consumes global state count from Context"
          keyPoints={[
            "Re-renders on every Context state change",
            "Updating the state updates all the components consuming the Context",
          ]}
          variant="compact"
        />
      </div>

      <div className="tree-connection tree-connection--demo"></div>

      <div className="consumer-children">
        <div className="consumer-box">
          <ContextSimpleChild />
        </div>
        <div className="consumer-box">
          <ContextMemoizedChild />
        </div>
        {state.isTrue && (
          <div className="consumer-box consumer-box--conditional">
            <ContextConditionalChild />
          </div>
        )}
      </div>
    </div>
  );
}
