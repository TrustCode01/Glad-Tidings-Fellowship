
import React from 'react'
import Service from '../assets/service.jpg'
import BibleStudy from '../assets/bible-study.jpg'
import MidService from '../assets/thursday.jpg'
import Youths from '../assets/youths.jpg'
import AllNight from '../assets/allnight.jpg'
import Sunday from '../assets/sundaySch.jpg'
import { motion, stagger, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FeaturesShow() {
     const controls = useAnimation();
       const [ref, inView] = useInView();
     
       React.useEffect(() => {
         if (inView) {
           controls.start('visible');
         } else {
           controls.start('hidden');
         }
       }, [controls, inView]);
     
       const container = {
         hidden: { opacity: 0 },
         visible: {
           opacity: 1,
           transition: {
             staggerChildren: 0.7
           }
         }
       };
     
       const fadeIn = {
         hidden: { opacity: 0, y: 50, scale: 0.8 },
         visible: {
           opacity: 1,
           y: 0,
           scale: 1,
           transition: { duration: 1.3 }
         }
       };
     
  return (
    <section id="features" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-16 lg:py-20">
    

    <div className="mx-auto flex max-w-[70rem] flex-col items-center space-y-4 text-center">

        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Worship with us</h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Welcome! We will be grateful to see you attending one our services. Its a great way to enlighten your spiritual wellbeing. Join us now and have a personal encounter with God..
        </p>

    </div>

    <motion.div className=" mt-6 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={container}>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex  flex-col justify-between rounded-md p-4">
               <img src={Service} alt="Main Service" className='' />
                <div className="space-y-2">
                    <h3 className="font-bold pt-2 text-lg">Main Service</h3>
                    <p className="text-md ">Every Sunday <br /> Time: 8:00am-11:00am</p>
                </div>
            </div>
        </motion.article>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex  flex-col justify-between rounded-md p-4">
                 <img src={BibleStudy} alt="Bible Study" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Bible Study</h3>
                    <p className="text-md">Every Wednesday <br /> Time: 6:00pm - 7:00pm</p>
                </div>
            </div>
        </motion.article>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex  flex-col justify-between rounded-md p-4">
                <img src={MidService} alt="Thursday service" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Thursday Service</h3>
                    <p className="text-md">Every Thursday  <br />Time: 6:00pm-7:30pm</p>
                </div>
            </div>
        </motion.article>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex  flex-col justify-between rounded-md p-4">
            <img src={AllNight} alt="Congregants attending an all night prayer" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">All Night Prayers</h3>
                    <p className="text-md text-muted-foreground">Scheduled Fridays <br /> Time: 9:00pm - 05:00am.</p>
                </div>
            </div>
        </motion.article>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex  flex-col justify-between rounded-md p-4">
            <img src={Youths} alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Youth Service</h3>
                    <p className="text-md">Every Sunday <br /> Time: 11:00am- 12:00pm.</p>
                </div>
            </div>
        </motion.article>

        <motion.article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            variants={fadeIn}>
            <div className="flex h flex-col justify-between rounded-md p-4">
             
                <img src={Sunday} alt="Sunday school children" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2" >Sunday School</h3>
                    <p className="text-md">Every Sunday <br /> Time: 8:00am - 9:00am.</p>
                </div>
            </div>
        </motion.article>

    </motion.div>

</section>
  )
  
}

export default FeaturesShow