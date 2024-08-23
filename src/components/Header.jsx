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
      <div className="flex flex-wrap py-3 justify-end " style={{backgroundColor:"#3E3D47"}}>
        <div className=" flex gap-3 justify-between px-2">
          <div
            className=" flex gap-3 px-2"
            style={{ borderRight: "1px solid red" }}
          >
            {/* <img src={fb} alt="" style={{ width: "20px", height: "20px" }} /> */}
            {socialMedia?.length > 0 &&
              socialMedia.map((item,index) => (
                <Link to={`/${item.link}`} key={index}>
                  <img
                    title={item.name}
                    src={item.icon}
                    alt={item.name}
                    style={{ width: "25px", height: "25px", backgroundColor:"#fff", borderRadius:"50%"}} className="p-1"
                  />
                </Link>
              ))}
          </div>
          <div
            className=" flex gap-1 px-2 cursor-pointer"
            style={{ borderRight: "1px solid red" }}
          >
            <img src={mail} alt="" style={{ width: "25px", height: "25px", backgroundColor:"#fff", borderRadius:"50%"}} className="p-1"/>
            <span className="hidden md:block  hover:text-red-700 text-white" >
              doctosmartacademy@gmail.com
            </span>
          </div>
          <div className=" flex gap-1 cursor-pointer">
            <img src={phone} alt="" style={{ width: "25px", height: "25px", backgroundColor:"#fff", borderRadius:"50%"}} className="p-1" />
            <span className="hidden md:block  hover:text-red-700 text-white ">
              +91 79073 48039
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
