import React, { useState } from "react";
import about_img_1 from "../assets/images/about-img-1.jpeg";

export default function HFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Flowbite ?",
      content: "Flowbite is an open-source library...",
    },
    {
      title: "Is there a Figma file available ?",
      content: "Flowbite is first conceptualized and designed using Figma...",
    },
    {
      title: "What are the differences between Flowbite and Tailwind UI ?",
      content:
        "The main difference is that Flowbite's core components are open source...",
    },
  ];
  return (
    <div className="py-12 px-5" style={{ backgroundColor: "#c50101" }}>
      <h1 className="text-4xl text-center font-bold text-white">FAQ</h1>
      <div className="flex flex-wrap gap-8 justify-center my-8">
        <div
          style={{
            maxWidth: "575px",
            minWidth: "350px",
            width: "100%",
            borderRadius: "10px",
          }}
          className="mt-3"
        >
          <img
            src={about_img_1}
            alt="aboutImg"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            maxWidth: "575px",
            minWidth: "350px",
            width: "100%",
            borderRadius: "10px",
          }}
          className="mt-3"
        >
          {items.map((item, index) => (
            <div key={index} className="px-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-header pt-4 w-full text-left pb-2 text-white text-xl"
                style={{ borderBottom: "1px solid #fff" }}
              >
                Q. {item.title}
                {/* <span>{openIndex === index ? "-" : "+"}</span> */}
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : "hidden"
                }`}
              >
                {openIndex === index && <p style={{color:"#d5d5d5"}}>A. {item.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
