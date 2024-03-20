import image6 from "/image 6.png";
import image7 from "/image 7.png";
import image9 from "/image 9.png";
import image10 from "/image 10.png";

const Services = () => {
  return (
    <section id="services" className="px-4 md:px-20">
      <div className="w-4/5 md:w-1/3 mx-auto flex justify-between items-center py-4">
        <h3 className="text-lightPrimaryColor text-sm">Trusted By:</h3>
        <ul className="flex gap-4">
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            Wave
          </button>
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            HOE
          </button>
        </ul>
      </div>
      <div className="my-10">
        <h3 className="text-primaryColor text-4xl font-bold py-4">
          Popular Services
        </h3>
        <div className=" w-[100%] md:w-full overflow-x-scroll md:overflow-x-hidden">
          <div className="w-[150%] grid grid-cols-4 md:flex gap-6 justify-between ">
            <div>
              <img src={image6} alt="" className="w-full" />
              <h4 className="text-primaryColor text-xl font-bold py-2">
                Skin Retouch
              </h4>
              <p className="text-primaryColor text-sm">
                Get your skin done in top notch styles...
              </p>
            </div>
            <div>
              <img src={image10} alt="" className="w-full" />
              <h4 className="text-primaryColor text-xl font-bold py-2">
                Make-Over
              </h4>
              <p className="text-primaryColor text-sm">
                Experience Make-overs in a whole new level
              </p>
            </div>
            <div>
              <img src={image9} alt="" className="w-full" />
              <h4 className="text-primaryColor text-xl font-bold py-2">
                Hair Treatment
              </h4>
              <p className="text-primaryColor text-sm">
                Give your hair a whole new dazzling feel
              </p>
            </div>
            <div>
              <img src={image7} alt="" className="w-full" />
              <h4 className="text-primaryColor text-xl font-bold py-2">Spa</h4>
              <p className="text-primaryColor text-sm">
                Give your skin a whole new dazzling feel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
