//React
import React, { useState } from "react";

//React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Firebase
import { initializeApp } from "firebase/app";
import "firebase/auth";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//Central Context
import { UserContext } from "./Context/UserContext";

//Componenets
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import PageNotFound from "./Components/Notfound";

//Importing Firebase config
import firebaseconfig from "./Config/firebaseconfig";

const App = () => {
  // init firebase
  const firebase = initializeApp(firebaseconfig);

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};
export default App;
