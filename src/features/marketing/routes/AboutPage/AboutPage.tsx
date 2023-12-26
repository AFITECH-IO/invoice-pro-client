import * as React from "react";
import {
  AboutHero,
  AboutTeam,
  AboutTimeline,
} from "../../components/aboutSections";

export const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <AboutTeam />
    </>
  );
};
