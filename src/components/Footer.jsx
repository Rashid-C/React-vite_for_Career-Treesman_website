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
    { name: "Phone", icon: phone, link: "https://" },
    { name: "Mail", icon: mail, link: "https://" },
  ];

  return (
    <div className="flex gap-3 flex-wrap bg-slate-400 justify-center py-24">
      <div style={{ width: "400px" }} className="flex justify-center mb-8 items-center">
        <div>
          <img src={logo} alt="" width={200} height={200} />
          <div>
            <h2 className="underline text-lg mb-3 font-bold">Our corporate office address</h2>
            <h3>
              Sahya Building, KSITIL Special Economic Zone,Govt. Cyberpark,
              Kozhikode-673 016, Kerala, India
            </h3>
          </div>
        </div>
      </div>
      <div style={{ width: "200px" }} className="mb-8">
        <span className="text-xl font-bold">Links</span>
        <ul className="mt-3">
          {naviList.length > 0 &&
            naviList.map((item) => (
              <li>
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div style={{ width: "200px" }} className="mb-8">
        <span className="text-xl font-bold ">Courses</span>
        <ul className="mt-3">
          {Courses.length > 0 &&
            Courses.map((item) => (
              <li>
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div style={{ width: "400px" }} className="mb-8">
        <span className="text-xl font-bold">Contact</span>
        <h6 className="mt-3">
          <span className="font-bold">Email :</span>
          muhammedramees09876@gmail.com
        </h6>
        <h6>
          <span className="font-bold">Contact :</span>+919207424420
        </h6>
        <div className="flex gap-5 mt-5">
          {socialMedia?.length > 0 &&
            socialMedia.map((item) => (
              <Link to={`/${item.link}`}>
                <img
                  title={item.name}
                  src={item.icon}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
