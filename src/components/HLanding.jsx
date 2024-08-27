import React from "react";
import landing_Img from "../assets/images/home-girl.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./HLanding.css";

export default function HLanding() {
  return (
    <div className="pt-8" style={{ overflowX: "hidden" }}>
      <div className="flex flex-wrap justify-center w-full gap-8">
        {/* <div style={{ minWidth: "50%" }} className=" ps-5"> */}
        <div
          style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}
          className="slide-in-left"
        >
          <div className="flex justify-center h-full w-full items-center">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#c50101" }}>
                Let's Start
              </h1>
              <h6 className="text-5xl font-bold hidden md:block">
                Providing Best Education <br /> For Brighter future
              </h6>
              <h6 className="text-4xl font-bold md:hidden">
                Providing Best Education <br /> For Brighter future
              </h6>
              <div className="mt-5 mb-14 ">
                <button
                  style={{
                    backgroundColor: "#c50101",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                  className="py-3 px-5 flex items-center gap-1"
                >
                  ENROLL NOW <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ minWidth: "50%" }} className="flex justify-center"> */}
        <div
          style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}
          className="flex justify-center slide-in-right"
        >
          <img src={landing_Img} alt="landing-Img" style={{ width: "76%" }} />
          {/* 57% */}
        </div>
      </div>
    </div>
  );
}
