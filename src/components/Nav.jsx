import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import loginIcon from "../assets/images/loginIcon.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const naviList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/courses" },
    { name: "Placements", link: "/placements" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-white w-full z-20 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <a href="/" className="flex items-center space-x-3"> */}
        {/* <img src={logo} className="h-15" alt="Logo" width={100} /> */}
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Career <br />Streesman
          </span> */}
        {/* </a> */}
        <div className="flex items-center gap-2 mb-3 ">
          <img src={logo} alt="logo" width={100} height={100} />
          <div>
            <h3 className="text-3xl font-bold">
              Career <br />
              Streesman{" "}
            </h3>
          </div>
        </div>
        <div className="flex md:order-2 space-x-3">
          <Link to={'/login'}>
            <div className="flex gap-2  bg-red-600  px-4 py-2 rounded-lg">
              <button className="text-white">Login</button>
              <img src={loginIcon} alt="loginIcon" width={20} />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {!isOpen ? (
              <HiMiniBars3CenterLeft
                style={{
                  fontSize: "60px ",
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            ) : (
              <HiOutlineXMark
                style={{
                  fontSize: "60px ",
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:bg-white">
            {naviList.map((item, index) => (
              <li
                key={index}
                className={`text-lg font-bold hover:text-red-700 ${
                  location.pathname == item.link ? "text-red-700" : "text-black"
                } `}
              >
                <Link to={item.link} className="block py-2 px-3">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
