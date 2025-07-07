import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-bl from-yellow-300 to-green-300 flex justify-between relative z-20 py-10 items-center">
      <div className="left flex flex-col">
        <h1 className="text-7xl font-bold w-[50%] px-10 ">
          Cartoonize Yourself
        </h1>
        <h3 className="w-[70%] px-12 font-bold">
          No generated animations! Enjoy an artist’s personalized work of you!
        </h3>
      </div>
      <div className="right">
        <img
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600085486/Home/GREENportalImp.new_1_3_3_jykcsl.png"
          alt=""
          className="w-[900px]"
        />
      </div>
      <div className="staticImage absolute right-0 top-0 -z-10">
        <img
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086924/Home/home_i1wlpb.png"
          className="h-[900px] w-[300px] "
          alt="Static Image"
        />
      </div>
    </div>
  );
}

export default Hero;
