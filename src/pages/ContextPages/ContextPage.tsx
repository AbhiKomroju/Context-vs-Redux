import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";
import ContextStateDemo from "./ContextStateDemo";
import ContextAsyncSibling from "./ContextAsyncSibling";
import ContextNormalSibling from "./ContextNormalSibling";

export default function ContextPage(): JSX.Element {
  return (
    <div className="page-container">
      <div className="component-box component-box--page">
        <div className="component-box__header">
          <h3>Context Page</h3>
        </div>
        <div className="component-box__render">
          <RenderCounter id="render-context-page-count" />
        </div>
        <ExplanationBox
          title="Parent"
          explanation="This is the Parent Component of all the Context Consumers."
          keyPoints={[
            "Wraps entire component tree with AppProvider",
            "Doesn't consume any context",
          ]}
          variant="compact"
        />
      </div>

      <div className="tree-connection tree-connection--page"></div>

      <div className="page-children">
        <div className="page-child">
          <ContextAsyncSibling />
        </div>
        <div className="page-child">
          <ContextStateDemo />
        </div>
        <div className="page-child">
          <ContextNormalSibling />
        </div>
      </div>
    </div>
  );
}
