/** @jsx jsx */
//import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";

const Stack = ({children, count = 4}) => <AnimatePresence initial={false}>
  {[...Array(count)].map((_, i) =>
    <motion.div
      style={{display: 'inline-block'}}
      key={i}
      initial={{scale: 0}}
      animate={{scale: 1}}
      exit={{scale: 0, transition: { duration: 0.2}}}>
      {children}
    </motion.div>
  )}
</AnimatePresence>

export default Stack