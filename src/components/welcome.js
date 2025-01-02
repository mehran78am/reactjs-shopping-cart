import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState();
  useEffect(() => {
    const data = localStorage.getItem("show_welcome");
    setShowWelcome(JSON.parse(data) ?? true);
  }, []);
  const onHideWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show_welcome", JSON.stringify(false));
  };
  return (
    <>
      {showWelcome && (
        <div className=" w-full mt-16 absolute z-50 flex items-center justify-center">
          <div className="bg-blue-400 text-white text-center w-full md:w-1/2 mx-2 p-2">
            <i className="fa fa-close float-right cursor-pointer text-xl" onClick={onHideWelcome}></i>
            <div className="p-5">welcome to my shop</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
