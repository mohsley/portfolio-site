"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AchievementsSection from "./AchievementsSection";

const TAB_DATA = [
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
            University of California, Santa Cruz
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
            University of California, Santa Cruz
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
            Hello!<br></br>
            <br></br>I am an experienced engineer currently pursuing a Master's
            in Computer Science at the California State University, Los Angeles.
            I am driven by a deep-seated passion for making computers do things
            that make our lives easier. <br></br> <br></br>
            My professional journey includes valuable experience working on
            Fullstack websites, mobile applications, and multi-threaded
            distributed applications. <br></br> <br></br> In addition, I was
            part of a multi-disciplinary research team, where I conducted a
            thorough case study and collaborated with esteemed colleagues to
            co-author a paper that was published in the Frontiers of Marine
            Science journal. <br></br>
            <br></br>You can view my versatile experience below. If you're
            interested in working together, feel free to reach out--you can
            contact me at the bottom of this page. I look forward to connecting
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
