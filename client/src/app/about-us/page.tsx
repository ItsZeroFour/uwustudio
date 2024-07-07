import React from "react";
// import About from "../../pages/About/About";
import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("../../pages/About/About"), {
  ssr: false,
});

const page = () => {
  return <AboutUs />;
};

export default page;
