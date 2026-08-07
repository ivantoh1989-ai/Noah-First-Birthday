"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const birthdayDate =
  new Date("2026-09-06T10:00:00").getTime();


function calculateTime() {

  const now = new Date().getTime();

  const difference =
    birthdayDate - now;


  if (difference <= 0) {
    return {
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
    };
  }


  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference /
        (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference /
        (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference /
        1000) % 60
    ),
  };

}



export default function Countdown() {

  const [time,setTime] =
    useState(calculateTime());


  useEffect(()=>{

    const timer =
      setInterval(()=>{

        setTime(calculateTime());

      },1000);


    return ()=>clearInterval(timer);

  },[]);



  const items=[
    {
      label:"Days",
      value:time.days,
    },
    {
      label:"Hours",
      value:time.hours,
    },
    {
      label:"Minutes",
      value:time.minutes,
    },
    {
      label:"Seconds",
      value:time.seconds,
    },
  ];



  return (

    <section
      className="
        py-16
        bg-[#355E3B]
        text-white
      "
    >

      <div
        className="
          container
          text-center
        "
      >


        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
        >


          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#C49A4A]
            "
          >
            Counting Down
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              mt-4
              mb-10
            "
          >
            Noah's Big Day 🦁
          </h2>



          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
              max-w-4xl
              mx-auto
            "
          >

            {items.map((item)=>(


              <div
                key={item.label}
                className="
                  bg-white/10
                  backdrop-blur
                  rounded-3xl
                  p-6
                "
              >

                <div
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-[#F6F1E9]
                  "
                >
                  {String(item.value)
                    .padStart(2,"0")}
                </div>


                <p
                  className="
                    mt-2
                    text-white/70
                  "
                >
                  {item.label}
                </p>


              </div>


            ))}

          </div>


        </motion.div>


      </div>


    </section>

  );

}
