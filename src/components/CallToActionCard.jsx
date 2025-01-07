import React from 'react'
import {Link} from 'react-router-dom'
import { motion, stagger, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CallToActionCard({title,description,url,image}) {
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
        hidden: {scale:-0.2, y:50, opacity:0},
        visible: { 
          scale: 1, 
          y:0, 
          opacity: 1, 
          transition: { duration: 1.5,delay:0.5,} }
      };
  return (
<motion.section className=" container mx-auto overflow-hidden bg-gray-50 sm:grid sm:grid-cols-1 md:grid-cols-2 h-30 pt-8"
ref={ref}
initial="hidden"
animate={controls}
variants={fadeIn}>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto  text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="md:mt-4 md:block text-left ">
        {description}
      </p>

      <div className="mt-4 md:mt-8">
        <Link to= {url}
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={image}
    className="h- max-w-[100%] object-cover  sm:h-full"
  />
</motion.section>
  )
}

export default CallToActionCard