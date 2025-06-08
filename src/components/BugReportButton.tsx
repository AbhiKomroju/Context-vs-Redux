import React, { useState } from "react";
import BugReportModal from "./BugReportModal";
import "../styles/BugReport.css";

/**
 * BugReportButton component that provides a floating button for users to report issues
 * Features:
 * - Fixed position button in bottom right corner
 * - Opens a modal dialog for bug reporting
 * - Accessible button with proper ARIA labels
 *
 * @returns {JSX.Element} Button and modal for bug reporting
 */
const BugReportButton: React.FC = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Handles opening the bug report modal
   */
  const handleOpenModal = () => setIsModalOpen(true);

  /**
   * Handles closing the bug report modal
   */
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="bug-report-button"
        onClick={handleOpenModal}
        aria-label="Report a bug"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
      >
        <span role="img" aria-label="bug" aria-hidden="true">
          🐛
        </span>
        Found a bug?
      </button>
      <BugReportModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default BugReportButton;
