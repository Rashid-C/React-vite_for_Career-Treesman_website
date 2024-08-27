// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "../components/Header";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Course from "../pages/Course";
// import Placements from "../pages/Placements";
// import Contact from "../pages/Contact";
// import Careers from "../pages/Careers";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import phone from "../assets/images/phone.png";
// import whatsapp from "../assets/images/whatsapp.png";

// export default function LayoutRoutes() {
//   const handleUpTpTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // Enables smooth scrolling
//     });
//   };

//   return (
//     <BrowserRouter>
//       <div>
//         <div
//           className="flex items-center gap-3"
//           style={{
//             position: "fixed",
//             zIndex: "1",
//             bottom: "10px",
//             right: "10px",
//           }}
//         >
//           <button style={{ border: "1px solid red" }} className="py-2 px-5 ">
//             Enquire Now
//           </button>
//           <i
//             className="fa-solid fa-angles-up text-2xl cursor-pointer"
//             onClick={handleUpTpTop}
//             style={{ color: "#fff" }}
//           ></i>
//         </div>
//         <div
//           style={{
//             position: "fixed",
//             zIndex: "1",
//             bottom: "80px",
//             right: "10px",
//           }}
//         >
//           <div className="d-flex justify-end">
//             <a href="tel:0987654321" target="_blank">
//               <img
//                 src={phone}
//                 alt="phone"
//                 title="Click to Call"
//                 width={40}
//                 height={40}
//                 className="cursor-pointer"
//               />
//             </a>
//           </div>
//           <a href="https://wa.me/09871" target="_blank">
//             <img
//               src={whatsapp}
//               alt="whatsapp"
//               title="Whatsapp"
//               width={40}
//               height={40}
//               className="mt-4 cursor-pointer"
//             />
//           </a>
//         </div>
//       </div>

//       <Header />
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/courses" element={<Course />} />
//         <Route path="/placements" element={<Placements />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route path="/*" element={<Home />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Course from "../pages/Course";
import Placements from "../pages/Placements";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import Login from "../pages/Login";
import Register from "../pages/Register";
import phone from "../assets/images/phone.png";
import whatsapp from "../assets/images/whatsapp.png";
import bg from "../assets/images/bg-image.jpg";

export default function LayoutRoutes() {
  const [showHeaderNav, setShowHeaderNav] = useState(true); // State to control visibility
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up
        setShowHeaderNav(true);
      } else {
        // User is scrolling down
        setShowHeaderNav(false);
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleUpTpTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <div>
        <div
          className="flex items-center gap-3"
          style={{
            position: "fixed",
            zIndex: "1",
            bottom: "10px",
            right: "10px",
          }}
        >
          <button style={{ border: "1px solid red" }} className="py-2 px-5">
            Enquire Now
          </button>
          <i
            className="fa-solid fa-angles-up text-2xl cursor-pointer"
            onClick={handleUpTpTop}
            style={{ color: "#fff" }}
          ></i>
        </div>
        <div
          style={{
            position: "fixed",
            zIndex: "1",
            bottom: "80px",
            right: "10px",
          }}
        >
          <div className="d-flex justify-end">
            <a href="tel:0987654321" target="_blank">
              <img
                src={phone}
                alt="phone"
                title="Click to Call"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </a>
          </div>
          <a href="https://wa.me/09871" target="_blank">
            <img
              src={whatsapp}
              alt="whatsapp"
              title="Whatsapp"
              width={40}
              height={40}
              className="mt-4 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-1000 ${
          showHeaderNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
        <Nav />
      </div>
      <div className="mt-44" style={{ backgroundImage: `url(${bg})` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
