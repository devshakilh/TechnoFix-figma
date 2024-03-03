import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[24px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-A400",
    gray_900_01: "bg-gray-900_01 text-white-A700",
    indigo_A400: "bg-indigo-A400 text-white-A700",
  },
  outline: {
    gray_100_02: "border-gray-100_02 border border-solid text-gray-900",
  },
};
const sizes = {
  "2xl": "h-[51px] px-[35px] text-lg",
  md: "h-10 px-[26px] text-sm",
  sm: "h-9",
  xs: "h-[34px] px-[27px] text-[15px]",
  lg: "h-12 px-[29px] text-lg",
  xl: "h-12 px-[23px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xl",
  color = "indigo_A400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["2xl", "md", "sm", "xs", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "gray_900_01", "indigo_A400", "gray_100_02"]),
};

export { Button };
