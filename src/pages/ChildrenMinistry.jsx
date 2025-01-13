import React from 'react'
import PageHeader from '../components/PageHeader'
import ChildrenBanner from '../assets/childrenBanner.jpg'

function ChildrenMinistry() {
  return (
    <div>
      <PageHeader 
      title="Grooming Children in Christ" 
      image={ChildrenBanner} 
      sentences={['We help children build a strong foundation in faith',
                   'Nurturing the young ones spiritually',
                   'Teaching them to obey God all the time'
      ]}/>
    </div>
  )
}

export default ChildrenMinistry