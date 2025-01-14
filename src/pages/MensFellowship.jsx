import React from 'react'
import PageHeader from '../components/PageHeader'
import Men from '../assets/newconverts.jpg'

function MensFellowship() {
  return (
    <div>
      <PageHeader 
      title='Becoming men after God'
       image={Men}
       sentences={[
        'Building men of intergrity through the word',
        'Men who love their families',
        'Men who are loyal to their wives'
       ]}/>
    </div>
  )
}

export default MensFellowship