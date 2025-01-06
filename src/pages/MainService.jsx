import React from 'react'
import Service from '../assets/services.jpg'

function MainService() {
  return (
    <div className='container mx-auto px-4 py-16'>
        <CallToActionCard
        title='Glad Tidings Fellowship main service'
        decription='Our'
        url='/sermons'
        image={Service}/>

    </div>
  )
}

export default MainService