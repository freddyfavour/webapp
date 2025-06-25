import DashboardLayout from "@/components/dashboard/DashboardLayout"
import NearbySalon from "@/components/shared/NearbySalon";
import SpecialOffers from "@/components/dashboard/SpecialOffers";
import BeautyTips from "@/components/dashboard/BeautyTips";
import Recommendations from "@/components/dashboard/Recommendations";
import doublearrow from "/doublearrow.svg";
import makeup from "/brush.svg";
import clipper from "/clipper.svg";
import nail from "/nail.svg";
import hair from "/hair.svg";

// Simulated backend data
const services = [
  { id: 1, icon: makeup, name: "Makeup" },
  { id: 2, icon: clipper, name: "Haircut" },
  { id: 3, icon: nail, name: "Nail Technician" },
  { id: 4, icon: hair, name: "Hair stylist" },
];

export default function DashboardMain() {

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="lg:block hidden">
          <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
          <div className="w-full flex gap-4 justify-between items-center bg-[#F8F4D9] p-4">
            <div className="border-r border-r-primary pr-4">
              <h3 className="font-bold text-lg">Hello Becca 😊</h3>
              <p className="text-xs">What are you saying for today?</p>
              <p className="text-xs flex mt-2">
                <img src={doublearrow} alt="" className="mr-2" />
                Start your bookings quick...
              </p>
            </div>
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center">
                <img
                  src={service.icon}
                  alt=""
                  className={`bg-[#FF77014D] w-18 h-18 rounded-full ${service.name === "Haircut" ? "p-[0.65rem]" : "p-4"
                    }`}
                />
                <p className="text-xs">{service.name}</p>
              </div>
            ))}
            <div className="flex">
              <p className="text-xs">More</p>
              <img src={doublearrow} alt="" className="ml-2" />
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <h3 className="font-bold text-lg pt-10 text-black">Categories</h3>
          <div className="w-full justify-between flex">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center">
                <img
                  src={service.icon}
                  alt=""
                  className={`bg-[#FF77014D] w-18 h-18 rounded-full ${service.name === "Haircut" ? "p-[0.65rem]" : "p-4"
                    }`}
                />
                <p className="text-xs text-black">{service.name}</p>
              </div>
            ))}
            <div className="flex items-center">
              <p className="text-xs">More</p>
              <img src={doublearrow} alt="" className="ml-2" />
            </div>
          </div>
        </div>
        <NearbySalon />
        <SpecialOffers />
        <BeautyTips />
        <Recommendations />
      </div>
    </DashboardLayout>
  )
}

