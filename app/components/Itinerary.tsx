"use client";

import { motion } from "framer-motion";
import {
  Users,
  Gamepad2,
  Utensils,
  Cake,
  Camera,
  Heart,
} from "lucide-react";


const schedule = [
  {
    time: "10:00 AM",
    title: "Guest Arrival",
    description: "Welcome to Noah's Safari Adventure!",
    icon: Users,
  },
  {
    time: "10:30 AM",
    title: "Games & Activities",
    description: "Fun moments and activities for everyone.",
    icon: Gamepad2,
  },
  {
    time: "11:30 AM",
    title: "Lunch",
    description: "Enjoy a delicious meal together.",
    icon: Utensils,
  },
  {
    time: "1:00 PM",
    title: "Cake Cutting",
    description: "Celebrate Noah's first birthday milestone!",
    icon: Cake,
  },
  {
    time: "2:00 PM",
    title: "Family Photos",
    description: "Capture beautiful memories together.",
    icon: Camera,
  },
  {
    time: "3:00 PM",
    title: "Thank You & Goodbye",
    description: "Thank you for celebrating with us ❤️",
    icon: Heart,
  },
];


export default function Itinerary() {

  return (
    <section
      id="itinerary"
      className="
        section
        bg-[#F6F1E9]
      "
    >

      <div className="container">


        {/* Heading */}

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
            mb-16
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
            Celebration Schedule
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              text-[#355E3B]
              mt-4
            "
          >
            Party Itinerary
          </h2>


        </motion.div>



        {/* Timeline */}

        <div
          className="
            max-w-3xl
            mx-auto
            relative
          "
        >

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-8
              top-0
              bottom-0
              w-1
              bg-[#A7B89D]
            "
          />



          <div
            className="
              space-y-10
            "
          >

            {schedule.map((item,index)=>{

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.time}
                  initial={{
                    opacity:0,
                    x:-30,
                  }}
                  whileInView={{
                    opacity:1,
                    x:0,
                  }}
                  viewport={{
                    once:true,
                  }}
                  transition={{
                    duration:0.6,
                    delay:index * 0.1,
                  }}
                  className="
                    relative
                    flex
                    gap-6
                    items-start
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      w-16
                      h-16
                      rounded-full
                      bg-[#355E3B]
                      text-white
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >

                    <Icon size={28}/>

                  </div>



                  {/* Content */}

                  <div
                    className="
                      safari-card
                      flex-1
                    "
                  >

                    <p
                      className="
                        text-[#C49A4A]
                        font-semibold
                        mb-2
                      "
                    >
                      {item.time}
                    </p>


                    <h3
                      className="
                        text-2xl
                        text-[#355E3B]
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        text-gray-600
                      "
                    >
                      {item.description}
                    </p>


                  </div>


                </motion.div>

              );

            })}


          </div>


        </div>


      </div>


    </section>
  );
}
