import { RenderCounter } from "../../components/RenderCounter";
import ReduxAsyncSibling from "./ReduxAsyncSibling";
import ReduxStateDemo from "./ReduxStateDemo";
import ReduxNormalSibling from "./ReduxNormalSibling";

export default function ReduxPage(): JSX.Element {
  return (
    <div className="page-container">
      <div className="component-box component-box--page">
        <div className="component-box__header">
          <h3>Redux Page</h3>
        </div>
        <div className="component-box__render">
          <RenderCounter id="render-redux-page-count" />
        </div>
      </div>

      <div className="tree-connection tree-connection--page"></div>

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
