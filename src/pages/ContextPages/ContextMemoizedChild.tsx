import { memo } from "react";
import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";

const ContextMemoizedChild = memo(() => {
  return (
    <div className="component-box component-box--consumer component-box--memoized">
      <div className="component-box__header">
        <h4>Memoized Child</h4>
        <span className="component-box__badge">(React.memo)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="context-memoized-consumer-render-count" />
      </div>
      <ExplanationBox
        title="Optimized Consumer"
        explanation="React.memo wrapped component that prevents unnecessary re-renders."
        keyPoints={[
          "Wrapped with React.memo for optimization",
          "Only re-renders if props change",
          "Demonstrates optimization technique",
        ]}
        variant="minimal"
      />
    </div>
  );
});

ContextMemoizedChild.displayName = "ContextMemoizedChild";

export default ContextMemoizedChild;
