import image from "/image_1014.png";

const Features2 = () => {
  return (
    <section className="w-full bg-[#FFC951] mt-20 px-4 sm:px-8 lg:px-24">
      <div className="w-full h-auto mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="w-full h-[400px]">
          <img
            src={image}
            alt="Booking with FLAURY"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-primary py-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            With <span className="text-4xl font-extrabold">FLAURY</span>, you have the power to:
          </h2>
          <ul className="list-decimal list-inside text-base space-y-4 lg:w-3/4">
            <li>
              Transform your beauty routine with our streamlined appointment booking process.
            </li>
            <li>
              Effortlessly schedule your next beauty transformation with our booking system.
            </li>
            <li>
              Say goodbye to waiting! Book your beauty appointments hassle-free.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features2;
