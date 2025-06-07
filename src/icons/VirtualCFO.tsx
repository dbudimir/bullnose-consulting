import React from "react";

const VirtualCFO: React.FC = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle
      cx="30"
      cy="30"
      r="28"
      fill="#232166"
      stroke="#98b21d"
      strokeWidth="2"
    />

    {/* Calculator base */}
    <rect x="18" y="15" width="24" height="30" rx="3" fill="white" />

    {/* Screen area */}
    <rect x="21" y="19" width="18" height="8" rx="2" fill="#232166" />

    {/* Dollar sign in screen */}
    <text
      x="30"
      y="26"
      textAnchor="middle"
      fill="#98b21d"
      fontFamily="Arial, sans-serif"
      fontSize="8"
      fontWeight="bold"
    >
      $
    </text>

    {/* Simplified button grid */}
    <circle cx="24" cy="34" r="2" fill="#f0f0f0" />
    <circle cx="30" cy="34" r="2" fill="#f0f0f0" />
    <circle cx="36" cy="34" r="2" fill="#f0f0f0" />

    <circle cx="27" cy="40" r="2" fill="#f0f0f0" />
    <circle cx="33" cy="40" r="2" fill="#98b21d" />
  </svg>
);

export default VirtualCFO;
