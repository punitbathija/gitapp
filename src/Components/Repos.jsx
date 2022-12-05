import React, { useState, useEffect } from "react";
import axios from "axios";
import { async } from "@firebase/util";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);
  const fetchRopos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRopos();
  }, [repos_url]);

  return (
    <div>
      {repos.map((repo) => (
        <div
          className="h-full flex items-center border-gray-800 border p-4 rounded-lg w-[fitContent]"
          key={repo.id}
        >
          <h2 className="text-white title-font font-medium px-2">
            {repo.name}
          </h2>
          <p className="text-gray-600">{repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Repos;
