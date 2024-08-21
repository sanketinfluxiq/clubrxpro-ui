import React from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
