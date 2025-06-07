import React from "react";

const TechIntegration: React.FC = () => (
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

    {/* Central processor */}
    <rect x="24" y="24" width="12" height="12" rx="2" fill="white" />
    <circle cx="30" cy="30" r="3" fill="#98b21d" />

    {/* Connection lines */}
    <line x1="30" y1="24" x2="30" y2="15" stroke="white" strokeWidth="2" />
    <line x1="36" y1="30" x2="45" y2="30" stroke="white" strokeWidth="2" />
    <line x1="30" y1="36" x2="30" y2="45" stroke="white" strokeWidth="2" />
    <line x1="24" y1="30" x2="15" y2="30" stroke="white" strokeWidth="2" />

    {/* Connection nodes */}
    <circle cx="30" cy="15" r="3" fill="#98b21d" />
    <circle cx="45" cy="30" r="3" fill="#98b21d" />
    <circle cx="30" cy="45" r="3" fill="#98b21d" />
    <circle cx="15" cy="30" r="3" fill="#98b21d" />
  </svg>
);

export default TechIntegration;
