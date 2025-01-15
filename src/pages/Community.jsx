import React from 'react'
import PageHeader from '../components/PageHeader'
import Drugs from '../assets/drugs.jpg'
import Footer from '../components/Footer'

function Community() {
  return (
    <div>
      <PageHeader
        title='Taking part in community service'
        image={Drugs}
        sentences={[
          'Helping community in fighting against drug abuse',
          'Engaging youths in fighting against peer pressure',
          'Ministering the word of God in our communities',
          'Offering help whenever there is a need'
        ]}/>
        <Footer/>
    </div>
  )
}

export default Community