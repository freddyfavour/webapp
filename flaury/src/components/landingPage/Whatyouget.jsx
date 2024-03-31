import hairTreatment from "/Ellipse 22.png";
import manicure from "/Ellipse 21.png";
import massge from "/Ellipse 20.png";
import skinRetouch from "/Ellipse 19.png";
import hairMakeover from "/Ellipse 18.png";
import NSkincare from "/Ellipse 22 (1).png";
import PConsultation from "/Ellipse 21 (1).png";
import HBarbing from "/Ellipse 20 (1).png";
import HColouring from "/Ellipse 18 (1).png";
import Consultation from "/Ellipse 19 (1).png";

const Whatyouget = () => {
  return (
    <section className="mt-10 px-4 md:px-20 py-10 text-center">
      <h4 className="text-primaryColor text-2xl ">
        Have Beauty Needs?, Get It Here
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 gap-4">
        <div>
          <img src={hairTreatment} alt="" />
          <p className="text-primaryColor pt-4">Hair Treatment</p>
        </div>
        <div>
          <img src={manicure} alt="" />
          <p className="text-primaryColor pt-4">Manicure</p>
        </div>
        <div>
          <img src={massge} alt="" />
          <p className="text-primaryColor pt-4">Massage</p>
        </div>
        <div>
          <img src={skinRetouch} alt="" />
          <p className="text-primaryColor pt-4">Skin Retouch</p>
        </div>
        <div>
          <img src={hairMakeover} alt="" />
          <p className="text-primaryColor pt-4">Hair Make-over</p>
        </div>
        <div>
          <img src={NSkincare} alt="" />
          <p className="text-primaryColor pt-4">Natural Skincare</p>
        </div>
        <div>
          <img src={PConsultation} alt="" />
          <p className="text-primaryColor pt-4">Product Consultation</p>
        </div>
        <div>
          <img src={HBarbing} alt="" />
          <p className="text-primaryColor pt-4">Hair Barbing</p>
        </div>
        <div>
          <img src={HColouring} alt="" />
          <p className="text-primaryColor pt-4">Hair Colouring</p>
        </div>
        <div>
          <img src={Consultation} alt="" />
          <p className="text-primaryColor pt-4">Consultations</p>
        </div>
      </div>
    </section>
  );
};

export default Whatyouget;
