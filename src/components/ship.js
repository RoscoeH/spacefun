/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const TAIL_INSET = 2 / 15;
const DURATION = 8;

const bodyPath = (size) => `m0,-${size / 2} 
l${size / 2},${size}
l-${size / 2},-${size * TAIL_INSET}
l-${size / 2},${size * TAIL_INSET}
z`;

const Body = ({ size, color }) => (
  <g>
    <path sx={{ fill: color || "heart" }} d={bodyPath(size)} />
    <path
      fill="rgba(0,0,0,0.1)"
      d={`m0,-${size / 2} l${size / 2},${size} l-${size / 2},-${
        size * TAIL_INSET
      }`}
    />
  </g>
);

const Regen = ({ size, color }) => (
  <path
    fill="transparent"
    strokeWidth="4"
    strokeLinejoin="round"
    d={bodyPath(size * 1.3)}
    transform="translate(0, -10px)"
    sx={{ stroke: "accent" }}
  />
);

const Shield = ({ size, color }) => (
  <g transform="translate(-32 -48)">
    <g>
      <path
        d="M60 27.8485C60 29.2593 59.8945 30.6456 59.691 32C57.6756 18.5887 46.0455 8.30291 32 8.30291C17.9545 8.30291 6.3244 18.5887 4.30901 32C4.10547 30.6456 4 29.2593 4 27.8485C4 12.4682 16.536 0 32 0C47.464 0 60 12.4682 60 27.8485Z"
        sx={{ fill: "shield" }}
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="64"
        height="40"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </g>
);

const Ship = ({ size = 64, color, flipped, healing, shielding }) => (
  <motion.g
    animate={{
      scale: [1, 1.1, 1],
      y: [0, -size / 8, 0],
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
    <g transform={!flipped || "scale(1, -1)"}>
      <Body size={size} color={color} />
      {healing && <Regen size={size} color={color} />}
      {shielding && <Shield size={size} />}
    </g>
  </motion.g>
);

Ship.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Ship;
