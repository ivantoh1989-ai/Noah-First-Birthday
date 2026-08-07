"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Noah",
    href: "#welcome",
  },
  {
    name: "Memories",
    href: "#timeline",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Venue",
    href: "#venue",
  },
  {
    name: "Schedule",
    href: "#itinerary",
  },
];


export default function Navbar() {

  const [open,setOpen] =
    useState(false);



  return (

    <motion.nav
      initial={{
        y:-100,
      }}
      animate={{
        y:0,
      }}
      transition={{
        duration:0.6,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/80
        backdrop-blur-lg
        shadow-sm
      "
    >

      <div
        className="
          container
          flex
          items-center
          justify-between
          py-4
          px-6
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
            text-2xl
            font-semibold
            text-[#355E3B]
          "
        >
          🦁 Noah
        </a>



        {/* Desktop Menu */}

        <div
          className="
            hidden
            md:flex
            gap-8
          "
        >

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                text-gray-700
                hover:text-[#355E3B]
                transition
              "
            >
              {link.name}
            </a>

          ))}


        </div>



        {/* Mobile Button */}

        <button
          onClick={()=>
            setOpen(!open)
          }
          className="
            md:hidden
            text-[#355E3B]
          "
        >

          {open
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }

        </button>


      </div>




      {/* Mobile Menu */}

      {
        open && (

          <motion.div
            initial={{
              opacity:0,
              height:0,
            }}
            animate={{
              opacity:1,
              height:"auto",
            }}
            className="
              md:hidden
              bg-white
              px-6
              pb-6
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
              "
            >

              {links.map((link)=>(

                <a
                  key={link.name}
                  href={link.href}
                  onClick={()=>
                    setOpen(false)
                  }
                  className="
                    text-gray-700
                  "
                >
                  {link.name}
                </a>

              ))}

            </div>


          </motion.div>

        )
      }


    </motion.nav>

  );

}
