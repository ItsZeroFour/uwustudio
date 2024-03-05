import React from "react";
import Head from "@/widgets/home/Head";
import OurServices from "@/widgets/home/OurServices";
import WhoWeAre from "@/widgets/home/WhoWeAre";
import Lines from "@/widgets/home/Lines";
import Advantages from "@/widgets/home/Advantages";
import OurTeam from "@/widgets/home/OurTeam";
import Reviews from "@/widgets/home/Reviews";
import Contacts from "@/widgets/home/Contacts";

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
      </Lines>
    </React.Fragment>
  );
};

export default Home;
