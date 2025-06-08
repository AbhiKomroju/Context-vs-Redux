/**
 * Main application component demonstrating React state management using Context API and Redux
 * This component serves as the entry point and handles navigation between different state management implementations
 */
import { useState } from "react";
import { AppProvider } from "./state-management/context/AppContext";
import ContextPage from "./pages/ContextPages/ContextPage";
import { Provider } from "react-redux";
import store from "./state-management/redux/AppStore";
import ReduxPage from "./pages/ReduxPages/ReduxPage";
import ComparisonTable from "./components/ComparisonTable";
import BugReportButton from "./components/BugReportButton";
import "./styles/ComparisonTable.css";

function App(): JSX.Element {
  // State to track which state management implementation is currently active
  const [activeTree, setActiveTree] = useState<"context" | "redux" | null>(
    null
  );

  /**
   * Toggles between Context API and Redux implementations
   * If Context is active, switches to Redux and vice versa
   */
  const handleToggle = () => {
    setActiveTree((prev) => (prev === "context" ? "redux" : "context"));
  };

  /**
   * Sets the active state management implementation
   * @param tree - The state management implementation to activate
   */
  const handleSelect = (tree: "context" | "redux") => {
    setActiveTree(tree);
  };

  /**
   * Resets the view to the home page
   */
  const handleGoHome = () => {
    setActiveTree(null);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>React State Management Demo</h1>
        <p>Context API vs Redux Toolkit</p>
        {activeTree && (
          <div className="navigation-buttons">
            <button className="tree-toggle-btn" onClick={handleToggle}>
              {activeTree === "context" ? "Go to Redux" : "Go to Context"}
            </button>
            <button
              className="tree-toggle-btn tree-home-btn"
              onClick={handleGoHome}
            >
              Go to Home
            </button>
          </div>
        )}
      </header>

      <main className="app__content">
        {/* Home view with comparison table and implementation selection */}
        {!activeTree && (
          <>
            <div className="tree-selector-container">
              <div
                className="tree-selector-box tree-selector-box--context"
                onClick={() => handleSelect("context")}
              >
                <h2>Context API</h2>
                <p>View the Context API tree</p>
              </div>
              <div
                className="tree-selector-box tree-selector-box--redux"
                onClick={() => handleSelect("redux")}
              >
                <h2>Redux Toolkit</h2>
                <p>View the Redux Toolkit tree</p>
              </div>
            </div>
            <ComparisonTable />
          </>
        )}

        {/* Context API implementation view */}
        {activeTree === "context" && (
          <div className="tree-container">
            <div className="tree-branch tree-branch--context">
              <div className="section-header">
                <h2>Context API</h2>
              </div>
              <AppProvider>
                <ContextPage />
              </AppProvider>
            </div>
          </div>
        )}

        {/* Redux implementation view */}
        {activeTree === "redux" && (
          <>
            <div className="tree-container">
              <div className="tree-branch tree-branch--redux">
                <div className="section-header">
                  <h2>Redux Toolkit</h2>
                </div>
                <Provider store={store}>
                  <ReduxPage />
                </Provider>
              </div>
            </div>
            <BugReportButton />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
