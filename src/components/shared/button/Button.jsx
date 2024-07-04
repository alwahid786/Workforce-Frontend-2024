import React from "react";

const Button = ({
  type = "button",
  bg = "#0c67bc",
  width = "100%",
  height = "80px",
  radius = "4px",
  color = "#fff",
  text,
  change,
  click,
  size,
  weight,
}) => {
  const style = {
    backgroundColor: bg,
    width: width,
    height: height,
    borderRadius: radius,
    color: color,
    fontSize: size,
    fontWeight: weight,
  };

  return (
    <button
      type={type}
      style={style}
      className="flex items-center justify-center"
      onChange={change}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
