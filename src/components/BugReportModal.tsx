import React, { useEffect, useRef } from "react";

/**
 * Props for the BugReportModal component
 */
interface BugReportModalProps {
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** Function to call when the modal should close */
  onClose: () => void;
}

/**
 * BugReportModal component that explains the differences in state persistence
 * between Redux and Context API
 *
 * Features:
 * - Accessible modal dialog with proper ARIA attributes
 * - Click outside to close
 * - Keyboard navigation support
 * - Focus management
 *
 * @param {BugReportModalProps} props - Component props
 * @returns {JSX.Element | null} Modal component or null if not open
 */
const BugReportModal: React.FC<BugReportModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus the modal when it opens
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div className="modal-header">
          <h2 id="modal-title">🐛 State Persistence: Redux vs Context</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="explanation-content">
          <section className="explanation-section">
            <h3>Redux Store: True Singleton</h3>
            <ul>
              <li>
                <strong>Global Store:</strong> Redux maintains a single, global
                store instance that persists throughout the application's
                lifecycle.
              </li>
              <li>
                <strong>State Persistence:</strong> When you update the Redux
                store, the changes remain even if components unmount. The state
                persists until:
                <ul>
                  <li>The page is refreshed</li>
                  <li>You explicitly reset the store</li>
                  <li>The application is closed</li>
                </ul>
              </li>
              <li>
                <strong>Memory Management:</strong> The store exists
                independently of React's component lifecycle, making it truly
                global.
              </li>
            </ul>
          </section>

          <section className="explanation-section">
            <h3>Context API: Component-Bound State</h3>
            <ul>
              <li>
                <strong>Provider-Based:</strong> Context state is tied to the
                Provider component's lifecycle.
              </li>
              <li>
                <strong>State Reset:</strong> When the Provider component
                unmounts:
                <ul>
                  <li>All state within that context is reset</li>
                  <li>Child components lose access to the context values</li>
                  <li>New Provider instances start with fresh state</li>
                </ul>
              </li>
              <li>
                <strong>Memory Management:</strong> Context state is garbage
                collected when the Provider unmounts, unless referenced
                elsewhere.
              </li>
            </ul>
          </section>

          <section className="explanation-section">
            <h3>Key Differences</h3>
            <ul>
              <li>
                <strong>Persistence:</strong>
                <ul>
                  <li>Redux: State persists across component unmounts</li>
                  <li>Context: State resets when Provider unmounts</li>
                </ul>
              </li>
              <li>
                <strong>Use Cases:</strong>
                <ul>
                  <li>
                    Redux: Better for truly global state that needs to persist
                  </li>
                  <li>Context: Better for component-tree specific state</li>
                </ul>
              </li>
              <li>
                <strong>Memory Impact:</strong>
                <ul>
                  <li>
                    Redux: State remains in memory until explicitly cleared
                  </li>
                  <li>Context: State can be garbage collected with Provider</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        <div className="modal-actions">
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BugReportModal;
