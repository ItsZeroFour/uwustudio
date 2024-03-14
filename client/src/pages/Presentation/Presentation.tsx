import PresentationAmbitions from "@/widgets/Presentation/PresentationAmbitions";
import PresentationDeposits from "@/widgets/Presentation/PresentationDeposits";
import PresentationIdea from "@/widgets/Presentation/PresentationIdea";
import PresentationTop from "@/widgets/Presentation/PresentationTop";
import PresentationValues from "@/widgets/Presentation/PresentationValues";
import React from "react";

const Presentation = () => {
  return (
    <React.Fragment>
      <PresentationTop />
      <PresentationValues />
      <PresentationIdea />
      <PresentationDeposits />
      <PresentationAmbitions />
    </React.Fragment>
  );
};

export default Presentation;
