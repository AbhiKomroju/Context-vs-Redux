import { memo } from "react";
import { RenderCounter } from "../../components/RenderCounter";

const ContextMemoizedConsumer = memo(
  function ContextMemoizedConsumer(): JSX.Element {
    return (
      <div className="component-box component-box--consumer component-box--memoized">
        <div className="component-box__header">
          <h4>Memoized Context Consumer</h4>
          <span className="component-box__badge">(React.memo)</span>
        </div>
        <div className="component-box__render">
          <RenderCounter id="context-memoized-consumer-render-count" />
        </div>
      </div>
    );
  }
);

export default ContextMemoizedConsumer;
