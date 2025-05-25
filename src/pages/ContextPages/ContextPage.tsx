import { RenderCounter } from "../../components/RenderCounter";
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
