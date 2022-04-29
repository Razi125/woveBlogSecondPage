import React from 'react'

const Card = () => {
    const data = [
        {
         url: '/images/icon1.svg',
         p : `When you  are trying to press on The Browser Extension You can get Access to Wove from anywhere in the browser. With Wove, you and your team are always on the same page.`
        },
        {
            url: '/images/icon2.svg',
            p : 'With the help of wove landing page users can build the Modern Workflow whether remote, in-office, or hybrid, modern teams rely on SaaS tools to get work done. '
        },
        {
            url: '/images/icon3.svg',
            p : 'Wove aggregates information scattered across all of your tools into once central source of truth. Save hours switching between apps, and never forget to follow up again.'
        },
        {
            url: '/images/icon4.svg',
            p : 'Wove provide you with Visibility Into your workflow. Wove centralizes information and events scattered across all of your tools into a single place. With staying in the single place you can easily go any app tool tou like.'
        },
        {
            url: '/images/icon5.svg',
            p : 'Wove is a Multiplayer of Everything and User while using the Wove browser get an extension to comment, chat and annotate on any website. Link everything back to Wove with no additional clicks.'
        },
        {
            url: '/images/icon6.svg',
            p : 'When you are trying to press on Your Hub for Work wove shows you all of your runnings without any distraction and you can also switch to your favourite tools with the help of one click. '
        },
        {
            url: '/images/icon7.svg',
            p : 'When you are trying to press on Interactive Meetings. You can easily host your most engaging meetings by embedding your favourite tools right into the meeting room and you can also add your meeting notes and upcoming events to it. You can also record your call if you want. This also shows you how many users are active.'
        },
        {
            url: '/images/icon8.svg',
            p : 'Wove also provide Live Collaboration user can start meeting anywhere in the world with the help of one click. Users can embed any web app into a Wove meeting and work together as a team. Transform any website into multiplayer with Wove’s shared browser.'
        },
    ]

  return (
    <div className='mx-auto container px-10 2xl:px-40'>
    <div className='flex flex-col'>
        <div>
            <h1 className='max-w-[365px] text-[#FFFFFF] text-2xl leading-[150%] -tracking-[0.02em] font-semibold not-italic montserrat pb-[85px]'>Built for the Modern Workflow</h1>
        </div>
        <div className='grid grid-cols-3 gap-x-8 gap-y-8 pl-5'>
            {
                data?.map((item , index)=>(
                    <div key={index} className='flex flex-col bg-[#171717] max-w-[403.33px]  rounded-2xl cursor-pointer hover:bg-black'>
                    <div>
                        <img className='pl-8 pb-8 pt-[84px]' src={item.url} alt=''/>
                    </div>
                    <div>
                        <p className='max-w-[360.33px] text-[#E5E5E5] text-base leading-[150%]  font-normal not-italic avenir pl-8   pb-[84px]'>{item.p}</p>
                    </div>
                   </div>
                ))
            }
         

        </div>
    </div>
    </div>
  )
}

export default Card