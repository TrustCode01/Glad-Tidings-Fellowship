import React from 'react'
import PageHeader from '../components/PageHeader'
import Youth from '../assets/banner2.jpg'
import Footer from '../components/Footer'

function Youths() {
  return (
    <div>
     <PageHeader
       title='Guiding our youth through the word of God'
       image={Youth}
       sentences={[
        'Teaching our youth to walk with God',
        'Strengthening their faith through sound teachings',
        'Help them serve God passionately'
       ]}/>
       <Footer/>
    </div>
  )
}

export default Youths