/** @jsx jsx */
import { jsx } from "theme-ui";

const Shield = ({ color, size }) => (
  <g>
    <g filter="url(#filter0_d)">
      <path
        d="M17 24.9999C7.24995 21.8749 4 15.6249 4 -6.10352e-05C7.24995 3.12494 13.75 3.12494 17 -6.10352e-05C20.25 3.12494 26.75 3.12494 30 -6.10352e-05C30 15.6249 26.75 21.8749 17 24.9999Z"
        sx={{ fill: color || "shield" }}
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="-6.10352e-05"
        width="34"
        height="33"
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

export default Shield;
