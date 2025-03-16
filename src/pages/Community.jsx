import React from 'react'
import PageHeader from '../components/PageHeader'
import Drugs from '../assets/drugs.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

function Community() {
  return (
    <div>
      <PageHeader
        title='Taking part in community service'
        image={Drugs}
        sentences={[
          'Helping community in fighting against drug abuse',
          'Engaging youths in fighting against peer pressure',
          'Ministering the word of God in our communities',
          'Offering help whenever there is a need'
        ]}/>
        <MinistryLinks/>
        <article id="community"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4">
        <header className='text-center p-4'>
            <h2 className='text-3xl'>Serving with Compassion</h2>
            <p>Meeting Community Needs Through Christ's Love</p>
        </header>
        <p>
Our Community Service ministry is dedicated to serving the needs of our local community through various outreach programs. Whether it's feeding the hungry, clothing the needy, or providing shelter, we strive to be the hands and feet of Jesus. As it is written in Matthew 25:40, "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me." This verse reminds us that our acts of service are not just for those in need, but for Christ Himself.</p>
<p>
In our ministry, we are guided by the biblical principle of loving our neighbors as ourselves. Galatians 5:14 states, "For the entire law is fulfilled in keeping this one command: 'Love your neighbor as yourself.'" By serving our community, we demonstrate this love in practical and meaningful ways.</p>
<p>
Our outreach programs are designed to address the physical, emotional, and spiritual needs of those we serve. James 2:15-16 emphasizes the importance of meeting practical needs: "Suppose a brother or a sister is without clothes and daily food. If one of you says to them, 'Go in peace; keep warm and well fed,' but does nothing about their physical needs, what good is it?" We take this to heart, ensuring that our actions align with our words.</p>
<p>
We also believe in the power of community and fellowship. Hebrews 10:24-25 encourages us to "consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching." Through our service projects, we build strong bonds within our community and inspire others to join us in our mission.</p>
<p>
Our commitment to serving others is rooted in the example set by Jesus, who came "not to be served, but to serve" (Matthew 20:28). By following His example, we aim to make a positive impact on the lives of those around us, reflecting the love and compassion of Christ in all that we do.</p>
<p>
In addition to our regular outreach programs, we have launched a Drug Awareness Campaign to address the growing issue of substance abuse in our community. This campaign focuses on educating individuals about the dangers of drug use, providing support and resources for those struggling with addiction, and promoting a drug-free lifestyle. Proverbs 22:6 reminds us, "Train up a child in the way he should go; even when he is old he will not depart from it." By instilling these values early on, we hope to create a lasting impact on future generations.</p>
<p>
Join us in our Community Service ministry as we work together to meet the needs of our community, guided by the principles of God's Word and the love of Christ. Together, we can make a difference and bring hope to those in need.
        </p>
      </article>
        <Footer/>
    </div>
  )
}

export default Community