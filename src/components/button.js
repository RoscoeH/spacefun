/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({ children, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      sx={{ p: 3, border: "none", borderRadius: "100%" }}
    >
      {children}
    </button>
  );
};

export const SvgButton = ({ width, height, children, ...props }) => (
  <Button>
    <svg width={width} height={height}>
      {children}
    </svg>
  </Button>
);

export default Button;
