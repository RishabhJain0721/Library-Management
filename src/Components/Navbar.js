import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 py-8 fixed w-full top-0 z-10">
      <div className=" w-3/4 mr-auto ml-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-jos text-3xl">Library Management</div>
          <div className="flex space-x-10">
            <a
              href="/"
              className="text-white hover:text-amber-400 active:text-amber-500 transition-all font-jos font-light"
            >
              HOME
            </a>
            <a
              href="/contact"
              className="text-white hover:text-amber-400 active:text-amber-500 transition-all font-jos font-light"
            >
              CONTACT US
            </a>
            <a
              href="/about"
              className="text-white hover:text-amber-400 active:text-amber-500 transition-all font-jos font-light"
            >
              ABOUT
            </a>
            <a
              href="/path1"
              className="text-white hover:text-amber-400 active:text-amber-500 transition-all font-jos font-light"
            >
              TAB 1
            </a>
            <a
              href="/path2"
              className="text-white hover:text-amber-400 active:text-amber-500 transition-all font-jos font-light"
            >
              TAB 2
            </a>
            {/* Add more tabs here as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
