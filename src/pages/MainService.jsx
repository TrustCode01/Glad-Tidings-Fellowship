import React from 'react'
import Service from '../assets/services.jpg'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

function MainService() {
  return (
    <div className='pt-16'>
      <PageHeader 
      title="Our Main Service" 
      image={Service}
      sentences={[
        'Join us in our main service every Sunday',
        'It is a moment of worship,prayer and power',
        'A moment of spiritual recharge and refreshment',
      ]}/>
      <article id="main" className="bg-white  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-[80%] m-auto">
        <header className='text-center p-4'>
        <h2 className='text-3xl'>Main Service</h2>
        <p className="italic">A Time of Worship, Prayer, Healing, and Spiritual Renewal</p>
        </header>
        <div className="p-6">
                <p>Our main service is a sacred time for the entire congregation to come together in worship, prayer, and the study of God's Word. It is a moment to recharge spiritually and connect with fellow believers, as we are reminded in Hebrews 10:25, "Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another—and all the more as you see the Day approaching. In this gathering, we lift our voices in praise, offering our hearts to the Lord in song and adoration. Psalm 100:2-3 encourages us, "Worship the Lord with gladness; come before him with joyful songs. Know that the Lord is God. It is he who made us, and we are his; we are his people, the sheep of his pasture." Through worship, we acknowledge God's sovereignty and express our gratitude for His unending grace and mercy. Prayer is a cornerstone of our main service, providing an opportunity to seek God's guidance, confess our sins, and intercede for others. Philippians 4:6-7 reminds us, "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." In prayer, we find solace and strength, knowing that our Heavenly Father hears and answers us.
                </p>
                  <br />
                              <p>
                                The study of God's Word is central to our main service, as we delve into the Scriptures to gain wisdom and understanding. 2 Timothy 3:16-17 teaches us, "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." Through the preaching and teaching of the Bible, we are equipped to live out our faith and grow in our relationship with Christ.Our main service is also a time of fellowship, where we build meaningful connections with one another. Acts 2:42 describes the early church, "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer." In this spirit, we come together to support, encourage, and uplift each other, fostering a sense of community and belonging.Moreover, our main service is a place of healing and deliverance. James 5:14-15 instructs us, "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven." We believe in the power of prayer to bring physical, emotional, and spiritual healing, and we witness God's miraculous work in the lives of our congregation.</p>
                                
                                <br />
                <p>
                Join us for our main service as we worship, pray, study God's Word, and experience His healing and deliverance together. Let us be renewed in spirit and strengthened in faith, united in our love for the Lord and one another."</p>
</div>
      </article>
        
     <Footer/>
    </div>
  )
}

export default MainService