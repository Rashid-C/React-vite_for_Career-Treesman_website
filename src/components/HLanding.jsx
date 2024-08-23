import React from 'react'
import phone from "../assets/images/phone.png";
import whatsapp from "../assets/images/whatsapp.png";
import landing_Img from "../assets/images/home-girl.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import './HLanding.css'

export default function HLanding() {
    const handleUpTpTop=()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Enables smooth scrolling
        });
      }
  return (
    <div className="pt-8" style={{overflowX:"hidden"}}>
    <div className="flex flex-wrap justify-center w-full gap-8">
      {/* <div style={{ minWidth: "50%" }} className=" ps-5"> */}
      <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }} className="slide-in-left">
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
      <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }} className="flex justify-center slide-in-right"> 
        <img src={landing_Img} alt="landing-Img" style={{ width: "73%" }} /> 
        {/* 57% */}
      </div>
    </div>
    <div>
      <div className="flex items-center gap-3"
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
        <i className="fa-solid fa-angles-up text-2xl cursor-pointer" onClick={handleUpTpTop} style={{color:"#fff"}}></i>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          bottom: "80px",
          right: "10px",
          
        }}
      >
        <div className="d-flex justify-end">
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
        </div>
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
  )
}
