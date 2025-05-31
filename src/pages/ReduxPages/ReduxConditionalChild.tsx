import { memo } from "react";
import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";

const ReduxConditionalChild = memo(() => {
  return (
    <div className="component-box component-box--consumer component-box--conditional">
      <div className="component-box__header">
        <h4>Conditional Child</h4>
        <span className="component-box__badge">(Conditional)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="redux-conditional-consumer-render-count" />
      </div>
      <ExplanationBox
        title="Conditional Render"
        explanation="Component that only renders when certain conditions are met (isTrue && <ConditionalComponent/>) ."
        keyPoints={[
          "Component does not get affected by store state changes",
          "This component is wrapped with React.memo",
        ]}
        variant="minimal"
      />
    </div>
  );
});

ReduxConditionalChild.displayName = "ReduxConditionalChild";

export default ReduxConditionalChild;
