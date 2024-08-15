"use client";
import React, { useState, useRef } from "react";
import ResearchCard from "./ResearchCard";
import { motion, useInView } from "framer-motion";

const papersData = [
  {
    id: 1,
    title: "Demystifying Image-Based Machine Learning",
    description:
      "A review and a practical guide to automated analysis of field imagery using modern machine learning tools. A case study was conducted on object detection of selected marine species from the FathomNet dataset.",
    image: "/images/research/paper1.png",
    darkImage: "/images/research/paper1.png",
    gitUrl: "https://github.com/heinsense2/AIO_CaseStudy",
    previewUrl:
      "https://www.frontiersin.org/articles/10.3389/fmars.2023.1157370/full",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="pb-10 " id="research">
      <h2 className="text-center text-4xl font-bold dark:text-white text-black mt-4 mb-8 md:mb-12">
        Research
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-12 w-full">
        {papersData.map((research, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ResearchCard
              key={research.id}
              title={research.title}
              description={research.description}
              imgUrl={research.image}
              darkimgUrl={research.darkImage}
              gitUrl={research.gitUrl}
              previewUrl={research.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ResearchSection;
