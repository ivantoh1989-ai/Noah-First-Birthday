"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Car,
} from "lucide-react";


const venuePhotos = [
  {
    id: 1,
    label: "Venue Entrance",
  },
  {
    id: 2,
    label: "Celebration Area",
  },
  {
    id: 3,
    label: "Party Space",
  },
];


export default function Venue() {

  return (
    <section
      className="
        section
        bg-[#FFFDF8]
      "
    >

      <div className="container">


        {/* Title */}

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
            Location
          </p>


          <h2
            className="
              text-4xl
              md:text-5xl
              text-[#355E3B]
              mt-4
            "
          >
            Find Us Here
          </h2>

        </motion.div>



        {/* Venue Card */}

        <motion.div
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
            duration:0.8,
          }}
          className="
            safari-card
            max-w-3xl
            mx-auto
            text-center
          "
        >

          <MapPin
            size={48}
            className="
              mx-auto
              text-[#C49A4A]
              mb-5
            "
          />


          <h3
            className="
              text-3xl
              text-[#355E3B]
              mb-4
            "
          >
            Keepers Cove
          </h3>


          <p
            className="
              text-gray-600
              leading-relaxed
              mb-8
            "
          >
            3 The Oval,
            <br />
            Singapore 797861
          </p>



          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
            "
          >

            <a
              href="https://maps.app.goo.gl/vCh1J9c5C2tMkf1T6"
              target="_blank"
              className="
                btn-primary
              "
            >
              <Navigation
                size={18}
                className="mr-2"
              />
              Open Google Maps
            </a>


            <button
              className="
                px-8
                py-3
                rounded-full
                border
                border-[#355E3B]
                text-[#355E3B]
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <Car size={18}/>

              Drive Here

            </button>


          </div>


        </motion.div>



        {/* Venue Photos */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-12
          "
        >

          {venuePhotos.map((photo,index)=>(

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
                delay:index * 0.15,
              }}
              className="
                safari-card
              "
            >

              <div
                className="
                  aspect-video
                  rounded-2xl
                  bg-[#F6F1E9]
                  flex
                  items-center
                  justify-center
                  text-5xl
                "
              >
                📷
              </div>


              <p
                className="
                  text-center
                  mt-4
                  text-[#355E3B]
                  font-medium
                "
              >
                {photo.label}
              </p>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}
