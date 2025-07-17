import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function mount() {
  const container = document.createElement("div");
  container.id = "my-widget-root";
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

window.MyWidget = {
  mount,
};
