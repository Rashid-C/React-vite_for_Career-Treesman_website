import React from "react";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import { Link } from "react-router-dom";

export default function Header() {
  const socialMedia = [
    { name: "Facebook", icon: fb, link: "https://" },
    { name: "Instagram", icon: insta, link: "https://" },
    { name: "Linkedin", icon: linkedin, link: "https://" },
    { name: "Twitter", icon: twitter, link: "https://" },
  ];

  return (
    <>
      <div className="flex flex-wrap py-3 justify-end ">
        <div className=" flex gap-3 justify-between px-2">
          <div
            class=" flex gap-3 px-2"
            style={{ borderRight: "1px solid red" }}
          >
            {/* <img src={fb} alt="" style={{ width: "20px", height: "20px" }} /> */}
            {socialMedia?.length > 0 &&
              socialMedia.map((item) => (
                <Link to={`/${item.link}`}>
                  <img
                    title={item.name}
                    src={item.icon}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </Link>
              ))}
          </div>
          <div
            class=" flex gap-1 px-2"
            style={{ borderRight: "1px solid red" }}
          >
            <img src={mail} alt="" style={{ width: "20px", height: "20px" }} />
            <span className="hidden md:block  hover:text-red-700 cursor-pointer">
              streesman@gmail.com
            </span>
          </div>
          <div class=" flex gap-1">
            <img src={phone} alt="" style={{ width: "20px", height: "20px" }} />
            <span className="hidden md:block  hover:text-red-700 cursor-pointer">
              098765421
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
