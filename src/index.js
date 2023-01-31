import React    from "react";
import ReactDOM from "react-dom/client";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals                from "./reportWebVitals";

import { EncuestaApp } from "./EncuestaApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store = { store }>

      <BrowserRouter>
        <EncuestaApp/>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
reportWebVitals();
