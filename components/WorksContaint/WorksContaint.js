import React from 'react'

const WorksContaint = () => {
  return (
      
    <div className='mx-auto container px-4 md:px-10 2xl:px-40'>
        {/** First */}
      <div className='flex flex-col'>
          <div>
              <h1 className='max-w-[343px] md:max-w-[843px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic montserrat -tracking-[0.02em] pb-4'>Your Hub for Work</h1>
          </div>
          <div>
              <p className='max-w-[343px] md:max-w-[843px] text-[#D4D4D4] text-sm md:text-lg leading-[160%] font-normal not-italic avenir -tracking-[0.01em] pb-8'>Visibility into all of your project&apos;s moving pieces. Minus the noise and distractions.</p>
          </div>
          <div className='flex justify-between'>
              <div>
                  <img  src='/images/pic1.svg' alt='' />
              </div>
              <div className='flex items-center md:mt-56'>
                  <img className='hidden lg:block'  src='/images/pic2.svg' alt='' />
              </div>
          </div>
  
      </div>
      {/** Second */}
      <div className='flex flex-col mt-32 mb-32'>
          <div className='flex justify-between'>
             <div className='flex items-center  md:-mt-16'>
                  <img className='hidden lg:block' src='/images/pic22.svg ' alt='' />
              </div>

              <div>
              <div>
              <h1 className='max-w-[343px] md:max-w-[843px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic montserrat -tracking-[0.02em] pb-4'>The Meta-Layer</h1>
              </div>
              <div>
              <p className='max-w-[343px] md:max-w-[843px] text-[#D4D4D4] text-sm md:text-lg leading-[160%] font-normal not-italic avenir -tracking-[0.01em] pb-8'>Add Figma-like multiplayer functionality to any tool in your workflow, and link everything back to Wove with no additional clicks.</p>
              </div>
                  <img className='' src='/images/pic11.svg' alt='' />
              </div>
              
          </div>
  
      </div>

       {/** Thired */}
       <div className='flex flex-col mb-32'>
          <div>
              <h1 className='max-w-[343px] md:max-w-[843px]text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic montserrat -tracking-[0.02em] pb-4'>Interactive Meeetings</h1>
          </div>
          <div>
              <p className='max-w-[343px] md:max-w-[843px] text-[#D4D4D4] text-sm md:text-lg leading-[160%] font-normal not-italic avenir -tracking-[0.01em] pb-8'>Visibility into all of your project&apos;s moving pieces. Minus the noise and distractions.</p>
          </div>

          <div className='flex justify-between'>
              <div>
                  <img className='' src='/images/pic13.svg' alt='' />
              </div>
              <div className='flex items-center -mt-44'>
                  <img className='hidden lg:block' src='/images/pic23.svg' alt='' />
              </div>
          </div>
  
      </div>

    </div>
  )
}

export default WorksContaint