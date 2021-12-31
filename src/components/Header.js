import React from "react";

const Header = () => {
  return (
    <div className="header bg-white p-4 flex items-center justify-between">
      <div className="logo">
        <p className="text-indigo-800 font-bold">COVID TRACKER</p>
      </div>
      <div className="share flex ">
        <p className="text-indigo-800 mx-4">Facebook</p>
        <p className="text-indigo-800 mx-4">Twitter</p>
      </div>
    </div>
  );
};

export default Header;
