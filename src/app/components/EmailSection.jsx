"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative dark:text-white text-black p-20"
    >
      <div className="rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="">
        <h5 className="text-xl font-bold dark:text-white text-black my-2">
          Let&apos;s Connect
        </h5>
        <p className="dark:text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, send me an email and
          I&apos;ll get back to you as soon as possible!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/mohsley">
            <Image
              className="bg-[#404040] dark:bg-[#18181b]  rounded-full"
              src={GithubIcon}
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mohsley/">
            <Image
              className="bg-[#404040] dark:bg-[#18181b] rounded-lg"
              src={LinkedinIcon}
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="dark:text-primary-500 text-slate-500 font-bold text-sm mt-2 ">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="dark:text-white block mb-2 text-sm font-medium "
              >
                Full Name
              </label>
              <input
                name="name"
                type="name"
                id="name"
                required
                className="bg-[#FFFFFF] border border-[#33353F] placeholder-[#a3a3a3] dark:placeholder-[#9CA2A9] dark:text-white text-black text-sm rounded-lg block w-full p-2.5 dark:bg-[#18181b]"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="dark:text-white block mb-2 text-sm font-medium "
              >
                Email Adress
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#FFFFFF] border border-[#33353F] placeholder-[#a3a3a3] dark:placeholder-[#9CA2A9] dark:text-white text-black text-sm rounded-lg block w-full p-2.5 dark:bg-[#18181b]"
                placeholder="you@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="dark:text-white text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#FFFFFF] border border-[#33353F] placeholder-[#a3a3a3] dark:placeholder-[#9CA2A9] dark:text-white text-black text-sm rounded-lg block w-full p-2.5 dark:bg-[#18181b]"
                placeholder="Job Opportunity"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="dark:text-white text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#FFFFFF] border border-[#33353F] placeholder-[#a3a3a3] dark:placeholder-[#9CA2A9] dark:text-white text-black text-sm rounded-lg block w-full p-2.5 dark:bg-[#18181b]"
                placeholder="Hey Mohamad, I have a job for you!"
              />
            </div>
            <button
              type="submit"
              className="dark:bg-primary-500 bg-[#64748b] hover:dark:bg-primary-400 hover:bg-[#94a3b8] hover:dark:bg-primary-400 hover:text-black text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
