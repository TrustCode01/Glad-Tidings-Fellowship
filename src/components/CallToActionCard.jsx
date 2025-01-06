import React from 'react'
import Couple from '../assets/iwaria.jpg'
import {Link} from 'react-router-dom'

function CallToAction() {
  return (
<section className=" container mx-auto overflow-hidden bg-gray-50 sm:grid sm:grid-cols-1 md:grid-cols-2 h-30 pt-8">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block text-left">
        {description}
      </p>

      <div className="mt-4 md:mt-8">
        <Link to='`${url}`'
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={Couple}
    className="h- w-full object-cover sm:h-full"
  />
</section>
  )
}

export default CallToAction