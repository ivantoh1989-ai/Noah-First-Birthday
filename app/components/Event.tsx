"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Heart,
} from "lucide-react";


const details = [
  {
    icon: CalendarDays,
    title: "Date",
    text: "Sunday, 6 September 2026",
  },
  {
    icon: Clock,
    title: "Time",
    text: "10:00 AM - 3:00 PM",
  },
  {
    icon: MapPin,
    title: "Venue",
    text: "Keepers Cove",
  },
];


export default function Event() {

  return (
    <section
      className="
        section
        bg-[#F6F1E9]
      "
    >

      <div className="container">


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
          transition={{
            duration:0.8,
          }}
          className="
            text-center
            mb-14
          "
        >

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#8B6A4E]
            "
          >
            Save The Date
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              text-[#355E3B]
              mt-4
            "
          >
            Noah's First Birthday
          </h2>


        </motion.div>



        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          {details.map((item,index)=>{

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  duration:0.5,
                  delay:index * 0.15,
                }}
                className="
                  safari-card
                  text-center
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    bg-[#355E3B]
                    text-white
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >

                  <Icon size={30}/>

                </div>


                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#355E3B]
                    mb-3
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    text-gray-600
                  "
                >
                  {item.text}
                </p>


              </motion.div>

            );

          })}


        </div>



        {/* Parents Host Card */}

        <motion.div
          initial={{
            opacity:0,
          }}
          whileInView={{
            opacity:1,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:0.8,
          }}
          className="
            mt-12
            safari-card
            text-center
          "
        >

          <Heart
            className="
              mx-auto
              text-[#C49A4A]
              mb-4
            "
            fill="#C49A4A"
          />


          <p
            className="
              text-gray-600
              mb-2
            "
          >
            Celebrating together with love from
          </p>


          <h3
            className="
              text-2xl
              text-[#355E3B]
              font-semibold
            "
          >
            Emily Ang & Toh Ivan
          </h3>


        </motion.div>


      </div>


    </section>
  );
}
