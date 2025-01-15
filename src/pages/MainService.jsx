import React from 'react'
import Service from '../assets/services.jpg'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

function MainService() {
  return (
    <div className='pt-16'>
      <PageHeader 
      title="Our Main Service" 
      image={Service}
      sentences={[
        'Join us in our main service every Sunday',
        'It is a moment of worship,prayer and power',
        'A moment of spiritual recharge and refreshment',
      ]}/>
        
     <Footer/>
    </div>
  )
}

export default MainService