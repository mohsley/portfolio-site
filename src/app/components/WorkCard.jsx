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
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="dark:text-white text-black rounded-b-xl mt-3 dark:bg-[#404040] bg-[#e5e7eb] p-2 rounded-b-xl py-6 px-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="dark:text-white text-black">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
