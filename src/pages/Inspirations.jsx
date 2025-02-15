import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/dairy.jpg'
import Footer from '../components/Footer'
function Inspirations() {
  return (
    <div>
        <PageHeader 
        title= 'The Bible motivates us to work'
        image ={Banner}
        sentences={[
          "Taking God's principles and applying them in our business",
          'Getting projects inspirations and advice from fellow believers',
          'Dedicating everything we have to God'
        ]}/>
         <article id="inspiration"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
       <header className='text-center p-4'>
          <h2 className='sm:text-2xl text-3xl font-semibold p-2'>Empowering Entrepreneurs</h2>
          <p className='font-semibold italic'>Harnessing God-Given Talents for Success</p>
       </header>
       <p>
Our Business and Skills Inspirations ministry is dedicated to supporting entrepreneurs and professionals by providing essential resources, training, and networking opportunities. We believe in the power of God-given talents and strive to help individuals build successful businesses that honor Him. As it is written in Proverbs 22:29, "Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank." This verse highlights the importance of honing one's skills and using them to achieve greatness.</p>
<p>
In our ministry, we offer a variety of programs designed to equip individuals with the knowledge and tools they need to succeed. From workshops and seminars to mentorship and coaching, we provide comprehensive support to help entrepreneurs navigate the challenges of the business world. Our training sessions cover a wide range of topics, including financial management, marketing strategies, and leadership development, all rooted in biblical principles.</p>
<p>
Networking is a key component of our ministry, as we believe that building strong connections with like-minded individuals can lead to greater opportunities and growth. We host regular networking events where entrepreneurs and professionals can share their experiences, exchange ideas, and form valuable partnerships. Ecclesiastes 4:9-10 reminds us, "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up." By fostering a supportive community, we help individuals lift each other up and achieve their goals together.</p>
<p>
Our ministry also emphasizes the importance of integrity and ethical practices in business. Colossians 3:23-24 encourages us, "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." By instilling these values, we aim to create a generation of business leaders who honor God in all their endeavors.</p>
<p>
Join us in our Business and Skills Inspirations ministry as we empower entrepreneurs to harness their God-given talents, build successful businesses, and make a positive impact on their communities. Together, we can achieve greatness and serve as shining examples of faith and excellence in the business world.
       </p>
      </article>
        <Footer/>
    </div>
  )
}

export default Inspirations