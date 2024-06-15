import dot from "/dot.svg";
import star from "/star.svg";
import facemakeup from "/facemakeup.png";
import hairbarbing from "/hairbarbing.png";
import pedicure from "/pedicure.png";
import verified from "/verified.svg";
import tag from "/tag.svg";

// Simulated backend data
const specialOffers = [
  {
    id: 1,
    image: facemakeup,
    name: "Face Make-Up",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 2,
    image: hairbarbing,
    name: "Hair Barbing",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 3,
    image: pedicure,
    name: "Pedicure",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 4,
    image: facemakeup,
    name: "Face Make-Up",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 5,
    image: hairbarbing,
    name: "Hair Barbing",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 6,
    image: pedicure,
    name: "Pedicure",
    salon: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
];

const SpecialOffers = () => {
  return (
    <div className="my-10">
      <h3 className="font-bold text-lg py-2">Special Offers</h3>
      <div className="w-[100%] md:w-full overflow-x-scroll md:overflow-x-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {specialOffers.map((offer) => (
            <div key={offer.id}>
              <img src={offer.image} alt="" className="w-full" />
              <div className="flex justify-between mt-2">
                <h4 className="font-semibold">{offer.name}</h4>
                <div className="bg-[#1b771b] flex gap-2 text-xs text-[#fff] rounded-lg px-3 py-1">
                  <img src={verified} alt="" /> Verified
                </div>
              </div>
              <span>{offer.salon}</span>
              <p className="flex text-xs text-[#000]">
                {offer.services.join(", ")}{" "}
                <img src={dot} alt="" className="mx-2" />
                <img src={star} alt="" />
                {offer.rating}
              </p>
              <p className="flex text-xs text-[#000]">
                {offer.location} <img src={dot} alt="" className="mx-2" />
                {offer.distance}
              </p>
              <span className="bg-[#ff780199] flex w-[9rem] mt-4 gap-2 text-xs rounded-lg px-3 py-1">
                <img src={tag} alt="" />
                SAVE UP TO 20%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
