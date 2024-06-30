"use client";

import AboutService from "@/pages/AboutService/AboutService";
import React from "react";

const page = ({ params }: { params: { serviceName: string } }) => {
  return <AboutService pathName={params.serviceName} />;
};

export default page;
