
import React, { useEffect, useRef } from 'react'; import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader'
import Banner from '../assets/services.jpg'
import Footer from '../components/Footer'
function Ministries() {
  const targetRef = useRef(null); const location = useLocation(); useEffect(() => { if (location.hash === '#target-section' && targetRef.current) { targetRef.current.scrollIntoView({ behavior: 'smooth' }); } }, [location]);
  return (
    <>
      <PageHeader 
        title="Our Services" 
        image= {Banner}
      />
    <section id="ministries" className='relative' >
      
      
      
      
      
      
      
      
      
      <article id="life-coaching"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
        <header className='text-center p-4'>
           <h2 className='text-3xl'>Transformative Life Coaching</h2>
           <p>Unlocking Your God-Given Potential</p>
        </header>
        <p>
         

Our Life Coaching ministry is dedicated to offering personalized guidance to help individuals achieve their God-given potential. We understand the profound need for strong, biblically-based counseling in today's world. Through one-on-one sessions, participants receive support in areas such as career, relationships, and spiritual growth. As it is written in Proverbs 15:22, "Plans fail for lack of counsel, but with many advisers they succeed." This verse underscores the importance of seeking wise counsel to navigate life's challenges.</p>
<p>
In our ministry, we emphasize the transformative power of godly advice and mentorship. Proverbs 11:14 reminds us, "Where there is no guidance, a people falls, but in an abundance of counselors there is safety." By providing a supportive environment and experienced mentors, we help individuals make informed decisions and grow in their faith.</p>
<p>
Our approach is rooted in the belief that true growth and healing come from aligning one's life with God's Word. Psalm 119:105 declares, "Your word is a lamp to my feet and a light to my path." By integrating biblical principles into our coaching sessions, we guide participants towards a deeper understanding of God's will for their lives.</p>
<p>
We also address the emotional and spiritual well-being of our participants, recognizing that "a wise man listens to advice" (Proverbs 12:15). Our counselors are committed to offering compassionate, Christ-centered support, helping individuals overcome obstacles and achieve their goals.</p>
<p>
Through our Life Coaching ministry, we strive to equip individuals with the tools and wisdom they need to thrive in all aspects of life. By fostering a strong foundation of faith and providing practical guidance, we empower participants to fulfill their God-given potential and live out their calling with confidence and purpose.
        </p>
      </article>
      
     
    </section>
    <Footer />
    </>

  )
}

export default Ministries
