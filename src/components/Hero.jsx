import React from "react";
import Women from "../img/cwe.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[500px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            {/* pentitle */}
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SALE STYLISH <br />
            <span>WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block ">
          <img className="h-[450px] relative -top-12" src={Women} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
