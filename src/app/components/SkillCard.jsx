import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SkillCard = ({ icon, title }) => {
  return (
    <div className="dark:bg-[#404040] bg-[#44403c] p-2 shadow-2xl rounded-b-xl h-full w-full">
      <div
        className="rounded-t-xl relative group shadow-xl m-2"
        style={{
          background: `url(${icon})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "></div>
      </div>
      <div className="text-white rounded-b-xl mt-3 md:py-6 md:px-4">
        <h6 className="text-m md:text-xl font-semibold mb-2">{title}</h6>
      </div>
    </div>
  );
};

export default SkillCard;
