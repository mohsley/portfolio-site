"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Tag from "./Tag";
import { motion, useInView } from "framer-motion";
import SkillCard from "./SkillCard";
import Image from "next/image";
import NextjsLine from "react-devicons/nextjs/line";

const skillsData = [
  {
    type: "Frontend",
    list: [
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 1,
        icon: "/images/work/codeday-logo-dark.png",
        title: "React.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "HTML",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "CSS",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "JavaScript",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
      {
        id: 0,
        icon: "/images/work/codeday-logo-dark.png",
        title: "Next.js",
        tag: ["All", "Frontend"],
      },
    ],
  },
];

const SkillsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = skillsData.filter((skill) =>
    skill.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Skills <NextjsLine />
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <Tag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <Tag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <Tag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <Tag
          onClick={handleTagChange}
          name="Tools/Frameworks"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12">
        {filteredProjects.map((skill, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SkillCard key={skill.id} title={skill.title} icon={skill.icon} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
