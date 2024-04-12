"use client";
import React, { useState, useRef } from "react";
import WorkCard from "./workCard";
import WorkTag from "./workTag";
import { motion, useInView } from "framer-motion";

const worksData = [
  {
    id: 1,
    title: "Undergraduate Software Engineer Research Assistant",
    companyName: "University of California, Santa Cruz",
    dateWorked: "June 2021 – Sep 2022",
    location: "Santa Cruz, California",
    description:
      "As an Undergraduate Software Engineer Research Assistant, I played a pivotal role in various aspects of software development and research. I led the deployment and development of a Full-Stack Website, where I designed and implemented multiple pages with efficient navigation, ensuring a seamless user experience. Additionally, I served as an Agile Scrum Master, overseeing daily stand-ups, managing sprints, and maintaining our project's Trello issue tracker to ensure smooth progress and effective team collaboration. My contributions also extended to research, where I delved into the impact of Distribution Shift within machine-learning platforms, culminating in a contribution to a published paper on this subject.",
    image: "/images/work/ucsc",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Full-Stack Web Engineer Intern",
    companyName: "University of California, Santa Cruz",
    dateWorked: "June 2021 – Sep 2022",
    location: "Santa Cruz, California",
    description:
      "As an Undergraduate Software Engineer Research Assistant, I played a pivotal role in various aspects of software development and research. I led the deployment and development of a Full-Stack Website, where I designed and implemented multiple pages with efficient navigation, ensuring a seamless user experience. Additionally, I served as an Agile Scrum Master, overseeing daily stand-ups, managing sprints, and maintaining our project's Trello issue tracker to ensure smooth progress and effective team collaboration. My contributions also extended to research, where I delved into the impact of Distribution Shift within machine-learning platforms, culminating in a contribution to a published paper on this subject.",
    image: "/images/work/codeday-logo.png",
    darkImage: "/images/work/codeday-logo-dark.png",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Undergraduate Software Engineer Research Assistant",
    companyName: "University of California, Santa Cruz",
    dateWorked: "June 2021 – Sep 2022",
    location: "Santa Cruz, California",
    description:
      "As an Undergraduate Software Engineer Research Assistant, I played a pivotal role in various aspects of software development and research. I led the deployment and development of a Full-Stack Website, where I designed and implemented multiple pages with efficient navigation, ensuring a seamless user experience. Additionally, I served as an Agile Scrum Master, overseeing daily stand-ups, managing sprints, and maintaining our project's Trello issue tracker to ensure smooth progress and effective team collaboration. My contributions also extended to research, where I delved into the impact of Distribution Shift within machine-learning platforms, culminating in a contribution to a published paper on this subject.",
    image: "/images/work/codeday-logo.png",
    darkImage: "/images/work/codeday-logo-dark.png",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Undergraduate Software Engineer Research Assistant",
    companyName: "University of California, Santa Cruz",
    dateWorked: "June 2021 – Sep 2022",
    location: "Santa Cruz, California",
    description:
      "As an Undergraduate Software Engineer Research Assistant, I played a pivotal role in various aspects of software development and research. I led the deployment and development of a Full-Stack Website, where I designed and implemented multiple pages with efficient navigation, ensuring a seamless user experience. Additionally, I served as an Agile Scrum Master, overseeing daily stand-ups, managing sprints, and maintaining our project's Trello issue tracker to ensure smooth progress and effective team collaboration. My contributions also extended to research, where I delved into the impact of Distribution Shift within machine-learning platforms, culminating in a contribution to a published paper on this subject.",
    image: "/images/work/lyrist",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const WorkSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredworks = worksData.filter((work) => work.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="works">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <WorkTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <WorkTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <WorkTag
          onClick={handleTagChange}
          name="Internship"
          isSelected={tag === "Internship"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-rows gap-8 md:gap-12">
        {filteredworks.map((work, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <WorkCard
              key={work.id}
              title={work.title}
              companyName={work.companyName}
              dateWorked={work.dateWorked}
              location={work.location}
              description={work.description}
              imgUrl={work.image}
              darkimgUrl={work.darkImage}
              gitUrl={work.gitUrl}
              previewUrl={work.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
