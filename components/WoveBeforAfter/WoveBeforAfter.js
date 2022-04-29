import React from 'react'

const WoveBeforAfter = () => {
  return (
      <>
     {/** Wove Before and Wove After */}
    <div className='mx-auto container px-10 2xl:px-40 mt-[91px] mb-14'>
        <div className='flex justify-between '>
            <div className='left flex flex-col'>
             <div>
                 <h1 className='max-w-[515px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic montserrat -tracking-[0.02em] pb-2'>Before Wove</h1>
             </div>
             <div>
                 <p className='max-w-[515px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic avenir -tracking-[0.01em] '>Teams work in silos, making it a nightmare to stay on top of progress across your workflow</p>
             </div>
            </div>

            <div className='right flex flex-col'>
            <div>
                 <h1 className='max-w-[515px] text-[#FFFFFF] text-2xl leading-[150%] font-semibold not-italic montserrat -tracking-[0.02em] pb-2'>After Wove</h1>
             </div>
             <div>
                 <p className='max-w-[515px] text-[#D4D4D4] text-lg leading-[160%] font-normal not-italic avenir -tracking-[0.01em] '>Fluid collaboration and visibility across your entire work stack. Its like your apps all talk to each other.</p>
             </div>
            </div>
        </div>
    </div>
 {/** Wove Before and Wove After */}
 <div className='mx-auto container px-10 2xl:px-40 mt-[91px] mb-14'>
     {/** Top Part */}
     <div className='flex justify-between relative'>
         <div className='flex flex-col space-y-8 mt-8'>
             <div>
                 <img src='/images/Path1.svg' alt=''/>
             </div>
             <div>
             <img src='/images/Path2.svg' alt=''/>
             </div>
             <div>
             <img src='/images/Path3.svg' alt=''/>
             </div>
         
         </div>
         <div>
          <img src='/images/woveAf1.svg' alt='' />
         </div>
         <div>
         <img src='/images/woveAf2.svg' alt='' />
         </div>
         
         <div className='absolute top-[9rem] left-[37rem]'>
         <img className='' src='/images/Line.svg' alt='' />    
         </div>
         <div className='absolute w-full left-72 top-48'>
         <img className=' ' src='/images/Pathone1.svg' alt='' />
         </div>
     </div>
   
     {/** Wove Center Part */}
     <div className='flex justify-center items-center relative -mt-11'>
         <div>
             <img className=' relative h-[45rem]'  src='/images/woveBg.svg' alt=''/>
         </div>
         <div className='absolute'>
         <img  src='/images/wove-logo.svg' alt='' />
         </div>

     </div>

         {/** Buttom Part */}
         
         <div className='flex justify-between relative '>
         <div className='flex '>
             <div>
                 <img src='/images/woveB1.svg' alt=''/>
             </div>
         </div>
         <div>
          <img src='/images/woveAb1.svg' alt='' />
         </div>
         <div>
         <img src='/images/woveB1.svg' alt=''/>
         </div>

         <div className='absolute top-[-5rem] left-[37rem]'>
         <img className='' src='/images/Line.svg' alt='' />    
         </div>
         <div className='absolute w-full left-[11rem] top-[-3rem]'>
         <img className=' ' src='/images/Pathbone.svg' alt='' />
         </div>
        
     </div>

 </div>

    </>
  )
}

export default WoveBeforAfter