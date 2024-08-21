import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
