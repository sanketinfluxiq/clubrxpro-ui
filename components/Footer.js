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
            <Link href="/" className="footer_icon_left">
              <img src="https://all-frontend-assets.s3.amazonaws.com/ClubRXPro/clubrxprologo.webp" />
            </Link>
            <ul className="footer_nav_sec">
              <li>
                <Link href="/privacy-policy" 
                // onClick={() => router.push("")}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                //   onClick={() => router.push("")}
                >
                  Terms and Conditions
                </Link>
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
