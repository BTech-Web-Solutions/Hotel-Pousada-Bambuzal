import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
