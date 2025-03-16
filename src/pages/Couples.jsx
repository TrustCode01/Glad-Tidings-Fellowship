import React from 'react'
import PageHeader from '../components/PageHeader'
import CoupleBanner from '../assets/coupleBanner.jpg'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Couple from '../assets/couple001.jpg'
import MinistryLinks from '../components/MinistryLinks'

function Couples() {
  return (
    <div className='lg:container mx-auto'>
      <PageHeader 
      title='Our Couples Ministry' 
      image={CoupleBanner} 
      sentences={[
        'ingiting the love in marriages',
        'Creating lasting love and oneness',
        'Making Christ the center of our marriages'
      ]}/>
<div className=''>
<MinistryLinks/>
<article id="couples"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4">
        <header className='text-center p-4'>
        <h2 className='text-3xl'>OUR MISSION</h2>
        <p className="">Building Love and Intimacy In Marriages Through God's Word</p>
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
     <header className=" text-center">
          <h3 className="text-4xl font-bold mt-6">Our Vision</h3>
          <p className="">Spreading the word of God that brings fulfilling marriages</p>
     </header>
     <section className="mt-6"> 
     
     <div className="">
     
      <h4 className="text-2xl p-4">Our Vision</h4>
     <p className='px-4'>Vision We envision a transformative future where marriages in our community radiate as living testimonies of God’s divine plan and purpose. These Christ-centered marriages will shine as beacons of love, unity, and unwavering faith, illustrating the profound beauty and strength that comes from living in alignment with God’s perfect design. They will serve as models of what it means to honor God through mutual respect, selfless service, and an unshakable commitment to each other.

In this envisioned future, couples are not merely surviving the challenges of life together but are thriving as partners deeply rooted in their faith. They draw strength from God to weather life’s storms, becoming resilient and joyful examples of His grace at work. By actively living out biblical principles, these marriages will cultivate homes filled with peace, harmony, and love, creating a ripple effect that impacts their children and extended families, as well as their neighbors, workplaces, and communities.
{/*<img src={Couple} alt="Cheerful black couple" className='float-left rounded-full max-w-[100%] inline-block' />*/}

We hope to empower couples to reflect God’s glory in their daily interactions—both with each other and with the wider world. Through intentional discipleship, worship, prayer, and active engagement in their spiritual growth, these couples will develop a deeper understanding of their God-given purpose and identity, as well as their role in glorifying Him through their union.

This vision includes families that are securely anchored in the truth of the Bible, teaching their children to know, love, and serve God. These homes will become nurturing grounds where children are taught the values of love, forgiveness, faithfulness, and generosity, preparing them to carry the light of Christ into the next generation.

As these marriages and families grow in faith and love, their influence will extend beyond their immediate circles, inspiring others to pursue Christ-centered relationships and to honor God’s design for marriage. By their example, they will demonstrate that a love rooted in Christ has the power to bring about healing, restoration, and unity in a fractured world.

Finally, as Colossians 3:14 reminds us, “And over all these virtues put on love, which binds them all together in perfect unity.” We believe that this love—selfless, unconditional, and guided by Christ—is the ultimate foundation for marriages that flourish and endure. It is this love that unites couples, strengthens families, and serves as a compelling witness to the greatness of God’s plan for humanity.</p>
     </div>
     </section>
      
      </article>
     
      </div>
      <Footer/>
    </div>
  )
}

export default Couples