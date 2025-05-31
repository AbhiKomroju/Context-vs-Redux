import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";

export default function ContextNormalSibling(): JSX.Element {
  return (
    <div className="component-box component-box--sibling">
      <div className="component-box__header">
        <h4>Normal Sibling</h4>
        <span className="component-box__badge">(Independent)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="context-normal-sibling-render-count" />
      </div>
      <ExplanationBox
        title="Independent Sibling"
        explanation="Component that doesn't consume context. Shows isolation from context updates."
        keyPoints={[
          "No context dependency",
          "Independent of context changes",
          "Demonstrates selective consumption",
        ]}
        variant="minimal"
      />
    </div>
  );
}
