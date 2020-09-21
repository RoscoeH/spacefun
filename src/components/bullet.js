/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Bullet = ({ color, size, distance, animation, loop }) => {
  const variants = {
    hitShip: {
      y: -(distance || 512),
      transition: { repeat: loop && Infinity, duration: 1, ease: "linear" },
    },
    hitBullet: {
      y: -(distance || 256),
      transition: { repeat: loop && Infinity, duration: 0.5, ease: "linear" },
    },
  };
  return (
    <motion.g animate={animation} variants={variants}>
      <g filter="url(#filter0_d)">
        <path
          d="M24 6.48148C24 -2.16049 6 -2.16049 6 6.48148C6 11.4198 15 25 15 25C20.2146 17.3537 24 11.4198 24 6.48148Z"
          sx={{ fill: color || "bullet" }}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="30"
          height="39"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="3" />
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
    </motion.g>
  );
};

export default Bullet;
