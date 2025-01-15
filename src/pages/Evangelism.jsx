import React from 'react'
import PageHeader from '../components/PageHeader'
import BannerE from '../assets/Banner5.jpg'
import Footer from '../components/Footer'
function Evangelism() {
  return (
    <div>
      <PageHeader 
      title='Preaching The Good News to the world' 
      image={BannerE}
      sentences={[
        'We have zeal for making desciples',
        'We equip the saints for the work of God',
        'Winning souls is our mission']}/>
        <Footer/>
    </div>
  )
}

export default Evangelism