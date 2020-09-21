/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  const { theme } = useThemeUI();
  return (
    <motion.button
      type="button"
      {...props}
      whileTap={{ y: 4, boxShadow: "0 2px 2px rgba(0,0,0,0.2)" }}
      initial={{ boxShadow: "0 8px 6px rgba(0,0,0,0.2)" }}
      sx={{
        p: 3,
        border: "none",
        borderRadius: "100%",
        outline: "none",

        "& > *": { verticalAlign: "middle" },
      }}
    >
      {children}
    </motion.button>
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
