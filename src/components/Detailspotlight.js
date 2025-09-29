import React from 'react'

function Detailspotlight() {
  return (
    <section>
      {/* Main Container */}
      <div className='w-full max-w-[1600px] mx-auto border-4 lg:border-8 mb-6 mt-6 lg:mb-[45px] lg:mt-[45px] px-4 lg:px-0 lg:h-[943px]'>
        
        {/* Title Section */}
        <div className='w-full text-center mx-auto max-w-4xl  text-2xl   sm:w-[426px] sm:text-3xl  md:w-[505px] md:text-4xl xl:text-[59px] font-medium mb-8 mt-8 sm:mb-12 sm:mt-12 xl:w-[775px] xl:h-[158px] xl:mb-[90px] xl:mt-[116px] xl:ml-[351px] px-4 xl:px-0'>
          <h1>Because Details Deserve the spotlight</h1>
        </div>
        
        {/* Images Section*/}
        <div className='flex flex-col sm:flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 lg:pb-[116px] pb-8 sm:pb-12 px-4 lg:px-0'>
          
          {/* Card 1 */}
          <div className='w-full max-w-xs sm:max-w-sm md:w-[calc(50%-12px)] md:max-w-none lg:w-[450px] lg:h-[463px] aspect-square lg:aspect-[450/463] overflow-hidden border'>
            <img
              src="/assets/card-1.png"
              alt="zipper"
              width={450}
              height={463}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Card 2 */}
          <div className='w-full max-w-xs sm:max-w-sm md:w-[calc(50%-12px)] md:max-w-none lg:w-[450px] lg:h-[463px] aspect-square lg:aspect-[450/463] overflow-hidden border'>
            <img
              src="/assets/card-2.png"
              alt="zipper"
              width={450}
              height={463}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Card 3 */}
          <div className='w-full max-w-xs sm:max-w-sm md:w-[calc(50%-12px)] md:max-w-none lg:w-[450px] lg:h-[463px] aspect-square lg:aspect-[450/463] overflow-hidden border'>
            <img
              src="/assets/card-3.png"
              alt="zipper"
              width={450}
              height={463}
              className="object-cover w-full h-full"
            />
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Detailspotlight