//Mount function to start up the app

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//if we are in development mode  an in isolation, call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//if we are through the container, export the mount function

export { mount };
