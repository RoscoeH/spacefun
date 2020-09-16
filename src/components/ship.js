/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const TAIL_INSET = 2 / 15;
const DURATION = 4;

const Ship = ({ size = 64, color }) => (
  <motion.g
    animate={{
      scale: [1, 1.2, 1],
      y: [0, -size / 6, 0],
    }}
    transition={{ duration: DURATION, ease: "easeInOut", loop: Infinity }}
  >
    <defs>
      <filter id="dropshadow" height="130%">
        <motion.feGaussianBlur
          in="SourceAlpha"
          animate={{ stdDeviation: [3, 6, 3] }}
          transition={{ duration: DURATION, loop: Infinity }}
        />
        <motion.feOffset
          result="offsetblur"
          dx="0"
          animate={{ dy: [4, 8, 4] }}
          transition={{ duration: DURATION, loop: Infinity }}
        />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />{" "}
        </feComponentTransfer>
        <feMerge>
          <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
        </feMerge>
      </filter>
    </defs>
    <rect x={0} y={0} width={16} height={16} />
    <path
      style={{ filter: "url(#dropshadow)" }}
      fill={color}
      d={`m0,-${size / 2} 
      l${size / 2},${size}
      l-${size / 2},-${size * TAIL_INSET}
      l-${size / 2},${size * TAIL_INSET}
      z`}
    />
    <path
      fill="rgba(0,0,0,0.1)"
      d={`m0,-${size / 2} l${size / 2},${size} l-${size / 2},-${
        size * TAIL_INSET
      }`}
    />
  </motion.g>
);

export default Ship;
