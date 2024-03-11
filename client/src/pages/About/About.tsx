import Head from "@/widgets/AboutUs/Head";
import AboutUs from "@/widgets/AboutUs/AboutUs";
import React from "react";
import WhyChooseUs from "@/widgets/AboutUs/WhyChooseUs";
import HowWeWork from "@/widgets/AboutUs/HowWeWork";
import Target from "@/widgets/AboutUs/Target";

const About = () => {
  return (
    <React.Fragment>
      <Head />
      <AboutUs />
      <WhyChooseUs />
      <HowWeWork />
      <Target />
    </React.Fragment>
  );
};

export default About;
