import React from "react";
import HCourses from "../components/HCourses";
import HAbout from "../components/HAbout";
import HLandingBox from "../components/HLandingBox";
import HPlacement from "../components/HPlacement";
import HFaq from "../components/HFaq";
import HLanding from "../components/HLanding";
import HTestimonial from "../components/HTestimonial";

export default function Home() {
  const home = true;
  return (
    <>
      <HLanding />
      <HLandingBox />
      <HCourses />
      <HAbout home={home} />
      <HPlacement />
      <HFaq />
      <HTestimonial />
    </>
  );
}
