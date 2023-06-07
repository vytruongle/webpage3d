import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constant";
import { logo, menu, close } from "../assets";
// import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} className=" w-28 h-28 object-contain" alt={logo} />
            <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2 items-center">
              Vy Truong Le
              <span className="sm:block hidden">| Frontend Developer</span>
            </p>
          </Link>
        </div>
        <ul className="list-none hidden sm:flex  gap-10">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white font-medium text-[18px]`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } md:hidden p-6 black-gradient absolute top-28 right-0 min-w-[140px] rounded-md z-10`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((nav) => {
              return (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-medium text-[16px]`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
