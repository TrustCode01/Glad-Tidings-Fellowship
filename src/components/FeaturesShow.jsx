import React from 'react'
import Sermons from '../assets/sermons.jpg'

function FeaturesShow() {
  return (
    <section className="container mx-auto py-4  pt-16">
      <h2 className='text-3xl font-bold text-center p-8'>Come Join Us in Worship!</h2>
      <div className="flex xs:flex-wrap md:flex-nowrap  w-full items-center  ">
          
          <div className="flex-auto sm:w-1/2 md:w-1/4 m-2 md:left-0 flex flex-col items-center justify-center bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <p className="font-bold text-lg">Our Main Service</p>
          <p className="">Every Sunday</p>
          <p className="">Time: 08:00-11:00</p>
          </div>
          
          <div className="flex-auto md:w-1/4 sm:w-1/2  m-2 flex flex-col items-center justify-center bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100" >
              <p className="font-bold text-lg">Bible Study</p>
              <p className="">Every Wednesday</p>
              <p className="">Time: 18:00-19:00</p>
          </div>
          
          <div className="flex-auto md:w-1/4 sm:w-1/2  m-2 flex flex-col items-center justify-center bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100" >
          <p className="font-bold text-lg">Thursday Service</p>
          <p className="">Every Thursday</p>
          <p className="">Time: 18:00 -19:30</p>
          </div>
        </div>

         

    </section>
  )
  
}

export default FeaturesShow