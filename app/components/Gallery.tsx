"use client";

import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    title: "Little Beginning",
    image: "📷",
  },
  {
    id: 2,
    title: "Family Moments",
    image: "📷",
  },
  {
    id: 3,
    title: "First Adventures",
    image: "📷",
  },
  {
    id: 4,
    title: "Happy Smiles",
    image: "📷",
  },
  {
    id: 5,
    title: "Growing Up",
    image: "📷",
  },
  {
    id: 6,
    title: "Beautiful Memories",
    image: "📷",
  },
];


export default function Gallery() {

  return (
    <section
      id="gallery"
      className="
        section
        bg-[#FFFDF8]
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
            Precious Moments
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              text-[#355E3B]
              mt-4
            "
          >
            Noah's Memory Gallery
          </h2>


        </motion.div>



        {/* Gallery Grid */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {photos.map((photo,index)=>(

            <motion.div
              key={photo.id}
              initial={{
                opacity:0,
                scale:0.9,
              }}
              whileInView={{
                opacity:1,
                scale:1,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                duration:0.5,
                delay:index * 0.1,
              }}
              className="
                safari-card
                overflow-hidden
                group
              "
            >

              {/* Image Placeholder */}

              <div
                className="
                  aspect-square
                  bg-[#F6F1E9]
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-7xl
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              >
                {photo.image}
              </div>


              <h3
                className="
                  mt-5
                  text-xl
                  text-[#355E3B]
                  text-center
                "
              >
                {photo.title}
              </h3>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}
