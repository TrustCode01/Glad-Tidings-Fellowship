import React from 'react'

function FeaturesShow() {
  return (
    <><div classname=" container mx-auto  flex flex-col md:flex-row py-24 bg-gray-800">
    <div className="flex flex-col md:flex-row md:w-4/5 xl:w-3/5 mx-auto">
      <div className="w-full px-4 md:!px-0  flex-col md:w-8/12">
        <div className="flex flex-col md:flex-row w-full items-center">
          
          <div className="flex-auto w-full md:w-1/3  md:left-0 bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <p className="text-xl">Our Main Service</p>
          <p className="">Every Sunday</p>
          <p className="">Time: 08:00-11:00</p>
          </div>
          
          <div className=" md:inline flex-auto md:w-1/3  mx-auto bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100" >
              <p className="text-xl">Bible Study</p>
              <p className="">Every Wednesday</p>
              <p className="">Time: 1800:00-19:00</p>
          </div>
          
          <div className=" md:inline flex-auto md:w-1/3  bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100" >
          <p className="text-xl">Thursday Service</p>
          <p className="">Every Thursday</p>
          <p className="">Time: 18:00 -19:30</p>
          </div>
        </div>
        <div className="w-[90%] md:w-full mx-auto flex flex-col mt-4 md:!mt-0 md:flex-row">
          <div className="w-full lg:w-8/12 2xl:basis-6/12 my-6 pr-4">
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
                className="w-full md:right-0 md:max-w-none md:max-h-64 rounded-md" title="" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:!px-0 md:w-4/12 flex-col md:pl-8">
        <h1 className="text-3xl mt-2 font-semibold text-gray-800">
              The <span class="text-emerald-600"> Feature</span> component
        </h1>
        <h3 className="text-xl mt-3 md:text-normal text-gray-800">
          You can use this component as feature or as showcase.
        </h3>
        <p className="text-md line-clamp-4 mt-2 md:line-clamp-none text-gray-500 ">
          You can copy and paste it or modify however you want.<br class="hidden large-only" />Feel free to name the author in a hidden remark or to set the components as favorite.
        </p>
        
        <img src="https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="w-full md:right-0 md:!max-h-64 my-4 rounded-sm" title="" alt="" />
        <div className="flex flex-row w-full items-center justify-items-center">
          <button className="rounded-md mx-auto border border-current dark:!border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white hover:border-emerald-500 hover:bg-white hover:!text-gray-800">
            explore previous
          </button>
          <button className="rounded-md mx-3 border border-current dark:!border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white hover:border-emerald-500 hover:bg-white hover:!text-gray-800">
            explore current
          </button>
          <button className="rounded-md mx-auto border border-current dark:!border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white hover:border-emerald-500 hover:bg-white hover:!text-gray-800">
            explore next
          </button>
        </div>
      </div>
  
    </div>
  </div></>
  )
}

export default FeaturesShow