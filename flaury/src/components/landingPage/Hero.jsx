import vector from "/vector.svg";
import heroImg1 from "/hero-img1.png";
import search from "/search.svg";

const Hero = () => {
  return (
    <div className="h-[612px] w-full m-auto hero-bg pt-[12rem] px-4 sm:px-8 lg:px-24 py-10">
      <div className="max-w-full mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Text & Search Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-left">
          <h3 className="text-sm md:text-lg text-white">
            “GREAT LOOK IS NOT BY <br />
            <span className="text-3xl md:text-6xl font-bold block">ACCIDENT</span>
            IT’S BY <br />
            <span className="text-3xl md:text-6xl font-bold block">APPOINTMENT”
            </span>
          </h3>
          <p className="mt-2 md:mt-4 text-sm md:text-lg font-semibold text-white md:text-right">
            _FLAURY
          </p>

          {/* Search bar */}
          <form className="relative mt-6">
            <div className="flex items-center border rounded-lg overflow-hidden bg-white w-full max-w-md mx-auto md:mx-0">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a service"
                className="w-full px-4 py-2 text-sm text-primary placeholder-primary"
              />
              <div className="px-3">
                <img src={search} alt="search" className="w-4 h-4" />
              </div>
            </div>
          </form>

          {/* Popular Tags */}
          <div className="flex items-center mt-6 flex-wrap gap-2">
            <h3 className="text-white text-sm">Popular:</h3>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {["Skin Retouch", "Hair Treatment", "Spa", "Menicure"].map((item, idx) => (
                <button
                  key={idx}
                  className="border border-white text-xs px-3 py-1 rounded-full text-white whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}

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
              <img
                src={heroImg1}
                alt=""
                className="absolute -top-10 -left-[0.35rem] rotate-[0.5deg] transform z-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
