import React from 'react'
import Service from '../assets/service.jpg'
import BibleStudy from '../assets/bible-study.jpg'
import MidService from '../assets/thursday.jpg'
import Youths from '../assets/youths.jpg'
import AllNight from '../assets/allnight.jpg'
import Sunday from '../assets/sundaySch.jpg'

function FeaturesShow() {
  return (
    <section id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-16 lg:py-20">

    <div class="mx-auto flex max-w-[70rem] flex-col items-center space-y-4 text-center">

        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Attend Our Services </h2>

        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Welcome! We will be grateful to see you attending one our services. Its a great way to enlighten your spiritual wellbeing. Join us now and have a personal encounter with God..
        </p>

    </div>

    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3">

        <article
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex  flex-col justify-between rounded-md p-4">
               <img src={Service} alt="Main Service" className='' />
                <div class="space-y-2">
                    <h3 class="font-bold pt-2 text-lg">Main Service</h3>
                    <p class="text-md ">Every Sunday <br /> Time: 8:00am-11:00am</p>
                </div>
            </div>
        </article>

        <article
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex  flex-col justify-between rounded-md p-4">
                 <img src={BibleStudy} alt="Bible Study" />
                <div class="space-y-2">
                    <h3 class="font-bold text-lg pt-2">Bible Study</h3>
                    <p class="text-md">Every Wednesday <br /> Time: 6:00pm - 7:00pm</p>
                </div>
            </div>
        </article>

        <article
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex  flex-col justify-between rounded-md p-4">
                <img src={MidService} alt="Thursday service" />
                <div class="space-y-2">
                    <h3 class="font-bold text-lg pt-2">Thursday Service</h3>
                    <p class="text-md">Every Thursday  <br />Time: 6:00pm-7:30pm</p>
                </div>
            </div>
        </article>

        <article
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex  flex-col justify-between rounded-md p-4">
            <img src={AllNight} alt="Congregants attending an all night prayer" />
                <div class="space-y-2">
                    <h3 class="font-bold text-lg pt-2">All Night Prayers</h3>
                    <p class="text-md text-muted-foreground">Scheduled Fridays <br /> Time: 9:00pm - 05:00am.</p>
                </div>
            </div>
        </article>

        <article
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex  flex-col justify-between rounded-md p-4">
            <img src={Youths} alt="" />
                <div className="space-y-2">
                    <h3 class="font-bold text-lg pt-2">Youth Service</h3>
                    <p className="text-md">Every Sunday <br /> Time: 11:00am- 12:00pm.</p>
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h flex-col justify-between rounded-md p-4">
             
                <img src={Sunday} alt="Sunday school children" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2" >Sunday School</h3>
                    <p className="text-md">Every Sunday <br /> Time: 8:00am - 9:00am.</p>
                </div>
            </div>
        </article>

    </div>

</section>
  )
  
}

export default FeaturesShow