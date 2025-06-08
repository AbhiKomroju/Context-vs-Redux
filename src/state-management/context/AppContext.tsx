/**
 * Context API implementation for the application's state management
 * Demonstrates the use of useReducer with Context for global state management
 */
import { createContext, useEffect, useReducer, type ReactNode } from "react";

/**
 * Interface defining the shape of the application state
 */
interface InitialState {
  /** Counter for synchronous operations */
  count: number;
  /** Counter for asynchronous operations */
  asyncCount: number;
  /** Boolean flag for conditional rendering */
  isTrue: boolean;
}

/**
 * Union type of all possible actions that can be dispatched
 */
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "UPDATE_ASYNC_COUNT"; payload: number }
  | { type: "ASYNC_INCREMENT" }
  | { type: "ASYNC_DECREMENT" }
  | { type: "TOGGLE_CONDITION" }
  | { type: "SET_AUTHORIZATION_STATUS"; payload: boolean }
  | { type: "SET_NOTIFICATION_MESSAGE"; payload: string };

/**
 * Props for the AppProvider component
 */
type Props = {
  children: ReactNode;
};

/**
 * Type definition for the context value
 */
type AppContextType = {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
};

/**
 * Initial state for the application
 */
const initialState: InitialState = {
  count: 0,
  asyncCount: 0,
  isTrue: true,
};

/**
 * Reducer function that handles state updates based on dispatched actions
 * @param state - Current state
 * @param action - Action to be processed
 * @returns Updated state
 */
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

/**
 * Context instance for the application state
 */
const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Provider component that wraps the application and provides state management
 * @param props - Component props containing children
 * @returns Provider component with state management
 */
const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize async state after component mount
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
