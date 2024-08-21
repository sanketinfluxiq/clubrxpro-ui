import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
