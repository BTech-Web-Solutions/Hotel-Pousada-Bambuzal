// Layout.jsx
import React, { useMemo } from "react";
import Aside from "./Aside";

const Layout = ({ children }) => {
  const asideComponent = useMemo(() => <Aside />, []);

  return (
    <div style={{ display: "flex" }}>
      {asideComponent}
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};

export default Layout;
