import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import Usercard from "./Usercard";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import Repos from "./Repos";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      console.log({ data });
      setUser(data);
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Header />
      <div className="flex-grow py-36 px-4 text-gray-400 bg-gray-900 body-font flex- items-center ">
        <label
          htmlFor="full-name"
          className="px-2 leading-7 text-sm text-gray-400 "
        >
          Github User
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a github user"
          className="w-[60%] bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />

        <button
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg px-4"
          onClick={fetchDetails}
          type="submit"
        >
          Search
        </button>
        {user ? <Usercard user={user} /> : null}
        {user ? <Repos repos_url={user.repos_url} /> : null}
      </div>
      {/* <Usercard /> */}
      <Footer />
    </>
  );
};

export default Home;
