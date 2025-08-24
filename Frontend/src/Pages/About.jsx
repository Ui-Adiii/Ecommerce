import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from '../Components/NewLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Forever was established with a vision to transform the digital shopping landscape and create an innovative platform where customers can effortlessly browse, discover, and purchase premium products from anywhere in the world. Our journey began with a bold mission: to revolutionize online retail by offering unparalleled convenience and exceptional service.
          </p>
          <p>
            From day one, we've been committed to building a comprehensive marketplace featuring carefully curated, high-quality products that meet diverse lifestyle needs. Our extensive collection spans from cutting-edge fashion and beauty innovations to essential electronics and home decor, all sourced from renowned brands and verified suppliers.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Forever, we envision a future where shopping is not just convenient but truly delightful. We're passionate about empowering our customers with unlimited choices, seamless experiences, and complete confidence in every purchase. Our commitment extends beyond transactions to building lasting relationships through exceptional service and continuous innovation.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Excellence Guaranteed:</b>
          <p className="text-gray-600">
            Every product undergoes rigorous quality checks to ensure it meets our exceptional standards and exceeds customer expectations.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer First:</b>
          <p className="text-gray-600">
            We prioritize customer satisfaction above all else, providing personalized support and solutions for every shopping need.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Innovation Driven:</b>
          <p className="text-gray-600">
            We continuously evolve our platform with cutting-edge technology to deliver the most advanced shopping experience possible.
          </p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
};

export default About;
