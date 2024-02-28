
import React from 'react'
const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh]  flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Our mission is to help those people who want to escape the rat race.
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            Dream Big, Work Hard, Achieve More!
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection