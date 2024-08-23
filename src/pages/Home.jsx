import React from "react";
import Landing from "../components/Landing";
import HCourses from "../components/HCourses";
import HAbout from "../components/HAbout";
import bg from '../assets/images/bg-image.jpg'
import HLandingBox from "../components/HLandingBox";
import HPlacement from "../components/HPlacement";
import HFaq from "../components/HFaq";

export default function Home() {
  return (
    <>
      <div style={{backgroundImage:`url(${bg})`}}>
        <Landing />
        <HLandingBox/>
        <HCourses />
        <HAbout />
        <HPlacement/>
        <HFaq/>
      </div>
    </>
  );
}
