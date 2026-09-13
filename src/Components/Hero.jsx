import React from "react";
import HeroIcon from "../assets/banner-stack.png"
const Hero = () => {
  return (
  <div className="bg-amber-50">
        <div
      className="max-w-7xl
        mx-auto flex items-center justify-between"
    >
     <div>
      <h2 className="font-bold text-6xl mb-5">
        Build Your Ideal <br /> <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent"> Developmental Stack</span>
      </h2>
      <p className="font-semibold mb-5">
        Explore frontend, backend, database, and tooling options, <br /> compare them
        side by side, and put together the stack that fits your <br /> next project.
      </p>
      <div>
        <button className="btn mr-7 bg-gradient-to-r from-orange-600 to-purple-700 ">Explore Technologies</button>
        <button className="btn">Learn more</button>
      </div>
     </div>
     <img src={HeroIcon} alt="" />
    </div>
  </div>
  );
};

export default Hero;
