import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/inspirationBanner.jpg'
import Footer from '../components/Footer'
function Inspirations() {
  return (
    <div>
        <PageHeader 
        title= 'Biblical Inspirations'
        image ={Banner}
        sentences={[
          "Taking God's principles and applying them in our business",
          'Unleashing the giants within us',
          'Dedicating everything we have to God'
        ]}/>
        <Footer/>
    </div>
  )
}

export default Inspirations