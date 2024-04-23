"use client";
import React, { useState, useRef } from "react";
import WorkCard from "./WorkCard";
import Tag from "./Tag";
import { motion, useInView } from "framer-motion";

const worksData = [
  {
    id: 1,
    title: "Undergraduate Software Engineer Research Assistant",
    companyName: "UCSC",
    dateWorked: "June 2021 – Sep 2022",
    location: "Santa Cruz, California",
    description:
      "As an Undergraduate Software Engineer Research Assistant, I played a pivotal role in various aspects of software development and research. I led the deployment and development of a Full-Stack Website, where I designed and implemented multiple pages with efficient navigation, ensuring a seamless user experience. Additionally, I served as an Agile Scrum Master, overseeing daily stand-ups, managing sprints, and maintaining our project's Trello issue tracker to ensure smooth progress and effective team collaboration. My contributions also extended to research, where I delved into the impact of Distribution Shift within machine-learning platforms, culminating in a contribution to a published paper on this subject.",
    image: "/images/work/ucsc.png",
    darkImage: "/images/work/ucsc-dark.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Full-Stack Web Engineer Intern",
    companyName: "CodeDay Labs",
    dateWorked: "June 2022 – Sep 2022",
    location: "Remote",
    description:
      "I deployed a Full-Stack web application focused on accelerating portfolio generation for users. This involved designing a user-friendly interface using Figma before proceeding with frontend development. I also implemented marshaling and unmarshaling architecture to seamlessly convert data between JSON and DynamoDB formats, enhancing data handling efficiency. Writing engineer design documents was integral to guiding features from the issue tracker all the way to deployment. Additionally, I actively participated in peer-reviewed pull requests and collaborated effectively within a team environment to ensure the success of our projects.",
    image: "/images/work/codeday-logo.png",
    darkImage: "/images/work/codeday-logo-dark.png",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Java Full-Stack Engineer Intern",
    companyName: "CodeDay Labs",
    dateWorked: "June 2021 – Aug 2021",
    location: "Remote",
    description:
      "I designed, implemented, and deployed a resume generator that relied on user input from a multi-page form. This included creating an automated email service to instantly send a PDF copy of the resume, simplifying the application process for users. Furthermore, I ensured seamless communication between clients and servers by following RESTful API structure, enhancing overall system efficiency and user experience.",
    image: "/images/work/codeday-logo.png",
    darkImage: "/images/work/codeday-logo-dark.png",
    tag: ["All", "Internship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mobile Full-Stack Application Intern",
    companyName: "Lyrist",
    dateWorked: "June 2020 – Aug 2020",
    location: "Remote",
    description:
      "I collaborated with a team of three interns on the development of the mobile app Lyrist for iOS and Android platforms. We successfully deployed a significant new feature based on insights from Firebase user analytics, catering to the habits of over 100 daily active users. I took responsibility for extensive internal testing, including the creation of unit tests to ensure robust functionality. Our development approach was agile, guided by prototyping and software specification documents, which facilitated efficient iteration and delivery of high-quality features.",
    image: "/images/work/lyrist",
    darkImage: "/images/work/lyrist.png",
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
    <section className="pb-10" id="work">
      <h2 className="text-center text-4xl font-bold dark:text-white text-black mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <Tag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <Tag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <Tag
          onClick={handleTagChange}
          name="Internship"
          isSelected={tag === "Internship"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-12 w-full">
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
