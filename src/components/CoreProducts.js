import React from "react";
import Image from "next/image";

const CoreProducts = () => {
  return (
    <section className="py-12">
      <div className=" w-full">
        <h2 className="text-6xl font-medium">Our Core Products</h2>
        <p className="max-w-[450px] font-medium text-gray-600 pt-6">
          We specialize in premium metallic hardware that adds both style and
          function to your designs. From everyday essentials to statement pieces
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 pt-14">
        {/* Button */}
        <div className="rounded-xl overflow-hidden border">
          <Image
            src="/images/button.png"
            alt="Button"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Zipper */}
        <div className="rounded-xl overflow-hidden border ">
          <Image
            src="/images/zipper.png"
            alt="Zipper"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Buckles */}
        <div className="rounded-xl overflow-hidden border ">
          <Image
            src="/images/buckles.png"
            alt="Buckles"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gold Plate */}
        <div className="rounded-xl overflow-hidden border ">
          <Image
            src="/images/gold-plate.png"
            alt="Gold Plate"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreProducts;
