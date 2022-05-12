import React from "react";

const InfoCard = ({img, clr, singleColor, cardTitle, cardDetails}) => {

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
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default InfoCard;
