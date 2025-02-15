import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Banner from '../assets/banner.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
import Banner5 from '../assets/Banner5.jpg'
import Banner6 from '../assets/banner6.jpg'
import 'swiper/css';
import 'swiper/css/effect-fade';
import Typewriter from '../components/Typewriter'
import {Link} from 'react-router-dom'

const slides = [
  {
    image: Banner,
    title: "Welcome to Tariro Assembly",
    description: "The Pillar of Hope"
  },
  {
    image: Banner2,
    title: "Join Us Now",
    description: "Experience the power of worship together"
  },
  {
    image: Banner3,
    title: "Growing in Faith",
    description: "Transforming lives through Christ's love"
  },
  {
    image: Banner4,
    title: "Making Desciples",
    description: "Preaching the gospel all around the world"
  },
  {
    image: Banner5,
    title: "Equiping the Saints ",
    description: "Grooming the belivers "
  },
  {
    image: Banner6,
    title: "Growing in Faith",
    description: "Transforming lives through Christ's love"
  }
];

export default function HeroSlider() {

  return (
    <div className="flex h-[70vh] justify-center items-center dark:bg-gray-300">
    <div className="text-center max-w-6xl mx-10">
      <p className="my-3 text-sm tracking-widest font-bold text-indigo-800 uppercase">WELCOME TO:</p>
      <h1 className="my-3 text-3xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-600">
        Glad Tidings Tariro Assembly
      </h1>
      <div>
        <p className=" mx-auto my-2 text-base  md:leading-relaxed md:text-xl">
        Welcome to our family! We are dedicated to equipping and mentoring believers to grow in their faith, empowering them to disciple others and serve the Lord effectively. Inspired by Matthew 28:19, we invite you to join us in our mission to make disciples of all nations, sharing the love and grace of God with everyone.
        </p>
      </div>
      
      
      <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <Link to='/sermons'
          className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px"
          
        >
          Listen To Sermons
        </Link>
        <Link to='/contact'
          className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
          
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>

  )
}