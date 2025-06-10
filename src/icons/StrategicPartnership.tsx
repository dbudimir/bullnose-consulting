import React from "react";

const StrategicPartnership: React.FC = () => (
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

    {/* Left circle representing one partner */}
    <circle cx="24" cy="30" r="8" fill="white" />

    {/* Right circle representing other partner */}
    <circle cx="36" cy="30" r="8" fill="none" stroke="white" strokeWidth="2" />

    {/* Overlap/connection area */}
    <circle cx="30" cy="30" r="4" fill="#98b21d" />
  </svg>
);

export default StrategicPartnership;
