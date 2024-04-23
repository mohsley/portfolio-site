"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Tag from "./Tag";
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
      "An automated job applying assistant that helps you apply to jobs faster.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohsley/applyotron",
    previewUrl: "n/a",
  },
  {
    id: 2,
    title: "AI For Oceans Website",
    description:
      "A Fullstack website for the AI For Oceans Research Team at UCSC. It was built using Next.JS, Django, Express, and MongoDB.",
    image: "/images/projects/oceans.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohsley/ucsc-research-site",
    previewUrl: "https://ucsc-research-site.vercel.app/",
  },
  {
    id: 3,
    title: "Trivia Mobile App",
    description:
      "A simple trivia program that uses a JSON array to pull 900 questions off the internet. It maintains score, offers feedback on correct/incorrect answers, and contains basic animations. The UI consists of views, buttons, custom font, and a beautiful color scheme.",
    image: "/images/projects/trivia.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mohsley/trivia-app",
    previewUrl: "n/a",
  },
  {
    id: 4,
    title: "Multi-threaded Distrubuted Password Cracker",
    description:
      "Using a distributed system consisting of 4 servers, each with 24 cores available, I developed a multi-threaded password cracker in C that could crack simple passwords of n length. This project showcases my expertise in parallel computing, distributed systems, and low-level programming.",
    image: "/images/projects/password.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "n/a",
  },
  {
    id: 5,
    title: "Multi-threaded GPU vs CPU K-Nearest Neighbors Particle Simulation ",
    description:
      "A comprehensive multi-threading litmus test that compared parallelized CPU performance vs GPU performance in a vigorous particle simulation, tracking framerate as a marker of performance.",
    image: "/images/projects/particle.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "n/a",
  },
  {
    id: 6,
    title: "Multi-threaded HTTP Server",
    description:
      "Developed a robust, HTTP-compliant server in C capable of handling multiple requests concurrently, showcasing expertise in low-level programming, network protocols, and thread safety through the use of thread-safe buffers and locks to prevent atomicity and memory violations.",
    image: "/images/projects/webserver.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "n/a",
  },
  {
    id: 7,
    title: "Mini-net Python Firewall Protected Network Simulation",
    description:
      "I designed and implemented a Python-based network simulation with the ability to isolate nodes on infection. This project showcases my skills in cybersecurity, and Python programming for creating secure network environments and mitigating threats effectively.",
    image: "/images/projects/network.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "n/a",
  },
  {
    id: 8,
    title: "Slack Mobile Application Clone",
    description:
      "Developed a feature complete Slack clone three times, using Kotlin for Android, Swift for IOS, and then a cross platofrm verision using React-Native. Each verision had end-to-end testing and full code coverage using Junit, XCTest, and Jest.",
    image: "/images/projects/slack.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "n/a",
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
    <section className="pb-10" id="projects">
      <h2 className="text-center text-black text-4xl font-bold dark:text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <Tag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <Tag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <Tag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <Tag
          onClick={handleTagChange}
          name="School"
          isSelected={tag === "School"}
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
