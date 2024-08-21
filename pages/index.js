import Head from "next/head";
import Home from "../components/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Club RX Pro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Home />
    </>
  );
}
