import React from "react";
import loading from "../assets/loading.gif";
const Loading = () => {
  return (
    <div className="w-full h-screen bg-gray-950 flex justify-center items-center">
      <img src={loading} />
    </div>
  );
};

export default Loading;
