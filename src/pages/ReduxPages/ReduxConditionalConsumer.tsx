import { memo } from "react";
import { RenderCounter } from "../../components/RenderCounter";

const ReduxConditionalConsumer = memo(
  function ReduxConditionalConsumer(): JSX.Element {
    return (
      <div className="component-box component-box--consumer">
        <div className="component-box__header">
          <h4>Conditional Redux Consumer</h4>
          <span className="component-box__badge">(Conditional)</span>
        </div>
        <div className="component-box__render">
          <RenderCounter id="redux-conditional-consumer-render-count" />
        </div>
      </div>
    );
  }
);

export default ReduxConditionalConsumer;
