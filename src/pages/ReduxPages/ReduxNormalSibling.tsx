import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";

export default function ReduxNormalSibling(): JSX.Element {
  return (
    <div className="component-box component-box--sibling">
      <div className="component-box__header">
        <h4>Normal Sibling</h4>
        <span className="component-box__badge">(Independent)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="redux-normal-sibling-render-count" />
      </div>
      <ExplanationBox
        title="Independent Sibling"
        explanation="Component that doesn't consume state from store. Shows isolation from store updates."
        keyPoints={[
          "No store dependency",
          "Independent of store changes",
          "Demonstrates selective consumption",
        ]}
        variant="minimal"
      />
    </div>
  );
}
