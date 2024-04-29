"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AchievementsSection from "./AchievementsSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Languages/Skills: C/C++, Parallel Programming, C#, Java, Python,
          HTML/CSS/JavaScript, Typescript, SQL
        </li>
        <br></br>
        <li>
          Frameworks: React, React-Native, Next.Js, Node.js, .Net, JUnit, Jest,
          Material-UI
        </li>
        <br></br>
        <li>
          Developer Tools: Git, Docker, Bash Unix Terminal, VS Code, Visual
          Studio, PyCharm, IntelliJ, Android Studio
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <dl className="max-w-md divide-y dark:divide-gray-200 divide-black">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-slate-500 md:text-lg dark:text-primary-400 font-bold">
            California State University, Los Angeles
          </dt>
          <dd className="dark:text-white text-black text-lg font-semibold">
            M.Sc. Computer
            Science&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2024-2026
          </dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className=" mb-1 text-slate-500 md:text-lg dark:text-primary-400 font-bold">
            University of Califorina, Santa Cruz
          </dt>
          <dd className="dark:text-white text-black text-lg font-semibold">
            B.Sc. Computer
            Science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2020-2023
          </dd>
        </div>
      </dl>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="dark:text-white text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full text-black">
          <h2 className="text-center text-4xl font-bold dark:text-white text-black mb-4 ">
            About Me
          </h2>
          <p className="dark:text-white text-black lg:text-lg">
            Welcome to my portfolio! <br></br>
            <br></br>I'm an experienced engineer, currently going through grad
            school, with a passion for making computers solve problems. I have
            also dabbled in the field of research, conducting a case study and
            publishing a paper with my team. <br></br>
            <br></br>You can view my verstatile experience below. If you're
            interested in working togetrher, feel free to reach out--you can
            contact me at the bottom of this page. I look foward to connecting
            with you.
          </p>
          <div className="text-black dark:text-white flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-black dark:text-white">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
