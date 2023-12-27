import * as React from "react";
import {
  FeatureHero,
  FeatureStats,
  FeatureZigZag,
  FeatureBlocks,
} from "../../components";

export const FeaturePage = () => {
  return (
    <>
      <FeatureHero />
      <FeatureStats />
      <FeatureZigZag />
      <FeatureBlocks />
    </>
  );
};
