import React, { useState } from "react";
import about_img_1 from "../assets/images/about-img-1.jpeg";

export default function HFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is full-stack development ?",
      content:
        "Full-stack development involves both front-end and back-end programming, and full-stack developers are proficient in both areas. They can work on all layers of a web application.",
    },
    {
      title: "What kind of placements do you offer ?",
      content:
        "We offer placement assistance to our students, which includes resume preparation, interview training, and job referrals. We work with a wide range of companies in the tech industry to help our students find the best job opportunities.",
    },
    {
      title: "Do you offer online courses ?",
      content:
        "Yes, we offer both online and in-person courses to suit the needs of our students. Our online courses are taught by experienced instructors and provide the same quality of education as our in-person courses.",
    },
    {
      title: "What topics are covered in your full-stack development course ?",
      content:"Our full-stack development course covers a wide range of topics, including HTML, CSS, JavaScript, jQuery, React, Node.js, Express.js, MongoDB, MySQL, and more. You will also learn how to build and deploy full-stack web applications."
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
                {openIndex === index && (
                  <p style={{ color: "#d5d5d5" }}>A. {item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
