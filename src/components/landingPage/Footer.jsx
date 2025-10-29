import { Link } from "react-router-dom";
import Linkedin from "/linkedin.svg";
import Facebook from "/facebook.svg";
import Twitter from "/twitter.svg";
import Instagram from "/instagram.svg";
import Tiktok from "/tiktok.svg";

const Footer = () => {
  return (
    <footer className="bg-[#E1D3D3] text-primary px-4 sm:px-8 lg:px-24 py-10 mt-20">
      <div className="max-w-[1200px] mx-auto grid gap-10 md:grid-cols-6">
        {/* Branding */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl font-bold pb-2">FLAURY</h2>
          <p className="text-sm">
            Take control of your beauty journey. Book appointments with ease and confidence.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold pb-4">Support</h3>
          <ul className="text-sm space-y-2">
            <li>Customer Service</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold pb-4">Services</h3>
          <ul className="text-sm space-y-2">
            <li>
              Become a freelancer with <strong>Flaury</strong>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold pb-4">Company</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </li>
            <li>Social Media</li>
          </ul>
        </div>

        {/* Others + Socials */}
        <div>
          <h3 className="text-lg font-semibold pb-4">Others</h3>
          <ul className="text-sm space-y-2">
            <li>Partners</li>
            <li>Feedback</li>
            <li>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/flauryapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61561356925774"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src={Facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
                </a>
                <a
                  href="https://www.x.com/flauryapp?t=nDxCPtZig-BKngT_1PG_pw&s-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src={Twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
                </a>
                <a
                  href="https://www.instagram.com/flauryapp?igsh=YzljYTk1ODg3Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src={Instagram} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
                </a>
                <a
                  href="https://www.tiktok.com/@theflauryapp?_t=8nMZRykwygq&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <img src={Tiktok} alt="TikTok" className="w-6 h-6 hover:scale-110 transition" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="pt-10 text-center text-sm text-primary border-t mt-10 border-primary/40">
        © {new Date().getFullYear()} Flaury. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
