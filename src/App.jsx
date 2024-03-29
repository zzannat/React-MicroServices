import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import StudentApp1 from "./StudentApp1";

const App = () => (
  <div>
   <StudentApp1/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
