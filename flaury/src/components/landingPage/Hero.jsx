import vector from "/Vector.svg";
import image4 from "/image 4.png";
import intersect from "/Intersect.png";

const Hero = () => {
  return (
    <div className="h-full lg:h-screen w-full flex justify-between items-center hero-bg px-4 py-4 md:px-20 md:pt-28">
      <div className="w-1/2">
        <h3 className="text-sm md:text-lg text-white p-2">
          "GREAT LOOK IS NOT BY <br />
          <span className="text-4xl md:text-6xl font-bold">ACCIDENT</span>{" "}
          <br /> IT'S BY <br />
          <span className="text-4xl md:text-6xl font-bold">APPOINTMENT"</span>
        </h3>
        <p className="textsm md:text-lg font-semibold text-left text-white">
          _FLAURY
        </p>

        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a service"
            className="border w-full px-4 py-2 rounded-lg mt-10 mb-2 text-sm text-lightPrimaryColor"
          />
        </form>

        <div className="flex gap-4 items-center mt-6">
          <h3 className="text-white text-sm">Popular:</h3>
          <ul className="flex gap-4">
            <button className="border text-xs px-2 py-1 rounded-lg text-white">
              Skin Retouch
            </button>
            <button className="border text-xs px-2 py-1 rounded-lg text-white">
              Hair Treatment
            </button>
            <button className="border text-xs px-2 py-1 rounded-lg text-white">
              Spa
            </button>
            <button className="border text-xs px-2 py-1 rounded-lg text-white">
              Menicure
            </button>
          </ul>
        </div>
      </div>
      <div className="hidden lg:inline w-[20rem] h-[20rem]">
        <div className="relative h-full">
          <img
            src={vector}
            alt=""
            className="w-[10rem] h-[10rem] absolute top-0 left-0"
          />
          <img
            src={vector}
            alt=""
            className="w-[10rem] h-[10rem] absolute top-0 right-0"
          />
          <img
            src={vector}
            alt=""
            className="w-[10rem] h-[10rem] absolute bottom-0 left-0"
          />
          <img
            src={vector}
            alt=""
            className="w-[10rem] h-[10rem] absolute bottom-0 right-0"
          />
          <div className="absolute rounded-full w-[20rem] h-[20rem] bg-white">
            {/* Protruding image */}
            <img
              src={image4}
              alt=""
              className="absolute -top-16 -left-[0.35rem] rotate-[0.5deg] transform z-9"
            />
            {/* Image within ellipse */}
            <img
              src={intersect}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
