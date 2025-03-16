import React from 'react'
import PageHeader from '../components/PageHeader'
import Single from '../assets/single.jpg'
import Footer from '../components/Footer'
import MinistryLinks from '../components/MinistryLinks'

function SingleParents() {
  return (
    <div>
      <PageHeader
         title="Single Parenting made better"
         image={Single}
         sentences={[
          'Navigating the complexity of single parenting with the word of God',
          'Enabling God to take control of everthing',
          'Putting God first in all circustances'

         ]}/>
         <MinistryLinks/>
         <article id="single-parents"  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-4 " >
        <header className='text-center p-4'>
           <h2 className='text-3xl'>Single Parents Ministry</h2>
           <p className="">Overcoming Challenges and Raising Godly Children</p>
        </header>
                      <p>
                      Our Single Parents Ministry is dedicated to supporting and empowering single parents as they navigate the unique challenges of raising children alone. This ministry offers support and encouragement, helping single parents find hope and strength through practical assistance, spiritual guidance, and a loving community. As Psalm 68:5 reminds us, "A father to the fatherless, a defender of widows, is God in his holy dwelling."</p>
              <p>
              Single parents often face numerous challenges, including financial difficulties, emotional stress, and the demands of single-handedly raising children. Our ministry provides practical support and resources to help them manage these challenges effectively. Philippians 4:13 reminds us, "I can do all this through him who gives me strength." By relying on God's strength, single parents can find the resilience and courage needed to overcome their struggles.</p>
              <p>
              Raising children in a godly way is a central focus of our ministry. We provide biblical teachings and practical advice to help single parents instill strong moral values and faith in their children. Proverbs 22:6 advises, "Start children off on the way they should go, and even when they are old they will not turn from it." By nurturing their children's spiritual growth, single parents can lay a solid foundation for their future.</p>
              <p>
              Our ministry also emphasizes the importance of getting back on their feet and starting anew. Isaiah 40:31 offers hope and encouragement: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." We provide support and resources to help single parents rebuild their lives, find new opportunities, and achieve their goals.</p>
              <p>
              Dependence on God is a cornerstone of our teachings. We encourage single parents to trust in God's provision and guidance, knowing that He is always with them. Psalm 46:1 assures us, "God is our refuge and strength, an ever-present help in trouble." By placing their faith in God, single parents can find peace and assurance in His unwavering love and support.</p>
              <p>
              Join us in our Single Parents Ministry as we journey together in faith, overcoming challenges, raising godly children, and serving God with all our hearts. Let us support and uplift one another, finding strength and hope in the Lord.
                      </p>
      </article>
         <Footer/>
    </div>
  )
}

export default SingleParents