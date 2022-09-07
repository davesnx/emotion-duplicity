import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";
import { Header } from "./Header";

const rootElement = document.getElementById("root");
const headerElement = document.getElementById("header");

ReactDOM.render(<Header />, headerElement);
ReactDOM.render(<App />, rootElement);
