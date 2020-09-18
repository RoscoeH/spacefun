/** @jsx jsx */
import { jsx } from "theme-ui";

const Play = ({ color = "#F06060", size }) => (
  <g transform="translate(2 0)">
    <g filter="url(#filter0_i)">
      <path
        d="M1.52588e-05 26.0886V0.088623L23 13.0886L1.52588e-05 26.0886Z"
        fill="#8CBEB2"
      />
    </g>
    <defs>
      <filter
        id="filter0_i"
        x="1.52588e-05"
        y="0.088623"
        width="23"
        height="28"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </g>
);

export default Play;
