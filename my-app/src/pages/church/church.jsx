import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/banner/banner";

function Church() {
  return (
    <main>
      <Helmet>
        <title>EGLISE | Les amis de Sainte Madeleine de la Jarrie</title>
      </Helmet>
      <Banner />
      <div>hello</div>
    </main>
  );
}

export default Church;
