import React from 'react'
import PageHeader from '../components/PageHeader'
import ChildrenBanner from '../assets/childrenBanner.jpg'
import Footer from '../components/Footer'

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
      <article id="children"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
        <header className='text-center p-4'>
          <h2 className='text-3xl'>Childrens Ministry</h2>
          <p className="">Nurturing Young Hearts in God's Love </p>
        </header>
        <p>
        Our Children's Ministry provides a safe and nurturing environment where kids can learn about God's love through Bible stories, songs, and interactive activities. It's a place where faith is fun and foundational. As Jesus said, "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these" (Matthew 19:14).</p>
<p>
In our ministry, children are taught to love God with all their hearts. We believe that instilling a deep love for God at a young age sets the foundation for a lifelong relationship with Him. Deuteronomy 6:5 instructs, "Love the Lord your God with all your heart and with all your soul and with all your strength." By teaching children to love God, we help them grow into faithful and devoted followers of Christ.</p>
<p>
Our ministry also includes fun activities that engage children and make learning about God enjoyable. From games and crafts to music and drama, we create an exciting and interactive environment where children can explore their faith. Proverbs 22:6 reminds us, "Start children off on the way they should go, and even when they are old they will not turn from it." By making faith fun, we ensure that children develop a positive and lasting connection with God.</p>
<p>
We provide opportunities for children to demonstrate the love of God through various activities, such as visiting the needy and giving them presents. These acts of kindness teach children the importance of compassion and service. Acts 20:35 encourages us, "It is more blessed to give than to receive." By participating in these activities, children learn to embody the love of Christ and make a difference in the lives of others.</p>
<p>
Unity and harmony are always on the lips of our children, with the Word of God at heart. We teach them the value of living in peace and harmony with others, as instructed in Romans 12:18, "If it is possible, as far as it depends on you, live at peace with everyone." By fostering a spirit of unity and love, we help children build strong, positive relationships with their peers and community.</p>
<p>
Join us in our Children's Ministry as we nurture young hearts in God's love, teaching them to love Him, serve others, and live in unity and harmony. Together, we can raise a generation that is rooted in faith and dedicated to following Christ. </p>
      </article>
      <Footer/>
    </div>
  )
}

export default ChildrenMinistry