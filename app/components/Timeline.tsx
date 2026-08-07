"use client";

import { motion } from "framer-motion";

const months = [
  {
    month: "1 Month",
    caption: "Welcome to the world, little one ❤️",
  },
  {
    month: "2 Months",
    caption: "Those tiny smiles started appearing 😊",
  },
  {
    month: "3 Months",
    caption: "Discovering the world around me 🌿",
  },
  {
    month: "4 Months",
    caption: "Growing stronger every day 💪",
  },
  {
    month: "5 Months",
    caption: "More smiles, more laughter ✨",
  },
  {
    month: "6 Months",
    caption: "Halfway to ONE! 🎉",
  },
  {
    month: "7 Months",
    caption: "Little explorer on the move 🦒",
  },
  {
    month: "8 Months",
    caption: "Curious about everything 🌱",
  },
  {
    month: "9 Months",
    caption: "New adventures every day 🐘",
  },
  {
    month: "10 Months",
    caption: "Almost ready for my big day 🎂",
  },
  {
    month: "11 Months",
    caption: "Counting down to ONE! 🦁",
  },
  {
    month: "12 Months",
    caption: "I am ONE! Happy Birthday 🎈",
  },
];


export default function Timeline() {

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
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
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
            My First Year
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              text-[#355E3B]
              mt-4
            "
          >
            12 Months of Memories
          </h2>


        </motion.div>



        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {months.map((item,index)=>(

            <motion.div
              key={item.month}
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
                delay:index * 0.05,
              }}
              className="
                safari-card
                text-center
              "
            >

              {/* Photo Placeholder */}

              <div
                className="
                  aspect-square
                  rounded-2xl
                  bg-[#FFFDF8]
                  flex
                  items-center
                  justify-center
                  text-6xl
                  mb-6
                "
              >
                📷
              </div>


              <h3
                className="
                  text-2xl
                  text-[#355E3B]
                  mb-3
                "
              >
                {item.month}
              </h3>


              <p
                className="
                  text-gray-600
                "
              >
                {item.caption}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}
