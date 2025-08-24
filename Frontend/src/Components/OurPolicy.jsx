import React from "react";
import { assets } from "../assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Seamless Exchange</p>
        <p className="text-gray-400">Quick and easy product exchanges for your convenience</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">7-Day Returns</p>
        <p className="text-gray-400">Generous return window with full refund guarantee</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Premium Support</p>
        <p className="text-gray-400">Round-the-clock assistance for all your needs</p>
      </div>
    </div>
  );
};

export default OurPolicy;
