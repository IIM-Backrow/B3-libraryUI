export interface TestCompProps {
  /**
   * The text content to display
   */
  text?: string;
  /**
   * The variant of the component
   */
  variant?: "primary" | "secondary" | "danger";
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}
