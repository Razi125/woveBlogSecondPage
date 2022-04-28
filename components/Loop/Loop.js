import React from 'react'

const Loop = () => {
    return (
        <div className='mx-auto container px-10 2xl:px-40 mb-[34px] mt-[59.89px] md:mt-[96px] '>
            <div className='bg-cover bg-center h-[271px] md:h-[300px] lg:h-[330px] xl:h-[439px] bg-bgunsplash bg-no-repeat md:rounded-[14.1656px] lg:rounded-[16px]  rounded-[7.50652px]  md:mb-20'>
                <div className='flex justify-center items-center  md:justify-between '>
                    <div className='flex flex-col justify-center md:items-start items-center'>
                        <div>
                            <h1 className='text-[#FFFFFF] max-w-[190px] md:max-w-[293px] xl:max-w-[402px] text-2xl md:text-3xl xl:text-4xl font-semibold montserrat-medium  leading-6 md:leading-[30px] xl:leading-9 not-italic -tracking-[0.01em] xl:pt-[135px] lg:pt-[82px] md:pt-[68px] xl:pl-[128px] md:pb-4 md:pl-16 pt-10 pb-4 '>Stay in the loop</h1>
                        </div>
                        <div>
                            <p className='text-[#A3A3A3] md:text-[#D4D4D4] max-w-[251px] md:max-w-[363px] lg:max-w-[359px] xl:max-w-[624px] text-sm md:text-base font-normal avenir not-italic leading-[14px] md:leading-[22px] md:pl-16 xl:pl-[128px] mb-9 '>Sign up to be the first to try Wove.</p>
                        </div>

                        <div className='mx-auto container xl:pl-[128px] md:pl-16'>
                            <div className='flex flex-col md:flex-row md:items-start md:bg-[#262626] md:w-[400px] lg:w-[400px] xl:w-[600px] md:border-solid md:border-2 md:border-[#404040] md:box-border md:rounded-[56px] '>
                                <input
                                    type='text'
                                    className='avenir text-sm xl:text-base font-normal -tracking-[0.02] text-[#D4D4D4] not-italic leading-[14px] md:leading-[21px] xl:leading-6  rounded-[6px] w-[279px]  
                                   xl:mb-4 bg-[#262626] border-solid border border-[#404040] md:border-none box-border md:rounded-[56px] xl:pl-7 xl:pt-6  mx-w-[87px] md:pt-[1.5rem] md:pl-[18px] md:ml-1 md:py-1 py-4 pl-4 mb-[9px]'
                                    placeholder='Email Address'
                                />
                                <button className='bg-[#0585F2] w-[279px] md:mx-w-[152px] xl:w-[212px] text-[#FFFFFF] rounded-[56px] avenir font-normal not-italic xl:leading-6 md:leading-[21px] leading-[14px] -tracking-[0.02] text-sm xl:text-base py-4 md:my-[6px] md:mx-[6px] xl:ml-[6.5rem] xl:py-4 hover:bg-sky-700 '>Request Early Access</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loop
