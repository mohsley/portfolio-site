"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Personal Portfolio Website",
    description:
      "This is a portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohsley/portfolio-site",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Applyotron Job Applying Assistant",
    description:
      "An autemouse job applying assistant that helps you apply to jobs faster.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohsley/applyotron",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AI For Oceans Website",
    description:
      "A Fullstack website for the AI For Oceans Research Team at UCSC. It was built using Next.JS, Djanago, Express, and Mongo DB.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Multi-threaded GPU vs CPU K-Nearest Neighbors Particle Simulation ",
    description:
      "A comprehensive multi-threading litmus test to compare CPU and GPU performance by increasing the number of threads and particles, tracking framerate as a marker of performance.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Multi-threaded HTTP Server",
    description:
      "A robust, HTTP complaint, written in C, that can procress multiple requests concurrently, without atomicity or memory violations. This was achived using a thread safe buffer and locks around critical sections.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 7,
  //   title: "Closing The Distance",
  //   description: "Project 6 description",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 8,
  //   title: "Gym Helper",
  //   description: "Project 7 description",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 9,
  //   title: "Shopper Helper",
  //   description: "Project 7 description",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
