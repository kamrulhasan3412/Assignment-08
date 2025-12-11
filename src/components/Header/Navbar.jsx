import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium ${
            isActive ? "bg-[#632EE3] text-white rounded" : "text-[#000000e6]"
          }`
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `font-medium ${
            isActive ? "bg-[#632EE3] text-white rounded" : "text-[#000000e6]"
          }`
        }
      >
        <li>
          <a>Apps</a>
        </li>
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `font-medium ${
            isActive ? "bg-[#632EE3] text-white rounded" : "text-[#000000e6]"
          }`
        }
      >
        <li>
          <a>Installation</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-1 justify-center items-center btn btn-ghost">
            <div>
              <img className="w-10 h-10" src={logo} alt="" />
            </div>
            <div>
              <Link to="/">
                <a className="text-[#632EE3] opacity-95 font-bold">HERO.IO</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end rounded">
          <Link to="https://github.com/dashboard">
            <a className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              <FaGithub /> Contribute
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
