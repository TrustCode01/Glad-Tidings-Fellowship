import React from 'react'
import { motion, stagger, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import Typewriter from './Typewriter';



export default function HeroSlider() {
  const controls = useAnimation();
      const [ref, inView] = useInView();
    
      React.useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView]);
    
      const fadeIn = {
        hidden: {scale: -1, y:50, opacity:0},
        visible: { 
          scale: 1, 
          y:0, 
          opacity: 1, 
          transition: { duration: 1,delay:0.5} }
      };
    

  return (
    <motion.header className="flex justify-center items-center h-[70vh] dark:bg-gray-300 "
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={fadeIn}>
    <div className="text-center flex flex-col justify-between   max-w-6xl mx-10">
      <p className="my-3 text-sm tracking-widest font-bold text-indigo-800 uppercase">WELCOME TO:</p>
      <h1 className="my-3 text-3xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-600">
        Glad Tidings Tariro Assembly
      </h1>
      <div>
        <p className=" mx-auto my-2 text-base  md:leading-relaxed md:text-xl">
        Welcome to our family! We are dedicated to equipping and mentoring believers to grow in their faith, empowering them to disciple others and serve the Lord effectively. Inspired by Matthew 28:19, we invite you to join us in our mission to make disciples of all nations, sharing the love and grace of God with everyone.
        </p>
      </div>
      <div className="text-blue-600">
     
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-10 md:flex-row pb-6">
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
  </motion.header>

  )
}