import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "~src/components";
import { AboutPage, FeaturePage, HomePage, ContactPage } from "~src/features";
import { PricingPage } from "~src/features";

function MainRoot() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />
      <main>
        <Outlet /> {/* This is where the child routes will render */}
      </main>
      <Footer />
    </div>
  );
}

export const mainRoutes = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        name: "Home",
        element: <HomePage />,
      },
      {
        path: "about-us",
        name: "AboutUs",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        name: "ContactUs",
        element: <ContactPage />,
      },
      {
        path: "*",
        name: "NotFound",
        element: "404",
      },
      {
        path: "pricing",
        name: "Pricing",
        element: <PricingPage />,
      },
      {
        path: "features",
        name: "Features",
        element: <FeaturePage />,
      },
      {
        path: "help-center",
        name: "HelpCenter",
        element: "Help Center",
      },
      {
        path: "blog",
        name: "Blog",
        element: "Blog",
      },
    ],
  },
];
