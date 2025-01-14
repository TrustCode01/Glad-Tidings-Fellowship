import React from 'react'
import PageHeader from '../components/PageHeader'
import Women from '../assets/womenbanner.jpg'

function WomensFellowship() {
  return (
    <div>
      <PageHeader
        title='Women of Virtue'
        image={Women}
        sentences={[
            'Grooming women who are loyal to their husbands',
            'Women who submit to their husbands',
            'Women who love and cherish their families',
            'Women who serve God passionately'
        ]}/>
    </div>
  )
}

export default WomensFellowship