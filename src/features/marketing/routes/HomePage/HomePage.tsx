import * as React from "react";
import {
  Process,
  VideoHero,
  HomeFeatures,
  HomeTabs,
  HomeTarget,
} from "../../components";

export const HomePage = () => {
  return (
    <>
      <VideoHero />
      <Process />
      <HomeFeatures />
      <HomeTabs />
      <HomeTarget />
    </>
  );
};
