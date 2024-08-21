import React from "react";
import phone from "../assets/images/phone.png";
import whatsapp from "../assets/images/whatsapp.png";
import landing_Img from "../assets/images/home-girl.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="pt-8">
      <div className="flex flex-wrap justify-center w-full">
        <div style={{ minWidth: "50%" }} className=" ps-5">
          <div className="flex justify-center h-full w-full items-center">
            <div>
              <h1 className="text-3xl font-bold" style={{color:"#c50101"}}>Let's Start</h1>
              <h6 className="text-5xl font-bold hidden md:block">
                Providing Best Education <br /> For Brighter future
              </h6>
              <h6 className="text-4xl font-bold md:hidden">
                Providing Best Education <br /> For Brighter future
              </h6>
              <div className="mt-5 mb-14 ">
                <button
                  style={{ backgroundColor:"#c50101", color:"#fff", borderRadius:"10px"}}
                  className="py-3 px-5 flex items-center gap-1"
                >
                  ENROLL NOW <FaLongArrowAltRight/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minWidth: "50%" }} className="flex justify-center">
          <img src={landing_Img} alt="" style={{ width: "57%" }} />
        </div>
      </div>

      {/* <div
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/floating-computer-laptop-isolated-orange-horizontal-banner-background_118047-18180.jpg)",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div className="flex justify-center h-full items-center">
          <div>
            <h1 className="text-4xl font-bold text-white text-center">
              Let's Start
            </h1>
            <h6 className="text-xl font-bold text-white text-center">
              Unlock your Potential with the Best Expert led IT Training
            </h6>
            <div className="flex justify-center mt-5">
              <button
                style={{ border: "1px solid #fff" }}
                className="py-2 px-5 "
              >
                ENROLL
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div
          style={{
            position: "fixed",
            zIndex: "1",
            bottom: "10px",
            right: "10px",
          }}
        >
          <button style={{ border: "1px solid red" }} className="py-2 px-5 ">
            Enquire Now
          </button>
        </div>
        <div
          style={{
            position: "fixed",
            zIndex: "1",
            bottom: "80px",
            right: "10px",
          }}
        >
          <a href="tel:0987654321" target="_blank">
            <img
              src={phone}
              alt="phone"
              title="Click to Call"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </a>
          <a href="https://wa.me/09871" target="_blank">
            <img
              src={whatsapp}
              alt="whatsapp"
              title="Whatsapp"
              width={40}
              height={40}
              className="mt-4 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
