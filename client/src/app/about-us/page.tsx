import React from "react";
import dynamic from "next/dynamic";
import "../scss/index.scss";

const AboutUs = dynamic(() => import("../../pages/About/About"), {
  ssr: false,
});

const page = () => {
  return <AboutUs />;
};

export default page;
