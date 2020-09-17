/** @jsx jsx */
//import PropTypes from "prop-types";
import { jsx } from "theme-ui";

const Heart = ({color = '#F06060', size}) => 
<g>
<g filter="url(#filter0_d)">
<path d="M29.0619 13.9655L18.0001 24.9999L6.93839 13.9655C-1.35811 5.68959 9.70361 -5.34482 18.0001 2.93099C26.2962 -5.3449 37.3579 5.68959 29.0619 13.9655Z" fill={color} />
</g>
<defs>
<filter id="filter0_d" x="0" y="-6.10352e-05" width="36" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</g>

export default Heart