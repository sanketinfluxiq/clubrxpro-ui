import { useRouter } from "next/router";
import React from "react";

const Home = () => {

  const router = useRouter()
  return (
    <div>
      <img
        src="https://all-frontend-assets.s3.amazonaws.com/medigrade_new/medigrade_landing_top.webp"
        style={{ display: "block", width: "100%" }}
      ></img>
      <img onClick={() => window.open('https://betoparedes.com/', '_blank')}
        src="https://all-frontend-assets.s3.amazonaws.com/medigrade_new/medigrade_landing_bottom.webp"
        style={{ display: "block", width: "100%", cursor: "pointer" }}
      ></img>
    </div>
  );
};

export default Home;
