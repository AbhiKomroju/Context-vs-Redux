import { RenderCounter } from "../../components/RenderCounter";

const ReduxSimpleConsumer = function ReduxSimpleConsumer(): JSX.Element {
  return (
    <div className="component-box component-box--consumer">
      <div className="component-box__header">
        <h4>Simple Redux Consumer</h4>
        <span className="component-box__badge">(No Memo)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="redux-simple-consumer-render-count" />
      </div>
    </div>
  );
};
export default ReduxSimpleConsumer;
