import { RenderCounter } from "../../components/RenderCounter";

export default function ReduxNormalSibling(): JSX.Element {
  return (
    <div className="component-box component-box--sibling">
      <div className="component-box__header">
        <h4>Normal Sibling</h4>
        <span className="component-box__badge">(Normal)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="redux-normal-sibling-render-count" />
      </div>
    </div>
  );
}
