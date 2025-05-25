export interface AppState {
  count: number;
  asyncCount: number;
  isTrue: boolean;
}

export type AppAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "UPDATE_ASYNC_COUNT"; payload: number }
  | { type: "ASYNC_INCREMENT" }
  | { type: "ASYNC_DECREMENT" }
  | { type: "TOGGLE_CONDITION" }
  | { type: "SET_AUTHORIZATION_STATUS"; payload: boolean }
  | { type: "SET_NOTIFICATION_MESSAGE"; payload: string };

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export interface RenderCounterProps {
  id: string;
}

export interface CounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
  count: number;
}
