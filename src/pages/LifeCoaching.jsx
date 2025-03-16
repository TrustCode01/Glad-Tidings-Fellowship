import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/Lifecoaching.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

function LifeCoaching() {
  return (
    <div>
     <PageHeader
       title='Business inspirations'
       image={Banner}
       sentences={['Finding purpose and vision in life thhrough the bible',
                    'Getting biblical guidance and counselling',
                  'Uplifting others spiritually']}/>
                  <MinistryLinks/>
                  <article id="counselling"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
       <header className='text-center p-4'>
           <h2 className='text-3xl'>Guiding and Counselling Ministry</h2>
       </header>
       <p>
       Our Life Coaching ministry offers personalized guidance to help individuals achieve their God-given potential. This ministry is dedicated to teaching both youths and adults, as well as children, how to make the most out of the life we are living. Through one-on-one sessions, participants receive support in areas such as career, relationships, and spiritual growth. As Proverbs 15:22 reminds us, "Plans fail for lack of counsel, but with many advisers they succeed."</p>
<p>
We believe that every individual has unique talents and abilities given by God. Our ministry helps individuals discover and develop these talents, teaching them how to make a living through their God-given gifts. 1 Peter 4:10 encourages us, "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." By harnessing their talents, individuals can achieve their full potential and serve others in meaningful ways.</p>
<p>
Navigating this evil world can be challenging, but our Life Coaching ministry provides the tools and support needed to overcome these challenges. We teach individuals how to navigate life's difficulties through the Word of God, prayers, fellowship, and commitment. Psalm 119:105 declares, "Your word is a lamp to my feet and a light to my path." By grounding their lives in Scripture, individuals can find guidance and strength to face any obstacle.</p>
<p>
Our ministry also emphasizes the importance of prayer and fellowship. Philippians 4:6-7 advises, "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." Through prayer and fellowship, individuals can find peace, support, and encouragement from their faith community.</p>
<p>
Commitment to personal growth and spiritual development is key to achieving one's God-given potential. Our Life Coaching ministry provides ongoing support and accountability to help individuals stay committed to their goals and grow in their faith. Hebrews 10:24-25 encourages us, "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."</p>
<p>
Join us in our Life Coaching ministry as we journey together to achieve our God-given potential, make a living through our talents, and navigate this world with faith, prayer, fellowship, and commitment. Together, we can succeed and fulfill God's purpose for our lives.
       </p>
      </article>
      <Footer />
    </div>
  )
}

export default LifeCoaching