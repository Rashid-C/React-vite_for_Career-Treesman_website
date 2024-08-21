import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import logo from '../assets/images/logo.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
        <a href="/" className="flex items-center space-x-3">
          <img
            src={logo}
            className="h-15"
            alt="Logo"
            width={100}
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Career Streesman
          </span> */}
        </a>
        <div className="flex md:order-2 space-x-3">
          <button className="text-white bg-red-600 hover:bg-blue-800 px-4 py-2 rounded-lg">
            Login
          </button>
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
              <li key={index} className="text-lg">
                <a
                  href={item.link}
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
