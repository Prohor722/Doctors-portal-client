import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const details = [
    {
      title: "Fluoride Treatment",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      title: "Cavity Filling",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      title: "Teeth Whitening",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-28 px-12">
      <div className="text-center mb-16">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Service img={fluoride} details={details[0]} />
        <Service img={cavity} details={details[1]} />
        <Service img={whitening} details={details[2]} />
      </div>
    </div>
  );
};

export default Services;
