import React, { useEffect, useRef, useState } from "react";

export default function HTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState("auto");
  const carouselRef = useRef(null);

  const reviews = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/041/714/266/small_2x/ai-generated-professional-man-in-suit-with-arms-crossed-on-transparent-background-stock-png.png",
      content:
      "“My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile applications”",
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

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % slides.length
    );
  };

  const updateHeight = () => {
    if (carouselRef.current) {
      setCarouselHeight(
        carouselRef.current.children[currentIndex].clientHeight + "px"
      );
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const currentCarouselElement = carouselRef.current;
    currentCarouselElement.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    updateHeight();

    return () => {
      currentCarouselElement.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="py-12 px-5">
      <h1 className="text-4xl text-center font-bold mb-8">Our Testimonials</h1>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: carouselHeight }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={carouselRef}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:flex gap-12 justify-center"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className="flex-1 h-full  justify-center flex items-center"
                  style={{
                    maxWidth: "575px",
                    minWidth: "350px",
                    width: "100%",
                  }}
                >
                  <img
                    src={item.image}
                    className="w-60  object-cover rounded-lg"
                    alt={`Carousel item ${index + 1}`}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full  flex md:items-center">
                <div
                  className="flex-1 flex justify-center "
                  style={{
                    maxWidth: "575px",
                    minWidth: "350px",
                    width: "100%",
                  }}
                >
                  <div style={{}} className="p-4">
                    <p className="text-lg">{item.content}</p>
                    <div className=" mt-3 flex justify-between items-end">
                      <div className="flex gap-4" style={{ color: "#c50101" }}>
                        <button onClick={goToPrevious}>
                          <i className="fa-solid fa-arrow-left text-2xl"></i>
                        </button>
                        <button onClick={goToNext}>
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
      </div>
    </div>
  );
}
