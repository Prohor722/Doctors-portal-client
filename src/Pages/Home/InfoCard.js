import React from "react";

const InfoCard = ({img, clr, singleColor}) => {

    let customStyle = `card lg:card-side shadow-xl text-white `;

    customStyle+= (singleColor)?`bg-${clr} `: 
    `bg-gradient-to-r from-${clr.from} to-${clr.to}`;
    
    
  return (
    <div class={customStyle}>
      <figure className="pl-5">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
