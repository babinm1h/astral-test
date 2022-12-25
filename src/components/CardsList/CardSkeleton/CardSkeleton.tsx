import React from "react";
import ContentLoader from "react-content-loader";

import st from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <ContentLoader speed={2} height={250} backgroundColor="#e1e1e1" foregroundColor="#ecebeb" className={st.container}>
      <rect x="0" y="0" rx="4" ry="4" width="340" height="250" />
    </ContentLoader>
  );
};

export default CardSkeleton;
