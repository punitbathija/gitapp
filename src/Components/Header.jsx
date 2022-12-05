import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <header className="text-gray-400 bg-gray-900 body-font w-[100vw] fixed top-0">
      {context.user ? (
        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 float-right"
          onClick={() => {
            context.setUser(null);
          }}
        >
          Sign Out
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      ) : (
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink tag={Link} to="/signup" className="mr-5 hover:text-white">
            Sign Up
          </NavLink>
          <NavLink tag={Link} to="/signin" className="mr-5 hover:text-white">
            Sign In
          </NavLink>
        </nav>
      )}
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <NavLink
          tag={Link}
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Git Track</span>
        </NavLink>
        <h3 className="px-8">
          {context.user?.email ? context.user.email : ""}
        </h3>
      </div>
    </header>
  );
};

export default Header;
