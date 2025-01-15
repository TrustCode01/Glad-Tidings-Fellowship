import React from 'react'
import PageHeader from '../components/PageHeader'
import Single from '../assets/single.jpg'
import Footer from '../components/Footer'

function SingleParents() {
  return (
    <div>
      <PageHeader
         title="Single Parenting made better"
         image={Single}
         sentences={[
          'Navigating the complexity of single parenting with the word of God',
          'Enabling God to take control of everthing',
          'Putting God first in all circustances'

         ]}/>
         <Footer/>
    </div>
  )
}

export default SingleParents