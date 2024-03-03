import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
};
const variants = {
  outline: {
    blue_gray_300: "border-blue_gray-300 border border-solid text-blue_gray-600",
    gray_100_02: "border-gray-100_02 border border-solid text-gray-900",
  },
  fill: {
    white_A700: "bg-white-A700 text-gray-900_7f",
  },
};
const sizes = {
  sm: "h-12 pl-[25px] pr-[35px] text-lg",
  md: "h-12 pl-[18px] pr-[35px] text-sm",
  xs: "h-[34px] pl-4 pr-[35px] text-[15px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "sm",
      color = "blue_gray_300",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_300", "gray_100_02", "white_A700"]),
};

export { Input };
