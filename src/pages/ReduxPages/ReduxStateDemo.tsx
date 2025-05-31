import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";
import { ExplanationBox } from "../../components/ExplanationBox";
import ReduxSimpleChild from "./ReduxSimpleChild";
import ReduxMemoizedChild from "./ReduxMemoizedChild";
import ReduxConditionalChild from "./ReduxConditionalChild";
import { useDispatch, useSelector } from "react-redux";
import type {
  AppDispatch,
  RootState,
} from "../../state-management/redux/AppStore";
import { decrement, increment } from "../../state-management/redux/AppSlice";

export default function ReduxStateDemo(): JSX.Element {
  const count = useSelector((state: RootState) => state.app.count);
  const isTrue = useSelector((state: RootState) => state.app.isTrue);
  const dispatch: AppDispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div className="state-demo-container">
      <div className="component-box component-box--state-demo">
        <div className="component-box__header">
          <h3>Redux State Demo</h3>
        </div>
        <div className="component-box__render">
          <RenderCounter id="render-redux-state-demo-count" />
        </div>
        <div className="component-box__content">
          <Counter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
        <ExplanationBox
          title="State Management Hub"
          explanation="Consumes global state count from store"
          keyPoints={[
            "Re-renders only when its subscribed state changes",
            "Updating the state updates all the components consuming the particular state",
          ]}
          variant="compact"
        />
      </div>

      <div className="tree-connection tree-connection--demo"></div>

      <div className="consumer-children">
        <div className="consumer-box">
          <ReduxSimpleChild />
        </div>
        <div className="consumer-box">
          <ReduxMemoizedChild />
        </div>
        {isTrue && (
          <div className="consumer-box consumer-box--conditional">
            <ReduxConditionalChild />
          </div>
        )}
      </div>
    </div>
  );
}
