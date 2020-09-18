/** @jsx jsx */
//import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";

const item = {
  hidden: { y: 8, opacity: 0, transition: { duration: 0.2 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
};
const Stack = ({ children, count = 4, hidden = false }) => {
  return (
    <AnimatePresence>
      {[...Array(hidden ? 0 : count)].map((_, i) => (
        <motion.g
          key={i}
          variants={item}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <g transform={`translate(${i * 36} 0)`}>{children}</g>
        </motion.g>
      ))}
    </AnimatePresence>
  );
};
export default Stack;
