import React from "react";
import about_img_1 from "../assets/images/about-img-1.jpeg";
import { GiTeacher } from "react-icons/gi";
import "./HAbout.css";
// import bg from '../assets/images/bg-image.jpg'
import { GiBullseye } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { LuAtom } from "react-icons/lu";

export default function HAbout({home}) {
  const about = [
    {
      title: "Expert Faculty",
      icon:<GiTeacher /> ,
    },
    {
      title: "Great Career",
      icon: <GiBullseye/>,
    },
    {
      title: "100% Job Assistance",
      icon: <FaHandshake/>,
    },
    // {
    //   title: "Individual Learning",
    //   icon: "",
    // },
    // {
    //   title: "Affordable Courses",
    //   icon: "",
    // },
    {
      title: "Efficient & Flexible",
      icon: <LuAtom/>,
    },
    {
      title: "Best IT Infrastructure",
      icon: <LuAtom/>,
    },
  ];

  return (
    <div className="py-12 px-5" style={{backgroundColor:"#c50101"}}>
      {
        home?
        <h1 className="text-4xl text-center font-bold text-white">About Us</h1>
        :
        <h1 className="text-4xl text-center font-bold text-white">What We Provides</h1>
      }
      <div className="flex flex-wrap gap-12 justify-center my-8">
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%",borderRadius: "10px"}} className="mt-3">
          <img src={about_img_1} alt="aboutImg" style={{ width: "100%", height:"100%",borderRadius: "10px" }} />
        </div>
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }} className="">
          {about?.map((item, index) => (
            <div id="hello"
              style={{
                height: "60px",
                border:"2px solid #fff",
                borderRadius: "10px"
              }}
              key={index}
              className="flex gap-12 items-center px-4 w-full mt-3 "
            >
              <div>
                <span style={{ fontSize: "25px" }} >{item.icon}</span> 
              </div>
              <h1 className="text-2xl">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
