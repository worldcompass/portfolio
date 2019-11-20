import React from "react";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import LinkedID from "mdi-react/LinkedinBoxIcon";
import Twitter from "mdi-react/TwitterBoxIcon";
import Gmail from "mdi-react/GmailIcon";
import Projects from "../components/projects";

const Mainpage = () => {
  return (
    <div className="App">
      <h1>Hello and you are most Welcome!</h1>
      <p>
        My name is <span>Dmitriy Vovk</span>. I'm starting web-developer!
      </p>
      <p>Currently, I'm bulding my portfolio and first site using ReactJS</p>
      <p className="cv">To learn more about my experience, see my</p>
      <a
        href="https://github.com/worldcompass"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubCircleIcon color="#333" />
      </a>
      <a
        href="https://www.linkedin.com/in/dmitriy-vovk-14a5b4180/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedID color="#0077b5" />
      </a>
      <a
        href="https://twitter.com/worldc0mpass"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter color="#1DA1F2" />
      </a>
      <a href="mailto:vovk.dmitriy9@gmail.com" target="_blank">
        <Gmail color="#D44638" />
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="AppContainer">
      <Mainpage />
      <Projects />
    </div>
  );
};

export default App;
