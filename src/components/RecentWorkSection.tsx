"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RecentWorkSection() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "ShadowSwap is a one-stop decentralized trading protocol.",
      image: "/shdw.jpeg",
      alt: "ShadowSwap",
      bgColor: "#6139af",
      url:"https://shadowswap.xyz/",
    },
    {
      id: 2,
      title: "Innovating Fintech, Social Welfare, and Data Management",
      image: "/proxima.jpeg",
      alt: "ProximaForte",
      bgColor: "#B2E821",
      url:"https://www.proximaforte.com/",
    },
    {
      id: 3,
      title: "KWASRRA is committed to collecting comprehensive data.",
      image: "/kwass.jpeg",
      alt: "Kwasrra",
      bgColor: "#2AA96D",
      url:"https://www.kwasrra.ng/",
    },
    {
      id: 4,
      title: "Send Groceries to your loved ones in Nigeria, Bamiraa.",
      image: "/bam.jpeg",
      alt: "Bamiraa",
      bgColor: "#FAA94A",
      url:"https://bamiraa.com/",
    },
    {
      id: 5,
      title: "Shop for top tier medical products in Nigeria.",
      image: "/beta.jpeg",
      alt: "Betaship",
      bgColor: "#330066",
      url:"https://betaship.com.ng/",
    },
    {
      id: 6,
      title: "Turning data into impact and nonprofits into success stories",
      image: "/ej.jpeg",
      alt: "Portfolio",
      bgColor: "#2E2E2E",
      url:"https://elizabethjikemi.netlify.app/",
    }
  ]
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <motion.div
      className="max-h-screen relative mt-[30rem] md:mt-10 md:max-h-[60rem] transition-colors duration-700 ease-in-out py-24 md:py-36  flex  justify-center items-center "
      style={{
        backgroundColor: bgColor,
        color: bgColor === "white" ? "white" : "#0D0628",
      }} // Adjust text color based on background
    >
    <div className="w-full max-w-[80rem] flex flex-col gap-10 items-center justify-center">
    <h1 className="text-2xl font-bold text-font md:text-3xl mx-6">My Recent Work</h1>
      <h2 className="pt-6 text-xl font-semibold text-font mx-6">
        Here are a few past design projects I've worked on. Want to see more?
        <Link href="mailto:kolawolekolapo20@gmail.com" className="text-blue-500 hover:text-blue-700"> Email me</Link>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.url} target="_blank">
              <motion.div
                className="relative group overflow-hidden  flex flex-col justify-center items-center overflow-hidden cursor-pointer transition-all duration-700 bg-[#66B2FF1A] rounded-lg px-4 text-center"
                onMouseEnter={() => setBgColor(project.bgColor)}
                onMouseLeave={() =>
                  setBgColor( "#FFFFFF")
                }
              >
                {/* project Name */}
                <div className="mx-16 my-16 flex flex-col items-center justify-center gap-2" >
                <span className="  ">
                  {project.title}
                </span>
                <span className="bg-primary mx-auto text-white rounded-full px-3 py-2"> Click here</span>
                </div>
               

                {/* Image (Zooms in on hover) */}
                <motion.div
                  className="absolute w-full h-full"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

    </div>
      
      {/* <Link href="#" className="btn-primary mx-auto">
        <span> See more on Dribbble</span>
      </Link> */}

    </motion.div>
  )
}
