import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const WorkCard = ({
  imgUrl,
  title,
  companyName,
  dateWorked,
  location,
  darkimgUrl,
  description,
  gitUrl,
  previewUrl,
}) => {
  //     isDarkMode
  //     ? (backGroundUrl = `url(${darkimgUrl})`)
  //     : (backGroundUrl = `url(${imgUrl})`);
  //     const [imageMode, setImageMode] = useState(isDarkMode);
  //   const isDarkMode =
  //     window.matchMedia &&
  //    window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   let backGroundUrl = "";
  //   isDarkMode
  //     ? (setImageMode(darkimgUrl) = `url(${darkimgUrl})`)
  //     : (setImageMode(imgUrl) = `url(${imgUrl})`);
  return (
    <div className="text-center dark:bg-[#404040] bg-[#e5e7eb] h-full rounded-xl shadow-2xl">
      <div className="bg-[#64748b] dark:bg-[#404040] rounded-t-xl">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group dark:bg-[#404040] p-2 shadow-xl"
          style={{
            background: `url(${darkimgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="dark:text-white text-black rounded-b-xl mt-3 dark:bg-[#404040] bg-[#e5e7eb] p-2 rounded-b-xl py-6 px-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="dark:text-white text-black">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
