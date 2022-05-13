import React from "react";

const Service = ({ img, details }) => {
  return (
    <div className="card lg:w-lg bg-base-100 shadow-md">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{details.title}</h2>
        <p>{details.des}</p>
      </div>
    </div>
  );
};

export default Service;
