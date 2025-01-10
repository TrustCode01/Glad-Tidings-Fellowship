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


{/* 
        <div className="w-[90%] md:w-full mx-auto flex flex-col mt-4 md:!mt-0 md:flex-row">
          <div className="w-full lg:w-8/12 2xl:basis-6/12 my-6  pr-4">
            <h1 className="text-3xl mt-2 md:text-4xl font-semibold text-gray-800">
              The <span className="text-emerald-600"> Feature</span> component
            </h1>
            <h3 className="text-xl mt-6 md:text-xl text-gray-800 ">
              You can use this component as feature or as showcase. It's still be your choice.
            </h3>
            <p className="text-md mb-4 line-clamp-4 mt-2 md:line-clamp-none text-gray-500">
              You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite. Optional you can
            </p>
            <button className="rounded-md border border-current dark:!border-emerald-500 bg-emerald-500 px-5 py-2 text-sm text-white hover:border-emerald-500 hover:bg-white hover:!text-gray-800">explore now</button>
          </div>
          <div className="hidden lg:inline w-4/12 pl-6 2xl:basis-6/12  items-center my-auto md:pr-4">
            
            <img src="https://images.unsplash.com/photo-1628745277866-ff9305ac52cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 title="" alt="" />
          </div>
        </div>
      </div>
*/}
  
  
  
}

export default FeaturesShow