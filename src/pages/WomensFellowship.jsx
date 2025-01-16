import React from 'react'
import PageHeader from '../components/PageHeader'
import Women from '../assets/womenbanner.jpg'
import Footer from '../components/Footer'

function WomensFellowship() {
  return (
    <div>
      <PageHeader
        title='Women of Virtue'
        image={Women}
        sentences={[
            'Grooming women who are loyal to their husbands',
            'Women who submit to their husbands',
            'Women who love and cherish their families',
            'Women who serve God passionately'
        ]}/>
        <article id="women-fellowship"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 w-[80%] m-auto">
        <header className='text-center p-4'>
           <h2 className='text-3xl'>Womens Ministry</h2>
           <p className="">Grooming Women of Virtue and Service
           </p>
        </header>
                  <p>
                  Our Women's Ministry is dedicated to nurturing and empowering women to become women of virtue, who serve God wholeheartedly and bring peace and joy to their husbands, children, and in-laws. Through biblical teachings, fellowship, and practical guidance, we aim to cultivate qualities that reflect the heart of God and His purpose for women.</p>
                  <p>
                  Proverbs 31:10-31 paints a beautiful picture of a virtuous woman, describing her as someone who is worth far more than rubies. She is diligent, wise, and compassionate, managing her household with grace and strength. Verse 26 highlights, "She speaks with wisdom, and faithful instruction is on her tongue." Our ministry strives to instill these virtues in every woman, encouraging them to live out their faith in every aspect of their lives.</p>
                  <p>
                  We emphasize the importance of serving God and others, following the example of Jesus Christ. In Matthew 20:28, it is written, "Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." By serving God and our communities, we reflect His love and compassion, making a positive impact on those around us.</p>
                  <p>
                  Our teachings also focus on fostering peace and joy within the family. Ephesians 5:22-24 encourages wives to submit to their husbands as to the Lord, creating a harmonious and respectful relationship. This submission is not about inferiority but about mutual respect and love, as husbands are called to love their wives as Christ loved the church (Ephesians 5:25). By embracing these principles, women can bring peace and joy to their husbands, children, and in-laws, creating a loving and supportive family environment.</p>
                  <p>
                  Furthermore, we address the importance of being a source of inspiration and strength for the family. Titus 2:3-5 instructs older women to teach what is good and to train younger women to love their husbands and children, to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God. By following these teachings, women can become pillars of virtue and grace, guiding their families with wisdom and love.</p>
                  <p>
                  Join us in our Women's Ministry as we grow together in faith, virtue, and service. Let us strive to be women who honor God in all we do, bringing peace, joy, and love to our families and communities.

                          </p>
      </article>
        <Footer/>
    </div>
  )
}

export default WomensFellowship