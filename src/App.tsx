import { useState } from "react";
import { AppProvider } from "./state-management/context/AppContext";
import ContextPage from "./pages/ContextPages/ContextPage";
import { Provider } from "react-redux";
import store from "./state-management/redux/AppStore";
import ReduxPage from "./pages/ReduxPages/ReduxPage";

function App(): JSX.Element {
  const [activeTree, setActiveTree] = useState<"context" | "redux" | null>(
    null
  );

  const handleToggle = () => {
    setActiveTree((prev) => (prev === "context" ? "redux" : "context"));
  };

  // Handler for clicking a selector box
  const handleSelect = (tree: "context" | "redux") => {
    setActiveTree(tree);
  };

  // Handler for going home
  const handleGoHome = () => {
    setActiveTree(null);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>React State Management Demo</h1>
        <p>Context API vs Redux Toolkit</p>
        {activeTree && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              margin: "0.3rem 0",
            }}
          >
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
        {/* Selector boxes shown only if no tree is open */}
        {!activeTree && (
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
        )}

        {/* Show the selected tree */}
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
        {activeTree === "redux" && (
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
        )}
      </main>
    </div>
  );
}

export default App;
