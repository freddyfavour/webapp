import React from "react";

const Reviews = ({ salonData }) => {
  return (
    <>
      <h3 className="font-bold text-black py-4">Reviews</h3>
      {salonData.reviews.map((review, index) => (
        <div key={index}>
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <img
                src={review.img}
                alt={`${review.name}`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-black text-sm">{review.name}</h4>
                <p className="text-xs text-gray-300">{review.time}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/star.svg" alt="" className="w-6" />
              {review.rating}
            </div>
          </div>
          <p className="text-sm mt-4 w-1/2">{review.text}</p>
          <hr className="my-6" />
        </div>
      ))}
    </>
  );
};

export default Reviews;
