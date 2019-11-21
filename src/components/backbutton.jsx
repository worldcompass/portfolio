import React from "react";
import { useHistory } from "react-router-dom";

const Backbutton = () => {
  let history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <button type="button" onClick={handleClick}>
      Go back{" "}
    </button>
  );
};

export default Backbutton;
