import handshakefill from "/handshake-fill.svg";
import money from "/money.svg";
import globe from "/globe.svg";
import customersupport from "/customersupport.svg";
import handshakeoutline from "/handshake-outline.svg";

const Features = () => {
  return (
    <section className="px-4 md:px-20 py-10 text-center bg-secondaryColor">
      <h3 className="text-primaryColor text-2xl font-bold py-4">At FLAURY,</h3>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 justify-center">
        {/* First row */}
        <div className="flex flex-col items-center mx-4 my-4">
          <img src={handshakefill} alt="" />
          <p className="text-primaryColor text-sm">
            You get a variety of top-notch professionals at your advantage
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 my-4">
          <img src={money} alt="" />
          <p className="text-primaryColor text-sm">
            You get services at your comfort without breaking the bank
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 my-4">
          <img src={globe} alt="" />
          <p className="text-primaryColor text-sm">
            You get geo-diversified professionals from anywhere in the world
          </p>
        </div>

        {/* Second row */}
        <div className="flex flex-col items-center mx-4 my-4">
          <img src={customersupport} alt="" />
          <p className="text-primaryColor text-sm">
            You get a reliable customer support service 24/7 without fail
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 my-4">
          <img src={handshakeoutline} alt="" />
          <p className="text-primaryColor text-sm">
            You get quality escrow services to ensure you pay when you're
            satisfied with the services rendered
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
