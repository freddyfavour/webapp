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
            <div
              key={offer.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex-none w-72 snap-start"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <span className="bg-white absolute top-3 left-3 text-primary flex gap-2 text-[8px] rounded-lg px-4 py-1 shadow-sm">
                  <img src={tag} alt="" className="w-3 h-3" />
                  SAVE UP TO 20%
                </span>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{offer.name}</h4>
                  <div className="bg-[#1b771b] h-6 flex items-center gap-1 text-xs text-white rounded-lg px-3 py-1">
                    <img src={verified} alt="" className="w-4 h-4" />
                    Verified
                  </div>
                </div>

                <span className="text-sm text-gray-600">{offer.salon}</span>

                <p className="flex items-center text-xs text-gray-700 mt-1">
                  {offer.services.join(", ")}
                  <img src={dot} alt="" className="mx-2 w-2 h-2" />
                  <img src={star} alt="" className="w-3 h-3 mr-1" />
                  {offer.rating}
                </p>

                <p className="flex items-center text-xs mt-1 text-gray-700">
                  {offer.location}
                  <img src={dot} alt="" className="mx-2 w-2 h-2" />
                  {offer.distance}
                </p>

                <div className="mt-3">
                  <Link to={`/bookings/${offer.id}`} className="block w-full">
                    <Button className="w-full bg-primary text-white font-medium py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
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
