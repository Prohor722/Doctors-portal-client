import React from "react";

const AppoinmentService = ({ service }) => {
    const { name, slots} = service;
    const len = slots.length;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{
            len? 
            <span>
                
            </span>: <span></span>
            }</p>
            <p>{len}{len>1? ' spaces':' space'} available</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentService;
