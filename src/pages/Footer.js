import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute flex w-full h-12 bg-[#000] justify-center items-center font-nunito bottom-0">
      <h1 className="text-sm">
        Develop by{" "}
        <Link to="#">
          <span className="text-cyan">Kyaw Zin Htet!</span>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
