import React from "react";

/**
 * Reusable explanation box component for documenting component functionality
 * @param {Object} props - Component props
 * @param {string} props.title - Title for the explanation
 * @param {string} props.explanation - Main explanation text
 * @param {string[]} [props.keyPoints] - Optional key points to highlight
 * @param {string} [props.variant] - Style variant (default, compact, minimal)
 * @returns {JSX.Element} Explanation box component
 */
interface ExplanationBoxProps {
  title: string;
  explanation: string;
  keyPoints?: string[];
  variant?: "default" | "compact" | "minimal";
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({
  title,
  explanation,
  keyPoints = [],
  variant = "default",
}) => {
  return (
    <div className={`explanation-box explanation-box--${variant}`}>
      <div className="explanation-box__header">
        <h5 className="explanation-box__title">{title}</h5>
      </div>
      <div className="explanation-box__content">
        <p className="explanation-box__text">{explanation}</p>
        {keyPoints.length > 0 && (
          <ul className="explanation-box__points">
            {keyPoints.map((point, index) => (
              <li key={index} className="explanation-box__point">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExplanationBox;
