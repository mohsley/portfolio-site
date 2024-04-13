import React from "react";

const WorkTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-neutral-500 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer text-white`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default WorkTag;
