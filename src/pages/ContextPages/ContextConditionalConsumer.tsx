import { memo } from "react";
import { RenderCounter } from "../../components/RenderCounter";

const ContextConditionalConsumer = memo(
  function ContextConditionalConsumer(): JSX.Element {
    return (
      <div className="component-box component-box--consumer">
        <div className="component-box__header">
          <h4>Conditional Context Consumer</h4>
          <span className="component-box__badge">(Conditional)</span>
        </div>
        <div className="component-box__render">
          <RenderCounter id="context-conditional-consumer-render-count" />
        </div>
      </div>
    );
  }
);

export default ContextConditionalConsumer;
