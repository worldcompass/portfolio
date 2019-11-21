import React from "react";
import Backbutton from "./backbutton";
import Downloadbutton from "./downloadbutton";

const Cv = () => {
  return (
    <div>
      <Backbutton />
      <Downloadbutton />
      <hr />
      <h1>Dmitriy Vovk</h1>
      <p>
        Curious, creative, ambitious Junior software engineer. I always try to
        come up with something special and original. Primarily, I focus on
        React, Redux and modern Javascript ecosystem.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Back-end: Node.js, Express</li>
        <li>Front-end: Javascript, HTML, CSS, React, Redux</li>
        <li>Testing: Test Drived Development, Jest</li>
        <li>VCS: Git</li>
      </ul>
      <h2>Expresience</h2>
      <h3>Technology assistant. Namecheap Inc. October 2019 - now</h3>
      <p>something about my responsibilities</p>
      <h3>
        Customer Support Specialict in SSL department. Namecheap Inc. February
        2018 - October 2019
      </h3>
      <p>something about my responsibilities here as well</p>

      <h2>Education</h2>
      <h3>Bachelor Degree (2016 - 2019)</h3>
      <p>Faculty: Management of organization and administration</p>
      <p>
        University: Kharkiv National University of Economics by Simon
        Kuznetz(KhNUE)
      </p>
      <ul>
        <li>Management</li>
        <li>no use</li>
        <li>no use</li>
      </ul>
      <h3>Language Skills</h3>
      <ul>
        <li>English - B2</li>
        <li>German - A1</li>
      </ul>
    </div>
  );
};

export default Cv;
