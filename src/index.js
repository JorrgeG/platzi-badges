import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BagdeNew from "./pages/BadgeNew";
import Bagdes from "./pages/Badges";
import App from './components/App'

const container = document.getElementById("app");

ReactDOM.render(<App/>,
  container
);
