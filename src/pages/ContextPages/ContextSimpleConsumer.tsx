import { RenderCounter } from "../../components/RenderCounter";

export default function ContextSimpleConsumer(): JSX.Element {
  return (
    <div className="component-box component-box--consumer">
      <div className="component-box__header">
        <h4>Simple Context Consumer</h4>
        <span className="component-box__badge">(No Memo)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="context-simple-consumer-render-count" />
      </div>
    </div>
  );
}
