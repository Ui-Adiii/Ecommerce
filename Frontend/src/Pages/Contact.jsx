import React from "react";
import NewLetterBox from "../Components/NewLetterBox";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Visit Our Store</p>
          <p className="text-gray-500">
            1234 Innovation Drive <br />
            Suite 200, Tech City, USA
          </p>
          <p className="text-gray-500">
            Phone: (555) 123-4567 <br />
            Email: hello@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Join Our Team
          </p>
          <p className="text-gray-500">
            Discover exciting opportunities and become part of our growing family.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            View Positions
          </button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
};

export default Contact;
