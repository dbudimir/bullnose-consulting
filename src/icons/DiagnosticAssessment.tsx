import React from "react";

const DiagnosticAssessment: React.FC = () => (
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

    {/* Simplified Chart Bars */}
    <rect x="15" y="35" width="5" height="10" fill="white" />
    <rect x="22" y="30" width="5" height="15" fill="white" />
    <rect x="29" y="25" width="5" height="20" fill="white" />

    {/* Simple Magnifying Glass */}
    <circle cx="42" cy="20" r="7" fill="none" stroke="white" strokeWidth="2" />
    <line
      x1="47"
      y1="25"
      x2="50"
      y2="28"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DiagnosticAssessment;
