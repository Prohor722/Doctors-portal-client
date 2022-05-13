import React from "react";

const Review = ({ review }) => {
  // console.log(review.img);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-lg">
      <div className="card-body">
        <p className="mb-10">{review.review}</p>

        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
              <img src={review.img} alt="user" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
