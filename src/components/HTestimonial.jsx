import React, { useEffect, useState } from "react";

export default function HTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/041/714/266/small_2x/ai-generated-professional-man-in-suit-with-arms-crossed-on-transparent-background-stock-png.png",
      content:
        "“My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile application     My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile applications”",
      name: "Muhammed Shihas",
      role: "Flutter Student",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/59/89/png-transparent-life-insurance-professional-service-business-men-miscellaneous-company-service-thumbnail.png",
      content:
        "“My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile applications”",
      name: "Muhammed Shihas",
      role: "Flutter Student",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsMC13I0XaI8vSQnZUIAIHLlVmDtxoB6OYQ&s",
      content:
        "“My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile applications”",
      name: "Muhammed Shihas",
      role: "Flutter Student",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="py-12 px-5">
      <h1 className="text-4xl text-center font-bold mb-8">Our Testimonials</h1>
      <div id="controls-carousel" className="relative w-full h-full">
        {/* Carousel wrapper */}
        <div className="relative  overflow-hidden rounded-lg  " style={{minHeight:"500px", maxHeight:"900px"}}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              } flex items-center justify-center `}
            >
              {/* Carousel item content */}
              <div className="flex flex-wrap gap-8 justify-center md:flex-nowrap md:h-full items-center w-full">
                {/* Image section */}
                <div
                  className="flex-1 h-full justify-center flex items-center"
                  style={{ maxWidth: "575px" , minWidth: "350px", width: "100%"}}
                >
                  <img
                    src={item.image}
                    className="w-60  object-cover rounded-lg"
                    alt={`Carousel item ${index + 1}`}
                  />
                </div>
                {/* Text content section */}
                <div
                  className="flex-1 flex justify-center px-3"
                  style={{ maxWidth: "575px" , minWidth: "350px", width: "100%"}}
                >
                  <div style={{}} className="p-4">
                    <p className="text-lg">{item.content}</p>
                    <div className=" mt-3 flex justify-between items-end">
                      <div className="flex gap-4" style={{ color: "#c50101" }}>
                        <button onClick={handlePrev}>
                          <i className="fa-solid fa-arrow-left text-2xl"></i>
                        </button>
                        <button onClick={handleNext}>
                          <i className="fa-solid fa-arrow-right text-2xl"></i>
                        </button>
                      </div>
                      <div>
                        <h1
                          className="text-xl font-bold"
                          style={{ color: "#c50101" }}
                        >
                          {item.name}
                        </h1>
                        <h1 className="text-lg">{item.role}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider controls */}
        {/* <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button> */}
      </div>
    </div>
  );
}
