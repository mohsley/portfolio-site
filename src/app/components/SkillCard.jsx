import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SkillCard = ({ title, icon }) => {
  return (
    <div className="">
      <div
        className="rounded-t-xl relative group shadow-xl m-2"
        style={{
          background: `url(${icon})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=""></div>
      </div>
      <div className="text-white rounded-b-xl mt-3 md:py-6 md:px-4">
        <h6 className="text-m md:text-xl font-semibold mb-2">{title}</h6>
      </div>
    </div>
  );
};

export default SkillCard;
