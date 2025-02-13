import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import NavbarMob from "./NavbarMob";





const NavbarDesk = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // State to show or hide the navbar



  useEffect(() => {
    if (showMenu) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts or the state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  let lastScrollY = 0; // Track the last scroll position

  const handleScroll = () => {
    // If user is scrolling down, hide the navbar
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      // If user is scrolling up, show the navbar
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  // Effect hook to listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0  left-0 right-0 z-[100] max-w-full rounded-none px-2 lg:px-8  bg-white text-gray-600  bg-opacity-80 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
      >
        < nav className="flex items-center justify-between py-2">
          <div className=" text-red-700 md:text-3xl flex flex-row">
            <div className="mt-2">
              <Link to="/">
                <h1 className="font-bold">Interview</h1>

                <span className="block font-semibold  text-gray-600">Schedulizer</span>
              </Link>
            </div>

          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:block">

            <ul className="block lg:flex items-center gap-10">
              <li className="group relative cursor-pointer hover:text-red-700 font-semibold">
                <Link to='/'>Dashboard</Link>
              </li>
              <li className="cursor pointer group">
                <Link to="schedule" className="flex h-[72px] items-center gap-[2px] hover:text-red-700 font-semibold">
                  Scheduler
                </Link>
              </li>
              <li className="cursor pointer group">
                <Link to="aboutme" className="flex h-[72px] items-center gap-[2px] hover:text-red-700 font-semibold">
                  About
                </Link>
              </li>
            </ul>
          </div >
          {/* Mobile view  */}
          <div className="flex items-center gap-4 lg:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav >

      </header >

      <NavbarMob showMenu={showMenu} setShowMenu={setShowMenu} />

    </>
  );
};

export default NavbarDesk;


