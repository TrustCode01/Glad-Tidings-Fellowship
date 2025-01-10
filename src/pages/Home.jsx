import { Heart, Users, Book, Baby, Users2, UserPlus, Gem, Building2, HandHeart, Brain, Briefcase, Home as HomeIcon } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import FAQList from '../components/FAQ';
import Banner from '../assets/services.jpg'
import Evangelize from '../assets/evangelize.jpg'
import Couple from '../assets/couple.jpg'
import ForMen from '../assets/men_fellowship.jpg'
import Women from '../assets/women.jpg'
import Youths from '../assets/youths.jpg'
import Parent from '../assets/single_parent.jpg'
import Children from '../assets/children.jpg'
import Life from '../assets/life.jpg'
import Community from '../assets/community.jpg'
import Business from '../assets/business.jpg'
import Service from '../assets/service.jpg'
import Counselling from '../assets/counselling.jpg'
import CallToActionCard from '../components/CallToActionCard';

const services = [
  {
    title: "Evangelism",
    description: "Spreading the gospel through community outreach and missions",
    image: Evangelize
  },
  {
    title: "Main Service",
    description: "Sunday worship services filled with praise and powerful messages",
    image: Service
  },
  {
    title: "Couples Teachings",
    description: "Building stronger marriages through biblical principles",
    image: Couple
  },
  {
    title: "Men's Fellowship",
    description: "Empowering men to be spiritual leaders",
    image: ForMen
  },
  {
    title: "Single Parents",
    description: "Support and guidance for single parent families",
    image: Parent
  },
  {
    title: "Women Teachings",
    description: "Empowering women through faith and fellowship",
    image: Women
  },
  {
    title: "Youth Services",
    description: "Dynamic programs for young people to grow in faith",
    image: Youths
  },
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts in Christ's love",
    image: Children
  },
  {
    title: "Community Ministry",
    description: "Serving and impacting our local community",
    image: Community
  },
  {
    title: "Life Coaching",
    description: "Personal growth through spiritual guidance",
    image: Life
  },
  {
    title: "Business Inspirations",
    description: "Integrating faith and business principles",
    image: Business
  },
  {
    title: "Counselling",
    description: "Strengthening family bonds through Christ",
    image: Counselling 
  }
];

export default function Home() {
  const sentences = [ "Hello, welcome to our website!", "We are glad to have you here.", "Explore our features and services.", "Contact us for more information." ];
  
  return (
    <div>
      <HeroSlider />
      <Showcase />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our wide range of ministries designed to support your spiritual journey
            and help you grow in faith.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
        <CallToActionCard
          title= "Need spritual recharge? Join us " 
          description="
              Join us for our main service, where our entire congregation gathers to worship, pray, and delve into God's Word. It's a heartwarming time to rejuvenate your spirit and bond with fellow believers. You'll find a welcoming community ready to support and uplift you. Come and experience the joy and peace that comes from being in God's presence. (Hebrews 10:25)."
          url="/contact"
          image={Banner}
        />
      </section>
      
      <FAQList />
      <Footer />
    </div>
  );
}