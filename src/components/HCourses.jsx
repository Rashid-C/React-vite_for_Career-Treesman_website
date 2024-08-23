import React from "react";
import "./HCourses.css";
import flutter from "../assets/images/flutter.png";
import react from "../assets/images/react.webp";
import python from "../assets/images/python.png";
import hr from "../assets/images/hr.png";
import java from "../assets/images/java.png";
import testing from "../assets/images/testing.png";
import php from "../assets/images/php.png";
import pyImg from "../assets/images/py-img.jpg";
import flutterImg from "../assets/images/flutter-img.webp";
import mernImg from "../assets/images/mernImg.png";
import javaImg from "../assets/images/javaImg.png";
import hrImg from "../assets/images/hrImg.jpeg";
import phpImg from "../assets/images/phpImg.jpg";
import testingImg from "../assets/images/testingImg.jpg";

export default function HCourses() {
  const courses = [
    {
      name: "FLUTTER",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image: flutterImg,
      icon: flutter,
    },
    {
      name: "PYTHON FULL STACK DEVELOPMENT",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image: pyImg,
      icon: python,
    },
    {
      name: "MERN STACK DEVELOPMENT",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["MongoDB", "Express JS", "React JS", "Node js"],
      link: "",
      image: mernImg,
      icon: react,
    },
    {
      name: "JAVA FULL STACK DEVELOPMENT",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image: javaImg,
      icon: java,
    },
    {
      name: "HR MANAGEMENT",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image:hrImg,
      icon: hr,
    },
    {
      name: "PHP",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image:phpImg,
      icon: php,
    },
    {
      name: "SOFTWARE TESTING",
      description: "hellod ooooooo dooooo ndj dcdjncd  dj vdjdj vdj dj d jddj ",
      details: ["Django", "Core Python", "Rest API"],
      link: "",
      image:testingImg,
      icon: testing,
    },
  ];

  return (
    <div className="py-12 px-5">
      <h1 className="text-4xl text-center font-bold">Our Courses</h1>
      <div className="flex flex-wrap justify-center my-8 gap-8">
        {courses?.map((item, index) => (
          <div
            className="card cursor-pointer w-full"
            style={{ border: "1px solid red" }}
            key={index}
          >
            <div className="beforeContent" style={{ height: "400px" }}>
              <div className="w-full h-full">
                <div
                  className=" flex justify-center items-center px-5"
                  style={{ height: "50%" }}
                >
                  <div className="text-center ">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="mx-auto mb-2"
                      width={30}
                    />
                    <h1 className="text-xl font-bold ">{item.name}</h1>
                    <h6>{item.description}</h6>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
            <div className="afterContent w-full" style={{ height: "400px" }}>
              <div
                className=" flex items-center px-5 w-full"
                style={{ height: "38%" }}
              >
                <div className="text-center w-full">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mx-auto mb-2"
                    width={30}
                  />
                  <h1 className="text-xl  font-bold hello text-white">{item.name}</h1>
                </div>
              </div>
              <div className="w-full text-center">
                {item.details?.map((items, index) => (
                  <h2 className="text-lg mt-2  text-white" key={index}>
                    {items}
                  </h2>
                ))}
                <button
                  style={{ backgroundColor: "#fff", color: "#c50101" }}
                  className="mt-2 px-3 py-2 rounded-md"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
