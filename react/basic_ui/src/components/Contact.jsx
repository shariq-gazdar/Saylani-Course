import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div>
      <nav className="bg-gradient-to-b from-slate-700 to-slate-700 text-white flex justify-between px-3 items-end">
        <h1 className="text-3xl playWrite py-2">The Famous Sweets</h1>
        <ul className="flex gap-x-5 cursive py-2 text-lg text-gray-400">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Contact;
