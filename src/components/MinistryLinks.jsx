import React from 'react'
import {Link} from 'react-router-dom'

function MinistryLinks() {
  return (
    <div>
        <nav className="px-4 ">
        <h2 className='text-2xl p-6 text-center' >Other Ministries</h2>
        <div className="flex flex-wrap">
        <Link  to='/evangelism' className='p-4 hover:bg-blue-500'>Evangelism</Link>
        <Link to='/newconverts'className='p-4 hover:bg-blue-500'>New Converts</Link>
        <Link to='/mensfellowship'className='p-4 hover:bg-blue-500'>Men's Fellowship</Link>
        <Link to='/womensfellowship'className='p-4 hover:bg-blue-500'>Women's Fellowship</Link>
        <Link to='/singleparents'className='p-4 hover:bg-blue-500'>Single Parents Ministry</Link>
        <Link to='/youths'className='p-4 hover:bg-blue-600'>Youth Ministry</Link>
        <Link to='/counselling'className='p-4  hover:bg-blue-500'>Counselling</Link>
        <Link to='/lifecoaching'className='p-4 hover:bg-blue-500'>Life Inspirations</Link>
        <Link to='/couples'className='p-4 hover:bg-blue-600 '>Couples Ministry</Link>
        <Link to='/childrenministry'className='p-4  hover:bg-blue-500'>Children's Ministry</Link>
        <Link to='/community' className='p-4 hover:bg-blue-500'>Comunity Outreach</Link>
        </div>
      </nav>
    </div>
  )
}

export default MinistryLinks