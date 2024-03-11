import ContactUs from "@/widgets/Services/ContactUs";
import ServicesList from "@/widgets/Services/ServicesList";
import React from "react";

const Services = () => {
  return (
    <React.Fragment>
      <ServicesList />
      <ContactUs />
    </React.Fragment>
  );
};

export default Services;
