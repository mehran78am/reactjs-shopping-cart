import React from "react";
import loading from "../assets/loading.gif";
import { Helmet } from "react-helmet";
const Loading = () => {
  return (
    <div className="w-full h-screen bg-gray-950 flex justify-center items-center">
      <Helmet>
        <title>Loading...</title>
        <meta name="description" content="this is loading page" />
      </Helmet>
      <img src={loading} />
    </div>
  );
};

export default Loading;
