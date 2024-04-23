import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t dark:border-[#33353F] border-l-transparent border-r-transparent dark:text-white text-black dark:bg-[#262626] bg-[#DADDE2] bg-opacity-100 mt-5">
      <div className="container flex-wrap items-center justify-between mx-auto p-12 flex items-center">
        <span>MOHAMAD SALEH</span>
        <p className="dark:text-white text-black">
          &copy; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
