import react from "react";

export default function OurStory() {
 return (
   <div className="min-h-screen bg-white font-general-sans border-8">
    
     <section className="mx-auto w-full px-4 lg:px-0 py-12 lg:py-20">
       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 xl:gap-16 mx-auto w-full max-w-[1438px] xl:h-[736px]">
         
         <div className="relative w-full md:w-auto">
           <div className="flex gap-6">
           {/*Left Image*/}
             <div className="flex-1">
               <img
                 src="\public\assets\buckle.jpg"
                 alt="Metal buckle component"
                 className="w-full h-[320px] md:w-[360px] md:h-[560px] lg:w-[clamp(260px,26vw,412px)] lg:h-auto xl:w-[412px] xl:h-[634px] object-cover rounded-[10px]"
               />
             </div>
             {/* Right Image */}
             <div className="flex-1">
               <img
                 src="\public\assets\button.jpg"
                 alt="Metal button component"
                 className="w-full h-[320px] md:w-[360px] md:h-[560px] lg:w-[clamp(260px,26vw,412px)] lg:h-auto xl:w-[412px] xl:h-[634px] object-cover rounded-[10px]"
               />
             </div>
           </div>
         </div>

         {/* Content Section */}
         <div className="space-y-5 md:space-y-6 md:pt-10 lg:pt-10 xl:pt-[118px] md:max-w-[460px] lg:max-w-[520px] xl:w-[511px] ">
           <h1 className="text-[28px] sm:text-[32px] md:text-[40px] md:w-[500px]  xl:text-[47px] leading-tight md:leading-[56px] xl:leading-[70.5px] font-medium text-black lg:max-w-[520px] xl:w-[511px] xl:h-[142px]  ">
             Global Sourcing And Local Reliability.
           </h1>

           <p className="text-[16px] text-[#545454] font-medium leading-[25.6px] md:max-w-[460px] md:w-[500px] lg:max-w-[520px] xl:w-[511px] xl:h-[78px]">
             With a strong international network, we bring the best materials from around the world to your doorstep. Quality metals, delivered reliably wherever you are.
           </p>

           <button className="inline-flex items-center justify-center bg-[#7F2F82] text-white font-medium text-base rounded-[5px] gap-2.5 xl:w-[114px] xl:h-[42px] px-4 py-2 xl:px-0 xl:py-0 text-[16px]">
             Learn more
           </button>
         </div>
       </div>
     </section>

    </div>
 );
}
