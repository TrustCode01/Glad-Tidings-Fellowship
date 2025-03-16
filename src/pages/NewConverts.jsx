import React from 'react'
import PageHeader from '../components/PageHeader'
import ConvertsBanner from '../assets/newconverts.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

function NewConverts() {
  return (
    <div>
        <PageHeader
        title='New Converts Ministry'
        image={ConvertsBanner}
        sentences={[
          'New believers will be taught more about God',
          'This helps them streghthen their faith',
          'A strong christian foundation is laid down thhrough this ministry'
        ]}/>
        <MinistryLinks/>
        <Footer/>
    </div>
  )
}

export default NewConverts