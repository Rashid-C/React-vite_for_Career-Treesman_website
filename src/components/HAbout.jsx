import React from "react";
import about_img_1 from "../assets/images/about-img-1.jpeg";
import { GiTeacher } from "react-icons/gi";
import "./HAbout.css";
import bg from '../assets/images/bg-image.jpg'

export default function HAbout() {
  const about = [
    {
      title: "Expert Faculty",
      icon: "",
    },
    {
      title: "Great Career",
      icon: "",
    },
    {
      title: "100% Job Assistance",
      icon: "",
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
      icon: "",
    },
    {
      title: "Best IT Infrastructure",
      icon: "",
    },
  ];

  return (
    <div className="py-12 px-5" style={{backgroundColor:"#c50101"}}>
      <h1 className="text-4xl text-center font-bold text-white">Our Courses</h1>
      <div className="flex flex-wrap gap-8 justify-center my-8">
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%",borderRadius: "10px"}} className="mt-3">
          <img src={about_img_1} alt="aboutImg" style={{ width: "100%", height:"100%",borderRadius: "10px" }} />
        </div>
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}>
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
                <GiTeacher style={{ fontSize: "25px" }} />
              </div>
              <h1 className="text-2xl">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
