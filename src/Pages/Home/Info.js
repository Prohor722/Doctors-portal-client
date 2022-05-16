import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const details = [
    {
      title: "Opening Hours",
      desc: "Lorem Ipsum is simply dummy text of the pri",
    },
    { title: "Visit our location", desc: "Brooklyn, NY 10036, United States" },
    { title: "Contact us now", desc: "+000 123 456789" },
  ];
  const gradientColors = { from: "secondary", to: "primary" };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle={details[0].title}
        cardDetails={details[0].desc}
        img={clock}
        clr={gradientColors}
        singleColor={false}
      />
      <InfoCard
        cardTitle={details[1].title}
        cardDetails={details[1].desc}
        img={marker}
        clr="accent"
        singleColor={true}
      />
      <InfoCard
        cardTitle={details[2].title}
        cardDetails={details[2].desc}
        img={phone}
        clr={gradientColors}
        singleColor={false}
      />
    </div>
  );
};

export default Info;
