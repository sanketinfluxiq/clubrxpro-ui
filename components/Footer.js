import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <>
      <div className="footer_wrapper">
        <div className="common_width">
          <div className="footer">
            <span onClick={() => router.push("/")} className="footer_icon_left">
              <img src="https://all-frontend-assets.s3.amazonaws.com/ClubRXPro/clubrxprologo.webp" />
            </span>
            <ul className="footer_nav_sec">
              <li>
                <span className="footer_link" onClick={() => router.push("/privacy-policy")}>
                  Privacy Policy
                </span>
              </li>
              <li>
                <span
                  className="footer_link"
                  onClick={() => router.push("/terms-and-conditions")}
                >
                  Terms and Conditions
                </span>
              </li>
            </ul>
            <p className="footer_copyright_sec">
              Copyright © {currentYear} ClubRXPro All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
