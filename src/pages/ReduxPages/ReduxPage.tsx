/**
 * ReduxPage component that demonstrates Redux state management
 *
 * This page serves as the parent component for all Redux demonstrations.
 * It wraps the entire component tree with Redux Provider and displays various
 * child components that consume the Redux store in different ways.
 *
 * @returns {JSX.Element} The Redux demonstration page
 */
import { RenderCounter } from "../../components/RenderCounter";
import { ExplanationBox } from "../../components/ExplanationBox";
import ReduxAsyncSibling from "./ReduxAsyncSibling";
import ReduxStateDemo from "./ReduxStateDemo";
import ReduxNormalSibling from "./ReduxNormalSibling";

export default function ReduxPage(): JSX.Element {
  return (
    <div className="page-container">
      {/* Parent component box showing render count and explanation */}
      <div className="component-box component-box--page">
        <div className="component-box__header">
          <h3>Redux Page</h3>
        </div>
        <div className="component-box__render">
          <RenderCounter id="render-redux-page-count" />
        </div>
        <ExplanationBox
          title="Parent"
          explanation="This is the Parent Component of all the Redux consumers."
          keyPoints={[
            "Wraps entire component tree with Provider",
            "Doesn't consume any global state",
          ]}
          variant="compact"
        />
      </div>

      {/* Visual connection between parent and children */}
      <div
        className="tree-connection tree-connection--page"
        aria-hidden="true"
      ></div>

      {/* Container for child components demonstrating different Redux usage patterns */}
      <div className="page-children">
        <div className="page-child">
          <ReduxAsyncSibling />
        </div>
        <div className="page-child">
          <ReduxStateDemo />
        </div>
        <div className="page-child">
          <ReduxNormalSibling />
        </div>
      </div>
    </div>
  );
}
