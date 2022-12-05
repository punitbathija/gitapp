import React from "react";

const Usercard = ({ user }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={user.avatar_url}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {user.name}
          </h1>
          Followers: {user.followers}
          <p className="mb-8 leading-relaxed">{user.bio}</p>
          <p className="text-xl mt-2 text-bold w-full text-bold">
            {user.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Usercard;
