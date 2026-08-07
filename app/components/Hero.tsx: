"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        safari-gradient
      "
    >
      {/* Jungle Background Decorations */}
      <div className="absolute inset-0 jungle-pattern" />

      {/* Decorative Leaves */}
      <motion.div
        className="
          absolute
          top-10
          left-5
          text-6xl
        "
        animate={{
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        🌿
      </motion.div>

      <motion.div
        className="
          absolute
          top-20
          right-8
          text-6xl
        "
        animate={{
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🍃
      </motion.div>


      {/* Main Content */}
      <div
        className="
          relative
          z-10
          text-center
          px-6
          max-w-3xl
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <div className="text-7xl mb-6">
            🦁
          </div>


          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#8B6A4E]
              mb-4
            "
          >
            A Safari Adventure Awaits
          </p>


          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              text-[#355E3B]
              leading-tight
            "
          >
            Toh Yue Jian Noah
          </h1>


          <h2
            className="
              text-3xl
              md:text-5xl
              mt-4
              text-[#C49A4A]
            "
          >
            is Turning ONE
          </h2>


          <div
            className="
              mt-8
              space-y-2
              text-lg
            "
          >

            <p>
              🎂 6 September 2026
            </p>

            <p>
              ⏰ 10:00 AM - 3:00 PM
            </p>

            <p>
              📍 Keepers Cove
            </p>

          </div>


          <motion.a
            href="#welcome"
            className="
              btn-primary
              mt-10
            "
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Explore Invitation
          </motion.a>


        </motion.div>


      </div>


      {/* Bottom Scroll Indicator */}
      <motion.div
        className="
          absolute
          bottom-8
          text-[#355E3B]
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ChevronDown size={32}/>
      </motion.div>


    </section>
  );
}
