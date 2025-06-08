/**
 * ContextPage component that demonstrates Context API state management
 *
 * This page serves as the parent component for all Context API demonstrations.
 * It wraps the entire component tree with AppProvider and displays various
 * child components that consume the context in different ways.
 *
 * @returns {JSX.Element} The Context API demonstration page
 */
import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";
import ContextStateDemo from "./ContextStateDemo";
import ContextAsyncSibling from "./ContextAsyncSibling";
import ContextNormalSibling from "./ContextNormalSibling";

export default function ContextPage(): JSX.Element {
  return (
    <div className="page-container">
      {/* Parent component box showing render count and explanation */}
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

      {/* Visual connection between parent and children */}
      <div
        className="tree-connection tree-connection--page"
        aria-hidden="true"
      ></div>

      {/* Container for child components demonstrating different context usage patterns */}
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
