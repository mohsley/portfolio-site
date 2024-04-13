"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text dark:bg-primary-500 bg-primary-600">
              Mohamad Saleh
            </span>
            <br></br>
            <span className="text-7xl text-transparent bg-clip-text dark:bg-primary-500 bg-primary-700">
              I am a{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Computer Scientist",
                800,
                "Software Engineer",
                800,
                "Fullstack Developer",
                800,
                "Researcher",
                800,
                "Grad Student",
                800,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.7em" }}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-primary-500 dark:bg-primary-700 hover:bg-primary-800 hover:dark:hover:bg-primary-400 dark:hover:text-black text-black dark:text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full  dark:bg-primary-700 dark:hover:bg-primary-400 text-white mt-3"
            >
              <span className="block dark:bg-[#18181b] hover:dark: rounded-full px-5 py-2">
                View Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full dark:bg-[#18181b] bg-[#6b7280] w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              //object-none w-36 h-36 rounded-full custom-position
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
