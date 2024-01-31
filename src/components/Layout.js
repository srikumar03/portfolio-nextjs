import React from "react";

const Layout = ({ children, className = "" }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Layout;
