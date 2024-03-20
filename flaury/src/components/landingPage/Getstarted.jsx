import globe from "/globe-white.svg";

const Getstarted = () => {
  return (
    <section className="py-10">
      <div className="relative md:flex items-center gap-14">
        <div className="md:w-1/2 pb-10 bg-primaryColor">
          <img
            src={globe}
            alt=""
            className="w-2/3 mx-auto opacity-15 md:opacity-100"
          />
        </div>
        <div className="absolute top-0 md:static md:w-1/2 p-10 text-white md:text-primaryColor">
          <p className="text-sm">
            With <b className="text-3xl">FLAURY</b>
          </p>
          <p className="py-6">
            You can hire professionals that are not in your location
          </p>
          <p className="text-sm">These professionals can either be:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-sm">Near you</li>
            <li className="mb-2 text-sm">Far from you</li>
            <li className="mb-2 text-sm">Across borders (Overseas)</li>
          </ul>
          <button className="bg-secondaryColor text-primaryColor py-1 px-8 text-xs">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
