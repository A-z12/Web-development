import { init } from "emailjs-com";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
require("dotenv").config();
init(process.env.REACT_APP_EMAILJS_USER_ID);

ReactDOM.render(<App />, document.getElementById("root"));
