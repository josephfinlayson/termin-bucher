import React from "react";
import ReactDOM from "react-dom";
import Email from "./Email";

ReactDOM.render(
  <Email
    emailLinks={[
      { link: "aa", text: "12 April 2018" },
      { link: "aa", text: "12 April 2018" },
      { link: "aa", text: "12 April 2018" }
    ]}
  />,
  document.getElementById("root")
);
