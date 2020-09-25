import React from "react";
import git from "../assets/GitLogo.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome to The Game Of Life!!</h1>
      <h3 className="author">Created By: John Conway</h3>
      <div className="button">
        <Link className="button-link" to="/cells">
          Begin Simulating
        </Link>
      </div>
      <a
        href="https://github.com/tjason-clegg/Conways-GOL"
        target="_blank"
        rel="noopener noreferrer"
        className="gitLink"
      >
        <img src={git} alt="" />
      </a>
    </div>
  );
};

export default Home;
