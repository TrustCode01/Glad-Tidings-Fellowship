import React from 'react'
import PageHeader from '../components/PageHeader'
import BannerE from '../assets/Banner5.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'
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
        <MinistryLinks/>
        
        <article id="evangelism" className="bg-white  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 ">
        <header className='text-center p-4'>
          <h2 className='text-3xl'>Winning the Lost at Any Cost</h2>
          <p className="">Spreading the Gospel with Unwavering Commitment
          </p>
          </header>
<div className="p-6 font-sans text-2xl">
<p className=''>
Our evangelism ministry is unwavering in its commitment to win the lost at any cost. We spread the Gospel through community outreach, street ministry, and digital platforms, ensuring that no soul is left unreached. We are dedicated to training and equipping believers to share their faith with passion and effectiveness. As it is written, "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age" (Matthew 28:19-20). With relentless dedication, we strive to fulfill the Great Commission, bringing the light of Christ to every corner of the world.
</p>
<p>
We are inspired by the words of Jesus in Matthew 9:37-38: "The harvest is plentiful but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field." Our mission is to be those workers, tirelessly laboring in the fields to bring in the harvest of souls. We believe in the power of the Holy Spirit to guide and empower us in this mission, as promised in Acts 1:8: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
</p>
<p>
Our commitment is rooted in love and compassion, following the example of Christ who came<strong> to seek and to save the lost" (Luke 19:10)</strong>. We are driven by the urgency of the Gospel message, knowing that <strong>the time is short" (1 Corinthians 7:29) and that "now is the time of God's favor, now is the day of salvation" (2 Corinthians 6:2). Let us go forth with boldness and faith, knowing that our labor in the Lord is not in vain (1 Corinthians 15:58)</strong>.
</p>     
</div>   
      </article>
      <Footer/>
    </div>
  )
}

export default Evangelism