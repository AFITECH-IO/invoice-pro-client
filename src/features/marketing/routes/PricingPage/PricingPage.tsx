import * as React from "react";
import { PricingFAQ, PricingTables, PricingTestimonials } from "../../components";

export const PricingPage = () => {
  return (
    <>
      <PricingTables />
      <PricingFAQ />
      <PricingTestimonials />
    </>
  );
};
