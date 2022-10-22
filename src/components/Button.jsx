import React from "react";

const Button = ({ type, text, color, size }) => {
  return (
    <button
      type={type}
      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
    >
      {text}
    </button>
  );
};

export default Button;
