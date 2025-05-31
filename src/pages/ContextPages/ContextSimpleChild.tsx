import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";
export default function ContextSimpleChild(): JSX.Element {
  return (
    <div className="component-box component-box--consumer">
      <div className="component-box__header">
        <h4>Simple Child</h4>
        <span className="component-box__badge">(No Memo)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="context-simple-consumer-render-count" />
      </div>
      <ExplanationBox
        title="Basic Consumer"
        explanation="Simple component that doesn't consume state from context. Re-renders on every parent state change regardless of usage."
        keyPoints={[
          "No memoization applied",
          "Re-renders on ALL context updates due to parent re-rendering",
        ]}
        variant="minimal"
      />
    </div>
  );
}
