import React from "react";
import Image from "next/image";
import { IconArrowNarrowRight, IconArrowUpRight } from "@tabler/icons-react";

const TrustedProducts = () => {
  return (
    <section className="py-12 h-fit">
      {/* header */}
      <div className="w-full">
        <h2 className="text-4xl md:text-6xl font-medium max-w-[600px]">
          Genuine & Trusted Products
        </h2>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 pt-14">
        {/* card1 */}
        <div className="flex flex-col items-start p-7 bg-[#f3f3f3] rounded-lg w-full min-h-[500px]">
          <p className="font-medium">
            <span className="text-gray-500">Metro</span> - Zipper Sliders
          </p>
          <Image
            src="/assets/landing-card-1.png"
            alt="zipper-card"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
          />
          <div className="flex w-full justify-end">
            <button className="border border-[#7F2F82] py-1 px-6 rounded-full">
              <IconArrowNarrowRight stroke={2} className="text-[#7F2F82]" />
            </button>
          </div>
        </div>

        {/* card2 */}
        <div className="flex flex-col items-start p-7 bg-[#f3f3f3] rounded-lg w-full min-h-[500px]">
          <p className="font-medium">
            <span className="text-gray-500">Metro</span> - Metal Buckles
          </p>
          <Image
            src="/assets/landing-card-2.png"
            alt="buckle-card"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
          />
          <div className="flex w-full justify-end">
            <button className="border border-[#7F2F82] py-1 px-6 rounded-full">
              <IconArrowNarrowRight stroke={2} className="text-[#7F2F82]" />
            </button>
          </div>
        </div>

        {/* card3 */}
        <div className="flex flex-col justify-between p-7 bg-black rounded-lg w-full min-h-[500px]">
          <h5 className="text-white text-2xl md:text-3xl uppercase w-[350px]">
            Take a look on all accessories
          </h5>
          <div className="flex w-full justify-start">
            <button className="border border-white py-4 px-4 rounded-full">
              <IconArrowUpRight stroke={2} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedProducts;
