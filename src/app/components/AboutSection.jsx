"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
      <dl class="max-w-md text-gray-200 divide-y divide-gray-200 text-white divide-gray-200">
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray-400 md:text-lg text-primary-400">
            California State University, Los Angeles
          </dt>
          <dd class="text-lg font-semibold">
            M.Sc. Computer
            Science&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2024-2026
          </dd>
        </div>
        <div class="flex flex-col py-3">
          <dt class="mb-1 text-gray-500 md:text-lg text-primary-400">
            University of Califorina, Santa Cruz
          </dt>
          <dd class="text-lg font-semibold">
            B.Sc. Computer
            Science&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2020-2023
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-white lg:text-lg">
            Welcome to my portfolio! <br></br>
            <br></br>I'm a seasoned engineer and grad student with a passion for
            making computers do things. I have also dabled in the field of
            research, conducting a case study and publishing a paper with my
            team. <br></br>
            <br></br>You can view my verstatile experience below, if you want to
            work with me, please use my email form at the bottom of this page
            and reach out!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
