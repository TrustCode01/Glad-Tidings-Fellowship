import React from 'react'
import PageHeader from '../components/PageHeader'
import Counsel from '../assets/conselling.jpg'
import MinistryLinks from '../components/MinistryLinks'
import Footer from '../components/Footer'

function Counselling() {
  return (
    <div>
      <PageHeader
       title='Helping you overcome it'
       image={Counsel}
       sentences={[
        'If You are facing challanges too hard to bear',
        'Always know that you are not alone',
        'We are always there to navigate the complexities of life together'
       ]}/>
       <MinistryLinks/>
       <Footer/>
    </div>
  )
}

export default Counselling