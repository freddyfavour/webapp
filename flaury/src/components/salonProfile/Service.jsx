import { Link } from "react-router-dom";

const Service = ({ salonData }) => {
  return (
    <>
      <ul className="flex gap-4 justify-center mt-4">
        <li>All</li>
        <li>Make-over</li>
        <li>Hair styling</li>
        <li>Manicure</li>
        <li>Make-over</li>
        <li>Hair styling</li>
        <li>Manicure</li>
      </ul>
      <hr className="my-4" />
      <h3 className="font-bold my-3">Services</h3>
      <div className="flex gap-4">
        {salonData.bookables.map((bookable, index) => (
          <div key={index}>
            <img src={bookable.img} alt="" className="w-full rounded-md" />
            <h4 className="font-semibold text-black mt-2 mb-1">
              {bookable.title}
            </h4>
            <p className="text-xs text-black">
              Start price:
              <span className="text-primaryColor font-semibold">
                {" "}
                ${bookable.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
