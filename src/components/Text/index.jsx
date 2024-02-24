import React from "react";

const sizeClasses = {
  txtWorkSansRegular18WhiteA700: "font-normal font-worksans",
  txtRobotoRegular68Gray900: "font-normal font-roboto",
  txtWorkSansRegular16Gray300: "font-normal font-worksans",
  txtWorkSansRegular18: "font-normal font-worksans",
  txtRobotoRegular68Gray300: "font-normal font-roboto",
  txtWorkSansRegular16: "font-normal font-worksans",
  txtWorkSansRegular19Gray300: "font-normal font-worksans",
  txtWorkSansRegular18Gray300: "font-normal font-worksans",
  txtWorkSansRegular15: "font-normal font-worksans",
  txtWorkSansRegular14: "font-normal font-worksans",
  txtWorkSansRegular19Gray900: "font-normal font-worksans",
  txtRobotoRegular45: "font-normal font-roboto",
  txtRobotoRegular68: "font-normal font-roboto",
  txtRobotoRegular49: "font-normal font-roboto",
  txtWorkSansRegular19: "font-normal font-worksans",
  txtRobotoRegular19: "font-normal font-roboto",
  txtWorkSansRegular19Bluegray400: "font-normal font-worksans",
  txtRobotoRegular30: "font-normal font-roboto",
  txtRobotoRegular19Gray900: "font-normal font-roboto",
  txtRobotoRegular22: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
