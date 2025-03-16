import React from 'react'
import PageHeader from '../components/PageHeader'
import Youth from '../assets/banner2.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

function Youths() {
  return (
    <div>
     <PageHeader
       title='Guiding our youth through the word of God'
       image={Youth}
       sentences={[
        'Teaching our youth to walk with God',
        'Strengthening their faith through sound teachings',
        'Help them serve God passionately'
       ]}/>
       <MinistryLinks/>
       <article id="youths"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4">
        <header className='text-center p-4'>
           <h2 className='text-3xl'>Youths Ministry</h2>
           <p className="">
           Engaging Youth with Energetic Worship, Relevant Teachings, and Enjoyable Activities</p>
        </header>
        <p> Our Youth Ministry is dedicated to engaging young people with dynamic worship, relevant teaching, and fun activities. We aim to help them develop a personal relationship with Jesus and grow into mature, committed Christians. As 1 Timothy 4:12 reminds us, "Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."</p>
<p>
We emphasize the importance of grooming our children in a way that pleases God, teaching them to escape the traps set by the devil, such as drug abuse and prostitution. Proverbs 22:6 advises, "Start children off on the way they should go, and even when they are old they will not turn from it." By instilling strong moral values and faith in our youth, we can guide them away from harmful behaviors and towards a life rooted in Christ.</p>
<p>
Our ministry addresses all teenage challenges, providing biblical solutions that help them grow while being grounded in their faith. We tackle issues such as peer pressure, identity struggles, and the search for purpose, offering guidance and support through the teachings of the Bible. Psalm 119:9 asks, "How can a young person stay on the path of purity? By living according to your word." By encouraging our youth to live according to God's Word, we help them navigate the complexities of adolescence with wisdom and grace.</p>
<p>
We also focus on building a strong foundation of faith that will carry our youth through their lives. Ephesians 6:4 instructs, "Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord." Our ministry provides a nurturing environment where young people can grow spiritually, emotionally, and socially, supported by a community of believers.</p>
<p>
Join us in our Youth Ministry as we strive to groom godly youth, overcome challenges, and help our young people set an example for others in speech, conduct, love, faith, and purity. Together, we can raise a generation that honors God and impacts the world for Christ</p>
      </article>
       <Footer/>
    </div>
  )
}

export default Youths