import { useEffect, useRef } from "react";
import type { RenderCounterProps } from "../types";

export const RenderCounter: React.FC<RenderCounterProps> = ({ id }) => {
  const renders = useRef<number>(0);

  useEffect(() => {
    renders.current += 1;
    const counterElement = document.getElementById(id);
    if (counterElement) {
      counterElement.innerHTML = `<span class='render-count-text'>rendered: ${renders.current}</span>`;

      // Add highlight effect
      counterElement.classList.add("render-count-highlight");

      // Remove highlight effect after 2 seconds
      setTimeout(() => {
        counterElement.classList.remove("render-count-highlight");
      }, 1000);
    }
  });

  return <div id={id} />;
};
