import { Link, useNavigate } from "react-router-dom";
import globe from "/globe-white.svg";
import Button from "../Button";

const Getstarted = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-10 py-10 max-w-[1200px] mx-auto">
      <div className="relative md:flex items-center gap-14">
        <div className="md:w-1/2 h-[25rem] md:h-full p-10 bg-primary">
          <img
            src={globe}
            alt=""
            className="w-2/3 mx-auto opacity-15 md:opacity-100"
          />
        </div>
        <div className="absolute top-0 md:static md:w-1/2 p-10 text-white md:text-primary">
          <p className="text-sm">
            With <b className="text-3xl">FLAURY</b>
          </p>
          <p className="py-6">
            You can hire professional service providers around you or your
            preferred location
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-sm">
              You can chat with service providers to state your needs
            </li>
            <li className="mb-2 text-sm">
              You can make payments and get notified about your appointments
            </li>
          </ul>
          <Button title="Get Started" onClick={() => navigate("/signup")} />
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
