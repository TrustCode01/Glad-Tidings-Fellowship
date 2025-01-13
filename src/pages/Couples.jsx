import React from 'react'
import PageHeader from '../components/PageHeader'
import CoupleBanner from '../assets/coupleBanner.jpg'

function Couples() {
  return (
    <div className=''>
      <PageHeader 
      title='Our Couples Ministry' 
      image={CoupleBanner} 
      sentences={[
        'ingiting the love in marriages',
        'Creating lasting love and oneness',
        'Making Christ the center of our marriages'
      ]}/>

    </div>
  )
}

export default Couples