"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="
        section
        bg-[#FFFDF8]
      "
    >

      <div className="container">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* Baby Photo Placeholder */}
          <div
            className="
              safari-card
              rounded-3xl
              overflow-hidden
            "
          >

            <div
              className="
                aspect-square
                bg-[#F6F1E9]
                flex
                items-center
                justify-center
                text-8xl
              "
            >
              👶
            </div>

          </div>


          {/* Message */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#8B6A4E]
                mb-4
              "
            >
              Our Little Explorer
            </p>


            <h2
              className="
                text-4xl
                md:text-5xl
                text-[#355E3B]
                mb-6
              "
            >
              Welcome to Noah's First Adventure
            </h2>


            <p
              className="
                text-lg
                leading-relaxed
                text-gray-700
                mb-6
              "
            >
              One year ago, our little miracle entered
              our lives and filled our days with endless
              love, laughter, and beautiful memories.
            </p>


            <p
              className="
                text-lg
                leading-relaxed
                text-gray-700
                mb-8
              "
            >
              We are so grateful to have our family and
              friends be part of Noah's journey.
              Join us as we celebrate his first birthday
              surrounded by love and joy.
            </p>


            {/* Parents */}
            <div
              className="
                border-l-4
                border-[#C49A4A]
                pl-5
              "
            >

              <p
                className="
                  font-medium
                  text-[#355E3B]
                "
              >
                With love,
              </p>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                Emily Ang & Toh Ivan
              </p>

            </div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}
