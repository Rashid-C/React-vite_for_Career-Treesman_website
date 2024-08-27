import React from "react";
// import aboutBg from '../../assets/images/about-bg.png'

export default function AboutLanding() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://static-cse.canva.com/blob/1581210/uniqueinspiringaboutpage.44b26c5d.jpg)`,
          backgroundSize: "cover",
          height: "70vh",
          backgroundAttachment:"fixed"
        }}
        className="flex relative items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <h1 className="text-6xl font-bold text-white z-10">About Us</h1>
      </div>
    </div>
  );
}
