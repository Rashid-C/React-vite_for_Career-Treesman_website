import React from "react";

export default function HLandingBox() {
  const contents = [
    {
      count: 100,
      about: "Active Students",
    },
    {
      count: 200,
      about: "Faculty Courses",
    },
    {
      count: 90,
      about: "Best Professors",
    },
    {
      count: 50,
      about: "Award Achieved",
    },
    {
      count: 100,
      about: "Successfull Placements",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#c50101", color: "#fff", height: "150px" }}
      className=" flex justify-evenly items-center px-5"
    >
      {contents?.map((item, index) => (
        <div key={index}>
          <div className="hidden lg:block">
            <h1 className="text-6xl font-bold text-center">{item.count}+</h1>
            <h4 className="text-center text-lg">{item.about}</h4>
          </div>
          <div key={index} className="hidden md:block lg:hidden">
            <h1 className="text-3xl font-bold text-center">{item.count}+</h1>
            <h4 className="text-center text-md">{item.about}</h4>
          </div>
          <div key={index} className=" md:hidden">
            <h1 className="text-xl font-bold text-center">{item.count}+</h1>
            <h4 className="text-center text-xs">{item.about}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
