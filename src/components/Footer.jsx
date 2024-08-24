import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";

export default function Footer() {
  const naviList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/courses" },
    { name: "Placements", link: "/placements" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const Courses = [
    { name: "Flutter", link: "/" },
    { name: "Python", link: "/" },
    { name: "MERN", link: "/" },
    { name: "JAVA", link: "/" },
    { name: "Digital Marketing", link: "/" },
    { name: "Data Analyst", link: "/" },
    { name: "HR", link: "/" },
    { name: "PHP", link: "/" },
    { name: "Software Testing", link: "/" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: fb, link: "https://" },
    { name: "Instagram", icon: insta, link: "https://" },
    { name: "Linkedin", icon: linkedin, link: "https://" },
    { name: "Twitter", icon: twitter, link: "https://" },
    { name: "Mail", icon: mail, link: "https://" },
  ];

  return (
    <div
      className="flex gap-3 flex-wrap text-white justify-center py-24"
      style={{ backgroundColor: "#3e3d47" }}
    >
      <div
        style={{ width: "400px" }}
        className="flex justify-center mb-8 items-center"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" width={100} height={100} />
            <div>
              <h3 className="text-3xl font-bold">
                Career <br />
                Streesman{" "}
              </h3>
            </div>
          </div>
          <div>
            <h2 className="underline text-lg mb-3 font-bold">
              Our corporate office address
            </h2>
            <h3>
              2 J, Sahya Building, KSITIL Special Economic Zone, Govt.
              Cyberpark, Kozhikode-673 016, Kerala, India
            </h3>
          </div>
        </div>
      </div>
      <div style={{ width: "200px" }} className="mb-8">
        <div>
          <span className="text-xl font-bold">Links</span>
          <ul className="mt-3">
            {naviList.length > 0 &&
              naviList.map((item, index) => (
                <li key={index + 100}>
                  <Link to={`/${item.link}`}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div style={{ width: "200px" }} className="mb-8">
        <span className="text-xl font-bold ">Courses</span>
        <ul className="mt-3">
          {Courses.length > 0 &&
            Courses.map((item, index) => (
              <li key={index + 200}>
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div style={{ width: "400px" }} className="mb-8">
        <span className="text-xl font-bold">Contact</span>
        <h6 className="mt-3">
          <span className="font-bold">Email :</span>
          doctosmartacademy@gmail.com
        </h6>
        <h6>
          <span className="font-bold">Contact :</span>+91 79073 48039
        </h6>
        <div className="flex gap-5 mt-5">
          {socialMedia?.length > 0 &&
            socialMedia.map((item, index) => (
              <Link to={`/${item.link}`} key={index + 300}>
                <img
                  title={item.name}
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
