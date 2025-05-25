import { createContext, useEffect, useReducer, type ReactNode } from "react";

interface InitialState {
  count: number;
  asyncCount: number;
  isTrue: boolean;
}

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "UPDATE_ASYNC_COUNT"; payload: number }
  | { type: "ASYNC_INCREMENT" }
  | { type: "ASYNC_DECREMENT" }
  | { type: "TOGGLE_CONDITION" }
  | { type: "SET_AUTHORIZATION_STATUS"; payload: boolean }
  | { type: "SET_NOTIFICATION_MESSAGE"; payload: string };

type Props = {
  children: ReactNode;
};

type AppContextType = {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
};

const initialState: InitialState = {
  count: 0,
  asyncCount: 0,
  isTrue: true,
};

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "UPDATE_ASYNC_COUNT":
      return { ...state, asyncCount: action.payload };
    case "ASYNC_INCREMENT":
      return { ...state, asyncCount: state.asyncCount + 1 };
    case "ASYNC_DECREMENT":
      return { ...state, asyncCount: state.asyncCount - 1 };
    case "TOGGLE_CONDITION":
      return { ...state, isTrue: !state.isTrue };
    default:
      return state;
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function setAsyncState() {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          dispatch({ type: "UPDATE_ASYNC_COUNT", payload: 10 });
          resolve();
        }, 2000)
      );
    }
    setAsyncState();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
