import React from 'react'
import PageHeader from '../components/PageHeader'
import Men from '../assets/newconverts.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

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
       <MinistryLinks/>
       <div className="flex">
       <article id="men-fellowship"  className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[70%]">
        <header className='text-center p-4'>
           <h2 className='text-3xl'>Building Men with Godly character</h2>
           <p>Empowering Men to Lead with Integrity and Strength</p>
        </header>
        <p>
        As men who have been groomed to be effective leaders at home and in serving the Lord, we focus on building strong, godly men who lead their families and communities with integrity and faith. We are passionate about life coaching and motivating men, and we are dedicated to equipping you to grow in your walk with Christ through fellowship, Bible study, and service projects.</p>
        <p>
        In today's world, men face numerous challenges and temptations that can lead them astray. However, we are called to be vigilant and steadfast in our faith. As it is written in 1 Corinthians 16:13, "Be on your guard; stand firm in the faith; be courageous; be strong." This verse serves as a powerful reminder of our duty to remain strong and courageous in the face of adversity.</p>
        <p>
        Our Men's Fellowship provides a supportive environment where men can come together to share their struggles, triumphs, and experiences. Through fellowship, we build lasting bonds of brotherhood that encourage and uplift one another. Proverbs 27:17 tells us, "As iron sharpens iron, so one person sharpens another." Together, we sharpen each other, growing stronger in our faith and character.</p>
        <p>
        Bible study is a cornerstone of our ministry, as we delve into the Scriptures to gain wisdom and understanding. Psalm 119:105 declares, "Your word is a lamp to my feet and a light to my path." By studying God's Word, we are guided in our daily lives and equipped to lead with integrity and righteousness.</p>
        <p>
        Service projects are another vital aspect of our Men's Fellowship. By serving our communities, we demonstrate the love of Christ in action. Matthew 20:28 reminds us, "Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." Through acts of service, we reflect the selfless love of Jesus and make a positive impact on those around us.</p>
        <p>
          In addition to these core activities, our ministry also focuses on personal development and life coaching. We address important topics such as financial stewardship, career growth, and family leadership. By providing practical tools and guidance, we empower men to excel in all areas of their lives.</p>
          <p>
          Brothers, let us embrace our calling to be strong, godly leaders. Together, we can overcome the challenges we face and inspire others to follow Christ. Join us in our Men's Fellowship as we grow in faith, integrity, and love, becoming the men God has called us to be.
                  </p>
      </article>
   
      </div>
       <Footer/>
    </div>
  )
}

export default MensFellowship