import Link from "next/link";
import React from "react";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="pt-12">
      <div className="flex flex-col justify-between min-h-[550px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* site links */}
          <div className="flex flex-wrap gap-5 md:gap-7 w-full md:w-1/2 justify-start">
            <h5 className="text-lg md:text-xl font-medium">Home</h5>
            <h5 className="text-lg md:text-xl font-medium">About Us</h5>
            <h5 className="text-lg md:text-xl font-medium">Products</h5>
            <h5 className="text-lg md:text-xl font-medium">Contact</h5>
          </div>

          {/* Social Links */}
          <div className="flex flex-col w-full md:w-1/2 items-start md:items-end">
            <h6 className="text-lg md:text-xl text-zinc-400">Socials</h6>
            <div className="flex justify-start md:justify-end gap-3 pt-4">
              <div className="bg-[#7f2f821b] p-2.5 rounded-full">
                <IconBrandX color="#7f2f82" />
              </div>
              <div className="bg-[#7f2f821b] p-2.5 rounded-full">
                <IconBrandFacebook color="#7f2f82" />
              </div>
              <div className="bg-[#7f2f821b] p-2.5 rounded-full">
                <IconBrandInstagram color="#7f2f82" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-8 mt-10">
          {/* Contact & Email */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left */}
            <div className="text-left">
              <h6 className="text-zinc-400 w-[211px] text-base md:text-xl">
                © 2025 All Rights Reserved
              </h6>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-12">
              <div className="text-left">
                <h6 className="text-base md:text-xl text-zinc-400">
                  Business Inquiries
                </h6>
                <h6 className="text-base md:text-xl text-black font-medium">
                  Shahid@metro-metal.com
                </h6>
              </div>
              <div className="text-left">
                <h6 className="text-base md:text-xl text-zinc-400">Phone</h6>
                <h6 className="text-base md:text-xl text-black font-medium">
                  +42 35846163
                </h6>
              </div>
            </div>
          </div>

          {/* Logo Image */}
          <div className="flex justify-start md:justify-center items-center w-full">
            <Image
              src="/assets/METRO METALS.png"
              alt="logo-text"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[500px] sm:w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px] 2xl:w-[1500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
