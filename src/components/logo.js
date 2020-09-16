/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const WIGGLE_DISTANCE = 8;

const Logo = ({ children }) => (
  <motion.h1
    sx={{ fontSize: 8, lineHeight: 2 }}
    animate={{ y: [-WIGGLE_DISTANCE, WIGGLE_DISTANCE, -WIGGLE_DISTANCE] }}
    transition={{ duration: 4, east: "easeInOut", loop: Infinity }}
  >
    {children.toUpperCase()}
  </motion.h1>
);

export default Logo;
