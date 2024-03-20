import Linkedin from "/linkedin.svg";
import Facebook from "/facebook.svg";
import Twitter from "/twitter.svg";
import Instagram from "/instagram.svg";
import Tiktok from "/tiktok.svg";

const Footer = () => {
  return (
    <footer className="px-4 py-10 md:p-20 bg-[#E1D3D3] mt-20 text-primaryColor">
      <div className="md:grid grid-cols-6 gap-4">
        <div className="col-span-2 text-center md:text-left">
          <h2 className="font-bold text-3xl pb-2">FLAURY</h2>
          <p className="text-sm">
            "Take control of your beauty journey. Book appointments with ease
            and confidence."
          </p>
        </div>
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Support</h3>
          <ul>
            <li className="text-sm">Customer Service</li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Services</h3>
          <ul>
            <li className="text-sm">
              Become a freelancer with <b>Flaury</b>
            </li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">About Us</h3>
          <ul>
            <li className="text-sm">Blog</li>
            <li className="text-sm">Social Media</li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Others</h3>
          <ul>
            <li className="text-sm">Partners</li>
            <li className="text-sm">Feedback</li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
      </div>
      <div className="w-4/5 md:w-full mx-auto md:mx-0 flex gap-4 justify-between md:justify-end my-4">
        <img
          src={Linkedin}
          alt="linkedin"
          className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
        />
        <img
          src={Facebook}
          alt="facebook"
          className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
        />
        <img
          src={Twitter}
          alt="twiiter"
          className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
        />
        <img
          src={Instagram}
          alt="instagram"
          className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
        />
        <img
          src={Tiktok}
          alt="tiktok"
          className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
        />
      </div>
      <p className="text-sm text-center md:text-left">
        All rights reserved. @Flaury 2024
      </p>
    </footer>
  );
};

export default Footer;
