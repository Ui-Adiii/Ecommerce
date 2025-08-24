import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-400">
            Forever is your premier destination for exceptional online shopping experiences. We're dedicated to bringing you the finest selection of products, backed by outstanding customer service and innovative technology that makes shopping effortless and enjoyable.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONNECT WITH US</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 (555) 987-6543</li>
            <li>support@forever.com</li>
            <li>Live Chat Available</li>
          </ul>
        </div>
      </div>
      <div>
        <hr  />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Forever E-commerce - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
