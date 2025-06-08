/**
 * Custom hook for accessing the application context
 *
 * This hook provides type-safe access to the application's context state and dispatch function.
 * It ensures that the hook is only used within the AppProvider component.
 *
 * @throws {Error} If used outside of AppProvider
 * @returns {AppContextType} The context value containing state and dispatch
 */
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used within an AppProvider. " +
        "Please ensure your component is wrapped with AppProvider."
    );
  }

  return context;
};
