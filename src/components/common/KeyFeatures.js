import React from "react";
import {
  IconBoltFilled,
  IconShieldCheckFilled,
  IconDropletFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";

const KeyFeatures = () => {
  const features = [
    {
      title: "Scratch Resistant",
      icon: <IconShieldCheckFilled />,
    },
    {
      title: "Smooth Function",
      icon: <IconBoltFilled />,
    },
    {
      title: "Rust Free",
      icon: <IconDropletFilled />,
    },
    {
      title: "Premium Finish",
      icon: <IconStarFilled />,
    },
  ];
  return (
    <section>
      <div className="flex flex-col justify-start gap-10 ">
        <h2 className="font-semibold text-4xl">Key Features</h2>
        <div className="flex justify-between items-start ">
          <div className="flex flex-col justify-between ">
            {/* left block */}
            <div className="flex flex-col gap-8 w-fill">
              {features.map((item, key) => (
                <div className="flex justify-start items-center" key={key}>
                  {/* icon div */}
                  <div className="w-11 h-11 bg-muted rounded-lg flex justify-center items-center">
                    {item.icon}
                  </div>
                  <h6 className="font-medium text-xl pl-2">{item.title}</h6>
                </div>
              ))}
            </div>
            <div className="pt-12">
              <h6 className="font-medium text-zinc-400 max-w-xl ">
                At Metro Metals, every product goes through a careful process.
                We choose strong materials, shape them with precision, and
                finish them with attention to detail. Our team focuses on making
                each piece reliable, stylish, and built to last, so brands can
                trust our quality season after season.
              </h6>
            </div>
          </div>
          {/* right block */}
          <div className="w-fill h-fill">
            <Image src="/assets/detail_img.png" width={600} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
