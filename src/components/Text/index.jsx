import React from "react";

const sizes = {
  xs: "text-[11px] font-normal leading-[14px]",
  lg: "text-[15px] font-normal leading-5",
  s: "text-xs font-normal leading-[15px]",
  "2xl": "text-lg font-normal leading-6",
  xl: "text-base font-normal leading-[19px]",
  md: "text-sm font-normal leading-[17px]",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
