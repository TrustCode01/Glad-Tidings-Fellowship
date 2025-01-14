import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/Lifecoaching.jpg'

function LifeCoaching() {
  return (
    <div>
     <PageHeader
       title='Business inspirations'
       image={Banner}
       sentences={['Finding purpose and vision in life thhrough the bible',
                    'Getting biblical guidance and counselling',
                  'Uplifting others spiritually']}/>
    </div>
  )
}

export default LifeCoaching