import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <ToastContainer autoClose={2000} hideProgressBar closeButton={false} />
    </React.StrictMode>,
    document.getElementById("root")
);
