import dot from "/dot.svg";
import star from "/star.svg";
import facemakeup from "/facemakeup.png";
import hairbarbing from "/hairbarbing.png";
import pedicure from "/pedicure.png";
import verified from "/verified.svg";
import tag from "/tag.svg";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

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
    <div className="">
      <h3 className="font-bold text-lg py-2">Special Offers</h3>
      <div className="w-[100%] md:w-full overflow-x-scroll md:overflow-x-hidden">
        <div
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E1 #F1F5F9",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {specialOffers.map((offer) => (
            <div key={offer.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex-none w-72 snap-start"
            >
              <div className="relative overflow-hidden">
                <img src={offer.image} alt="" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="flex flex-col gap-2 p-3">
                  <span className="bg-[#fff] absolute top-3 left-3 text-primary flex gap-2 text-[8px] rounded-lg px-4 py-1">
                    <img src={tag} alt="" />
                    SAVE UP TO 20%
                  </span>
                </div>

                <div className="flex justify-between mt-2">
                  <h4 className="font-semibold">{offer.name}</h4>
                  <div className="bg-[#1b771b] h-6 flex gap-2 text-xs text-[#fff] rounded-lg px-3 py-1">
                    <img src={verified} alt="" className="w-4 h-4" /> Verified
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
                <div className="flex justify-between items-center mt-2">
                  <Link to={`/bookings/${offer.id}`} className="block w-full">
                    <Button className="w-full bg-primary hover:secondary text-white font-medium py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                      Book now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
