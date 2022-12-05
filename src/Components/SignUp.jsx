import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./search.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <>
        <Header />
        <div className="h-screen bg-gray-900 flex justify-around items-center">
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-white flex">
                  Git Track
                </h1>
                <p className="leading-relaxed mt-2 font-bold">
                  Using this app, You can levelup your github game By tracing
                  all your friends or even sworn enemies github repositories
                  <img
                    src={Search}
                    alt="github"
                    width={"210px"}
                    className="m-auto"
                  />
                </p>
              </div>
              <form
                className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                onSubmit={handleSubmit}
              >
                <h2 className="text-white text-lg font-medium title-font mb-5">
                  Sign Up
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                >
                  Submit
                </button>

                <p className="text-xs mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default SignUp;
