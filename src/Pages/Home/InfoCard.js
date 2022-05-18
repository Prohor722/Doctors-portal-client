import React from "react";

const InfoCard = ({ img, clr, singleColor, cardTitle, cardDetails }) => {
  let customStyle = `card lg:card-side shadow-xl text-white `;
  // console.log(singleColor);

  customStyle +=
    singleColor && clr
      ? `bg-accent`
      : `bg-gradient-to-r from-${clr.from} to-${clr.to}`;
  // console.log(clr);

  return (
    <div className={customStyle}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default InfoCard;
