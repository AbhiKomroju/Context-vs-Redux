/**
 * TypeScript declaration file for CSS modules
 *
 * This file provides type definitions for CSS modules, allowing TypeScript
 * to understand the structure of imported CSS files. It enables type-safe
 * usage of CSS class names when importing CSS modules.
 */
declare module "*.css" {
  /** Object mapping CSS class names to their generated unique identifiers */
  const content: { [className: string]: string };
  export default content;
}
