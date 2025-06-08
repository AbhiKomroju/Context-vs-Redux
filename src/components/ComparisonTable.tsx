import React, { useState } from "react";

/**
 * Interface defining the structure of a comparison section
 */
interface ComparisonSection {
  id: string;
  title: string;
  context: string[];
  redux: string[];
}

/**
 * ComparisonTable component that displays the differences between Context API and Redux in an accordion format
 * Features:
 * - Multiple sections can be open simultaneously
 * - Interactive accordion interface
 * - Side-by-side comparison of features
 *
 * @returns {JSX.Element} An accordion showing the comparison between Context and Redux
 */
const ComparisonTable: React.FC = () => {
  // Track which sections are currently expanded
  const [activeSections, setActiveSections] = useState<string[]>([]);

  /**
   * Toggles the visibility of a comparison section
   * @param sectionId - The unique identifier of the section to toggle
   */
  const toggleSection = (sectionId: string) => {
    setActiveSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  /**
   * Comparison data organized by categories
   * Each section contains parallel lists of features for Context API and Redux
   */
  const comparisonData: ComparisonSection[] = [
    {
      id: "performance",
      title: "Performance & Re-renders",
      context: [
        "Updates re-render all consuming components in subtree",
        "O(N) update cost based on number of consumers",
        "Requires external libraries (use-context-selector) for granular updates",
        "Better for static, rarely-changing values",
      ],
      redux: [
        "Selective re-renders based on subscribed state changes",
        "O(M) update cost where M is subset needing updates",
        "Built-in granular subscription via useSelector",
        "Optimized for frequent state changes",
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Structure",
      context: [
        "No enforced architecture",
        "Multiple independent contexts possible",
        "Direct state manipulation via useState/useReducer",
        "Can become fragmented with many contexts",
      ],
      redux: [
        "Single source of truth with clear patterns",
        "Feature-based organization with slices",
        "Strict unidirectional data flow",
        "First-class TypeScript support",
      ],
    },
    {
      id: "developer",
      title: "Developer Experience",
      context: [
        "Built into React, no extra setup",
        "Limited debugging capabilities",
        "No built-in devtools",
        "Simpler learning curve",
      ],
      redux: [
        "Robust Redux DevTools",
        "Time-travel debugging",
        "Action/state history tracking",
        "Standardized patterns for large teams",
      ],
    },
    {
      id: "middleware",
      title: "Middleware & Side Effects",
      context: [
        "No built-in middleware pattern",
        "Side effects handled via useEffect",
        "Manual async flow management",
        "Can lead to scattered logic",
      ],
      redux: [
        "Rich middleware ecosystem",
        "Centralized side effect handling",
        "Built-in async flow management",
        "Clean separation of concerns",
      ],
    },
    {
      id: "concurrency",
      title: "React 18 & Concurrency",
      context: [
        "Relies on React's default behavior",
        "No built-in concurrent-safe subscription",
        "May need external libraries for optimization",
        "Works with Suspense but less optimized",
      ],
      redux: [
        "Uses useSyncExternalStore for concurrent safety",
        "Native concurrent mode support",
        "Consistent updates during time-slicing",
        "Fully compatible with React 18 features",
      ],
    },
    {
      id: "usecases",
      title: "Best Use Cases",
      context: [
        "Theme and styling",
        "User preferences",
        "Authentication state",
        "Small, isolated features",
      ],
      redux: [
        "Complex application state",
        "High-frequency updates",
        "Large-scale applications",
        "Team-based development",
      ],
    },
  ];

  return (
    <div className="comparison-accordion">
      {comparisonData.map((section) => (
        <div
          key={section.id}
          className={`accordion-section ${
            activeSections.includes(section.id) ? "active" : ""
          }`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleSection(section.id)}
            aria-expanded={activeSections.includes(section.id)}
          >
            <h3>{section.title}</h3>
            <span className="accordion-icon" aria-hidden="true">
              {activeSections.includes(section.id) ? "−" : "+"}
            </span>
          </button>

          <div
            className="accordion-content"
            role="region"
            aria-labelledby={`section-${section.id}`}
          >
            <div className="comparison-grid">
              <div className="comparison-column">
                <h4>Context API</h4>
                <ul>
                  {section.context.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="comparison-column">
                <h4>Redux</h4>
                <ul>
                  {section.redux.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;
