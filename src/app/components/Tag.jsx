import React from "react";

const Tag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "dark:text-white text-white bg-[#64748b] dark:border-none dark:bg-primary-600"
    : "text-black border-neutral-400 hover:border-black dark:hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer dark:text-white`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Tag;
