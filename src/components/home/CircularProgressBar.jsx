import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = ({ percentage, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[95px] h-[95px]">
      <svg
        className="transform rotate-[-90deg]"
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-green-500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
      <span className="absolute text-[18px] font-semibold text-[#000]">{`${percentage}%`}</span>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
};

CircularProgressBar.defaultProps = {
  color: '#22c55e', // Default green color
};

export default CircularProgressBar;
