import React from "react";
import Chair from "../../assets/images/chair.png";
import banner from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="mx-12"
      style={{ background: `url(${banner})`, backgroundSize: "82%" }}
    >
      <div className="hero w-md py-28 my-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
