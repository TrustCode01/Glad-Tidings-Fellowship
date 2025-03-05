import React from 'react'
import PageHeader from '../components/PageHeader'
import CoupleBanner from '../assets/coupleBanner.jpg'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

function Couples() {
  return (
    <div className=''>
      <PageHeader 
      title='Our Couples Ministry' 
      image={CoupleBanner} 
      sentences={[
        'ingiting the love in marriages',
        'Creating lasting love and oneness',
        'Making Christ the center of our marriages'
      ]}/>
<div>
<article id="couples"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
        <header className='text-center p-4'>
        <h2 className='text-3xl'>Couples Ministry</h2>
        <p className="">Rebuilding Love and Intimacy Through God's Word</p>
        </header>
        <p>
        The Couples Ministry is dedicated to strengthening marriages through biblical teaching, counseling, and fellowship. In a world where infidelity and broken trust are prevalent, especially in African countries like Zimbabwe, our ministry aims to bring back honesty, trustworthiness, and love in marriages. We encourage couples to build a Christ-centered relationship that reflects God's love and commitment.</p>
<p>
As it is written in Mark 10:9, "Therefore what God has joined together, let no one separate." This verse reminds us of the sanctity and permanence of marriage. By grounding our relationships in the Word of God, we can overcome the challenges that threaten to divide us. Proverbs 3:3-4 also teaches, "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. Then you will win favor and a good name in the sight of God and man."</p>
<p>
Through our teachings, we emphasize the importance of fidelity and the devastating impact of infidelity on marriages. Ephesians 5:25-28 calls husbands to love their wives just as Christ loved the church and gave himself up for her. This sacrificial love is the foundation of a strong and enduring marriage. We also remind wives to respect their husbands, as stated in Ephesians 5:33, fostering mutual respect and understanding.

</p>
<p>
Our ministry provides practical tools and support to help couples navigate the complexities of marriage. We offer counseling sessions, workshops, and fellowship opportunities to strengthen the bond between spouses. By fostering open communication and addressing issues head-on, we aim to rebuild trust and create a loving, supportive environment for families.</p>
<p>
Happiness in marriage is rooted in transparency and mutual respect. By being open and honest with each other, couples can build a foundation of trust that withstands the test of time. Colossians 3:19 advises, "Husbands, love your wives and do not be harsh with them." This verse underscores the importance of kindness and understanding in maintaining a harmonious relationship.</p>
<p>
Order and respect are essential for a peaceful and fulfilling marriage. 1 Corinthians 14:40 reminds us, "But everything should be done in a fitting and orderly way." By establishing clear roles and responsibilities, couples can create a balanced and orderly household that promotes mutual respect and cooperation.
Conflict management and resolution are crucial skills for maintaining a healthy marriage. Ephesians 4:26-27 advises,<em> "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold."</em> This verse highlights the importance of addressing conflicts promptly and constructively. Our ministry offers guidance on effective communication and conflict resolution techniques to help couples navigate disagreements and strengthen their relationship.</p>
<p>
Join us in our mission to restore the beauty and sanctity of marriage. Together, we can fight against infidelity and build lasting, Christ-centered relationships that honor God and bring joy to our lives.
</p>


      </article>
      <aside className="">
        <h2 className='text-2xl p-6'>Other Ministries</h2>
        <Link to='/evangelism' className='block'>Evangelism</Link>
        <Link to='/newconverts'className='block'>New Converts</Link>
        <Link to='/mensfellowship'className='block'>Men's Fellowship</Link>
        <Link to='/womensfellowship'className='block'>Women's Fellowship</Link>
        <Link to='/singleparents'className='block'>Single Parents Ministry</Link>
        <Link to='/youths'className='block'>Youth Ministry</Link>
        <Link to='/counselling'className='block'>Counselling</Link>
        <Link to='/life'className='block'>Life Changing Inspirations</Link>
        <Link to='/couples'className='block'>Couples mMinistry</Link>
        <Link to='/children'className='block'>Children's Ministry</Link>
        
      </aside>
      </div>
      <Footer/>
    </div>
  )
}

export default Couples