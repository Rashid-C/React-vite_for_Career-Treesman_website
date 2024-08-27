import React from "react";

export default function AboutContent() {
  return (
    <>
      <div className="flex justify-center gap-12 flex-wrap-reverse pt-12 px-4">
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg"
            alt="about-img"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
        <div
          style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}
          className="flex justify-center items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-8 text-center">Our Mission</h1>
            <p>
              Doctosmart EdTech is a world-class learning platform that empowers
              people to learn, master, and apply anything they desire. Our
              mission is to connect the world by enabling people to achieve
              their goals by connecting with the right resources at the right
              time.We provide an industry-relevant curriculum, crafted by
              experienced professionals and experts, ensuring you gain
              up-to-date skills and knowledge. Along with your learning process,
              live projects, and hands-on experience, you bridge the gap between
              theory and practice, making you job-ready. Students benefit from
              learning directly from industrial experts who provide valuable
              guidance and mentorship.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 flex-wrap py-12 px-4">
        <div
          style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }}
          className="flex justify-center items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-8 text-center">Our Story</h1>
            <p>
              Doctosmart EdTech is a world-class learning platform that empowers
              people to learn, master, and apply anything they desire. Our
              mission is to connect the world by enabling people to achieve
              their goals by connecting with the right resources at the right
              time.We provide an industry-relevant curriculum, crafted by
              experienced professionals and experts, ensuring you gain
              up-to-date skills and knowledge. Along with your learning process,
              live projects, and hands-on experience, you bridge the gap between
              theory and practice, making you job-ready. Students benefit from
              learning directly from industrial experts who provide valuable
              guidance and mentorship.{" "}
            </p>
          </div>
        </div>
        <div style={{ maxWidth: "575px", minWidth: "350px", width: "100%" }} className="">
          <img
            src="https://www.doctosmart.com/img/portfolio/2-columns/wday1.jpg"
            alt="about-img"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>
    </>
  );
}
