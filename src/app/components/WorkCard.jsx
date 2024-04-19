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
    <div className="text-center dark:bg-[#404040] bg-[#d1d5db] p-2 shadow-2xl rounded-b-xl h-full">
      <div className="bg-[#64748b] dark:bg-[#404040]">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group shadow-xl m-2 "
          style={{
            background: `url(${darkimgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="dark:text-white rounded-b-xl mt-3 md:py-6 md:px-4">
        <h6 className="text-m md:text-xl font-bold mb-2">
          {title} - {companyName}
        </h6>
        <p className="dark:text-white text-s md:text-x md:break-keep hyphens-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
