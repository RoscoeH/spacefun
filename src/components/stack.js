/** @jsx jsx */
//import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";

const Stack = ({ children, count = 4 }) => (
  <AnimatePresence initial={false}>
    {[...Array(count)].map((_, i) => (
      <motion.g
        key={i}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
      >
        <g transform={`translate(${i * 36} 0)`}>{children}</g>
      </motion.g>
    ))}
  </AnimatePresence>
);

export default Stack;
