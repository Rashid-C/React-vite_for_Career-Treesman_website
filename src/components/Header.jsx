import React from "react";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-wrap py-3 justify-end ">
        <div className=" flex gap-3 justify-between px-2">
          <div class=" flex gap-3 px-2" style={{borderRight:"1px solid red"}}>
            <img src={fb} alt="" style={{ width: "20px", height: "20px" }} />
            <img src={insta} alt="" style={{ width: "20px", height: "20px" }} />
            <img
              src={linkedin}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src={twitter}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div class=" flex gap-1 px-2" style={{borderRight:"1px solid red"}}>
            <img src={mail} alt="" style={{ width: "20px", height: "20px" }} />
            <span className="hidden md:block  hover:text-red-700 cursor-pointer">streesman@gmail.com</span>
          </div>
          <div class=" flex gap-1">
            <img src={phone} alt="" style={{ width: "20px", height: "20px" }} />
            <span  className="hidden md:block  hover:text-red-700 cursor-pointer">098765421</span>
          </div>
        </div>
      </div>
    </>
  );
}
