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
      title: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
      image: "https://ext.same-assets.com/3669320772/357205201.png",
      alt: "WF Design Build",
      bgColor: "#2E2E2E",
      url:"",
    },
    {
      id: 2,
      title: "Accounting and tax services characterized by quality, reliability and trust.",
      image: "https://ext.same-assets.com/3669320772/3800605393.png",
      alt: "Coupal",
      bgColor: "#2E2E2E",
      url:"",
    },
    {
      id: 3,
      title: "Blockchain pioneers bringing transparency, trust, and security to supply.",
      image: "https://ext.same-assets.com/3669320772/1568695583.png",
      alt: "Chronicled",
      bgColor: "#2E2E2E",
      url:"",
    },
    {
      id: 4,
      title: "Business savvy tech experts helping forward thinking companies get things done.",
      image: "https://ext.same-assets.com/3669320772/3047193721.png",
      alt: "Burkettandco",
      bgColor: "#2E2E2E",
      url:"",
    },
    {
      id: 5,
      title: "Vancouver's tower crane rental service and support leader since 1974.",
      image: "https://ext.same-assets.com/3669320772/3417307927.png",
      alt: "GLC Solutions",
      bgColor: "#2E2E2E",
      url:"",
    },
    {
      id: 6,
      title: "Results-oriented, responsive and flexible full service civil engineering firm.",
      image: "https://ext.same-assets.com/3669320772/2536143222.png",
      alt: "Wedler Engineering",
      bgColor: "#2E2E2E",
      url:"",
    }
  ]
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <motion.div
      className="max-h-[60rem] transition-colors duration-700 ease-in-out py-24 md:py-36  flex  justify-center items-center "
      style={{
        backgroundColor: bgColor,
        color: bgColor === "white" ? "white" : "#0D0628",
      }} // Adjust text color based on background
    >
    <div className="w-full max-w-[80rem] flex flex-col gap-10 items-center justify-center">
    <h1 className="text-2xl font-bold text-font md:text-3xl">My Recent Work</h1>
      <h2 className="pt-6 text-xl font-semibold text-font">
        Here are a few past design projects I've worked on. Want to see more?
        <Link href="#contact" className="text-blue-500 hover:text-blue-700"> Email me</Link>.
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
                <Link href={project.url} className="bg-primary mx-auto"> Click here</Link>
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
