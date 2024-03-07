import React from "react";
import Head from "@/widgets/home/Head";
import OurServices from "@/widgets/home/OurServices";
import WhoWeAre from "@/widgets/home/WhoWeAre";
import Lines from "@/widgets/home/Lines";
import Advantages from "@/widgets/home/Advantages";
import OurTeam from "@/widgets/home/OurTeam";
import Reviews from "@/widgets/home/Reviews";
import Contacts from "@/widgets/home/Contacts";
import Blog from "@/widgets/home/Blog";

const Home = () => {
  return (
    <React.Fragment>
      <Head />
      <OurServices />
      <Lines>
        <WhoWeAre />
        <Advantages />
        <OurTeam />
        <Reviews />
        <Contacts />
        <Blog />
      </Lines>
    </React.Fragment>
  );
};

export default Home;
