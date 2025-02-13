// import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";



const NavbarMob = ({ showMenu, setShowMenu }) => {

  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-[90] flex h-screen w-screen flex-col  justify-between bg-white px-8 pb-6 pt-24 text-gray-600 transition-all duration-200 lg:hidden overflow-hidden `}
    >
      <div className="card">

        <nav className="mt-12 font-bold">
          <ul className="space-y-10 pl-3 text-xl">
            <li onClick={() => setShowMenu(false)} className="hover:text-red-700">
              <Link to="/" className="mb-1 inline-block">
                Dashboard
              </Link>
            </li>
            <li onClick={() => setShowMenu(false)} className="hover:text-red-700 gap-[2px]">
              <Link to="schedule" className="mb-1 inline-block">
                Scheduler
              </Link>
            </li>
            <li onClick={() => setShowMenu(false)} className="hover:text-red-700 gap-[2px]">
              <Link to="aboutme" className="mb-1 inline-block">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center">
        <h1> Developed By Md Arif Alam.</h1>
      </div>
    </div>
  );
};

export default NavbarMob;
