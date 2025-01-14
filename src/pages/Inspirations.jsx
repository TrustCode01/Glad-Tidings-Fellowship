import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/poutry.jpg'
import Footer from '../components/Footer'
function Inspirations() {
  return (
    <div>
        <PageHeader 
        title= 'Biblical Inspirations'
        image ={Banner}
        sentences={[
          "Taking God's principles and applying them in our business",
          'Getting projects inspirations and advice from fellow believers',
          'Dedicating everything we have to God'
        ]}/>
        <Footer/>
    </div>
  )
}

export default Inspirations