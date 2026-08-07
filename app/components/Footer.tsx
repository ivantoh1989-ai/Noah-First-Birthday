"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
} from "lucide-react";


export default function Footer() {

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#355E3B]
        text-white
        py-20
      "
    >

      {/* Decorative Leaves */}

      <motion.div
        className="
          absolute
          top-10
          left-10
          text-[#A7B89D]
        "
        animate={{
          rotate:[0,10,0],
        }}
        transition={{
          duration:4,
          repeat:Infinity,
        }}
      >
        <Leaf size={60}/>
      </motion.div>


      <motion.div
        className="
          absolute
          bottom-10
          right-10
          text-[#C49A4A]
        "
        animate={{
          rotate:[0,-10,0],
        }}
        transition={{
          duration:5,
          repeat:Infinity,
        }}
      >
        <Leaf size={70}/>
      </motion.div>



      <div
        className="
          container
          relative
          z-10
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
          transition={{
            duration:0.8,
          }}
        >


          <div
            className="
              text-6xl
              mb-6
            "
          >
            🦁
          </div>



          <h2
            className="
              text-4xl
              md:text-5xl
              mb-6
            "
          >
            Thank You For Being
            <br />
            Part Of Noah's Journey
          </h2>



          <p
            className="
              pt-24
              max-w-xl
              mx-auto
              text-white/80
              text-lg
              leading-relaxed
            "
          >
            Your love, blessings, and presence mean
            the world to our family.
            We can't wait to celebrate this special
            milestone together.
          </p>



          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-10
            "
          >

            <Heart
              fill="#C49A4A"
              className="text-[#C49A4A]"
            />

            <p
              className="
              pt-36  
              text-xl
                font-medium
              "
            >
              Emily Ang & Toh Ivan
            </p>

            <Heart
              fill="#C49A4A"
              className="text-[#C49A4A]"
            />

          </div>



          <p
            className="
              pt-24
              mt-10
              text-sm
              text-white/60
            "
          >
            © 2026 Noah's First Birthday Celebration
          </p>


        </motion.div>


      </div>


    </footer>
  );
}
