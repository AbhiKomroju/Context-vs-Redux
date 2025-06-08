/**
 * Type definitions for the application
 *
 * This file contains shared TypeScript interfaces and types used throughout
 * the application for both Context API and Redux implementations.
 */
import type { Dispatch } from "react";

/**
 * Interface defining the shape of the application state
 * Used by both Context API and Redux implementations
 */
export interface AppState {
  /** Counter for synchronous operations */
  count: number;
  /** Counter for asynchronous operations */
  asyncCount: number;
  /** Boolean flag for conditional rendering */
  isTrue: boolean;
}

/**
 * Union type of all possible actions that can be dispatched
 * Used by the Context API implementation
 */
export type AppAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "UPDATE_ASYNC_COUNT"; payload: number }
  | { type: "ASYNC_INCREMENT" }
  | { type: "ASYNC_DECREMENT" }
  | { type: "TOGGLE_CONDITION" }
  | { type: "SET_AUTHORIZATION_STATUS"; payload: boolean }
  | { type: "SET_NOTIFICATION_MESSAGE"; payload: string };

/**
 * Type definition for the context value
 * Used by the Context API implementation
 */
export interface AppContextType {
  /** Current application state */
  state: AppState;
  /** Function to dispatch actions */
  dispatch: Dispatch<AppAction>;
}

/**
 * Props for the RenderCounter component
 * Used to track component re-renders
 */
export interface RenderCounterProps {
  /** Unique identifier for the counter */
  id: string;
}

/**
 * Props for the Counter component
 * Used for both Context API and Redux implementations
 */
export interface CounterProps {
  /** Function to increment the counter */
  onIncrement: () => void;
  /** Function to decrement the counter */
  onDecrement: () => void;
  /** Current count value */
  count: number;
}
