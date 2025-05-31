import { RenderCounter } from "../../components/RenderCounter";
import { Counter } from "../../components/Counter";
import { ExplanationBox } from "../../components/ExplanationBox";
import { useDispatch, useSelector } from "react-redux";
import type {
  AppDispatch,
  RootState,
} from "../../state-management/redux/AppStore";
import {
  async_decrement,
  async_increment,
  fetchAsyncCount,
} from "../../state-management/redux/AppSlice";
import { useEffect } from "react";

export default function ReduxAsyncSibling(): JSX.Element {
  const asyncCount = useSelector((state: RootState) => state.app.asyncCount);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCount(10));
  }, [dispatch]);

  const handleAsyncIncrement = () => {
    dispatch(async_increment());
  };

  const handleAsyncDecrement = () => {
    dispatch(async_decrement());
  };

  return (
    <div className="component-box component-box--async">
      <div className="component-box__header">
        <h4>Async Sibling</h4>
        <span className="component-box__badge">(Redux Async)</span>
      </div>
      <div className="component-box__render">
        <RenderCounter id="redux-async-sibling-render-count" />
      </div>
      <div className="component-box__content">
        <Counter
          count={asyncCount}
          onIncrement={handleAsyncIncrement}
          onDecrement={handleAsyncDecrement}
        />
      </div>
      <ExplanationBox
        title="Redux Async Operations"
        explanation="Component consuming async count state from store which gets updated after 2 seconds."
        keyPoints={[
          "Re-renders only when its subscribed state changes",
          "Updating the state updates all the components consuming the particular state",
        ]}
        variant="minimal"
      />
    </div>
  );
}
