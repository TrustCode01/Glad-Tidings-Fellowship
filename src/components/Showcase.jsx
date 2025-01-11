import React from 'react'
import MainServiceBanner from '../assets/services.jpg'
import BibleStudy from '../assets/bible-study.jpg'
import {Link} from 'react-router-dom'

function Showcase() {
  return (
  <section className="mt-8">
    <h2 className='my-6 text-3xl text-center font-bold'>Join us in this walk with Christ</h2>
              
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src={MainServiceBanner} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Main Service</h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <Link to='/mainservice' className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img src={BibleStudy} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Home Groups</h3>
            </Link>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <Link  to='/midservice' class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src="" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Thursday Service</h3>
              </Link>
              <Link to="/youthservice" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img src="" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Youth Service</h3>
              </Link>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img src="" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Women Ministry</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase